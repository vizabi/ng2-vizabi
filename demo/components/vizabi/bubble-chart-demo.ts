/// <reference path="../../../tsd.d.ts" />

import {
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from '@angular/common';

import {Component} from '@angular/core';
import {vizabiWrapper} from '../../../components/index';
import {query, metadata, translations} from './fixtures/sg';

const ddfCsvReader = require('vizabi-ddfcsv-reader');
const FrontendFileReader = ddfCsvReader.FrontendFileReader;

let template = require('./bubble-chart-demo.html');

@Component({
  selector: 'bubble-chart-demo',
  template: template,
  directives: [vizabiWrapper, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class BubbleChartDemo {
  private readerModuleObject: any;
  private readerGetMethod: string;
  private readerParams: Array<any>;
  private readerName: string;
  private model: any;
  private modelHash: string;
  private metadata: any;
  private translations: any;
  private chartType: string;

  constructor() {
    const hashPos = location.href.indexOf('#');

    this.readerModuleObject = ddfCsvReader;
    this.readerGetMethod = 'getDDFCsvReaderObject';
    this.readerParams = [new FrontendFileReader()];
    this.readerName = 'ddf1-csv-ext';
    this.model = query;
    this.modelHash = hashPos >= 0 ? location.href.substring(hashPos + 1) : '';
    this.metadata = metadata;
    this.translations = translations;
    this.chartType = 'BubbleChart';
  }
}
