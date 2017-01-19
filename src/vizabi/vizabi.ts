import {NgModule} from '@angular/core';
import {VizabiService} from './vizabi.service';
import {VizabiDirective} from './vizabi.directive';

export {VizabiService, VizabiDirective};

@NgModule({
  declarations: [
    VizabiDirective
  ],
  exports: [
    VizabiDirective
  ],
  providers: [VizabiService]
})
export class VizabiModule {
}
