import { Component } from '@angular/core';
import { cloneDeep } from 'lodash';

const query = require('../../../../../node_modules/vizabi-config-systema_globalis/dist/BubbleChart.json');

declare const DDFCsvReader: any;

@Component({
  selector: 'arabic-bubble-chart-demo',
  templateUrl: './arabic-bubble-chart-demo.component.html'
})
export class ArabicBubbleChartDemoComponent {
  readerModuleObject: any;
  readerGetMethod: string;
  readerPlugins: any[];
  readerName: string;
  model: any;
  modelHash: string;
  chartType: string;
  stopUrlRedirect: boolean;

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
      id: 'ar-SA',
      filePath: './translation/'
    };
    this.modelHash = hashPos >= 0 ? location.href.substring(hashPos + 1) : '';
    this.chartType = 'BubbleChart';
    this.stopUrlRedirect = true;
  }

  onChartCreated(event: any) {
    console.log('arabic bubble chart was created', event);
  }

  onChartChanged(event: any) {
    console.log('arabic bubble chart was changed', event);
  }

  onChartClicked(event: any) {
    console.log('click on arabic bubble chart', event);
  }

  onChartError(event: any) {
    console.log('arabic bubble chart error', event);
  }
}
