import {NgModule} from '@angular/core';
import {VizabiDirective} from './vizabi/vizabi';

export {VizabiDirective};

@NgModule({
  imports: [],
  declarations: [
    VizabiDirective
  ],
  exports: [
    VizabiDirective
  ],
  providers: []
})

export class VizabiModule {
}
