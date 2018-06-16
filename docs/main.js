(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inset-text-effect {\r\n    box-sizing: content-box;\r\n    border: none;\r\n    font: normal 70px/1 \"Aladin\", Helvetica, sans-serif;\r\n    color: black;\r\n    text-align: center;\r\n    text-transform: normal;\r\n    text-overflow: clip;\r\n    white-space: pre;\r\n    text-shadow: 1px 1px 0 rgba(140,140,140,0.6) , -1px -1px 1px rgba(0,0,0,0.67) ;\r\n    margin-top:50px;\r\n}\r\n\r\n.header-container{\r\n    background: url('pokemons_header.gif');\r\n    box-shadow: 0 2px 10px grey;\r\n    background-size: cover;\r\n    background-position: 50%;\r\n    position: fixed; \r\n    top:0px; \r\n    left:0px; \r\n    height:200px; \r\n    right:0px;\r\n    z-index: 1;\r\n}\r\n\r\n.body-container{\r\n    position:absolute;\r\n    top:200px; \r\n    bottom:0; \r\n    left:0px; \r\n    right:0px; \r\n    z-index: 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\r\n  <div class=\"inset-text-effect\">Pokemon!</div>\r\n  <link async href=\"http://fonts.googleapis.com/css?family=Aladin\" data-generated=\"http://enjoycss.com\" rel=\"stylesheet\" type=\"text/css\"/>\r\n</div>\r\n<div class=\"body-container\">\r\n  <router-outlet></router-outlet>\r\n\r\n  <ngx-spinner\r\n    bdColor=\"rgba(51,51,51,0.8)\"\r\n    size=\"medium\"\r\n    color=\"#fff\"\r\n    loadingText=\"Carregando...\"\r\n    type=\"ball-scale-multiple\">\r\n  </ngx-spinner>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pokemon_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pokemon/list/list.component */ "./src/app/pokemon/list/list.component.ts");
/* harmony import */ var _pokemon_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pokemon/detail/detail.component */ "./src/app/pokemon/detail/detail.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'pokemons', component: _pokemon_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListPokemonComponent"] },
    { path: 'pokemons/detail/:url', component: _pokemon_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailPokemonComponent"] },
    { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__["NotfoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pokemon_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListPokemonComponent"],
                _pokemon_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailPokemonComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__["NotfoundComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');\r\n@import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');\r\n.error-container {\r\n  text-align: center;\r\n  font-size: 106px;\r\n  font-family: 'Catamaran', sans-serif;\r\n  font-weight: 800;\r\n  margin: 70px 15px;\r\n}\r\n.error-container > span {\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.error-container > span.four {\r\n  width: 136px;\r\n  height: 43px;\r\n  border-radius: 999px;\r\n  background:\r\n    linear-gradient(140deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 43%, transparent 44%, transparent 100%),\r\n    linear-gradient(105deg, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.06) 41%, rgba(0, 0, 0, 0.07) 76%, transparent 77%, transparent 100%),\r\n    linear-gradient(to right, #d89ca4, #e27b7e);\r\n}\r\n.error-container > span.four:before,\r\n.error-container > span.four:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  border-radius: 999px;\r\n}\r\n.error-container > span.four:before {\r\n  width: 43px;\r\n  height: 156px;\r\n  left: 60px;\r\n  bottom: -43px;\r\n  background:\r\n    linear-gradient(128deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 40%, transparent 41%, transparent 100%),\r\n    linear-gradient(116deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 50%, transparent 51%, transparent 100%),\r\n    linear-gradient(to top, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F);\r\n}\r\n.error-container > span.four:after {\r\n  width: 137px;\r\n  height: 43px;\r\n  -webkit-transform: rotate(-49.5deg);\r\n          transform: rotate(-49.5deg);\r\n  left: -18px;\r\n  bottom: 36px;\r\n  background: linear-gradient(to right, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F);\r\n}\r\n.error-container > span.zero {\r\n  vertical-align: text-top;\r\n  width: 156px;\r\n  height: 156px;\r\n  border-radius: 999px;\r\n  background: linear-gradient(-45deg, transparent 0%, rgba(0, 0, 0, 0.06) 50%,  transparent 51%, transparent 100%),\r\n    linear-gradient(to top right, #99749D, #99749D, #B895AB, #CC9AA6, #D7969E, #ED8687, #ED8687);\r\n  overflow: hidden;\r\n  -webkit-animation: bgshadow 5s infinite;\r\n          animation: bgshadow 5s infinite;\r\n}\r\n.error-container > span.zero:before {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  width: 90px;\r\n  height: 90px;\r\n  background-color: transparent;\r\n  left: 0px;\r\n  bottom: 0px;\r\n  background:\r\n    linear-gradient(95deg, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.07) 9%, transparent 50%, transparent 100%),\r\n    linear-gradient(85deg, transparent 0%, transparent 19%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.07) 91%, transparent 92%, transparent 100%);\r\n}\r\n.error-container > span.zero:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  border-radius: 999px;\r\n  width: 70px;\r\n  height: 70px;\r\n  left: 43px;\r\n  bottom: 43px;\r\n  background: #FDFAF5;\r\n  box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);\r\n}\r\n.screen-reader-text {\r\n    position: absolute;\r\n    top: -9999em;\r\n    left: -9999em;\r\n}\r\n@-webkit-keyframes bgshadow {\r\n  0% {\r\n    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);\r\n  }\r\n  45% {\r\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  55% {\r\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  100% {\r\n    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);\r\n  }\r\n}\r\n@keyframes bgshadow {\r\n  0% {\r\n    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);\r\n  }\r\n  45% {\r\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  55% {\r\n    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  100% {\r\n    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);\r\n  }\r\n}\r\n/* demo stuff */\r\n* {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n  background-color: #FDFAF5;\r\n  margin-bottom: 50px;\r\n}\r\nh1 {\r\n  font-family: 'Montserrat', Helvetica, sans-serif !important;\r\n  color: #bbb !important;\r\n  text-align: center;\r\n  margin: 30px 15px;\r\n}\r\n.zoom-area { \r\n  font-family: 'Montserrat', Helvetica, sans-serif !important;\r\n  color: #bbb !important;\r\n  max-width: 490px;\r\n  margin: 30px auto 30px;\r\n  font-size: 19px;\r\n  text-align: center;\r\n}\r\n.link-container {\r\n  font-family: 'Montserrat', Helvetica, sans-serif !important;\r\n  text-align: center;\r\n}\r\na.more-link {\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n    background-color: #de7e85;\r\n    padding: 10px 15px;\r\n    border-radius: 0;\r\n    color: #fff;\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n    margin-bottom: 5px;\r\n    line-height: 1.5;\r\n    text-decoration: none;\r\n  margin-top: 50px;\r\n  letter-spacing: 1px;\r\n}"

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>404: Página não encontrada</h1>\r\n<p class=\"zoom-area\"><b>Opa!</b> Você tentou acessar uma página que não existe! Verifique novamente!</p>\r\n<section class=\"error-container\">\r\n  <span class=\"four\"><span class=\"screen-reader-text\">4</span></span>\r\n  <span class=\"zero\"><span class=\"screen-reader-text\">0</span></span>\r\n  <span class=\"four\"><span class=\"screen-reader-text\">4</span></span>\r\n</section>\r\n<div class=\"link-container\">\r\n  <a [routerLink]=\"['/pokemons']\" class=\"more-link\">Ir para o site</a>\r\n</div>"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
        console.log('Teste');
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/detail/detail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pokemon/detail/detail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border-radius: 50%;    \r\n    display: block;\r\n    /* margin-left: auto;\r\n    margin-right: auto; */\r\n    width: 80px;\r\n}\r\n\r\nli{\r\n    list-style: none;\r\n}\r\n\r\n.mat-expansion-panel-header{\r\n    background-color: rgb(255,250,250) !important;\r\n}\r\n\r\n.detail-container{\r\n    margin:20px;\r\n}\r\n\r\n.inset-text-effect {\r\n    box-sizing: content-box;\r\n    border: none;\r\n    font: normal 30px/1 \"Aladin\", Helvetica, sans-serif;\r\n    color: black;\r\n    text-align: center;\r\n    text-transform: normal;\r\n    text-overflow: clip;\r\n    white-space: pre;\r\n    text-shadow: 1px 1px 0 rgba(140,140,140,0.6) , -1px -1px 1px rgba(0,0,0,0.67) ;\r\n}\r\n\r\n.back{\r\n    float:right;\r\n}"

/***/ }),

/***/ "./src/app/pokemon/detail/detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/pokemon/detail/detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-container\" *ngIf=\"pokemon\">\r\n    <div class=\"inset-text-effect\">Detalhes do pokemon: {{pokemon.name}}</div>\r\n    <link async href=\"http://fonts.googleapis.com/css?family=Aladin\" data-generated=\"http://enjoycss.com\" rel=\"stylesheet\" type=\"text/css\"/>    \r\n    <br>\r\n    <mat-accordion>\r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n            Dados Gerais \r\n            </mat-expansion-panel-header>\r\n            <img [src]=\"pokemon.sprites.front_default\" alt=\"Avatar\" >\r\n            <li><b>Nome:</b> {{pokemon.name}}</li>\r\n            <li><b>Peso:</b> {{pokemon.weight}}</li>\r\n            <li><b>Altura:</b> {{pokemon.height}}</li>\r\n        </mat-expansion-panel>\r\n        \r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n            Habilidades\r\n            </mat-expansion-panel-header>\r\n        \r\n            <p>O {{pokemon.name}} possui habilidades como:</p>\r\n            <li *ngFor=\"let habilidade of pokemon.abilities \">\r\n                <b>{{habilidade.ability.name}}</b>\r\n            </li>\r\n        \r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n            Movimentos\r\n            </mat-expansion-panel-header>\r\n        \r\n            <p>O {{pokemon.name}} possui os seguintes movimentos:</p>\r\n            <li *ngFor=\"let movimento of pokemon.moves \">\r\n                <b>{{movimento.move.name}}</b>\r\n            </li>\r\n        \r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n            Estatísticas\r\n            </mat-expansion-panel-header>\r\n        \r\n            <p>As seguintes estatísticas representam {{pokemon.name}}:</p>\r\n            <li *ngFor=\"let estatistica of pokemon.stats \">\r\n                <b>{{estatistica.stat.name}}</b>: \r\n                <ul>Esforço: {{estatistica.effort}}</ul>\r\n                <ul>Base: {{estatistica.base_stat}}</ul>\r\n            </li>\r\n        \r\n        </mat-expansion-panel>        \r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n            Espécies\r\n            </mat-expansion-panel-header>\r\n        \r\n            <p>{{pokemon.name}} é da espécie: {{pokemon.species.name}}</p>\r\n        \r\n        </mat-expansion-panel>        \r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n            Indíce de Jogos\r\n            </mat-expansion-panel-header>\r\n        \r\n            <p>Seus índices variam em:</p>\r\n            <li *ngFor=\"let indice of pokemon.game_indices \">\r\n                <b>{{indice.version.name}}</b>:\r\n                <ul>Index é de: {{indice.game_index}}</ul> \r\n            </li>\r\n        \r\n        </mat-expansion-panel>        \r\n    </mat-accordion>\r\n    <br>\r\n    <div class=\"back\">\r\n        <a mat-raised-button [routerLink]=\"['/pokemons']\" color=\"primary\" >Voltar</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pokemon/detail/detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pokemon/detail/detail.component.ts ***!
  \****************************************************/
/*! exports provided: DetailPokemonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPokemonComponent", function() { return DetailPokemonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pokemon_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pokemon-api.service */ "./src/app/pokemon/pokemon-api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailPokemonComponent = /** @class */ (function () {
    function DetailPokemonComponent(activatedRoute, pokemonApiService, spinner) {
        this.activatedRoute = activatedRoute;
        this.pokemonApiService = pokemonApiService;
        this.spinner = spinner;
    }
    DetailPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.activatedRoute.params.subscribe(function (params) {
            var urlDetail = params['url'];
            _this.getPokemonDetail(urlDetail);
        }, function (error) {
            _this.spinner.hide();
            //TODO: Redirect to error window or show popup!
        });
    };
    DetailPokemonComponent.prototype.getPokemonDetail = function (urlDetail) {
        var _this = this;
        // Nesse caso o objeto é muito maior. Por se tratar de uma prova avaliativa e já ter utilizado
        // modelo de contrato para a listagem dos pokemons, optei por deixar o detalhamento dinamico.
        this.pokemonApiService
            .getPokemonDetail(urlDetail)
            .subscribe(function (pokemon) {
            _this.pokemon = pokemon;
            _this.spinner.hide();
        }, function (error) {
            _this.spinner.hide();
            //TODO: Redirect to error window or show popup!
        });
    };
    DetailPokemonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pokemon-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/pokemon/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/pokemon/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _pokemon_api_service__WEBPACK_IMPORTED_MODULE_2__["PokemonApiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], DetailPokemonComponent);
    return DetailPokemonComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/list/list.component.css":
/*!*************************************************!*\
  !*** ./src/app/pokemon/list/list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-item{\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-style: solid;\r\n    border-width: 0 0 1px 0;\r\n    border-color: #eee;\r\n}\r\n\r\n.a{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pokemon/list/list.component.html":
/*!**************************************************!*\
  !*** ./src/app/pokemon/list/list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pokemons\">\r\n  <mat-nav-list>\r\n    <mat-list-item *ngFor=\"let pokemon of pokemons | async\">\r\n      <a matLine [routerLink]=\"['detail', pokemon.url]\">{{pokemon.name}}</a>\r\n    </mat-list-item>\r\n  </mat-nav-list>\r\n</div>\r\n\r\n<div \r\n  infiniteScroll \r\n  [infiniteScrollDistance]=\"2\"\r\n  [infiniteScrollThrottle]=\"1000\"\r\n  (scrolled)=\"onScroll()\">\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pokemon/list/list.component.ts":
/*!************************************************!*\
  !*** ./src/app/pokemon/list/list.component.ts ***!
  \************************************************/
/*! exports provided: ListPokemonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPokemonComponent", function() { return ListPokemonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pokemon_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pokemon-api.service */ "./src/app/pokemon/pokemon-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_pokemon_list_pokeapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../model/pokemon/list.pokeapi */ "./src/model/pokemon/list.pokeapi.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPokemonComponent = /** @class */ (function () {
    function ListPokemonComponent(pokemonApiService, spinner) {
        this.pokemonApiService = pokemonApiService;
        this.spinner = spinner;
        this.pokemons = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](Array());
        this.pokemonsRetrieved = new _model_pokemon_list_pokeapi__WEBPACK_IMPORTED_MODULE_4__["PokeApiModel"]();
        this.totalItensPorPagina = 100;
        this.keepPaging = true;
    }
    ListPokemonComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.getPokemons();
    };
    ListPokemonComponent.prototype.getPokemons = function () {
        var _this = this;
        var currentPokemons = this.pokemons.getValue();
        if (this.keepPaging) {
            this.spinner.show(); //necessário para as chamadas posteriores do infinity scroll.
            this.pokemonApiService
                .getPokemons(this.pokemonsRetrieved.next, this.totalItensPorPagina)
                .subscribe(function (pokemons) {
                if (_this.totalItensPorPagina !== pokemons.results.length) {
                    _this.keepPaging = false;
                }
                _this.pokemonsRetrieved = pokemons;
                _this.pokemons.next(lodash__WEBPACK_IMPORTED_MODULE_3__["concat"](currentPokemons, pokemons.results));
                _this.spinner.hide();
            }, function (error) {
                _this.spinner.hide();
                //TODO: Redirect to error window or show popup!
            });
        }
    };
    ListPokemonComponent.prototype.onScroll = function () {
        this.getPokemons();
    };
    ListPokemonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pokemon-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/pokemon/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/pokemon/list/list.component.css")],
        }),
        __metadata("design:paramtypes", [_pokemon_api_service__WEBPACK_IMPORTED_MODULE_1__["PokemonApiService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ListPokemonComponent);
    return ListPokemonComponent;
}());



/***/ }),

/***/ "./src/app/pokemon/pokemon-api.service.ts":
/*!************************************************!*\
  !*** ./src/app/pokemon/pokemon-api.service.ts ***!
  \************************************************/
/*! exports provided: PokemonApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonApiService", function() { return PokemonApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonApiService = /** @class */ (function () {
    function PokemonApiService(http) {
        this.http = http;
        this.url = "api/v2/pokemon/";
    }
    PokemonApiService.prototype.getPokemons = function (next, quantidade) {
        if (!quantidade)
            quantidade = 100;
        if (next) {
            return this.http.get(next);
        }
        else {
            return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + this.url + "?limit=" + quantidade);
        }
    };
    PokemonApiService.prototype.getPokemonDetail = function (url) {
        return this.http.get(url);
    };
    PokemonApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PokemonApiService);
    return PokemonApiService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: ""
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/model/pokemon/list.pokeapi.ts":
/*!*******************************************!*\
  !*** ./src/model/pokemon/list.pokeapi.ts ***!
  \*******************************************/
/*! exports provided: PokeApiModel, PokeApiItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeApiModel", function() { return PokeApiModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeApiItemModel", function() { return PokeApiItemModel; });
var PokeApiModel = /** @class */ (function () {
    function PokeApiModel() {
        this.results = new Array();
    }
    return PokeApiModel;
}());

var PokeApiItemModel = /** @class */ (function () {
    function PokeApiItemModel() {
    }
    return PokeApiItemModel;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\caetano.neto\Documents\Pokemon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map