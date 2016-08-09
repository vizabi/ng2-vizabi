import {OnInit, OnDestroy, Directive, ElementRef} from '@angular/core';

const d3 = require('d3');
const Vizabi = require('vizabi');
const urlon = require('URLON');

@Directive({
  selector: 'vizabi',
  properties: [
    'readerModuleObject',
    'readerGetMethod',
    'readerParams',
    'readerName',
    'model',
    'modelHash',
    'extResources',
    'metadata',
    'translations',
    'chartType'
  ]
})
export class VizabiWrapper implements OnInit, OnDestroy {
  private readerModuleObject: any;
  private readerGetMethod: string;
  private readerParams: Array<any>;
  private readerName: string;
  private model: any;
  private modelHash: string;
  private extResources: any;
  private metadata: any;
  private translations: any;
  private chartType: string;

  private component: any;
  private view: any;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    const initialModel = Vizabi.utils.deepClone(this.model);

    this.createView();
    this.readerProcessing();
    this.setMetadata();
    this.setExtResources();
    this.modelHashProcessing();
    this.persistentChangeProcessing(initialModel);
    this.component = Vizabi(this.chartType, this.view, this.model);
  }

  ngOnDestroy() {
    Object.keys(Vizabi._instances).forEach(instanceKey => {
      if (Vizabi._instances[instanceKey]._id === this.component._id) {
        this.component.clear();
        Vizabi._instances[instanceKey] = null;
        this.view.remove();
      }
    });
  }

  private createView() {
    this.view = document.createElement('div');
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
    if (this.translations || this.metadata) {
      const translations = this.translations;
      const metadata = this.metadata;

      Vizabi.Tool.define('preload', function (promise) {
        if (metadata) {
          Vizabi._globals.conceptprops = metadata;
        }

        if (translations) {
          this.model.language.strings.set(this.model.language.id, translations);
        }

        promise.resolve();
      });
    }
  }

  private modelHashProcessing() {
    if (this.modelHash) {
      const str = encodeURI(decodeURIComponent(this.modelHash));
      const urlModel = urlon.parse(str);

      Vizabi.utils.deepExtend(this.model, urlModel);
    }
  }

  private persistentChangeProcessing(initialModel) {
    this.model.bind = this.model.bind || {};
    this.model.bind.persistentChange = onPersistentChange;

    function onPersistentChange(evt, minModel) {
      const minModelDiff = Vizabi.utils.diffObject(minModel, initialModel);

      // hack -> minimum query string
      minModelDiff.language = {};
      window.location.hash = urlon.stringify(minModelDiff);
    }
  }

  private setExtResources() {
    if (this.extResources) {
      Vizabi._globals.ext_resources = this.extResources;
    }
  }
}

export const vizabiWrapper: Array<any> = [VizabiWrapper];
