import {OnInit, OnDestroy, Directive, EventEmitter, ElementRef} from '@angular/core';

const d3 = require('d3');
const Vizabi = require('vizabi');
const urlon = require('URLON');

@Directive({
  selector: 'vizabi',
  properties: [
    'readerModuleObject',
    'readerModuleGetMethod',
    'readerModuleParams',
    'readerName',
    'query',
    'queryHash',
    'metadata',
    'translations',
    'chartType'
  ],
  events: ['done']
})
export class VizabiWrapper implements OnInit, OnDestroy {
  private readerModuleObject: any;
  private readerModuleGetMethod: string;
  private readerModuleParams: Array<any>;
  private readerName: string;
  private query: any;
  private queryHash: string;
  private metadata: any;
  private translations: any;
  private chartType: string;

  private component: any;
  private view: any;

  private done: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.view = document.createElement('div');
    this.element.nativeElement.appendChild(this.view);

    const readerObject = this.readerModuleObject[this.readerModuleGetMethod].apply(this, this.readerModuleParams);

    Vizabi.Reader.extend(this.readerName, readerObject);

    const translations = this.translations;

    Vizabi.Tool.define('preload', function (promise) {
      Vizabi._globals.conceptprops = this.metadata;

      this.model.language.strings.set(this.model.language.id, translations);
      promise.resolve();
    });

    const initialModel = Vizabi.utils.deepClone(this.query);


    if (this.queryHash) {
      const str = encodeURI(decodeURIComponent(this.queryHash));
      const urlModel = urlon.parse(str);

      Vizabi.utils.deepExtend(this.query, urlModel);
    }

    this.query.bind = this.query.bind || {};
    this.query.bind.persistentChange = onPersistentChange;

    function onPersistentChange(evt, minModel) {
      const minModelDiff = Vizabi.utils.diffObject(minModel, initialModel);
      minModelDiff.language = {};

      window.location.hash = urlon.stringify(minModelDiff);
    }

    this.component = Vizabi(this.chartType, this.view, this.query);
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
}

export const vizabiWrapper: Array<any> = [VizabiWrapper];
