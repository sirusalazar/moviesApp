(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\">\r\n  <toaster-container [toasterconfig]=\"toastConfig\"></toaster-container>\r\n  <mas-toolbar></mas-toolbar>\r\n  <mas-loader></mas-loader>\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/movie-details/movie-details.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/movie-details/movie-details.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"movie\">\r\n  <mat-card fxFlex=\"1 1 50%\" fxFlex.sm=\"1 1 75%\" fxFlex.xs=\"1 1 100%\">\r\n    <mat-card-header>\r\n      <mat-card-title>{{ movie.title }}</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content\r\n      fxLayout=\"row\"\r\n      fxLayoutAlign=\"space-around\"\r\n      class=\"movie-content\"\r\n    >\r\n      <div fxFlex=\"1 1 200px\" class=\"movie-image\">\r\n        <img\r\n          mat-card-image\r\n          src=\"{{ movie.image }}\"\r\n          onerror=\"this.src='../../../../assets/dummy-image.jpg'\"\r\n        />\r\n      </div>\r\n      <div class=\"movie-info\">\r\n        <p><strong>Description: </strong>{{ movie.description }}</p>\r\n        <p>\r\n          <strong>Release Date: </strong\r\n          ><small>{{ movie.release | date }}</small>\r\n        </p>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/movie-item/movie-item.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/movie-item/movie-item.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list-item class=\"movie-item\">\r\n  <mat-icon\r\n    *ngIf=\"!movie.favorite\"\r\n    matTooltip=\"Mark as favorite\"\r\n    aria-label=\"\"\r\n    (click)=\"toggleFavorite($event)\"\r\n    >favorite_border</mat-icon\r\n  >\r\n  <mat-icon\r\n    *ngIf=\"movie.favorite\"\r\n    matTooltip=\"Unmark as favorite\"\r\n    aria-label=\"\"\r\n    (click)=\"toggleFavorite($event)\"\r\n    >favorite</mat-icon\r\n  >\r\n  <mat-icon\r\n    (click)=\"delete($event)\"\r\n    matTooltip=\"Delete this movie\"\r\n    aria-label=\"\"\r\n    >delete</mat-icon\r\n  >\r\n  <h3 mat-line>{{ movie.title }}</h3>\r\n  <small mat-line>{{ movie.release | date }}</small>\r\n</mat-list-item>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/movies-list/movies-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/movies-list/movies-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list-container\">\r\n  <mat-sidenav #sidenav disableClose class=\"list-items\">\r\n    <mat-list>\r\n      <mat-list-item>\r\n        <mas-filter (applyFilter)=\"applyFilter($event)\"></mas-filter>\r\n      </mat-list-item>\r\n      <mas-movie-item\r\n        *ngFor=\"let movie of movies | filter: filterParam:'title'\"\r\n        [movie]=\"movie\"\r\n        routerLink=\"movie/{{ movie.id }}\"\r\n        routerLinkActive=\"is-active\"\r\n        (click)=\"close()\"\r\n      ></mas-movie-item>\r\n      <mat-list-item *ngIf=\"!movies.length\" fxLayout=\"column\" class=\"no-items\">\r\n        <p matLine>No movies found :(</p>\r\n        <button matLine routerLink=\"/new\" mat-raised-button color=\"primary\">\r\n          Add Movie\r\n        </button>\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </mat-sidenav>\r\n  <div *ngIf=\"!sidenav.opened\">\r\n    <button\r\n      mat-icon-button\r\n      (click)=\"open()\"\r\n      matTooltip=\"show movies list\"\r\n      aria-label=\"\"\r\n      class=\"btn-open\"\r\n    >\r\n      <mat-icon>format_indent_increase</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/favorites/favorites.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/favorites/favorites.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mas-movie-details\n  *ngFor=\"let movie of moviesList\"\n  [inputedMovie]=\"movie\"\n></mas-movie-details>\n<h5 *ngIf=\"!moviesList.length\">No favorites Movies found :(</h5>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-container\" fxLayout=\"row\">\r\n  <mas-movies-list [movies]=\"moviesList\"></mas-movies-list>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/movie-form/movie-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/movie-form/movie-form.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\r\n  [formGroup]=\"movieForm\"\r\n  fxLayout=\"row\"\r\n  (ngSubmit)=\"onSubmit($event)\"\r\n  fxLayoutAlign=\"center center\"\r\n>\r\n  <mat-card fxFlex=\"1 1 50%\" fxFlex.sm=\"1 1 75%\" fxFlex.xs=\"1 1 100%\">\r\n    <mat-card-header>\r\n      <mat-card-title>{{ formTitle }} Movie</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content fxLayout=\"column\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Title\" formControlName=\"title\" required />\r\n        <mat-error *ngIf=\"movieForm.get('title').hasError('required')\">\r\n          This field is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input\r\n          matInput\r\n          [matDatepicker]=\"picker\"\r\n          placeholder=\"Release date\"\r\n          formControlName=\"releaseDate\"\r\n          required\r\n        />\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n        <mat-error *ngIf=\"movieForm.get('releaseDate').hasError('required')\">\r\n          This field is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <textarea\r\n          matInput\r\n          placeholder=\"Description\"\r\n          formControlName=\"description\"\r\n        ></textarea>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <ngx-mat-file-input\r\n          #imageInput\r\n          formControlName=\"image\"\r\n          placeholder=\"Movie Image\"\r\n          valuePlaceholder=\"No file selected\"\r\n          (change)=\"handleFileSelect($event)\"\r\n          [accept]=\"['.jpg', '.png', '.jpeg']\"\r\n          required\r\n        >\r\n        </ngx-mat-file-input>\r\n        <button\r\n          mat-icon-button\r\n          matSuffix\r\n          matTooltip=\"remove file\"\r\n          [matTooltipPosition]=\"'above'\"\r\n          aria-label=\"\"\r\n          *ngIf=\"!imageInput.empty\"\r\n          (click)=\"onClearImage($event)\"\r\n        >\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n        <mat-icon matSuffix>folder</mat-icon>\r\n        <mat-error *ngIf=\"movieForm.get('image').hasError('required')\">\r\n          Please select a file\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button color=\"primary\" [disabled]=\"!movieForm.valid\">\r\n        Save\r\n      </button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/not-found/not-found.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/not-found/not-found.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"not_found-container\">\n  <img src=\"../../../assets/404_page_not_found.svg\" />\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/top-movies/top-movies.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/top-movies/top-movies.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mas-movie-details\n  *ngFor=\"let movie of moviesList\"\n  [inputedMovie]=\"movie\"\n></mas-movie-details>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/filter/filter.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/filter/filter.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-container\">\n  <mat-form-field>\n    <input\n      matInput\n      placeholder=\"Filter by Title\"\n      [value]=\"filterValue\"\n      [formControl]=\"filterValueControl\"\n    />\n    <mat-icon matSuffix>search</mat-icon>\n  </mat-form-field>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class.hidden]=\"!show\">\n  <div class=\"loader-overlay\">\n    <div *ngIf=\"show\" class=\"loader\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toolbar/toolbar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toolbar/toolbar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar\n  color=\"primary\"\n  fxLayout.xs=\"column\"\n  class=\"toolbar\"\n  fxLayoutGap=\"10px\"\n>\n  <div fxLayout=\"row\" fxFlex.xs=\"1 1 100%\">\n    <button mat-icon-button fxHide.gt-xs (click)=\"onToggleMenu()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <a routerLink=\"/home\">MoviesApp</a>\n  </div>\n\n  <div fxShow=\"true\" [fxShow.xs]=\"isMobileVisible\" class=\"menu-list\">\n    <a\n      *ngFor=\"let item of menuItems\"\n      routerLink=\"{{ item.link }}\"\n      routerLinkActive=\"is-active\"\n      mat-button\n      >{{ item.text }}</a\n    >\n  </div>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _moviesApp_core_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @moviesApp-core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _moviesApp_core_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @moviesApp-core/movie-form/movie-form.component */ "./src/app/core/movie-form/movie-form.component.ts");
/* harmony import */ var _moviesApp_core_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @moviesApp-core/components/movie-details/movie-details.component */ "./src/app/core/components/movie-details/movie-details.component.ts");
/* harmony import */ var _moviesApp_core_top_movies_top_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @moviesApp-core/top-movies/top-movies.component */ "./src/app/core/top-movies/top-movies.component.ts");
/* harmony import */ var _moviesApp_shared_services_canDeactiveGuard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @moviesApp-shared/services/canDeactiveGuard.service */ "./src/app/shared/services/canDeactiveGuard.service.ts");
/* harmony import */ var _moviesApp_core_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @moviesApp-core/favorites/favorites.component */ "./src/app/core/favorites/favorites.component.ts");
/* harmony import */ var _moviesApp_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @moviesApp-core/not-found/not-found.component */ "./src/app/core/not-found/not-found.component.ts");










const routes = [
    {
        path: "",
        component: _moviesApp_core_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: { title: "Home" },
        children: [{ path: "movie/:id", component: _moviesApp_core_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailsComponent"] }],
        canDeactivate: [_moviesApp_shared_services_canDeactiveGuard_service__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"]]
    },
    {
        path: "home",
        component: _moviesApp_core_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: { title: "Home" },
        children: [
            {
                path: "movie/:id",
                component: _moviesApp_core_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailsComponent"]
            }
        ],
        canDeactivate: [_moviesApp_shared_services_canDeactiveGuard_service__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"]]
    },
    {
        path: "new",
        component: _moviesApp_core_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_4__["MovieFormComponent"],
        data: { title: "New" },
        canDeactivate: [_moviesApp_shared_services_canDeactiveGuard_service__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"]]
    },
    {
        path: "top",
        component: _moviesApp_core_top_movies_top_movies_component__WEBPACK_IMPORTED_MODULE_6__["TopMoviesComponent"],
        data: { title: "Top 5" },
        canDeactivate: [_moviesApp_shared_services_canDeactiveGuard_service__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"]]
    },
    {
        path: "favorites",
        component: _moviesApp_core_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_8__["FavoritesComponent"],
        data: { title: "Favorites" }
    },
    {
        path: "404",
        component: _moviesApp_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
    },
    {
        path: "**",
        redirectTo: "404"
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_moviesApp_shared_services_canDeactiveGuard_service__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"]]
    })
], AppRoutingModule);

const routedComponents = [
    _moviesApp_core_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    _moviesApp_core_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_4__["MovieFormComponent"],
    _moviesApp_core_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailsComponent"],
    _moviesApp_core_top_movies_top_movies_component__WEBPACK_IMPORTED_MODULE_6__["TopMoviesComponent"],
    _moviesApp_core_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_8__["FavoritesComponent"]
];


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-container,\nmat-sidenav-container,\nmat-sidenav-content,\nmat-sidenav {\n  height: 100%;\n}\n\nmat-sidenav {\n  width: 250px;\n}\n\nmain {\n  height: calc(100% - 64px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqdWFuLnNhbGF6YXJcXERvY3VtZW50c1xcU3R1ZHlcXHBsYXR6aVxcQW5ndWxhclxcTW92aWVzQXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIsXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lcixcclxubWF0LXNpZGVuYXYtY29udGVudCxcclxubWF0LXNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LXNpZGVuYXYge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcclxufVxyXG4iLCIubWFpbi1jb250YWluZXIsXG5tYXQtc2lkZW5hdi1jb250YWluZXIsXG5tYXQtc2lkZW5hdi1jb250ZW50LFxubWF0LXNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG5tYWluIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");



let AppComponent = class AppComponent {
    constructor() {
        this.toastConfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterConfig"]({
            positionClass: "toast-top-right",
            animation: "fade"
        });
        this.title = "MoviesApp";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _moviesApp_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @moviesApp-shared/app-shared.module */ "./src/app/shared/app-shared.module.ts");
/* harmony import */ var _moviesApp_core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @moviesApp-core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptors/loader.interceptor */ "./src/app/interceptors/loader.interceptor.ts");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "./src/app/interceptors/error.interceptor.ts");
/* harmony import */ var _moviesApp_shared_services_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @moviesApp-shared/services/config.service */ "./src/app/shared/services/config.service.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routedComponents"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _moviesApp_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_9__["AppSharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _moviesApp_core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterModule"]
        ],
        providers: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_11__["LoaderInterceptorService"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_12__["HttpErrorInterceptorService"],
                multi: true
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: (configService) => () => {
                    return configService.retrieveMainMenu().then((menu) => {
                        configService.setMenu(menu);
                    });
                },
                deps: [_moviesApp_shared_services_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"]],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/components/movie-details/movie-details.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/movie-details/movie-details.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".movie {\n  padding: 15px;\n}\n.movie-image {\n  padding: 10px;\n  margin-right: 10px;\n}\n.movie-image img {\n  width: 100%;\n  margin: 0;\n}\n.movie-info p + p {\n  margin-bottom: 20px;\n}\n.movie-info small {\n  font-style: italic;\n}\n@media (max-width: 599px) {\n  .movie {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL21vdmllLWRldGFpbHMvQzpcXFVzZXJzXFxqdWFuLnNhbGF6YXJcXERvY3VtZW50c1xcU3R1ZHlcXHBsYXR6aVxcQW5ndWxhclxcTW92aWVzQXBwL3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxtb3ZpZS1kZXRhaWxzXFxtb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUNHTjtBRENJO0VBQ0UsbUJBQUE7QUNDTjtBRENJO0VBQ0Usa0JBQUE7QUNDTjtBREdBO0VBQ0U7SUFDRSxnQkFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gICYtaW1hZ2Uge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtaW5mbyB7XHJcbiAgICBwICsgcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBzbWFsbCB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgLm1vdmllIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5tb3ZpZSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ubW92aWUtaW1hZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubW92aWUtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cbi5tb3ZpZS1pbmZvIHAgKyBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tb3ZpZS1pbmZvIHNtYWxsIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLm1vdmllIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/core/components/movie-details/movie-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/movie-details/movie-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @moviesApp-core/services/movie.service */ "./src/app/core/services/movie.service.ts");




let MovieDetailsComponent = class MovieDetailsComponent {
    constructor(movieService, route, router) {
        this.movieService = movieService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        if (!this.inputedMovie) {
            this.route.paramMap.subscribe(params => {
                const id = params.get("id");
                this.movie = this.movieService.getMovie(id);
                if (!this.movie) {
                    this.router.navigate(["/home"]);
                }
            });
        }
        else {
            this.movie = this.inputedMovie;
        }
    }
};
MovieDetailsComponent.ctorParameters = () => [
    { type: _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieDetailsComponent.prototype, "inputedMovie", void 0);
MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mas-movie-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/movie-details/movie-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-details.component.scss */ "./src/app/core/components/movie-details/movie-details.component.scss")).default]
    })
], MovieDetailsComponent);



/***/ }),

/***/ "./src/app/core/components/movie-item/movie-item.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/movie-item/movie-item.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".movie-item {\n  margin: 4px 0;\n}\n.movie-item:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.movie-item h3 {\n  font-weight: 500;\n}\n.movie-item small {\n  font-style: italic;\n}\n.movie-item mat-icon {\n  z-index: 1;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL21vdmllLWl0ZW0vQzpcXFVzZXJzXFxqdWFuLnNhbGF6YXJcXERvY3VtZW50c1xcU3R1ZHlcXHBsYXR6aVxcQW5ndWxhclxcTW92aWVzQXBwL3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxtb3ZpZS1pdGVtXFxtb3ZpZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbW92aWUtaXRlbS9tb3ZpZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0VBQ0EscUNBQUE7QUNFSjtBREFFO0VBQ0UsZ0JBQUE7QUNFSjtBREFFO0VBQ0Usa0JBQUE7QUNFSjtBREFFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tb3ZpZS1pdGVtL21vdmllLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtaXRlbSB7XHJcbiAgbWFyZ2luOiA0cHggMDtcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIHNtYWxsIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgbWF0LWljb24ge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIiwiLm1vdmllLWl0ZW0ge1xuICBtYXJnaW46IDRweCAwO1xufVxuLm1vdmllLWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG59XG4ubW92aWUtaXRlbSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubW92aWUtaXRlbSBzbWFsbCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5tb3ZpZS1pdGVtIG1hdC1pY29uIHtcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/core/components/movie-item/movie-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/components/movie-item/movie-item.component.ts ***!
  \********************************************************************/
/*! exports provided: MovieItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieItemComponent", function() { return MovieItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moviesApp-core/services/movie.service */ "./src/app/core/services/movie.service.ts");



let MovieItemComponent = class MovieItemComponent {
    constructor(movieService) {
        this.movieService = movieService;
    }
    ngOnInit() { }
    delete(evt) {
        evt.preventDefault();
        this.movieService.deleteMovie(this.movie.id);
    }
    toggleFavorite(evt) {
        evt.preventDefault();
        this.movieService.toggleFavorite(this.movie.id);
    }
};
MovieItemComponent.ctorParameters = () => [
    { type: _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieItemComponent.prototype, "movie", void 0);
MovieItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mas-movie-item",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/movie-item/movie-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-item.component.scss */ "./src/app/core/components/movie-item/movie-item.component.scss")).default]
    })
], MovieItemComponent);



/***/ }),

/***/ "./src/app/core/components/movies-list/movies-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/components/movies-list/movies-list.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-container {\n  height: 100%;\n  position: relative;\n}\n.list-container .btn-open {\n  position: absolute;\n  top: 0;\n}\n.list-container .no-items {\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL21vdmllcy1saXN0L0M6XFxVc2Vyc1xcanVhbi5zYWxhemFyXFxEb2N1bWVudHNcXFN0dWR5XFxwbGF0emlcXEFuZ3VsYXJcXE1vdmllc0FwcC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcbW92aWVzLWxpc3RcXG1vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbW92aWVzLWxpc3QvbW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0FDRUo7QURBRTtFQUNFLHNCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbW92aWVzLWxpc3QvbW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmJ0bi1vcGVuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLm5vLWl0ZW1zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcbiIsIi5saXN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxpc3QtY29udGFpbmVyIC5idG4tb3BlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuLmxpc3QtY29udGFpbmVyIC5uby1pdGVtcyB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */");

/***/ }),

/***/ "./src/app/core/components/movies-list/movies-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/movies-list/movies-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");



let MoviesListComponent = class MoviesListComponent {
    constructor(mediaObserver) {
        this.activeMediaQuery = "";
        this.filterParam = "";
        this.watcher = mediaObserver.media$.subscribe((change) => {
            this.activeMediaQuery = change
                ? `'${change.mqAlias}' = (${change.mediaQuery})`
                : "";
            change.mqAlias === "xs" ? this.sidenav.close() : this.sidenav.open();
            this.currentMedia = change;
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
    close() {
        if (this.currentMedia.mqAlias === "xs") {
            this.sidenav.close();
        }
    }
    open() {
        this.sidenav.open();
    }
    applyFilter(filterValue) {
        this.filterParam = filterValue;
    }
};
MoviesListComponent.ctorParameters = () => [
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sidenav", { static: true })
], MoviesListComponent.prototype, "sidenav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MoviesListComponent.prototype, "movies", void 0);
MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mas-movies-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movies-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/movies-list/movies-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies-list.component.scss */ "./src/app/core/components/movies-list/movies-list.component.scss")).default]
    })
], MoviesListComponent);



/***/ }),

/***/ "./src/app/core/constants/core.constants.ts":
/*!**************************************************!*\
  !*** ./src/app/core/constants/core.constants.ts ***!
  \**************************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppConstants {
}
AppConstants.top5Url = "http://www.mocky.io/v2/5dc3c053300000540034757b";
AppConstants.localStoreKey = "moviesAppList";
AppConstants.mainMenu = [
    {
        text: "Home",
        link: "/home"
    },
    {
        text: "New",
        link: "/new"
    },
    {
        text: "Top 5",
        link: "/top"
    },
    {
        text: "Favorites",
        link: "/favorites"
    }
];


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _moviesApp_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @moviesApp-shared/app-shared.module */ "./src/app/shared/app-shared.module.ts");
/* harmony import */ var _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @moviesApp-core/services/movie.service */ "./src/app/core/services/movie.service.ts");
/* harmony import */ var _moviesApp_core_components_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @moviesApp-core/components/movie-item/movie-item.component */ "./src/app/core/components/movie-item/movie-item.component.ts");
/* harmony import */ var _moviesApp_core_components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @moviesApp-core/components/movies-list/movies-list.component */ "./src/app/core/components/movies-list/movies-list.component.ts");
/* harmony import */ var _moviesApp_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @moviesApp-core/not-found/not-found.component */ "./src/app/core/not-found/not-found.component.ts");









let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_moviesApp_core_components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_7__["MoviesListComponent"], _moviesApp_core_components_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_6__["MovieItemComponent"], _moviesApp_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]],
        exports: [_moviesApp_core_components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_7__["MoviesListComponent"], _moviesApp_core_components_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_6__["MovieItemComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _moviesApp_shared_app_shared_module__WEBPACK_IMPORTED_MODULE_4__["AppSharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        providers: [_moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_5__["MovieService"]]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/favorites/favorites.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/favorites/favorites.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/favorites/favorites.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/favorites/favorites.component.ts ***!
  \*******************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moviesApp-core/services/movie.service */ "./src/app/core/services/movie.service.ts");



let FavoritesComponent = class FavoritesComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.moviesList = this.movieService.getFavorites();
    }
    ngOnInit() { }
};
FavoritesComponent.ctorParameters = () => [
    { type: _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mas-favorites",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/favorites/favorites.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.scss */ "./src/app/core/favorites/favorites.component.scss")).default]
    })
], FavoritesComponent);



/***/ }),

/***/ "./src/app/core/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/home/home.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-container {\r\n  height: 100%;\r\n}\r\nmas-movie-details {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbm1hcy1tb3ZpZS1kZXRhaWxzIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @moviesApp-core/services/movie.service */ "./src/app/core/services/movie.service.ts");




let HomeComponent = class HomeComponent {
    constructor(media, movieSevice) {
        this.movieSevice = movieSevice;
        this.mobileQuery = media.matchMedia("(max-width: 600px)");
    }
    ngOnInit() {
        this.moviesList = this.movieSevice.getAllMovies();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] },
    { type: _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/core/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/core/movie-form/movie-form.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/movie-form/movie-form.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbW92aWUtZm9ybS9tb3ZpZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/movie-form/movie-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/movie-form/movie-form.component.ts ***!
  \*********************************************************/
/*! exports provided: MovieFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFormComponent", function() { return MovieFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @moviesApp-core/services/movie.service */ "./src/app/core/services/movie.service.ts");
/* harmony import */ var _moviesApp_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @moviesApp-shared/services/notifications.service */ "./src/app/shared/services/notifications.service.ts");







let MovieFormComponent = class MovieFormComponent {
    constructor(movieService, _fb, route, notificationService) {
        this.movieService = movieService;
        this._fb = _fb;
        this.route = route;
        this.notificationService = notificationService;
        this.movieBase64Img = "";
        this.movieForm = this.generateForm();
    }
    ngOnInit() {
        this.routeData = this.route.data.subscribe(value => {
            this.formTitle = value.title;
        });
    }
    ngOnDestroy() {
        this.routeData.unsubscribe();
    }
    onSubmit(evt) {
        this.movieService.saveMovie(this.getFormData());
        this.movieForm.reset();
        this.imageInput.clear();
        this.movieBase64Img = "";
        this.movieForm = this.generateForm();
        this.notificationService.showSuccessMessage("Movie Saved", "movie saved successfully");
    }
    getFormData() {
        const movie = {
            id: angular2_uuid__WEBPACK_IMPORTED_MODULE_4__["UUID"].UUID(),
            title: this.movieForm.get("title").value,
            description: this.movieForm.get("description").value,
            release: this.movieForm.get("releaseDate").value,
            image: this.movieBase64Img,
            favorite: false
        };
        return movie;
    }
    handleFileSelect(evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsDataURL(file);
        }
    }
    _handleReaderLoaded(readerEvt) {
        this.movieBase64Img = readerEvt.target.result;
    }
    onClearImage(evt) {
        this.imageInput.clear(evt);
        this.movieBase64Img = "";
    }
    canDeactive() {
        return this.movieForm.dirty && this.movieForm.touched
            ? confirm("you have pending changes, would you like to continue?")
            : true;
    }
    generateForm() {
        return this._fb.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [""],
            releaseDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            favorite: [false]
        });
    }
};
MovieFormComponent.ctorParameters = () => [
    { type: _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_5__["MovieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _moviesApp_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("imageInput", { static: false })
], MovieFormComponent.prototype, "imageInput", void 0);
MovieFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mas-movie-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/movie-form/movie-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-form.component.scss */ "./src/app/core/movie-form/movie-form.component.scss")).default]
    })
], MovieFormComponent);



/***/ }),

/***/ "./src/app/core/not-found/not-found.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".not_found-container {\n  height: 100%;\n  padding-top: 15px;\n  box-sizing: border-box;\n}\n.not_found-container img {\n  display: block;\n  margin: 0 auto;\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ub3QtZm91bmQvQzpcXFVzZXJzXFxqdWFuLnNhbGF6YXJcXERvY3VtZW50c1xcU3R1ZHlcXHBsYXR6aVxcQW5ndWxhclxcTW92aWVzQXBwL3NyY1xcYXBwXFxjb3JlXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90X2ZvdW5kLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICB9XHJcbn1cclxuIiwiLm5vdF9mb3VuZC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm5vdF9mb3VuZC1jb250YWluZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDkwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mas-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/core/not-found/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/core/services/movie.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/movie.service.ts ***!
  \************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _moviesApp_shared_services_webStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @moviesApp-shared/services/webStorage.service */ "./src/app/shared/services/webStorage.service.ts");
/* harmony import */ var _moviesApp_core_constants_core_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @moviesApp-core/constants/core.constants */ "./src/app/core/constants/core.constants.ts");





let MovieService = class MovieService {
    constructor(httpClient, webStorageService) {
        this.httpClient = httpClient;
        this.webStorageService = webStorageService;
        this.movies =
            this.webStorageService.retrieve(_moviesApp_core_constants_core_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].localStoreKey) || [];
    }
    getMovie(movieId) {
        const filterdMovies = this.movies.filter(item => item.id === movieId);
        if (filterdMovies.length) {
            return filterdMovies[0];
        }
        return null;
    }
    saveMovie(movie) {
        if (!this.movies.length) {
            this.movies = [];
        }
        this.movies.push(movie);
        this.persistMovies();
    }
    getAllMovies() {
        return this.movies;
    }
    deleteMovie(id) {
        this.movies.splice(this.movies.findIndex(item => item.id === id), 1);
        this.persistMovies();
    }
    toggleFavorite(id) {
        const index = this.movies.map(m => m.id).indexOf(id);
        if (index > -1) {
            this.movies[index].favorite = !this.movies[index].favorite;
            this.persistMovies();
        }
    }
    getTopMovies() {
        return this.httpClient.get(_moviesApp_core_constants_core_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].top5Url);
    }
    getFavorites() {
        return this.movies.filter(item => item.favorite);
    }
    persistMovies() {
        this.webStorageService.store(_moviesApp_core_constants_core_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].localStoreKey, this.movies);
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _moviesApp_shared_services_webStorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"] }
];
MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MovieService);



/***/ }),

/***/ "./src/app/core/top-movies/top-movies.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/top-movies/top-movies.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdG9wLW1vdmllcy90b3AtbW92aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/top-movies/top-movies.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/top-movies/top-movies.component.ts ***!
  \*********************************************************/
/*! exports provided: TopMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMoviesComponent", function() { return TopMoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moviesApp-core/services/movie.service */ "./src/app/core/services/movie.service.ts");



let TopMoviesComponent = class TopMoviesComponent {
    constructor(moviesService) {
        this.moviesService = moviesService;
        this.moviesService.getTopMovies().subscribe((response) => {
            this.moviesList = response.movies;
        });
    }
    ngOnInit() { }
};
TopMoviesComponent.ctorParameters = () => [
    { type: _moviesApp_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
TopMoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mas-top-movies",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-movies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/top-movies/top-movies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-movies.component.scss */ "./src/app/core/top-movies/top-movies.component.scss")).default]
    })
], TopMoviesComponent);



/***/ }),

/***/ "./src/app/interceptors/error.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: HttpErrorInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptorService", function() { return HttpErrorInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _moviesApp_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @moviesApp-shared/services/notifications.service */ "./src/app/shared/services/notifications.service.ts");





let HttpErrorInterceptorService = class HttpErrorInterceptorService {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            this.notificationService.showErrorMessage(error.name, error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
HttpErrorInterceptorService.ctorParameters = () => [
    { type: _moviesApp_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
];
HttpErrorInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], HttpErrorInterceptorService);



/***/ }),

/***/ "./src/app/interceptors/loader.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/loader.interceptor.ts ***!
  \****************************************************/
/*! exports provided: LoaderInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptorService", function() { return LoaderInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _moviesApp_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @moviesApp-shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");





let LoaderInterceptorService = class LoaderInterceptorService {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        this.showLoader();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                this.onEnd();
            }
        }, (err) => {
            this.onEnd();
        }));
    }
    onEnd() {
        this.hideLoader();
    }
    showLoader() {
        this.loaderService.show();
    }
    hideLoader() {
        this.loaderService.hide();
    }
};
LoaderInterceptorService.ctorParameters = () => [
    { type: _moviesApp_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
];
LoaderInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], LoaderInterceptorService);



/***/ }),

/***/ "./src/app/shared/angular-material.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/angular-material.module.ts ***!
  \***************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-material-file-input */ "./node_modules/ngx-material-file-input/fesm2015/ngx-material-file-input.js");














let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_13__["MaterialFileInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"]
        ],
        exports: [
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_13__["MaterialFileInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"]
        ]
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/shared/app-shared.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/app-shared.module.ts ***!
  \*********************************************/
/*! exports provided: AppSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSharedModule", function() { return AppSharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _moviesApp_shared_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moviesApp-shared/angular-material.module */ "./src/app/shared/angular-material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _moviesApp_shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @moviesApp-shared/components/toolbar/toolbar.component */ "./src/app/shared/components/toolbar/toolbar.component.ts");
/* harmony import */ var _moviesApp_shared_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @moviesApp-shared/components/filter/filter.component */ "./src/app/shared/components/filter/filter.component.ts");
/* harmony import */ var _moviesApp_shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @moviesApp-shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _moviesApp_shared_services_webStorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @moviesApp-shared/services/webStorage.service */ "./src/app/shared/services/webStorage.service.ts");
/* harmony import */ var _moviesApp_shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @moviesApp-shared/pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var _moviesApp_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @moviesApp-shared/services/notifications.service */ "./src/app/shared/services/notifications.service.ts");













let AppSharedModule = class AppSharedModule {
};
AppSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _moviesApp_shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"],
            _moviesApp_shared_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"],
            _moviesApp_shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
            _moviesApp_shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipe"]
        ],
        imports: [
            _moviesApp_shared_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ],
        exports: [
            _moviesApp_shared_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _moviesApp_shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"],
            _moviesApp_shared_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"],
            _moviesApp_shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _moviesApp_shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ],
        providers: [_moviesApp_shared_services_webStorage_service__WEBPACK_IMPORTED_MODULE_10__["WebStorageService"], _moviesApp_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]]
    })
], AppSharedModule);



/***/ }),

/***/ "./src/app/shared/components/filter/filter.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/filter/filter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.ts ***!
  \**************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let FilterComponent = class FilterComponent {
    constructor() {
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.filterValue = "";
        this.filterValueControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.applyFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.filterValueControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(newValue => {
            this.filterValue = newValue;
            this.applyFilter.emit(this.filterValue);
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FilterComponent.prototype, "applyFilter", void 0);
FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mas-filter",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/filter/filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.component.scss */ "./src/app/shared/components/filter/filter.component.scss")).default]
    })
], FilterComponent);



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hidden {\n  visibility: hidden;\n}\n\n.loader-overlay {\n  position: absolute;\n  width: 100%;\n  z-index: 500000;\n  top: 0;\n}\n\n.loader {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n}\n\n.loader:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #3f51b5;\n  -webkit-animation: loading 2s linear infinite;\n          animation: loading 2s linear infinite;\n}\n\n@-webkit-keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL0M6XFxVc2Vyc1xcanVhbi5zYWxhemFyXFxEb2N1bWVudHNcXFN0dWR5XFxwbGF0emlcXEFuZ3VsYXJcXE1vdmllc0FwcC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxsb2FkZXJcXGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7QUNJRjs7QURGQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNLRjtFREhBO0lBQ0UsVUFBQTtFQ0tGO0VESEE7SUFDRSxVQUFBO0VDS0Y7RURIQTtJQUNFLFNBQUE7RUNLRjtFREhBO0lBQ0UsVUFBQTtFQ0tGO0VESEE7SUFDRSxVQUFBO0VDS0Y7QUFDRjs7QUR4QkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDS0Y7RURIQTtJQUNFLFVBQUE7RUNLRjtFREhBO0lBQ0UsVUFBQTtFQ0tGO0VESEE7SUFDRSxTQUFBO0VDS0Y7RURIQTtJQUNFLFVBQUE7RUNLRjtFREhBO0lBQ0UsVUFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5sb2FkZXItb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDUwMDAwMDtcclxuICB0b3A6IDA7XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4ubG9hZGVyOmJlZm9yZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgbGVmdDogLTIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIGFuaW1hdGlvbjogbG9hZGluZyAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkaW5nIHtcclxuICBmcm9tIHtcclxuICAgIGxlZnQ6IC0yMDBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbiAgOTUlIHtcclxuICAgIGxlZnQ6IDEyMCU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5sb2FkZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDUwMDAwMDtcbiAgdG9wOiAwO1xufVxuXG4ubG9hZGVyIHtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5sb2FkZXI6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogLTIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBhbmltYXRpb246IGxvYWRpbmcgMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xuICBmcm9tIHtcbiAgICBsZWZ0OiAtMjAwcHg7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgNzAlIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIDgwJSB7XG4gICAgbGVmdDogNTAlO1xuICB9XG4gIDk1JSB7XG4gICAgbGVmdDogMTIwJTtcbiAgfVxuICB0byB7XG4gICAgbGVmdDogMTAwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _moviesApp_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moviesApp-shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");



let LoaderComponent = class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    ngOnInit() {
        this.subscription = this.loaderService.loaderState.subscribe((state) => {
            this.show = state.show;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
LoaderComponent.ctorParameters = () => [
    { type: _moviesApp_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mas-loader",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/components/loader/loader.component.scss")).default]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/shared/components/toolbar/toolbar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/toolbar/toolbar.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  color: white;\n}\na.is-active {\n  background: #32408f;\n}\n@media (max-width: 959px) {\n  mat-toolbar {\n    border-radius: 0px;\n  }\n}\n@media (max-width: 959px) and (max-width: 599px) {\n  mat-toolbar {\n    height: auto;\n  }\n  mat-toolbar div {\n    width: 100%;\n    justify-content: space-between;\n  }\n  mat-toolbar .menu-list {\n    display: flex;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9vbGJhci9DOlxcVXNlcnNcXGp1YW4uc2FsYXphclxcRG9jdW1lbnRzXFxTdHVkeVxccGxhdHppXFxBbmd1bGFyXFxNb3ZpZXNBcHAvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdG9vbGJhclxcdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLG1CQUFBO0FDRUo7QURFQTtFQUNFO0lBQ0Usa0JBQUE7RUNDRjtBQUNGO0FEQ0U7RUFDRTtJQUNFLFlBQUE7RUNDSjtFREFJO0lBQ0UsV0FBQTtJQUNBLDhCQUFBO0VDRU47RURBSTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gICYuaXMtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkY29sb3I6ICMzZjUxYjUsICRhbW91bnQ6IDEwJSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICBtYXQtdG9vbGJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIG1hdC10b29sYmFyIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgICAubWVudS1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuYS5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMzI0MDhmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgbWF0LXRvb2xiYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgbWF0LXRvb2xiYXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBtYXQtdG9vbGJhciBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICBtYXQtdG9vbGJhciAubWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/toolbar/toolbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/toolbar/toolbar.component.ts ***!
  \****************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _moviesApp_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moviesApp-shared/services/config.service */ "./src/app/shared/services/config.service.ts");



let ToolbarComponent = class ToolbarComponent {
    constructor(configService) {
        this.configService = configService;
        this.isMobileVisible = false;
        this.onToggleMenu = () => {
            this.isMobileVisible = !this.isMobileVisible;
        };
    }
    ngOnInit() {
        this.menuItems = this.configService.getMenu();
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _moviesApp_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "mas-toolbar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/shared/components/toolbar/toolbar.component.scss")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/shared/pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(value, args, property) {
        if (!value) {
            return;
        }
        if (!args) {
            return value;
        }
        const originalArgs = args;
        args = args.toLowerCase();
        return value.filter(item => item[property].toLowerCase().includes(args));
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "filter"
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/shared/services/canDeactiveGuard.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/canDeactiveGuard.service.ts ***!
  \*************************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CanDeactivateGuard = class CanDeactivateGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.canDeactive ? component.canDeactive() : true;
    }
};
CanDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CanDeactivateGuard);



/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _moviesApp_core_constants_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moviesApp-core/constants/core.constants */ "./src/app/core/constants/core.constants.ts");



let ConfigService = class ConfigService {
    constructor() { }
    retrieveMainMenu() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("simulation of load menu....");
                resolve(_moviesApp_core_constants_core_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].mainMenu);
            }, 500);
        });
    }
    getMenu() {
        return this.mainMenu;
    }
    setMenu(menu) {
        this.mainMenu = menu;
    }
};
ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ConfigService);



/***/ }),

/***/ "./src/app/shared/services/loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/loader.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    show() {
        this.loaderSubject.next({ show: true });
    }
    hide() {
        this.loaderSubject.next({ show: false });
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], LoaderService);



/***/ }),

/***/ "./src/app/shared/services/notifications.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/notifications.service.ts ***!
  \**********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");



let NotificationService = class NotificationService {
    constructor(toasterService) {
        this.toasterService = toasterService;
        this.toast = {
            type: "success",
            title: "",
            body: "",
            showCloseButton: true
        };
    }
    showSuccessMessage(title, message) {
        this.toast.type = "success";
        this.toast.title = title;
        this.toast.body = message;
        this.toasterService.pop(this.toast);
    }
    showErrorMessage(title, message) {
        this.toast.type = "error";
        this.toast.title = title;
        this.toast.body = message;
        this.toasterService.pop(this.toast);
    }
};
NotificationService.ctorParameters = () => [
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NotificationService);



/***/ }),

/***/ "./src/app/shared/services/webStorage.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/webStorage.service.ts ***!
  \*******************************************************/
/*! exports provided: WebStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageService", function() { return WebStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WebStorageService = class WebStorageService {
    store(hashKey, obj) {
        sessionStorage.setItem(hashKey, JSON.stringify(obj));
    }
    retrieve(hashKey) {
        const itemJsonString = sessionStorage.getItem(hashKey);
        return JSON.parse(itemJsonString);
    }
};
WebStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WebStorageService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\juan.salazar\Documents\Study\platzi\Angular\MoviesApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map