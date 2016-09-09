/// <reference path="../../../tsd.d.ts" />

import {
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from '@angular/common';

import {Component} from '@angular/core';
import {VIZABI_DIRECTIVES} from '../../../components/vizabi';
import {query, translations} from './fixtures/sg';

declare var DDFCsvReader: any;

let template = require('./bubble-chart-demo.html');

@Component({
  selector: 'bubble-chart-demo',
  template: template,
  directives: [VIZABI_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class BubbleChartDemo {
  private readerModuleObject: any;
  private readerGetMethod: string;
  private readerParams: Array<any>;
  private readerName: string;
  private model: any;
  private modelHash: string;
  private translations: any;
  private chartType: string;

  constructor() {
    const hashPos = location.href.indexOf('#');

    this.readerModuleObject = DDFCsvReader;
    this.readerGetMethod = 'getDDFCsvReaderObject';
    // this.readerParams = [new DDFCsvReader.FrontendFileReader(), console];
    this.readerParams = [new DDFCsvReader.FrontendFileReader()];
    this.readerName = 'ddf1-csv-ext';
    this.model = query;
    this.modelHash = hashPos >= 0 ? location.href.substring(hashPos + 1) : '';
    this.translations = translations;
    this.chartType = 'BubbleChart';
  }
}
