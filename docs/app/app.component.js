"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'UI Leaflet 2';
        this.center = {
            lat: 4.624335,
            lng: -74.063644,
            zoom: 12
        };
    }
    AppComponent.prototype.changeCenter = function (city) {
        switch (city) {
            case 'bogota':
                this.center = {
                    lat: 4.624335,
                    lng: -74.063644,
                    zoom: 12
                };
                break;
            case 'medellin':
                this.center = {
                    lat: 6.27053,
                    lng: -75.57211999999998,
                    zoom: 11
                };
                break;
        }
        console.log('Changing center to ' + city);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'leaflet-app',
        template: "\n    <h3>Hello {{name}}</h3>\n    <h5>Center:</h5>\n    <pre>{{center | json}}</pre>\n    <button type='button' class=\"btn btn-secondary\" (click) = \"changeCenter('bogota')\">Bogot\u00E1</button>\n    <button type='button' class=\"btn btn-info\" (click) = \"changeCenter('medellin')\">Medell\u00EDn</button>\n    <ui-leaflet [lfCenter]=\"center\">\n    </ui-leaflet>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map