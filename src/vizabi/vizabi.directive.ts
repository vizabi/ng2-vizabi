import { EventEmitter, Input, Output, OnInit, OnDestroy, Directive, ElementRef } from '@angular/core';
import { VizabiService } from './vizabi.service';

let isReaderReady: any = {};

@Directive({
  selector: 'vizabi'
})
export class VizabiDirective implements OnInit, OnDestroy {
  @Input() public order: number;
  @Input() public readerModuleObject: any;
  @Input() public readerGetMethod: string;
  @Input() public readerParams: any[];
  @Input() public readerName: string;
  @Input() public model: any;
  @Input() public modelHash: string;
  @Input() public extResources: any;
  @Input() public chartType: string;
  @Input() public stopUrlRedirect: boolean;

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
  private minInitialModel: any;
  private isInitError: boolean = false;
  private _active: boolean = false;
  private _additionalItems: any[] = [];

  public constructor(element: ElementRef, vService: VizabiService) {
    this.element = element;
    this.vService = vService;
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

        this.onChanged.emit({
          order: this.order,
          type: this.chartType,
          minInitialModel: this.minInitialModel,
          component: this.component.instance
        });
      }
    } catch (additionalItemsError) {
      this.emitError(additionalItemsError);
    }
  }

  public ngOnInit(): void {
    try {
      this.minInitialModel = Vizabi.utils.deepClone(this.model);

      this.stopUrlRedirect = this.stopUrlRedirect || false;
      this.component = {instance: null};
      this.order = this.order || 1;

      this.createView();
      this.readerProcessing();

      this.setExtResources();
      this.modelHashProcessing();
      this.persistentChangeProcessing();
      this.readyOnceProcessing();

      if (this._additionalItems && this._additionalItems.length > 0) {
        for (const additionalItem of this.additionalItems) {
          const newAdditionalItemHash = `data_${additionalItem.path}`;

          if (!this.model[newAdditionalItemHash]) {
            this.model[newAdditionalItemHash] = additionalItem;
          }
        }
      }

      this.component.instance = Vizabi(this.chartType, this.view, this.model);

      this.onCreated.emit({
        order: this.order,
        type: this.chartType,
        model: this.model,
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
      this.readerParams && this.readerModuleObject[this.readerGetMethod] && !isReaderReady[this.readerName]) {
      const readerObject = this.readerModuleObject[this.readerGetMethod].apply(this, this.readerParams);

      Vizabi.Reader.extend(this.readerName, readerObject);

      isReaderReady[this.readerName] = true;
    }
  }

  private modelHashProcessing(): void {
    if (this.modelHash) {
      const str = encodeURI(decodeURIComponent(this.modelHash));
      const urlModel = this.vService.stringToModel(str);

      Vizabi.utils.deepExtend(this.model, urlModel);
    }
  }

  private readyOnceProcessing(): void {
    if (!this.model) {
      return;
    }

    this.model.bind = this.model.bind || {};
    this.model.bind.readyOnce = () => {
      this.onReadyOnce.emit({
        order: this.order,
        type: this.chartType,
        minInitialModel: this.minInitialModel,
        component: this.component.instance
      });
    };
  }

  private persistentChangeProcessing(): void {
    if (!this.model) {
      return;
    }

    this.model.bind = this.model.bind || {};
    this.model.bind.ready = this.onPersistentChange.bind(this);
    this.model.bind.persistentChange = this.onPersistentChange.bind(this);
  }

  private onPersistentChange() {
    const minModelDiff = this.component.instance.getPersistentMinimalModel(this.minInitialModel);
    const modelState = this.vService.modelToString(minModelDiff);

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
      minInitialModel: this.minInitialModel,
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
