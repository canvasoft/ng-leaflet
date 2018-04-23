"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leaflet_service_1 = require("./leaflet.service");
var L = require("leaflet");
/**
 * DefaultsService Class.
 * This assign or get default options for ui-leaflet-ng2 map.
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
var DefaultsService = /** @class */ (function () {
    function DefaultsService(leafletService) {
        this.leafletService = leafletService;
        this.defaultsMap = {};
    }
    /**
     * Get initial defaults.
     *
     * @returns   Initial defaults.
     */
    DefaultsService.prototype._getDefaults = function () {
        return {
            keyboard: true,
            dragging: true,
            worldCopyJump: false,
            doubleClickZoom: true,
            scrollWheelZoom: true,
            tap: true,
            touchZoom: true,
            zoomControl: true,
            zoomsliderControl: false,
            zoomControlPosition: 'topleft',
            attributionControl: true,
            controls: {
                layers: {
                    visible: true,
                    position: 'topright',
                    collapsed: true
                }
            },
            nominatim: {
                server: ' http://nominatim.openstreetmap.org/search'
            },
            crs: L.CRS.EPSG3857,
            tileLayer: '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            tileLayerOptions: {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            },
            path: {
                weight: 10,
                opacity: 1,
                color: '#0000ff'
            },
            center: {
                lat: 0,
                lng: 0,
                zoom: 1
            },
            trackResize: true
        };
    };
    /**
     * Reset defaultsMap field.
     */
    DefaultsService.prototype.reset = function () {
        this.defaultsMap = {};
    };
    /**
     * Get defaults for a ui-leaflet-ng2 map.
     *
     * @param scopeId   Map id. If it is null, will be setted as 'main'
     * @returns         Initial defaults.
     */
    DefaultsService.prototype.getDefaults = function (scopeId) {
        if (scopeId === void 0) { scopeId = null; }
        var mapId = this.leafletService.obtainEffectiveMapId(this.defaultsMap, scopeId);
        return this.defaultsMap[mapId];
    };
    /**
     * Set defaults options for a ui-leaflet-ng2 map.
     *
     * @param userDefaults   Defaults setted by the user.
     * @param scopeId        Map id. If it is null, will be setted as 'main'
     * @returns              New defaults.
     */
    DefaultsService.prototype.setDefaults = function (userDefaults, scopeId) {
        var newDefaults = this._getDefaults();
        var isDefined = this.leafletService.isDefined;
        if (isDefined(userDefaults)) {
            Object.assign(newDefaults, userDefaults);
        }
        var mapId = this.leafletService.obtainEffectiveMapId(this.defaultsMap, scopeId);
        this.defaultsMap[mapId] = newDefaults;
        return newDefaults;
    };
    /**
     * Get creation options for LeafletJS map.
     *
     * @param scopeId   Map id. If it is null, will be setted as 'main'
     * @returns         LeafletJS map creation options.
     */
    DefaultsService.prototype.getMapCreationDefaults = function (scopeId) {
        var mapId = this.leafletService.obtainEffectiveMapId(this.defaultsMap, scopeId);
        var d = this.defaultsMap[mapId];
        var isDefined = this.leafletService.isDefined;
        var mapDefaults = {
            maxZoom: d.maxZoom,
            keyboard: d.keyboard,
            dragging: d.dragging,
            zoomControl: d.zoomControl,
            doubleClickZoom: d.doubleClickZoom,
            scrollWheelZoom: d.scrollWheelZoom,
            tap: d.tap,
            touchZoom: d.touchZoom,
            attributionControl: d.attributionControl,
            worldCopyJump: d.worldCopyJump,
            crs: d.crs,
            trackResize: d.trackResize,
        };
        if (isDefined(d.minZoom)) {
            mapDefaults.minZoom = d.minZoom;
        }
        if (isDefined(d.zoomAnimation)) {
            mapDefaults.zoomAnimation = d.zoomAnimation;
        }
        if (isDefined(d.fadeAnimation)) {
            mapDefaults.fadeAnimation = d.fadeAnimation;
        }
        if (isDefined(d.markerZoomAnimation)) {
            mapDefaults.markerZoomAnimation = d.markerZoomAnimation;
        }
        if (d.map && Object.keys(d.map).length > 0) {
            for (var _i = 0, _a = Object.keys(d.map); _i < _a.length; _i++) {
                var option = _a[_i];
                mapDefaults[option] = d.map[option];
            }
        }
        return mapDefaults;
    };
    DefaultsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [leaflet_service_1.LeafletService])
    ], DefaultsService);
    return DefaultsService;
}());
exports.DefaultsService = DefaultsService;
//# sourceMappingURL=defaults.service.js.map