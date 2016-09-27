import { Component } from '@angular/core';

// webpack html imports
let doc = require('../../components/vizabi/readme.md');
let titleDoc = require('../../components/vizabi/title.md');

let ts = require('!!raw?lang=typescript!./vizabi/bubble-chart-demo.ts');
let html = require('!!raw?lang=markup!./vizabi/bubble-chart-demo.html');

@Component({
  selector: 'vizabi-section',
  template: `
    <demo-section [name]="name" [src]="src" [titleDoc]="titleDoc" [html]="html" [ts]="ts" [doc]="doc">
      <bubble-chart-demo></bubble-chart-demo>
    </demo-section>`
})
export class VizabiSection {
  public name:string = 'Vizabi';
  public src:string = 'https://github.com/vizabi/ng2-vizabi/blob/master/components/vizabi/vizabi.ts';
  public html:string = html;
  public ts:string = ts;
  public titleDoc:string = titleDoc;
  public doc:string = doc;
}