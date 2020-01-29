(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!../src/components/leaflet.component.html":
/*!***************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!../src/components/leaflet.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #map class=\"angular-leaflet-map\"></div>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!***************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<h3>Hello {{name}}</h3>\n<ng-leaflet [lfCenter]=\"center\">\n</ng-leaflet>\n<div style=\"margin: 20px 0;\">\n  <button type='button' class=\"btn btn-secondary\" (click) = \"changeCenter('bogota')\">Bogotá</button>\n  <button type='button' class=\"btn btn-info\" (click) = \"changeCenter('medellin')\">Medellín</button>\n</div>\n<h5>Center:</h5>\n<pre>{{center | json}}</pre>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "../src/components/leaflet.component.scss":
/*!************************************************!*\
  !*** ../src/components/leaflet.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".angular-leaflet-map {\n  width: 100%;\n  height: 400px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VsZXNkb2FyL2Rldi93b3Jrc3BhY2VFbGVzZG9hci9uZy1sZWFmbGV0L3NyYy9jb21wb25lbnRzL2xlYWZsZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy9sZWFmbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2xlYWZsZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5ndWxhci1sZWFmbGV0LW1hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSIsIi5hbmd1bGFyLWxlYWZsZXQtbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "../src/components/leaflet.component.ts":
/*!**********************************************!*\
  !*** ../src/components/leaflet.component.ts ***!
  \**********************************************/
/*! exports provided: LeafletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletComponent", function() { return LeafletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "../node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_defaults_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/defaults.service */ "../src/services/defaults.service.ts");
/* harmony import */ var _services_leaflet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/leaflet.service */ "../src/services/leaflet.service.ts");





/**
 * Main ng-leaflet component.
 *
 * <pre>
 *   <ng-leaflet></ng-leaflet>
 * </pre>
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
var LeafletComponent = /** @class */ (function () {
    function LeafletComponent(defaultsService, leafletService) {
        this.defaultsService = defaultsService;
        this.leafletService = leafletService;
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
    }
    LeafletComponent.prototype.ngAfterViewInit = function () {
        console.log('ID', this.id);
        this.defaults = this.defaultsService.setDefaults(this.defaults, this.id);
        this.map = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"](this.mapEl.nativeElement, this.defaultsService.getMapCreationDefaults(this.id));
        if (!this.layers) {
            console.log('Putting default tileLayer', this.defaults.tileLayer);
            new leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"](this.defaults.tileLayer).addTo(this.map);
        }
        if (!this.leafletService.isDefined(this.lfCenter)) {
            this.map.setView(new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](this.defaults.center.lat, this.defaults.center.lng), this.defaults.center.zoom);
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
    LeafletComponent.ctorParameters = function () { return [
        { type: _services_defaults_service__WEBPACK_IMPORTED_MODULE_3__["DefaultsService"] },
        { type: _services_leaflet_service__WEBPACK_IMPORTED_MODULE_4__["LeafletService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LeafletComponent.prototype, "mapEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LeafletComponent.prototype, "defaults", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LeafletComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LeafletComponent.prototype, "lfCenter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LeafletComponent.prototype, "layers", void 0);
    LeafletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-leaflet',
            providers: [_services_defaults_service__WEBPACK_IMPORTED_MODULE_3__["DefaultsService"], _services_leaflet_service__WEBPACK_IMPORTED_MODULE_4__["LeafletService"]],
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leaflet.component.html */ "../node_modules/raw-loader/dist/cjs.js!../src/components/leaflet.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leaflet.component.scss */ "../src/components/leaflet.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_defaults_service__WEBPACK_IMPORTED_MODULE_3__["DefaultsService"], _services_leaflet_service__WEBPACK_IMPORTED_MODULE_4__["LeafletService"]])
    ], LeafletComponent);
    return LeafletComponent;
}());



/***/ }),

/***/ "../src/directives/center.directive.ts":
/*!*********************************************!*\
  !*** ../src/directives/center.directive.ts ***!
  \*********************************************/
/*! exports provided: CenterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterDirective", function() { return CenterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_leaflet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/leaflet.component */ "../src/components/leaflet.component.ts");
/* harmony import */ var _services_leaflet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/leaflet.service */ "../src/services/leaflet.service.ts");
/* harmony import */ var _models_center_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/center.model */ "../src/models/center.model.ts");





/**
 * Center directive for ng-leaflet.
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
var CenterDirective = /** @class */ (function () {
    function CenterDirective(el, uiLeaflet, leafletService) {
        this.el = el;
        this.uiLeaflet = uiLeaflet;
        this.leafletService = leafletService;
    }
    CenterDirective.prototype.changeCenter = function () {
        var leafletService = this.leafletService;
        var center = this.lfCenter;
        if (this.lfCenter.isValid()) {
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
            console.warn('[ng-leaflet] - Center is not valid');
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
    CenterDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _components_leaflet_component__WEBPACK_IMPORTED_MODULE_2__["LeafletComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
        { type: _services_leaflet_service__WEBPACK_IMPORTED_MODULE_3__["LeafletService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_center_model__WEBPACK_IMPORTED_MODULE_4__["LeafletCenter"])
    ], CenterDirective.prototype, "lfCenter", void 0);
    CenterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[lfCenter]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _components_leaflet_component__WEBPACK_IMPORTED_MODULE_2__["LeafletComponent"],
            _services_leaflet_service__WEBPACK_IMPORTED_MODULE_3__["LeafletService"]])
    ], CenterDirective);
    return CenterDirective;
}());



/***/ }),

/***/ "../src/index.ts":
/*!***********************!*\
  !*** ../src/index.ts ***!
  \***********************/
/*! exports provided: NgLeafletModule, LeafletComponent, CenterDirective, SamplePipe, DefaultsService, LeafletCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgLeafletModule", function() { return NgLeafletModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_leaflet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/leaflet.component */ "../src/components/leaflet.component.ts");
/* harmony import */ var _directives_center_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/center.directive */ "../src/directives/center.directive.ts");
/* harmony import */ var _pipes_sample_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/sample.pipe */ "../src/pipes/sample.pipe.ts");
/* harmony import */ var _services_defaults_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/defaults.service */ "../src/services/defaults.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletComponent", function() { return _components_leaflet_component__WEBPACK_IMPORTED_MODULE_3__["LeafletComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CenterDirective", function() { return _directives_center_directive__WEBPACK_IMPORTED_MODULE_4__["CenterDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SamplePipe", function() { return _pipes_sample_pipe__WEBPACK_IMPORTED_MODULE_5__["SamplePipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultsService", function() { return _services_defaults_service__WEBPACK_IMPORTED_MODULE_6__["DefaultsService"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models */ "../src/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletCenter", function() { return _models__WEBPACK_IMPORTED_MODULE_7__["LeafletCenter"]; });













var NgLeafletModule = /** @class */ (function () {
    function NgLeafletModule() {
    }
    NgLeafletModule_1 = NgLeafletModule;
    NgLeafletModule.forRoot = function () {
        return {
            ngModule: NgLeafletModule_1,
            providers: [_services_defaults_service__WEBPACK_IMPORTED_MODULE_6__["DefaultsService"]]
        };
    };
    var NgLeafletModule_1;
    NgLeafletModule = NgLeafletModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _components_leaflet_component__WEBPACK_IMPORTED_MODULE_3__["LeafletComponent"],
                _directives_center_directive__WEBPACK_IMPORTED_MODULE_4__["CenterDirective"],
                _pipes_sample_pipe__WEBPACK_IMPORTED_MODULE_5__["SamplePipe"]
            ],
            exports: [
                _components_leaflet_component__WEBPACK_IMPORTED_MODULE_3__["LeafletComponent"],
                _directives_center_directive__WEBPACK_IMPORTED_MODULE_4__["CenterDirective"],
                _pipes_sample_pipe__WEBPACK_IMPORTED_MODULE_5__["SamplePipe"]
            ]
        })
    ], NgLeafletModule);
    return NgLeafletModule;
}());



/***/ }),

/***/ "../src/models/center.model.ts":
/*!*************************************!*\
  !*** ../src/models/center.model.ts ***!
  \*************************************/
/*! exports provided: LeafletCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletCenter", function() { return LeafletCenter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "../node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


var LeafletCenter = /** @class */ (function () {
    function LeafletCenter(lat, lng, zoom, autoDiscover) {
        if (zoom === void 0) { zoom = 4; }
        if (autoDiscover === void 0) { autoDiscover = false; }
        this.lat = lat;
        this.lng = lng;
        this.zoom = zoom;
        this.autoDiscover = autoDiscover;
    }
    LeafletCenter.prototype.isValid = function () {
        return !(Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.lat) || Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.lng) || Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(this.zoom));
    };
    return LeafletCenter;
}());



/***/ }),

/***/ "../src/models/index.ts":
/*!******************************!*\
  !*** ../src/models/index.ts ***!
  \******************************/
/*! exports provided: LeafletCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _center_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./center.model */ "../src/models/center.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletCenter", function() { return _center_model__WEBPACK_IMPORTED_MODULE_1__["LeafletCenter"]; });





/***/ }),

/***/ "../src/pipes/sample.pipe.ts":
/*!***********************************!*\
  !*** ../src/pipes/sample.pipe.ts ***!
  \***********************************/
/*! exports provided: SamplePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePipe", function() { return SamplePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


/**
 * Transforms any input value
 */
var SamplePipe = /** @class */ (function () {
    function SamplePipe() {
    }
    SamplePipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    SamplePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'samplePipe'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SamplePipe);
    return SamplePipe;
}());



/***/ }),

/***/ "../src/services/defaults.service.ts":
/*!*******************************************!*\
  !*** ../src/services/defaults.service.ts ***!
  \*******************************************/
/*! exports provided: DefaultsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultsService", function() { return DefaultsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _leaflet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet.service */ "../src/services/leaflet.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "../node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);




/**
 * DefaultsService Class.
 * This assign or get default options for ng-leaflet map.
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
            crs: leaflet__WEBPACK_IMPORTED_MODULE_3__["CRS"].EPSG3857,
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
     * Get defaults for a ng-leaflet map.
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
     * Set defaults options for a ng-leaflet map.
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
    DefaultsService.ctorParameters = function () { return [
        { type: _leaflet_service__WEBPACK_IMPORTED_MODULE_2__["LeafletService"] }
    ]; };
    DefaultsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_leaflet_service__WEBPACK_IMPORTED_MODULE_2__["LeafletService"]])
    ], DefaultsService);
    return DefaultsService;
}());



/***/ }),

/***/ "../src/services/leaflet.service.ts":
/*!******************************************!*\
  !*** ../src/services/leaflet.service.ts ***!
  \******************************************/
/*! exports provided: LeafletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletService", function() { return LeafletService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var _errorHeader = '[ng-leaflet] ';
/**
 * Helpers for ng-leaflet map.
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
    LeafletService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LeafletService);
    return LeafletService;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_ui_ng_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ui/ng-leaflet */ "../src/index.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-leaflet';
        this.name = 'UI Leaflet 2';
        this.center = new _angular_ui_ng_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletCenter"](4.624335, -74.063644, 12);
    }
    AppComponent.prototype.changeCenter = function (city) {
        switch (city) {
            case 'bogota':
                this.center = new _angular_ui_ng_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletCenter"](4.624335, -74.063644, 12);
                break;
            case 'medellin':
                this.center = new _angular_ui_ng_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletCenter"](6.27053, -75.57211999999998, 11);
                break;
        }
        console.log('Changing center to ' + city);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_ui_ng_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-ui/ng-leaflet */ "../src/index.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_ui_ng_leaflet__WEBPACK_IMPORTED_MODULE_5__["NgLeafletModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/elesdoar/dev/workspaceElesdoar/ng-leaflet/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map