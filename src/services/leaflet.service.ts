import { Injectable } from '@angular/core';

@Injectable()
export class LeafletService {
  isDefined(object: any) {
    return object !== undefined && object !== null;
  }

  isObject(object: any) {
    return object !== null && typeof object === 'object';
  }
}
