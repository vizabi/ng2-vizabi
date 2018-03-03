import { Injectable } from '@angular/core';
import * as urlon from 'urlon';

@Injectable()
export class VizabiService {
  modelToString(model = {}): string {
    return urlon.stringify(model);
  }

  stringToModel(str = '_') {
    if (str !== '_') {
      try {
        return urlon.parse(str);
      } catch (err) {
        console.error('Urlon Exception:', err);
      }
    }

    return {};
  }
}
