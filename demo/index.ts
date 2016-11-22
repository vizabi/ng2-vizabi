import {NgModule, Component, ViewEncapsulation} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

import {VizabiService} from './../components/vizabi/vizabi-service';
import {VizabiDirective} from './../components/vizabi';
import {BubbleChartDemo} from './components/vizabi/bubble-chart-demo';
import {DemoSectionComponent} from './components/demo-section';

import {VizabiSection} from './components/vizabi-section';
// import {DemoHeader} from './components/demo-header';

let gettingStarted = require('./getting-started.md');

@Component({
  selector: 'app',
  template: `
  <main class="bd-pageheader">
    <div class="container">
      <h1>ng2-vizabi</h1>
      <p>The Angular2 directive for <a href="https://github.com/Gapminder/vizabi" target="_blank">Vizabi</a></p>
      <a class="btn btn-primary" href="https://github.com/Gapminder/vizabi">View on GitHub</a>
      <div class="row">
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=vizabi&repo=ng2-vizabi&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=vizabi&repo=ng2-vizabi&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
      </div>
    </div>
  </main>

  <div class="container">
    <section id="getting-started">${gettingStarted}</section>

    <vizabi-section class="col-md-12"></vizabi-section>
  </div>

  <footer class="footer">
    <div class="container">
      <p class="text-muted text-center"><a href="https://github.com/vizabi/ng2-vizabi">ng2-vizabi</a></p>
    </div>
  </footer>
  `,
  encapsulation: ViewEncapsulation.None
})
export class Demo {
}

@NgModule({
  declarations: [
    Demo,
    DemoSectionComponent,
    VizabiSection,
    BubbleChartDemo,
    VizabiDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2BootstrapModule,
    ReactiveFormsModule
  ],
  providers: [
    Demo,
    DemoSectionComponent,
    VizabiSection,
    BubbleChartDemo,
    VizabiService
  ],
  bootstrap: [Demo]
})

export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
