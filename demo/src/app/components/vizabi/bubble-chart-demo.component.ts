import { Component } from '@angular/core';
import { cloneDeep } from 'lodash';

const query = require('../../../../../node_modules/vizabi-config-systema_globalis/dist/BubbleChart.json');

declare const DDFCsvReader: any;

@Component({
  selector: 'bubble-chart-demo',
  templateUrl: './bubble-chart-demo.component.html'
})
export class BubbleChartDemoComponent {
  readerModuleObject: any;
  readerGetMethod: string;
  readerPlugins: any[];
  readerName: string;
  model: any;
  modelHash: string;
  chartType: string;
  stopUrlRedirect: boolean;
  additionalItems: any[] = [];
  reloadTime;
  restoreAfterReload = false;

  constructor() {
    const hashPos = location.href.indexOf('#');

    this.readerModuleObject = DDFCsvReader;
    this.readerGetMethod = 'getDDFCsvReaderObject';
    // this.readerPlugins = [new DDFCsvReader.FrontendFileReader(), console];
    this.readerPlugins = [new DDFCsvReader.FrontendFileReader()];
    this.readerName = 'ddf1-csv-ext';
    this.model = cloneDeep(query);
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

  reload() {
    this.reloadTime = new Date().getTime();
  }

  onChartCreated(event: any) {
    console.log('bubble chart was created', event);
  }

  onChartChanged(event: any) {
    console.log('bubble chart was changed', event);
  }

  onChartClicked(event: any) {
    console.log('click on bubble chart', event);
  }

  onChartError(event: any) {
    console.log('bubble chart error', event);
  }
}
