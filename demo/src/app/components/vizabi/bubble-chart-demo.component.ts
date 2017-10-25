import { Component } from '@angular/core';
import * as _ from 'lodash';

const query = require('../../../../../node_modules/vizabi-config-systema_globalis/BubbleChart.json');

declare const DDFCsvReader: any;

@Component({
  selector: 'bubble-chart-demo',
  templateUrl: './bubble-chart-demo.component.html'
})
export class BubbleChartDemoComponent {
  public readerModuleObject: any;
  public readerGetMethod: string;
  public readerPlugins: any[];
  public readerName: string;
  public model: any;
  public modelHash: string;
  public chartType: string;
  public stopUrlRedirect: boolean;
  public additionalItems: any[] = [];

  public constructor() {
    const hashPos = location.href.indexOf('#');

    this.readerModuleObject = DDFCsvReader;
    this.readerGetMethod = 'getDDFCsvReaderObject';
    // this.readerPlugins = [new DDFCsvReader.FrontendFileReader(), console];
    this.readerPlugins = [new DDFCsvReader.FrontendFileReader()];
    this.readerName = 'ddf1-csv-ext';
    this.model = _.cloneDeep(query);
    this.model.data = {
      reader: 'ddf1-csv-ext',
      splash: true,
      path: './ddf',
      ddfPath: './ddf'
    };
    this.model.locale = {
      id: 'en',
      filePath: './translation/'
    };
    this.modelHash = hashPos >= 0 ? location.href.substring(hashPos + 1) : '';
    this.chartType = 'BubbleChart';
    this.stopUrlRedirect = true;
  }

  public loadAdditionalData(): void {
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

  public onChartCreated(event: any): void {
    console.log('bubble chart was created', event);
  }

  public onChartChanged(event: any): void {
    console.log('bubble chart was changed', event);
  }

  public onChartClicked(event: any): void {
    console.log('click on bubble chart', event);
  }

  public onChartError(event: any): void {
    console.log('bubble chart error', event);
  }
}
