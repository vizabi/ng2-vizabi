import {NgModule} from '@angular/core';
import {VizabiDirective} from './vizabi/vizabi';
import {VizabiService} from './vizabi/vizabi-service';

export {VizabiDirective};
export {VizabiService};

@NgModule({
  imports: [],
  declarations: [
    VizabiDirective
  ],
  exports: [
    VizabiDirective
  ],
  providers: [
    VizabiService
  ]
})

export class VizabiModule {
}
