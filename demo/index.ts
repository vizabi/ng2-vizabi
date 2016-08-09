/// <reference path="../tsd.d.ts" />
import {
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from '@angular/common';

import {Component, ViewEncapsulation} from '@angular/core';

import {bootstrap} from '@angular/platform-browser-dynamic';

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
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=VS-work&repo=ng2-vizabi&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=VS-work&repo=ng2-vizabi&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
      </div>
    </div>
  </main>

  <div class="container">
    <section id="getting-started">${gettingStarted}</section>

    <vizabi-section class="col-md-12"></vizabi-section>
  </div>

  <footer class="footer">
    <div class="container">
      <p class="text-muted text-center"><a href="https://github.com/VS-work/ng2-vizabi">ng2-vizabi</a> is maintained by <a href="https://github.com/valor-software">valor-software</a>.</p>
    </div>
  </footer>
  `,
  encapsulation: ViewEncapsulation.None,
  directives: [
    NgClass,
    VizabiSection
  ]
})
export class Demo {
}

bootstrap(Demo);
