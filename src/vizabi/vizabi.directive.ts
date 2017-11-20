import {
  EventEmitter, Input, Output, OnInit, OnDestroy, Directive, ElementRef, OnChanges,
  SimpleChanges
} from '@angular/core';
import { VizabiService } from './vizabi.service';

const isReaderReady: any = {};

@Directive({
  selector: 'vizabi'
})
export class VizabiDirective implements OnDestroy, OnChanges {
  @Input() public order: number;
  @Input() public readerModuleObject: any;
  @Input() public readerGetMethod: string;
  @Input() public readerPlugins: any[];
  @Input() public readerName: string;
  @Input() public extResources: any;
  @Input() public chartType: string;
  @Input() public stopUrlRedirect: boolean;
  @Input() public modelHash: string;
  @Input() public model;

  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  @Output() public onCreated: EventEmitter<any> = new EventEmitter();
  @Output() public onChanged: EventEmitter<any> = new EventEmitter();
  @Output() public onReadyOnce: EventEmitter<any> = new EventEmitter();
  @Output() public onError: EventEmitter<any> = new EventEmitter();

  private element: ElementRef;
  private vService: VizabiService;
  private component: any;
  private view: any;
  private modelState: string;
  private isInitError: boolean = false;
  private _active: boolean = false;
  private _language: string;
  private _additionalItems: any[] = [];
  private currentModel;

  public constructor(element: ElementRef, vService: VizabiService) {
    this.element = element;
    this.vService = vService;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.modelHash && changes.model) {
      const str = encodeURI(decodeURIComponent(changes.modelHash.currentValue));
      const urlModel = this.vService.stringToModel(str);

      this.currentModel = Vizabi.utils.deepExtend({}, changes.model.currentValue, urlModel);

      if (changes.model && changes.model.isFirstChange()) {
        try {
          this.stopUrlRedirect = this.stopUrlRedirect || false;
          this.component = {instance: null};
          this.order = this.order || 1;
          this.createView();
          this.readerProcessing();
          this.setExtResources();
          this.persistentChangeProcessing();
          this.readyOnceProcessing();
          if (this._additionalItems && this._additionalItems.length > 0) {
            for (const additionalItem of this.additionalItems) {
              const newAdditionalItemHash = `data_${additionalItem.path}`;
              if (!this.currentModel[newAdditionalItemHash]) {
                this.currentModel[newAdditionalItemHash] = additionalItem;
              }
            }
          }
          this.component.instance = Vizabi(this.chartType, this.view, this.currentModel);

          this.onCreated.emit({
            order: this.order,
            type: this.chartType,
            model: this.currentModel,
            component: this.component.instance
          });
          // cover blocks with click handler
          ['vzb-tool-stage', 'vzb-tool-dialogs', 'vzb-tool-buttonlist'].forEach((item: any) => {
            const elementsList = [].slice.call(document.getElementsByClassName(item));
            elementsList.forEach((element: any) => {
              element.addEventListener('click', ($event: any) => {
                this.onClick.emit($event);
              });
            });
          });
        } catch (generalError) {
          this.isInitError = true;
          this.emitError(generalError);
        }
      } else {
        if (this.component && this.component.instance) {
          this.component.instance.setModel(this.currentModel);
        }
      }

      console.log('NG2-VIZABI model created: ', this.currentModel);
    } else if (changes.modelHash) {
      const str = encodeURI(decodeURIComponent(changes.modelHash.currentValue));
      const urlModel = this.vService.stringToModel(str);

      this.currentModel = Vizabi.utils.deepExtend({}, this.model, urlModel);

      this.persistentChangeProcessing();
      this.readyOnceProcessing();
      this.component.instance.setModel(this.currentModel);

      console.log('NG2-VIZABI model changed: ', this.currentModel);
    }
  }

  @Input('active')
  public get active(): boolean {
    return this._active;
  }

  public set active(_active: boolean) {
    this._active = _active;

    if (!this._active) {
      this.deactivate();
    }
  }

  @Input('language')
  public get language(): string {
    return this._language;
  }

  public set language(_language: string) {
    this._language = _language;

    if (this.component && this.component.instance && this.component.instance.model && this.component.instance.model.locale) {
      this.component.instance.model.locale.set('id', _language);
    }
  }

  @Input('additionalItems')
  public get additionalItems(): any[] {
    return this._additionalItems;
  }

  public set additionalItems(_additionalItems: any[]) {
    try {
      this._additionalItems = _additionalItems;

      if (this.component && this.component.instance && this._additionalItems && this._additionalItems.length > 0) {
        const newModel = this.component.instance.getModel();

        for (const additionalItem of this._additionalItems) {
          const parsedPath = additionalItem.path.split(/[\\/]/);
          const name = parsedPath[parsedPath.length - 1];
          const newAdditionalItemHash = `data_${name}`;

          if (!newModel[newAdditionalItemHash]) {
            newModel[newAdditionalItemHash] = additionalItem;
          }
        }

        Vizabi._instances[this.component.instance._id] = null;
        this.component.instance.clear();
        this.component.instance = Vizabi(this.chartType, this.view, newModel);

        // console.log('NG2-VIZABI new instance', newModel);

        this.onChanged.emit({
          order: this.order,
          type: this.chartType,
          minInitialModel: this.model,
          component: this.component.instance
        });
      }
    } catch (additionalItemsError) {
      this.emitError(additionalItemsError);
    }
  }

  public ngOnDestroy(): void {
    if (!this.isInitError) {
      try {
        Object.keys(Vizabi._instances).forEach((instanceKey: any) => {
          Vizabi._instances[instanceKey] = null;
        });

        this.component.instance.clear();
        VizabiDirective.removeElement(this.view);
      } catch (generalError) {
        this.emitError(generalError);
      }
    }
  }

  static removeElement(element: any): void {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  private emitError(error: any): void {
    this.onError.emit({message: error.message, stack: error.stack});
  }

  private createView(): void {
    this.view = document.createElement('div');
    this.view.style.height = '100%';
    this.element.nativeElement.appendChild(this.view);
  }

  private readerProcessing(): void {
    if (this.readerModuleObject && this.readerGetMethod && this.readerName &&
      this.readerPlugins && this.readerModuleObject[this.readerGetMethod] && !isReaderReady[this.readerName]) {
      const readerObject = this.readerModuleObject[this.readerGetMethod].apply(this, this.readerPlugins);

      Vizabi.Reader.extend(this.readerName, readerObject);

      isReaderReady[this.readerName] = true;
    }
  }

  private readyOnceProcessing(): void {
    if (!this.currentModel) {
      return;
    }

    this.currentModel.bind = this.currentModel.bind || {};
    this.currentModel.bind.readyOnce = () => {
      this.onReadyOnce.emit({
        order: this.order,
        type: this.chartType,
        minInitialModel: this.model,
        component: this.component.instance
      });
    };
  }

  private persistentChangeProcessing(): void {
    if (!this.currentModel) {
      return;
    }

    this.currentModel.bind = this.currentModel.bind || {};
    this.currentModel.bind.ready = this.onPersistentChange2.bind(this);
    this.currentModel.bind.persistentChange = this.onPersistentChange.bind(this);
  }

  private onPersistentChange() {
    console.log('onPersistentChange');
    const minModelDiff = this.component.instance.getPersistentMinimalModel(this.currentModel);
    const modelState = this.vService.modelToString(minModelDiff);

    if (Object.keys(minModelDiff).length <= 0) {
      console.log('empty minModelDiff!');
      return false;
    }

    // console.log('NG2-VIZABI modelState', this.component.instance.getModel().state.marker.color, minModelDiff.state.marker.color);
    console.log('NG2-VIZABI modelState', ' instance.getModel=', this.component.instance.getModel().state, ' model.state=', this.currentModel.state, ' minModelDiff=', minModelDiff);

    // check if something changed
    if (modelState === this.modelState) {
      // nothing was changed
      return false;
    }

    // update latest state
    this.modelState = modelState;

    // check if change url is needed
    if (!this.stopUrlRedirect && window && window.location) {
      window.location.hash = this.vService.modelToString(minModelDiff);
    }

    const modelFull = Vizabi.utils.deepClone(this.component.instance.getModel());

    // output event about changes
    this.onChanged.emit({
      order: this.order,
      type: this.chartType,
      modelDiff: minModelDiff,
      minInitialModel: this.model,
      modelFull
    });
  }

  private onPersistentChange2(aaa) {
    console.log('onPersistentChange2', aaa.source._component.getPersistentMinimalModel(aaa.source._component.getModel()));
    const minModelDiff = this.component.instance.getPersistentMinimalModel(this.currentModel);
    const modelState = this.vService.modelToString(minModelDiff);

    if (Object.keys(minModelDiff).length <= 0) {
      console.log('empty minModelDiff2!');
      return false;
    }

    // console.log('NG2-VIZABI modelState', this.component.instance.getModel().state.marker.color, minModelDiff.state.marker.color);
    console.log('NG2-VIZABI modelState2', ' instance.getModel=', this.component.instance.getModel().state, ' model.state=', this.currentModel.state, ' minModelDiff=', minModelDiff, aaa.source._component.getModel());

    // check if something changed
    if (modelState === this.modelState) {
      // nothing was changed
      return false;
    }

    // update latest state
    this.modelState = modelState;

    // check if change url is needed
    if (!this.stopUrlRedirect && window && window.location) {
      window.location.hash = this.vService.modelToString(minModelDiff);
    }

    const modelFull = Vizabi.utils.deepClone(this.component.instance.getModel());

    // output event about changes
    this.onChanged.emit({
      order: this.order,
      type: this.chartType,
      modelDiff: minModelDiff,
      minInitialModel: this.model,
      modelFull
    });
  }

  private setExtResources(): void {
    if (this.extResources) {
      Vizabi._globals.ext_resources = this.extResources;
    }
  }

  private deactivate(): void {
    if (this.component && this.component.instance && this.component.instance.components) {
      this.component.instance.components
        .find((component: any) => component.name === 'gapminder-dialogs')
        .closeAllDialogs(true);
    }
  }
}
