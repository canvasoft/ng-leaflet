"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _errorHeader = '[ui-leaflet-ng2] ';
/**
 * Helpers for ui-leaflet-ng2 map.
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
var LeafletService = /** @class */ (function () {
    function LeafletService() {
    }
    /**
     * Check if an object is defined.
     *
     * @param object    A object.
     * @returns         true if the object is defined.
     */
    LeafletService.prototype.isDefined = function (object) {
        return object !== undefined && object !== null;
    };
    /**
     * Check if object param is an object.
     *
     * @param object    Any.
     * @returns         true if the param is defined and object.
     */
    LeafletService.prototype.isObject = function (object) {
        return object !== null && typeof object === 'object';
    };
    /**
     * Get effective map ID.
     *
     * @param d    Defaults from defaults service.
     * @returns    Map ID.
     */
    LeafletService.prototype.obtainEffectiveMapId = function (d, mapId) {
        var id;
        var keys = Object.keys(d);
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
            }
            else {
                throw new Error(_errorHeader +
                    '- You have more than 1 map on the DOM, you must provide the map ID to the leafletData.getXXX call. ' +
                    'Where one of the following mapIds ' + Object.keys(d).join(',') + ' are available.');
            }
        }
        else {
            id = mapId;
        }
        return id;
    };
    LeafletService = __decorate([
        core_1.Injectable()
    ], LeafletService);
    return LeafletService;
}());
exports.LeafletService = LeafletService;
//# sourceMappingURL=leaflet.service.js.map