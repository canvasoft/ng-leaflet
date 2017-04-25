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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leaflet_component_1 = require("../components/leaflet.component");
var leaflet_service_1 = require("../services/leaflet.service");
var CenterDirective = (function () {
    function CenterDirective(el, uiLeaflet, leafletService) {
        this.el = el;
        this.uiLeaflet = uiLeaflet;
        this.leafletService = leafletService;
    }
    CenterDirective.prototype.changeCenter = function () {
        var leafletService = this.leafletService;
        var center = this.lfCenter;
        if (leafletService.isObject(center) && leafletService.isDefined(center.lat) &&
            leafletService.isDefined(center.lng) && leafletService.isDefined(center.zoom)) {
            this.uiLeaflet.getMap().then(function (map) {
                map.setView([center.lat, center.lng], center.zoom);
                map.on('moveend', function () {
                    Object.assign(center, {
                        lat: map.getCenter().lat,
                        lng: map.getCenter().lng,
                        zoom: map.getZoom(),
                        autoDiscover: false
                    });
                });
            });
        }
        else {
            console.warn('[ui-leaflet-ng2] - Center is not valid');
        }
    };
    CenterDirective.prototype.ngOnInit = function () {
        console.log('Parent:', this.uiLeaflet);
        console.log('Lf Center:', this.lfCenter);
        this.changeCenter();
    };
    CenterDirective.prototype.ngOnChanges = function (changes) {
        this.changeCenter();
    };
    return CenterDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CenterDirective.prototype, "lfCenter", void 0);
CenterDirective = __decorate([
    core_1.Directive({
        selector: '[lfCenter]',
    }),
    __param(1, core_1.Host()),
    __metadata("design:paramtypes", [core_1.ElementRef, leaflet_component_1.LeafletComponent,
        leaflet_service_1.LeafletService])
], CenterDirective);
exports.CenterDirective = CenterDirective;
//# sourceMappingURL=center.directive.js.map