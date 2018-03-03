import { Component } from '@angular/core';

// webpack html imports
const doc = require('html-loader!markdown-loader!../../doc.md');

@Component({
  selector: 'vizabi-main-section',
  template: `
    <br>
    <div class="row">
      <h2>API</h2>
      <div class="card card-block panel panel-default panel-body" [innerHTML]="doc"></div>
    </div>

    <section [attr.id]="name">
      <div class="row">
        <h2>Examples</h2>

        <vizabi-section [ts]="desc.bubbleChart.ts" [html]="desc.bubbleChart.html" [heading]="desc.bubbleChart.heading">
          <bubble-chart-demo></bubble-chart-demo>
        </vizabi-section>
        <vizabi-section [ts]="desc.arabicBubbleChart.ts" [html]="desc.arabicBubbleChart.html"
                        [heading]="desc.arabicBubbleChart.heading">
          <arabic-bubble-chart-demo></arabic-bubble-chart-demo>
        </vizabi-section>
      </div>

      <br>

    </section>
  `
})

export class VizabiMainSectionComponent {
  name = 'Vizabi';
  src = 'https://github.com/vizabi/ng2-vizabi/blob/src/vizabi/vizabi.ts';
  doc = doc;
  desc = {
    bubbleChart: {
      heading: 'Bubble Chart',
      id: 'bubbleChart',
      ts: require('!!raw-loader?lang=typescript!./vizabi/bubble-chart-demo.component.ts'),
      html: require('!!raw-loader?lang=markup!./vizabi/bubble-chart-demo.component.html')
    },
    arabicBubbleChart: {
      heading: 'Arabic Bubble Chart',
      id: 'arabicBubbleChart',
      ts: require('!!raw-loader?lang=typescript!./vizabi/arabic-bubble-chart-demo.component.ts'),
      html: require('!!raw-loader?lang=markup!./vizabi/arabic-bubble-chart-demo.component.html')
    }
  };
}
