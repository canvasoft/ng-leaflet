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
var L = require("leaflet");
var defaults_service_1 = require("../services/defaults.service");
var leaflet_service_1 = require("../services/leaflet.service");
/**
 * Main ui-leaflet-ng2 component.
 *
 * <pre>
 *   <ui-leaflet></ui-leaflet>
 * </pre>
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
var LeafletComponent = /** @class */ (function () {
    function LeafletComponent(defaultsService, leafletService) {
        this.defaultsService = defaultsService;
        this.leafletService = leafletService;
        this.mapReady = new core_1.EventEmitter(true);
    }
    LeafletComponent.prototype.ngAfterViewInit = function () {
        console.log('ID', this.id);
        this.defaults = this.defaultsService.setDefaults(this.defaults, this.id);
        this.map = new L.Map(this.mapEl.nativeElement, this.defaultsService.getMapCreationDefaults(this.id));
        if (!this.layers) {
            console.log('Putting default tileLayer', this.defaults.tileLayer);
            new L.TileLayer(this.defaults.tileLayer).addTo(this.map);
        }
        if (!this.leafletService.isDefined(this.lfCenter)) {
            this.map.setView(new L.LatLng(this.defaults.center.lat, this.defaults.center.lng), this.defaults.center.zoom);
        }
        this.mapReady.emit(true);
    };
    /**
     * Get LeafletJS Map
     *
     * @return LeafletJS Map
     */
    LeafletComponent.prototype.getMap = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.map) {
                resolve(_this.map);
            }
            else {
                _this.mapReady.subscribe(function () {
                    resolve(_this.map);
                });
            }
        });
    };
    __decorate([
        core_1.ViewChild('map'),
        __metadata("design:type", core_1.ElementRef)
    ], LeafletComponent.prototype, "mapEl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LeafletComponent.prototype, "defaults", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LeafletComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LeafletComponent.prototype, "lfCenter", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LeafletComponent.prototype, "layers", void 0);
    LeafletComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ui-leaflet',
            providers: [defaults_service_1.DefaultsService, leaflet_service_1.LeafletService],
            styles: ['.angular-leaflet-map { width: 100%; height: 400px; margin-top: 10px; }'],
            template: "<div #map class=\"angular-leaflet-map\"></div>"
        }),
        __metadata("design:paramtypes", [defaults_service_1.DefaultsService, leaflet_service_1.LeafletService])
    ], LeafletComponent);
    return LeafletComponent;
}());
exports.LeafletComponent = LeafletComponent;
//# sourceMappingURL=leaflet.component.js.map