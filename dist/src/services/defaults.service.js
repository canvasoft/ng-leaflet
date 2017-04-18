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
var DefaultsService = (function () {
    function DefaultsService() {
        this.defaults = {
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
    }
    DefaultsService.prototype.getDefaults = function () {
        return this.defaults;
    };
    return DefaultsService;
}());
DefaultsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DefaultsService);
exports.DefaultsService = DefaultsService;
//# sourceMappingURL=defaults.service.js.map