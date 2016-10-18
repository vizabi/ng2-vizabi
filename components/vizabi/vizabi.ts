import {EventEmitter, Input, Output, OnInit, OnDestroy, Directive, ElementRef} from '@angular/core';

const Vizabi = require('vizabi');
const urlon = require('URLON');
const Promise = require('bluebird');

@Directive({
  selector: 'vizabi'
})
export class VizabiDirective implements OnInit, OnDestroy {
  @Input() private order: number;
  @Input() private readerModuleObject: any;
  @Input() private readerGetMethod: string;
  @Input() private readerParams: Array<any>;
  @Input() private readerName: string;
  @Input() private model: any;
  @Input() private modelHash: string;
  @Input() private extResources: any;
  @Input() private translations: any;
  @Input() private chartType: string;

  @Output() private onCreated: EventEmitter<any> = new EventEmitter();
  @Output() private onChanged: EventEmitter<any> = new EventEmitter();

  private component: any;
  private view: any;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    const initialModel = Vizabi.utils.deepClone(this.model);

    this.createView();
    this.readerProcessing();
    this.setMetadata();
    this.setExtResources();
    this.modelHashProcessing();
    this.persistentChangeProcessing(initialModel);
    this.component = Vizabi(this.chartType, this.view, this.model);
    this.onCreated.emit({component: this.component});
  }

  ngOnDestroy() {
    Object.keys(Vizabi._instances).forEach(instanceKey => {
      if (Vizabi._instances[instanceKey]._id === this.component._id) {
        this.component.clear();
        Vizabi._instances[instanceKey] = null;
        this.view.remove();
      }
    });
  }

  private createView() {
    this.view = document.createElement('div');
    this.view.style.height = '100%';
    this.element.nativeElement.appendChild(this.view);
  }

  private readerProcessing() {
    if (this.readerModuleObject && this.readerGetMethod && this.readerName &&
      this.readerParams && this.readerModuleObject[this.readerGetMethod]) {
      const readerObject = this.readerModuleObject[this.readerGetMethod].apply(this, this.readerParams);
      Vizabi.Reader.extend(this.readerName, readerObject);
    }
  }

  private setMetadata() {
    if (this.translations) {
      const translations = this.translations;

      Vizabi.Tool.define('preloadLanguage', function () {
        const that = this;

        return new Promise(function (resolve: any) {
          if (translations) {
            that.model.language.strings.set(that.model.language.id, translations);
          }

          that.model.language.strings.trigger('change');
          resolve();
        });
      });
    }
  }

  private modelHashProcessing() {
    if (this.modelHash) {
      const str = encodeURI(decodeURIComponent(this.modelHash));
      const urlModel = urlon.parse(str);

      Vizabi.utils.deepExtend(this.model, urlModel);
    }
  }

  private persistentChangeProcessing(initialModel: any) {
    this.model.bind = this.model.bind || {};
    this.model.bind.persistentChange = onPersistentChange;

    const onChanged = this.onChanged;
    const order = this.order;

    function onPersistentChange(evt: any, minModel: any) {
      const minModelDiff = Vizabi.utils.diffObject(minModel, initialModel);

      // hack -> minimum query string
      minModelDiff.language = {};

      if (window && window.location) {
        window.location.hash = urlon.stringify(minModelDiff);
      }

      onChanged.emit({order, model: minModel, modelDiff: minModelDiff});
    }
  }

  private setExtResources() {
    if (this.extResources) {
      Vizabi._globals.ext_resources = this.extResources;
    }
  }
}
