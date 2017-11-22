import {
  EventEmitter, Input, Output, OnDestroy, Directive, ElementRef, OnChanges,
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

  private viz;
  private vizabiModel;
  private vizabiPageModel;
  private placeholder;
  private element: ElementRef;
  private vService: VizabiService;
  private _active = false;
  private _language: string;
  private _additionalItems: any[] = [];
  private prevStateStr;

  public constructor(element: ElementRef, vService: VizabiService) {
    this.element = element;
    this.vService = vService;
    this.createPlaceholder();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.modelHash && changes.model && changes.model.isFirstChange()) {
      this.createChart(changes);
    } else if (changes.modelHash) {
      const str = encodeURI(decodeURIComponent(changes.modelHash.currentValue));
      const urlModel = this.vService.stringToModel(str);
      const tempModel = Vizabi.utils.deepExtend({}, this.vizabiModel, urlModel);

      // console.log('NG2-VIZABI set model hash ', tempModel);

      this.viz.setModel(tempModel);
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

    if (this.viz && this.viz.model && this.viz.model.locale) {
      this.viz.model.locale.set('id', _language);
    }
  }

  @Input('additionalItems')
  public get additionalItems(): any[] {
    return this._additionalItems;
  }

  public set additionalItems(_additionalItems: any[]) {
    try {
      this._additionalItems = _additionalItems;

      if (!this.viz || this._additionalItems.length <= 0) {
        return;
      }

      this.viz.clear();
      VizabiDirective.removeElement(this.placeholder);

      this.createPlaceholder();
      this.createChart({
        modelHash: {currentValue: this.modelHash},
        model: {currentValue: this.model}
      });
    } catch (additionalItemsError) {
      this.emitError(additionalItemsError);
    }
  }

  public ngOnDestroy(): void {
    try {
      Object.keys(Vizabi._instances).forEach((instanceKey: any) => {
        Vizabi._instances[instanceKey] = null;
      });

      this.viz.clear();
      VizabiDirective.removeElement(this.placeholder);
    } catch (generalError) {
      this.emitError(generalError);
    }
  }

  static removeElement(element: any): void {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  private createChart(changes) {
    setTimeout(() => {
      this.vizabiModel = {};

      const str = encodeURI(decodeURIComponent(changes.modelHash.currentValue));
      const urlModel = this.vService.stringToModel(str);

      this.vizabiModel.bind = {
        ready: () => {
          this.onPersistentChange();
        },
        persistentChange: () => {
          this.onPersistentChange();
        },
        readyOnce: () => {
          this.onCreated.emit({order: this.order, type: this.chartType, model: this.vizabiModel});
        }
      };

      this.readerProcessing();

      this.vizabiModel = Vizabi.utils.deepExtend({},
        changes.model.currentValue, this.getAdditionalData(), this.vizabiModel);
      this.vizabiPageModel = Vizabi.utils.deepExtend({}, this.vizabiModel);
      delete this.vizabiPageModel.bind;

      const fullModel = Vizabi.utils.deepExtend({}, this.vizabiModel, urlModel, true);

      // console.log('NG2-VIZABI create', fullModel);

      this.viz = Vizabi(this.chartType, this.placeholder, fullModel);
    });
  }

  private getAdditionalData() {
    const result = {};

    if (this.additionalItems && this.additionalItems.length > 0) {
      for (const additionalItem of this.additionalItems) {
        const parsedPath = additionalItem.path.split(/[\\/]/);
        const name = parsedPath[parsedPath.length - 1];
        const newAdditionalItemHash = `data_${name}`;

        if (!result[newAdditionalItemHash]) {
          result[newAdditionalItemHash] = additionalItem;
        }
      }
    }

    return result;
  }

  private emitError(error: any): void {
    this.onError.emit({message: error.message, stack: error.stack});
  }

  private readerProcessing(): void {
    if (this.readerModuleObject && this.readerGetMethod && this.readerName &&
      this.readerPlugins && this.readerModuleObject[this.readerGetMethod] && !isReaderReady[this.readerName]) {
      const readerObject = this.readerModuleObject[this.readerGetMethod].apply(this, this.readerPlugins);

      Vizabi.Reader.extend(this.readerName, readerObject);

      isReaderReady[this.readerName] = true;
    }
  }

  private onPersistentChange() {
    const minModelDiff = this.viz.getPersistentMinimalModel(this.vizabiPageModel);

    delete minModelDiff.bind;

    const minModelDiffStr = JSON.stringify(minModelDiff);

    if (minModelDiffStr === this.prevStateStr) {
      // console.log('NG2-VIZABI onPersistentChange--');
      return false;
    }

    // console.log('NG2-VIZABI onPersistentChange++', minModelDiff);

    this.onChanged.emit({
      order: this.order,
      type: this.chartType,
      modelDiff: minModelDiff,
      minInitialModel: this.model
    });

    if (!this.stopUrlRedirect && window && window.location) {
      window.location.hash = this.vService.modelToString(minModelDiff);
    }

    this.prevStateStr = minModelDiffStr;
  }

  private deactivate(): void {
    if (this.viz && this.viz.components) {
      this.viz.components.find((component: any) => component.name === 'gapminder-dialogs').closeAllDialogs(true);
    }
  }

  private createPlaceholder() {
    this.placeholder = document.createElement('div');
    this.placeholder.style.width = '100%';
    this.placeholder.style.height = '100%';
    this.element.nativeElement.appendChild(this.placeholder);
  }
}
