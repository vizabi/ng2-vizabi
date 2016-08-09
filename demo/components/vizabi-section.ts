/// <reference path="../../tsd.d.ts" />

import {CORE_DIRECTIVES} from '@angular/common';
import {Component, ViewEncapsulation} from '@angular/core';
import {TAB_DIRECTIVES} from 'ng2-bootstrap';
import {BubbleChartDemo} from './vizabi/bubble-chart-demo';

let name = 'Vizabi';
let src = 'https://github.com/VS-work/ng2-vizabi/blob/master/components/vizabi/vizabi.ts';
// webpack html imports
let doc = require('../../components/vizabi/readme.md');

let tabDesc: Array<any> = [
  {
    heading: 'Bubble Chart',
    ts: require('!!prismjs?lang=typescript!./vizabi/bubble-chart-demo.ts'),
    html: require('!!prismjs?lang=markup!./vizabi/bubble-chart-demo.html')
  }
];

let tabsContent: string = ``;
tabDesc.forEach(desc => {
  let source = '';
  if (desc.source) {
    source = `Source of data: <a href="${desc.source}" target="_blank">${desc.source}</a><br>`;
  }

  tabsContent += `
          <tab heading="${desc.heading}" (select)="select($event)">
          <div class="card card-block panel panel-default panel-body">

            <${desc.heading.toLowerCase().replace(' ', '-')}-demo *ngIf="currentHeading === '${desc.heading}'"></${desc.heading.toLowerCase().replace(' ', '-')}-demo>

            <br>

            <div class="row" style="margin: 0px;">
              <tabset>
                <tab heading="Markup">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-html"><code class="language-html" ng-non-bindable>${desc.html}</code></pre>
                  </div>
                </tab>
                <tab heading="TypeScript">
                  <div class="card card-block panel panel-default panel-body">
                    <pre class="language-typescript"><code class="language-typescript" ng-non-bindable>${desc.ts}</code></pre>
                  </div>
                </tab>
              </tabset>
              ${source}
            </div>
          </div>
        </tab>
  `;
});

@Component({
  selector: 'vizabi-section',
  template: `
  <section id="${name.toLowerCase()}">
    <div class="row">
      <tabset>

        ${tabsContent}

      </tabset>
    </div>

    <div class="row">
      <h2>API</h2>
      <div class="card card-block panel panel-default panel-body">${doc}</div>
    </div>
  </section>
  `,
  encapsulation: ViewEncapsulation.None,
  directives: [BubbleChartDemo, TAB_DIRECTIVES, CORE_DIRECTIVES]
})
export class VizabiSection {
  private currentHeading: string = 'Bubble Chart';

  private select(e) {
    if (e.heading) {
      this.currentHeading = e.heading;
    }
  }
}
