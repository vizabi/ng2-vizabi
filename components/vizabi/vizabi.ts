import {OnInit, OnDestroy, Directive, EventEmitter, ElementRef} from '@angular/core';

const d3 = require('d3');
const Vizabi = require('vizabi');

@Directive({
  selector: 'vizabi',
  properties: [
    'readerModuleObject',
    'readerModuleGetMethod',
    'readerModuleParams',
    'readerName',
    'query',
    'metadata',
    'translations',
    'chartType'
  ],
  events: ['done']
})
export class VizabiWrapper implements OnInit, OnDestroy {
  private placeholder: any;

  private readerModuleObject: any;
  private readerModuleGetMethod: string;
  private readerModuleParams: Array<any>;
  private readerName: string;
  private query: any;
  private metadata: any;
  private translations: any;
  private chartType: string;

  private done: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    const readerObject = this.readerModuleObject[this.readerModuleGetMethod].apply(this, this.readerModuleParams);

    Vizabi.Reader.extend(this.readerName, readerObject);

    const translations = this.translations;

    Vizabi.Tool.define('preload', function (promise) {
      Vizabi._globals.conceptprops = this.metadata;

      this.model.language.strings.set(this.model.language.id, translations);
      promise.resolve();
    });

    Vizabi(this.chartType, this.element.nativeElement, this.query);

    //this.element.nativeElement.appendChild(this.placeholder);
  }

  ngOnDestroy() {
    if (this.placeholder) {
      this.placeholder.remove();
    }
  }
}

export const vizabiWrapper: Array<any> = [VizabiWrapper];
