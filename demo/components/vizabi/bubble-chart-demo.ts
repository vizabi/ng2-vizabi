/// <reference path="../../../tsd.d.ts" />

import {
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from '@angular/common';

import {Component} from '@angular/core';
import {vizabiWrapper} from '../../../components/index';

let template = require('./bubble-chart-demo.html');

@Component({
  selector: 'bubble-chart-demo',
  template: template,
  directives: [vizabiWrapper, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class BubbleChartDemo {
}
