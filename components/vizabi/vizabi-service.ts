import { Injectable } from '@angular/core';

const urlon = require('URLON');

@Injectable()
export class VizabiService {

  constructor() {
  }

  public modelToString(model) {
    model = model || {};
    return urlon.stringify(model);
  }

  public stringToModel(str) {
    str = str || '';
    if(str) {
      try {
        return urlon.parse(str);
      } catch(err) {
        console.error("Urlon Exception:", err);
        return {};
      }
    }
    return {};
  }

}
