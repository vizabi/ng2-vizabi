import { Component, AfterContentInit } from '@angular/core';

const gettingStarted = require('html-loader!markdown-loader!../getting-started.md');

@Component({
  selector: 'app',
  template: `
    <demo-header>Loading header</demo-header>

    <main class="bd-pageheader">
      <div class="container">
        <h1>ng2-vizabi</h1>
        <p>Angular2 directive for <a href="http://www.vizabi.org/" style="color:white">Vizabi</a></p>
        <a class="btn btn-primary" href="https://github.com/vizabi/ng2-vizabi">View on GitHub</a>
        <div class="row">
          <div class="col-lg-1">
            <iframe src="https://ghbtns.com/github-btn.html?user=vizabi&repo=ng2-vizabi&type=star&count=true"
                    frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
          </div>
          <div class="col-lg-1">
            <iframe src="https://ghbtns.com/github-btn.html?user=vizabi&repo=ng2-vizabi&type=fork&count=true"
                    frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
          </div>
        </div>
      </div>
    </main>

    <div class="container">
      <section id="getting-started" [innerHtml]="gettingStarted"></section>
      <vizabi-main-section class="col-md-12"></vizabi-main-section>
    </div>

    <footer class="footer">
      <div class="container">
        <p class="text-muted text-center"><a href="https://github.com/vizabi/ng2-vizabi">ng2-vizabi</a> is maintained by
          <a href="https://github.com/valor-software">valor-software</a>.</p>
      </div>
    </footer>
  `
})
export class AppComponent implements AfterContentInit {
  gettingStarted: string = gettingStarted;

  ngAfterContentInit(): any {
    setTimeout(() => {
      if (typeof PR !== 'undefined') {
        // google code-prettify
        PR.prettyPrint();
      }
    }, 150);
  }
}
