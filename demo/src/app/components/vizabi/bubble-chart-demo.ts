import {Component} from '@angular/core';
import {query} from './sg';

declare const DDFCsvReader: any;

@Component({
  selector: 'bubble-chart-demo',
  templateUrl: './bubble-chart-demo.html'
})
export class BubbleChartDemo {
  private readerModuleObject: any;
  private readerGetMethod: string;
  private readerParams: Array<any>;
  private readerName: string;
  private model: any;
  private modelHash: string;
  private chartType: string;
  private stopUrlRedirect: boolean;
  private additionalItems: Array<any> = [];

  constructor() {
    const hashPos = location.href.indexOf('#');

    this.readerModuleObject = DDFCsvReader;
    this.readerGetMethod = 'getDDFCsvReaderObject';
    // this.readerParams = [new DDFCsvReader.FrontendFileReader(), console];
    this.readerParams = [new DDFCsvReader.FrontendFileReader()];
    this.readerName = 'ddf1-csv-ext';
    this.model = query;
    this.modelHash = hashPos >= 0 ? location.href.substring(hashPos + 1) : '';
    this.chartType = 'BubbleChart';
    this.stopUrlRedirect = true;
  }

  loadAdditionalData() {
    this.additionalItems = [
      {
        reader: 'csv',
        path: './extra-data/ddf--datapoints--migrant_stock--by--geo--time.csv'
      },
      {
        reader: 'csv',
        path: './extra-data/basic-indicators.csv'
      }
    ];
  }
}
