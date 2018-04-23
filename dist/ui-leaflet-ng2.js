"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var leaflet_component_1 = require("./components/leaflet.component");
var center_directive_1 = require("./directives/center.directive");
var sample_pipe_1 = require("./pipes/sample.pipe");
var defaults_service_1 = require("./services/defaults.service");
__export(require("./components/leaflet.component"));
__export(require("./directives/center.directive"));
__export(require("./pipes/sample.pipe"));
__export(require("./services/defaults.service"));
var UiLeafletModule = /** @class */ (function () {
    function UiLeafletModule() {
    }
    UiLeafletModule_1 = UiLeafletModule;
    UiLeafletModule.forRoot = function () {
        return {
            ngModule: UiLeafletModule_1,
            providers: [defaults_service_1.DefaultsService]
        };
    };
    UiLeafletModule = UiLeafletModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                leaflet_component_1.LeafletComponent,
                center_directive_1.CenterDirective,
                sample_pipe_1.SamplePipe
            ],
            exports: [
                leaflet_component_1.LeafletComponent,
                center_directive_1.CenterDirective,
                sample_pipe_1.SamplePipe
            ]
        })
    ], UiLeafletModule);
    return UiLeafletModule;
    var UiLeafletModule_1;
}());
exports.UiLeafletModule = UiLeafletModule;
//# sourceMappingURL=ui-leaflet-ng2.js.map