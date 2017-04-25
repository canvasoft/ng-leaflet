import { Injectable } from '@angular/core';

const _errorHeader = '[ui-leaflet-ng2] ';

@Injectable()
export class LeafletService {
  isDefined(object: any) {
    return object !== undefined && object !== null;
  }

  isObject(object: any) {
    return object !== null && typeof object === 'object';
  }

  obtainEffectiveMapId(d:any, mapId:string) {
    let id;
    let keys = Object.keys(d);
    console.log('Keys', keys);

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
