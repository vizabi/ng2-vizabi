import {NgModule} from '@angular/core';
import {VizabiService} from './vizabi/vizabi.service';
import {VizabiDirective} from './vizabi/vizabi.directive';

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
