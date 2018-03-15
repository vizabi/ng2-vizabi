import { Injectable } from '@angular/core';
import * as urlon from 'urlon';

@Injectable()
export class VizabiService {
  modelToString(model = {}): string {
    return urlon.stringify(model);
  }

  stringToModel(strPar: string) {
    const str = strPar || '_';

    let result = {};

    if (str) {
      try {
        result = urlon.parse(str);
      } catch (err) {
        console.error('Urlon Exception:', err);
      }
    }

    return result;
  }
}
