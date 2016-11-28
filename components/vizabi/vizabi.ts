import {EventEmitter, Input, Output, OnInit, OnDestroy, Directive, ElementRef} from '@angular/core';
import {VizabiService} from './vizabi-service';

const Vizabi = require('vizabi');

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
  @Input() private translations: any;
  @Input() private chartType: string;
  @Input() private stopUrlRedirect: boolean;

  @Output() private onCreated: EventEmitter<any> = new EventEmitter();
  @Output() private onChanged: EventEmitter<any> = new EventEmitter();

  private component: any;
  private view: any;
  private modelState: string;
  private minInitialModel: any;

  constructor(private element: ElementRef, private vService: VizabiService) {
  }

  ngOnInit() {

    this.minInitialModel = Vizabi.utils.deepClone(this.model);

    // set default value
    this.stopUrlRedirect = this.stopUrlRedirect || false;
    this.component = {instance: null};
    this.order = this.order || 1;

    this.createView();
    this.readerProcessing();

    this.setExtResources();
    this.modelHashProcessing();
    this.persistentChangeProcessing();

    this.component.instance = Vizabi(this.chartType, this.view, this.model);

    this.onCreated.emit({
      order: this.order,
      type: this.chartType,
      model: this.model,
      component: this.component.instance
    });

    // update language
    this.setMetadata();
  }

  ngOnDestroy() {

    Object.keys(Vizabi._instances).forEach(instanceKey => {
      //if (Vizabi._instances[instanceKey]._id === this.component.instance._id) {
        Vizabi._instances[instanceKey] = null;
      //}
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
      Vizabi.Reader.extend(this.readerName, readerObject);
    }
  }

  private setMetadata() {
    // set language
    this.component.instance.model.language.strings.set(this.model.language.id, this.translations);
  }

  private modelHashProcessing() {
    if (this.modelHash) {
      const str = encodeURI(decodeURIComponent(this.modelHash));
      const urlModel = this.vService.stringToModel(str);

      Vizabi.utils.deepExtend(this.model, urlModel);
    }
  }

  private persistentChangeProcessing() {
    this.model.bind = this.model.bind || {};

    this.model.bind.ready = this.onPersistentChange.bind(this);
    this.model.bind.persistentChange = this.onPersistentChange.bind(this);
  }

  private onPersistentChange() {

    const minModelDiff = this.component.instance.getPersistentMinimalModel(this.minInitialModel);

    // fix :: clear translations
    delete minModelDiff['language']['strings'];
    if(Vizabi.utils.isEmpty(minModelDiff['language'])) {
      delete minModelDiff['language'];
    }

    const modelState = this.vService.modelToString(minModelDiff);

    // check if something changed
    if(modelState == this.modelState) {
      // nothing was changed
      //console.log("onPersistentChange:", " nothing was changed");
      return false;
    }

    // update latest state
    this.modelState = modelState;
    //console.log("onPersistentChange:", " new state ", modelState);

    // check if change url is needed
    if (!this.stopUrlRedirect && window && window.location) {
      window.location.hash = this.vService.modelToString(minModelDiff);
    }

    // output event about changes
    this.onChanged.emit({
      order: this.order,
      type: this.chartType,
      modelDiff: minModelDiff,
      minInitialModel: this.minInitialModel
    });
  }

  private setExtResources() {
    if (this.extResources) {
      Vizabi._globals.ext_resources = this.extResources;
    }
  }
}
