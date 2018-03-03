import { Component, Input } from '@angular/core';

@Component({
  selector: 'vizabi-section',
  template: `
    <section style="padding-top: 50px;">
      <div class="row">
        <div class="col-md-12">
          <h4>{{ heading }}</h4>
        </div>
      </div>
      <div class="card card-block panel panel-default panel-body">

        <div class="row">
          <div class="col-md-12">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <tabset>
            <tab heading="Markup">
              <div class="card card-block panel panel-default panel-body">
                <pre class="prettyprint linenums lang-html">{{ html }}</pre>
              </div>
            </tab>
            <tab heading="TypeScript">
              <div class="card card-block panel panel-default panel-body">
                <pre class="prettyprint linenums lang-js">{{ ts }}</pre>
              </div>
            </tab>
          </tabset>
        </div>
      </div>
    </section>
  `
})
export class VizabiSectionComponent {
  @Input() ts: string;
  @Input() html: string;
  @Input() heading: string;
}
