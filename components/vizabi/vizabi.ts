import {EventEmitter, Input, Output, OnInit, OnDestroy, Directive, ElementRef} from '@angular/core';
import {VizabiService} from './vizabi-service';

require('zone.js/dist/zone');

@Directive({
  selector: 'vizabi'
})
export class VizabiDirective implements OnInit, OnDestroy {
  @Input() private order: number;
  @Input() private readerModuleObject: any;
  @Input() private readerGetMethod: string;
  @Input() private readerParams: Array<any>;
  @Input() private readerName: string;
  @Input() private model: any;
  @Input() private modelHash: string;
  @Input() private extResources: any;
  @Input() private chartType: string;
  @Input() private stopUrlRedirect: boolean;

  @Output() private onClick: EventEmitter<any> = new EventEmitter();
  @Output() private onCreated: EventEmitter<any> = new EventEmitter();
  @Output() private onChanged: EventEmitter<any> = new EventEmitter();

  private Vizabi: any;
  private component: any;
  private view: any;
  private modelState: string;
  private minInitialModel: any;
  private _additionalItems: Array<any> = [];

  constructor(private element: ElementRef, private vService: VizabiService) {
  }

  @Input('additionalItems')
  get additionalItems(): Array<any> {
    return this._additionalItems;
  }

  set additionalItems(_additionalItems: Array<any>) {
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

      this.Vizabi._instances[this.component.instance._id] = null;
      this.component.instance.clear();
      this.component.instance = this.Vizabi(this.chartType, this.view, newModel);

      this.onChanged.emit({
        order: this.order,
        type: this.chartType,
        minInitialModel: this.minInitialModel,
        modelFull: newModel
      });
    }
  }

  ngOnInit() {
    this.Vizabi = require('vizabi');
    this.minInitialModel = this.Vizabi.utils.deepClone(this.model);

    this.stopUrlRedirect = this.stopUrlRedirect || false;
    this.component = {instance: null};
    this.order = this.order || 1;

    this.createView();
    this.readerProcessing();

    this.setExtResources();
    this.modelHashProcessing();
    this.persistentChangeProcessing();

    if (this._additionalItems && this._additionalItems.length > 0) {
      for (const additionalItem of this.additionalItems) {
        const newAdditionalItemHash = `data_${additionalItem.path}`;

        if (!this.model[newAdditionalItemHash]) {
          this.model[newAdditionalItemHash] = additionalItem;
        }
      }
    }

    this.component.instance = this.Vizabi(this.chartType, this.view, this.model);

    this.onCreated.emit({
      order: this.order,
      type: this.chartType,
      model: this.model,
      component: this.component.instance
    });

    // cover blocks with click handler
    ["vzb-tool-stage", "vzb-tool-dialogs", "vzb-tool-buttonlist"].forEach(item => {
      const elementsList = [].slice.call(document.getElementsByClassName(item));
      elementsList.forEach(element => {
        element.addEventListener('click', ($event) => {
          this.onClick.emit($event);
        });
      })
    });
  }

  ngOnDestroy() {

    Object.keys(this.Vizabi._instances).forEach(instanceKey => {
      this.Vizabi._instances[instanceKey] = null;
    });

    this.component.instance.clear();
    this.view.remove();
  }

  private createView() {
    this.view = document.createElement('div');
    this.view.style.height = '100%';
    this.element.nativeElement.appendChild(this.view);
  }

  private readerProcessing() {
    if (this.readerModuleObject && this.readerGetMethod && this.readerName &&
      this.readerParams && this.readerModuleObject[this.readerGetMethod]) {
      const readerObject = this.readerModuleObject[this.readerGetMethod].apply(this, this.readerParams);
      this.Vizabi.Reader.extend(this.readerName, readerObject);
    }
  }

  private modelHashProcessing() {
    if (this.modelHash) {
      const str = encodeURI(decodeURIComponent(this.modelHash));
      const urlModel = this.vService.stringToModel(str);

      this.Vizabi.utils.deepExtend(this.model, urlModel);
    }
  }

  private persistentChangeProcessing() {
    this.model.bind = this.model.bind || {};

    this.model.bind.ready = this.onPersistentChange.bind(this);
    this.model.bind.persistentChange = this.onPersistentChange.bind(this);
  }

  private onPersistentChange() {
    const minModelDiff = this.component.instance.getPersistentMinimalModel(this.minInitialModel);
    const modelState = this.vService.modelToString(minModelDiff);

    // check if something changed
    if (modelState == this.modelState) {
      // nothing was changed
      return false;
    }

    // update latest state
    this.modelState = modelState;

    // check if change url is needed
    if (!this.stopUrlRedirect && window && window.location) {
      window.location.hash = this.vService.modelToString(minModelDiff);
    }

    const modelFull = this.Vizabi.utils.deepClone(this.component.instance.getModel());

    // output event about changes
    this.onChanged.emit({
      order: this.order,
      type: this.chartType,
      modelDiff: minModelDiff,
      minInitialModel: this.minInitialModel,
      modelFull: modelFull
    });
  }

  private setExtResources() {
    if (this.extResources) {
      this.Vizabi._globals.ext_resources = this.extResources;
    }
  }
}
