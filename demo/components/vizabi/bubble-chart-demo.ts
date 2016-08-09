/// <reference path="../../../tsd.d.ts" />

import {
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from '@angular/common';

import {Component} from '@angular/core';
import {vizabiWrapper} from '../../../components/index';

const WSReader = require('vizabi-ws-reader').WSReader;
const WS_SERVER = 'https://waffle-server-stage.gapminderdev.org';

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
  private extResources: any;
  private chartType: string;

  constructor() {
    const hashPos = location.href.indexOf('#');

    this.readerModuleObject = new WSReader();
    this.readerGetMethod = 'getReader';
    this.readerParams = [];
    this.readerName = 'ws-new-reader';
    this.model = {
      data: {
        reader: 'ws-new-reader',
        path: WS_SERVER + '/api/graphs/stats/vizabi-tools',
        splash: true
      },
      ui: {
        buttons: [
          'colors',
          'find',
          'stack',
          'show',
          'moreoptions',
          'fullscreen',
          'presentation'
        ],
        dialogs: {
          popup: [
            'colors',
            'find',
            'stack',
            'show',
            'moreoptions'
          ],
          sidebar: [
            'colors',
            'find',
            'stack'
          ],
          moreoptions: [
            'opacity',
            'speed',
            'stack',
            'axesmc',
            'colors',
            'presentation',
            'about'
          ]
        }
      }
    };
    this.modelHash = hashPos >= 0 ? location.href.substring(hashPos + 1) : '';
    this.chartType = 'BubbleChart';
    this.extResources = {
      host: WS_SERVER + '/',
      preloadPath: 'api/vizabi/',
      dataPath: 'api/graphs/stats/vizabi-tools',
      conceptpropsPath: WS_SERVER + '/api/vizabi/metadata.json',
      translationPath: WS_SERVER + '/api/vizabi/translation/en.json'
    };
  }
}
