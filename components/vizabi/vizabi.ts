import {OnInit, OnDestroy, Directive, EventEmitter, ElementRef} from '@angular/core';

@Directive({
  selector: 'vizabi',
  properties: [
    'reader',
    'query'
  ],
  events: ['done']
})
export class VizabiWrapper implements OnInit, OnDestroy {
  private view: any;
  private reader: any;
  private query: any;
  private done: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.view = document.createElement('div');
    //this.view.class = 'handsontable-container';
    this.view.innerHTML = 'hi from vizabi';
    this.element.nativeElement.appendChild(this.view);
  }

  ngOnDestroy() {
    if (this.view) {
      this.view.remove();
    }
  }
}

export const vizabiWrapper: Array<any> = [VizabiWrapper];
