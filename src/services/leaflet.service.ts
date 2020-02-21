import { Injectable } from '@angular/core';

const _errorHeader = '[ng-leaflet] ';

/**
 * Helpers for ng-leaflet map.
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
@Injectable()
export class LeafletService {
  /**
   * Check if an object is defined.
   *
   * @param object    A object.
   * @returns         true if the object is defined.
   */
  isDefined(object: any): boolean {
    return object !== undefined && object !== null;
  }

  /**
   * Check if object param is an object.
   *
   * @param object    Any.
   * @returns         true if the param is defined and object.
   */
  isObject(object: any): boolean {
    return object !== null && typeof object === 'object';
  }

  /**
   * Get effective map ID.
   *
   * @param d    Defaults from defaults service.
   * @returns    Map ID.
   */
  obtainEffectiveMapId(d: any, mapId: string): any {
    let id: string;
    const keys = Object.keys(d);

    if (!this.isDefined(mapId)) {
      if (keys.length === 0 || (keys.length === 1 && keys[0] === 'main')) {
        // default non id attribute map
        // OR one key 'main'
        /*
        Main Reason:
        Initally if we have only one map and no "id" then d will be undefined initially.
        On subsequent runs it will be just d.main so we need to return the last map.
        */
        id = 'main';
      } else {
        throw new Error(_errorHeader +
          '- You have more than 1 map on the DOM, you must provide the map ID to the leafletData.getXXX call. ' +
          'Where one of the following mapIds ' + Object.keys(d).join(',') + ' are available.');
      }
    } else {
      id = mapId;
    }

    return id;
  }
}
