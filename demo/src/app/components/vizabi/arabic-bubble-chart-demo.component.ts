import { Component } from '@angular/core';
import * as _ from 'lodash';
import { query } from './sg';

declare const DDFCsvReader: any;

@Component({
  selector: 'arabic-bubble-chart-demo',
  templateUrl: './arabic-bubble-chart-demo.component.html'
})
export class ArabicBubbleChartDemoComponent {
  private readerModuleObject: any;
  private readerGetMethod: string;
  private readerParams: any[];
  private readerName: string;
  private model: any;
  private modelHash: string;
  private chartType: string;
  private stopUrlRedirect: boolean;

  public constructor() {
    const hashPos = location.href.indexOf('#');

    this.readerModuleObject = DDFCsvReader;
    this.readerGetMethod = 'getDDFCsvReaderObject';
    // this.readerParams = [new DDFCsvReader.FrontendFileReader(), console];
    this.readerParams = [new DDFCsvReader.FrontendFileReader()];
    this.readerName = 'ddf1-csv-ext';
    this.model = _.cloneDeep(query);
    this.model.locale.id = 'ar-SA';
    this.modelHash = hashPos >= 0 ? location.href.substring(hashPos + 1) : '';
    this.chartType = 'BubbleChart';
    this.stopUrlRedirect = true;
  }

  private onChartCreated(event: any): void {
    console.log('arabic bubble chart was created', event);
  }

  private onChartChanged(event: any): void {
    console.log('arabic bubble chart was changed', event);
  }

  private onChartClicked(event: any): void {
    console.log('click on arabic bubble chart', event);
  }

  private onChartError(event: any): void {
    console.log('arabic bubble chart error', event);
  }
}
