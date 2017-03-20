import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
import { query } from './sg';

declare const DDFCsvReader: any;

@Component({
  selector: 'bubble-chart-demo',
  templateUrl: './bubble-chart-demo.component.html'
})
export class BubbleChartDemoComponent {
  private readerModuleObject: any;
  private readerGetMethod: string;
  private readerParams: any[];
  private readerName: string;
  private model: any;
  private modelHash: string;
  private chartType: string;
  private stopUrlRedirect: boolean;
  private additionalItems: any[] = [];

  public constructor() {
    const hashPos = location.href.indexOf('#');

    this.readerModuleObject = DDFCsvReader;
    this.readerGetMethod = 'getDDFCsvReaderObject';
    // this.readerParams = [new DDFCsvReader.FrontendFileReader(), console];
    this.readerParams = [new DDFCsvReader.FrontendFileReader()];
    this.readerName = 'ddf1-csv-ext';
    this.model = _.cloneDeep(query);
    this.model.locale.id = 'en';
    this.modelHash = hashPos >= 0 ? location.href.substring(hashPos + 1) : '';
    this.chartType = 'BubbleChart';
    this.stopUrlRedirect = true;
  }

  private loadAdditionalData(): void {
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

  private onChartCreated(event: any): void {
    console.log('bubble chart was created', event);
  }

  private onChartChanged(event: any): void {
    console.log('bubble chart was changed', event);
  }

  private onChartClicked(event: any): void {
    console.log('click on bubble chart', event);
  }

  private onChartError(event: any): void {
    console.log('bubble chart error', event);
  }
}
