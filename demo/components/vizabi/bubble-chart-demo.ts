/// <reference path="../../../tsd.d.ts" />

import {
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from '@angular/common';

const WSReader = require('vizabi-ws-reader').WSReader;
const WS_SERVER = 'https://waffle-server-dev.gapminderdev.org';

import {Component} from '@angular/core';
import {VIZABI_DIRECTIVES} from '../../../components/vizabi';

let template = require('./bubble-chart-demo.html');

@Component({
  selector: 'bubble-chart-demo',
  template: template,
  directives: [VIZABI_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
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
    this.readerName = 'waffle';
    this.model = {
      data: {
        reader: 'waffle',
        splash: true,
        path: WS_SERVER + '/api/ddf/'
      },
      ui: {
        buttons: [],
        dialogs: {popup: [], sidebar: [], moreoptions: []},
        presentation: false
      }
    };
    this.modelHash = hashPos >= 0 ? location.href.substring(hashPos + 1) : '';
    this.chartType = 'BubbleChart';
    this.extResources = {
      host: WS_SERVER + '/',
      preloadPath: WS_SERVER + 'api/vizabi/',
      dataPath: WS_SERVER + '/api/ddf/',
      conceptpropsPath: WS_SERVER + '/api/vizabi/metadata.json',
      translationPath: WS_SERVER + '/api/vizabi/translation/en.json'
    };
  }
}
