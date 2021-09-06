(self["webpackChunkmariusz_app"] = self["webpackChunkmariusz_app"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator/generator.component */ 3410);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    { path: 'logowanie', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
    {
        path: 'wygeneruj-fakture',
        component: _generator_generator_component__WEBPACK_IMPORTED_MODULE_0__.GeneratorComponent,
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    { path: '**', redirectTo: '/wygeneruj-fakture' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'MariuszApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generator/generator.component */ 3410);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error.component */ 9983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _generator_generator_component__WEBPACK_IMPORTED_MODULE_3__.GeneratorComponent,
        _error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule] }); })();


/***/ }),

/***/ 9983:
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ErrorComponent {
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], inputs: { text: "text" }, decls: 2, vars: 1, consts: [["role", "alert", 1, "alert", "alert-danger", "shadow-sm", "rounded", "pb-3", "mb-4"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
    } }, encapsulation: 2 });


/***/ }),

/***/ 3410:
/*!**************************************************!*\
  !*** ./src/app/generator/generator.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneratorComponent": () => (/* binding */ GeneratorComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_pdf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pdf.service */ 1735);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/error.component */ 9983);






const _c0 = ["downloadButton"];
function GeneratorComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", "Tw\u00F3j token wygas\u0142, zaloguj si\u0119 ponownie. Za chwil\u0119 zostaniesz przekierowany do strony logowania.");
} }
class GeneratorComponent {
    constructor(pdfService, dataService) {
        this.pdfService = pdfService;
        this.dataService = dataService;
        this.isLoggedIn = true;
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_0__.locale('pl');
        this.currentMonth = moment__WEBPACK_IMPORTED_MODULE_0__().format('MMMM YYYY');
    }
    downloadPDF() {
        this.downloadButtonRef.nativeElement.blur();
        this.dataService.getInvoiceData()
            .subscribe(data => data ? this.pdfService.saveDoc(data) : this.isLoggedIn = !!data);
    }
}
GeneratorComponent.ɵfac = function GeneratorComponent_Factory(t) { return new (t || GeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_pdf_service__WEBPACK_IMPORTED_MODULE_1__.PdfService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService)); };
GeneratorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GeneratorComponent, selectors: [["app-generator"]], viewQuery: function GeneratorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.downloadButtonRef = _t.first);
    } }, decls: 13, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-6", "offset-3", "text-center", "mt-5", "pt-5"], [4, "ngIf"], [1, "card", "shadow-sm", "rounded"], [1, "card-body"], [1, "mb-0"], [1, "fw-bold"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["downloadButton", ""], [3, "text"]], template: function GeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GeneratorComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Klikaj\u0105c na poni\u017Cszy przycisk, wygenerujesz faktur\u0119 na miesi\u0105c:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GeneratorComponent_Template_button_click_10_listener() { return ctx.downloadPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Wygeneruj faktur\u0119 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.currentMonth, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _error_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent], encapsulation: 2 });


/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.isJwtTokenValid.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(isAuthenticated => {
            if (!isAuthenticated) {
                localStorage.removeItem('auth-token');
                this.router.navigateByUrl('/logowanie');
                return false;
            }
            return true;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/error.component */ 9983);







function LoginComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", "B\u0142\u0119dna nazwa u\u017Cytkownika lub has\u0142o.");
} }
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_2_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.loginJwtToken(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Has\u0142o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Zaloguj");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.errorOccurred);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r4.valid);
} }
function LoginComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginClicked = false;
        this.errorOccurred = false;
    }
    ngOnInit() {
        this.authService.isJwtTokenValid.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
            .subscribe(data => {
            if (data) {
                this.router.navigateByUrl('/wygeneruj-fakture');
            }
        });
    }
    loginJwtToken(loginForm) {
        if (!loginForm.valid) {
            return;
        }
        if (!this.loginClicked) {
            this.loginClicked = true;
        }
        const username = loginForm.value.email;
        const password = loginForm.value.password;
        this.authService.loginJwtToken(username, password).subscribe(() => {
            this.router.navigateByUrl('/wygeneruj-fakture');
        }, () => {
            this.errorOccurred = true;
            this.loginClicked = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "row"], ["class", " col-6 offset-3 mt-5 pt-5", 4, "ngIf", "ngIfElse"], ["loggingIn", ""], [1, "col-6", "offset-3", "mt-5", "pt-5"], [4, "ngIf"], [1, "card", "shadow-sm", "rounded"], [1, "card-body", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group", "mb-2"], ["for", "exampleInputEmail1"], ["type", "email", "ngModel", "", "name", "email", "id", "exampleInputEmail1", "placeholder", "Wpisz adres email", 1, "form-control"], ["for", "exampleInputPassword1"], ["ngModel", "", "name", "password", "type", "password", "id", "exampleInputPassword1", "placeholder", "Wpisz has\u0142o", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "text"], [1, "col-sm-12", "mt-5", "pt-5", "text-center"], ["role", "status", 1, "spinner-border", "text-primary", "text-light"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 15, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LoginComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loginClicked)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent], styles: [".spinner-border[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n\n.text-light[_ngcontent-%COMP%] {\n  color: #209CEE !important;\n}\n\na.text-light[_ngcontent-%COMP%]:focus, a.text-light[_ngcontent-%COMP%]:hover {\n  color: #209CEE !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXItYm9yZGVyIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWxpZ2h0IHtcclxuICBjb2xvcjogIzIwOUNFRSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmEudGV4dC1saWdodDpmb2N1cywgYS50ZXh0LWxpZ2h0OmhvdmVyIHtcclxuICBjb2xvcjogIzIwOUNFRSAhaW1wb3J0YW50XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _token_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-data.service */ 9977);







class AuthService {
    constructor(http, router, tokenDataService) {
        this.http = http;
        this.router = router;
        this.tokenDataService = tokenDataService;
        this.jwtTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        const tokenData = this.tokenDataService.getTokenData();
        if (this.tokenDataService.validateToken(tokenData)) {
            this.jwtTokenSubject.next(tokenData);
        }
        else if (tokenData) {
            this.tokenDataService.removeTokenData();
        }
    }
    loginJwtToken(username, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + '/auth/login', { username, password })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
            this.tokenDataService.saveTokenData(data);
            this.jwtTokenSubject.next(data);
        }));
    }
    // this getter is responsible for JWT Token, always use it with isJwtTokenValid
    get jwtToken() {
        return this.jwtTokenSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((tokenData) => tokenData ? tokenData.token : null));
    }
    // this getter is responsible for JWT Token validity
    get isJwtTokenValid() {
        return this.jwtTokenSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((tokenData) => {
            if (tokenData) {
                if (this.tokenDataService.validateToken(tokenData)) {
                    return !!tokenData.token;
                }
                else {
                    this.tokenDataService.removeTokenData();
                    this.jwtTokenSubject.next(null);
                    setTimeout(() => this.router.navigateByUrl('/logowanie'), 3000);
                }
            }
            return false;
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_token_data_service__WEBPACK_IMPORTED_MODULE_1__.TokenDataService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9529);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7556);







class DataService {
    constructor(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
    }
    getInvoiceData() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.authService.jwtToken, this.authService.isJwtTokenValid]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(([jwtToken, jwtTokenValidity]) => {
            return jwtTokenValidity ? this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + '/inpost', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ Authorization: `Bearer ${jwtToken}` })
            }) : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
        }));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1735:
/*!*****************************************!*\
  !*** ./src/app/services/pdf.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfService": () => (/* binding */ PdfService)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 480);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 2933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__.pdfMake.vfs;
class PdfService {
    constructor() {
        moment__WEBPACK_IMPORTED_MODULE_0__.locale('pl');
        this.currentMonth = moment__WEBPACK_IMPORTED_MODULE_0__().format('MMMM YYYY');
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_0__().format('DD.MM.YYYY');
        this.firstDayOfMonth = moment__WEBPACK_IMPORTED_MODULE_0__().startOf('month').format('DD.MM.YYYY');
        this.lastDayOfMonth = moment__WEBPACK_IMPORTED_MODULE_0__().endOf('month').format('DD.MM.YYYY');
        this.invoiceNumber = moment__WEBPACK_IMPORTED_MODULE_0__().format('M/YYYY');
    }
    saveDoc(data) {
        const doc = this.prepareDoc(data);
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.createPdf(doc).download(`Rachunek ${this.currentMonth} ${data.docName}.pdf`);
    }
    prepareDoc(data) {
        return {
            content: [
                { text: `${data.city}, dnia ${this.currentDate}`, style: 'headerDate' },
                { text: '(miejscowość)                  (data wystawienia)', style: 'headerSmallRight' },
                {
                    columns: [
                        {
                            width: '*',
                            text: 'Sprzedawca'
                        },
                        {
                            width: '*',
                            text: 'Nabywca'
                        }
                    ], margin: [0, 40, 0, 0]
                },
                {
                    columns: [
                        {
                            width: '*',
                            text: data.sellerName
                        },
                        {
                            width: '*',
                            text: data.buyerName
                        }
                    ], margin: [0, 15, 0, 0]
                },
                {
                    columns: [
                        {
                            width: '*',
                            text: data.sellerAddress
                        },
                        {
                            width: '*',
                            text: data.buyerNip
                        }
                    ], margin: [0, 10, 0, 0]
                },
                {
                    columns: [
                        {
                            width: '*',
                            text: ''
                        },
                        {
                            width: '*',
                            text: data.buyerAddress
                        }
                    ], margin: [0, 10, 0, 0]
                },
                { text: `RACHUNEK NR ${this.invoiceNumber}`, style: 'invoiceNumber', margin: [0, 70, 0, 0] },
                {
                    columns: [
                        {
                            width: '*',
                            text: this.currentDate
                        },
                        {
                            width: '*',
                            text: ''
                        }
                    ], margin: [0, 40, 0, 0]
                },
                {
                    columns: [
                        {
                            width: '*',
                            text: '(data sprzedaży/wykonania usługi)',
                            style: 'headerSmall'
                        },
                        {
                            width: '*',
                            text: ''
                        },
                    ]
                },
                { text: 'Sposób płatności: Przelew na konto', margin: [0, 15, 0, 0] },
                { text: 'Termin płatności: 28 dni', margin: [0, 5, 0, 0] },
                { text: `Nazwa Banku: ${data.bankName}.`, margin: [0, 5, 0, 0] },
                { text: `Numer konta: ${data.bankNumber}`, margin: [0, 5, 0, 0] },
                {
                    style: 'invoiceNumber',
                    margin: [0, 50, 0, 0],
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1,
                        widths: [20, '*', 70, 100, 70],
                        body: [
                            ['Lp.', 'Nazwa usługi', 'Ilość', 'Cena jednostkowa', 'Wartość'],
                            ['1',
                                `${data.serviceName} ${this.firstDayOfMonth} - ${this.lastDayOfMonth}`,
                                '1', `${data.price}.00 zł`, `${data.price}.00 zł`],
                        ]
                    }
                },
                { text: `Do zapłaty: ${data.price}.00 zł`, margin: [0, 15, 0, 0] },
                { text: `(słownie: ${data.priceString})`, margin: [0, 5, 0, 0] }
            ],
            styles: {
                headerDate: {
                    alignment: 'right'
                },
                headerSmallRight: {
                    alignment: 'right',
                    fontSize: 8,
                    italics: true
                },
                headerSmall: {
                    fontSize: 8,
                    italics: true
                },
                invoiceNumber: {
                    alignment: 'center',
                }
            }
        };
    }
}
PdfService.ɵfac = function PdfService_Factory(t) { return new (t || PdfService)(); };
PdfService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PdfService, factory: PdfService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9977:
/*!************************************************!*\
  !*** ./src/app/services/token-data.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenDataService": () => (/* binding */ TokenDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TokenDataService {
    constructor() {
        this.TOKEN_KEY = 'auth-token';
    }
    saveTokenData(token) {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
    }
    getTokenData() {
        return JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    }
    removeTokenData() {
        localStorage.removeItem(this.TOKEN_KEY);
    }
    validateToken(authData) {
        return authData && authData.token ? new Date() <= new Date(authData.exp * 1000) : false;
    }
}
TokenDataService.ɵfac = function TokenDataService_Factory(t) { return new (t || TokenDataService)(); };
TokenDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenDataService, factory: TokenDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 2275,
	"./af.js": 2275,
	"./ar": 857,
	"./ar-dz": 1218,
	"./ar-dz.js": 1218,
	"./ar-kw": 4754,
	"./ar-kw.js": 4754,
	"./ar-ly": 6680,
	"./ar-ly.js": 6680,
	"./ar-ma": 2178,
	"./ar-ma.js": 2178,
	"./ar-sa": 6522,
	"./ar-sa.js": 6522,
	"./ar-tn": 5682,
	"./ar-tn.js": 5682,
	"./ar.js": 857,
	"./az": 164,
	"./az.js": 164,
	"./be": 9774,
	"./be.js": 9774,
	"./bg": 947,
	"./bg.js": 947,
	"./bm": 1832,
	"./bm.js": 1832,
	"./bn": 9650,
	"./bn-bd": 4477,
	"./bn-bd.js": 4477,
	"./bn.js": 9650,
	"./bo": 6005,
	"./bo.js": 6005,
	"./br": 8492,
	"./br.js": 8492,
	"./bs": 534,
	"./bs.js": 534,
	"./ca": 2061,
	"./ca.js": 2061,
	"./cs": 4737,
	"./cs.js": 4737,
	"./cv": 1167,
	"./cv.js": 1167,
	"./cy": 7996,
	"./cy.js": 7996,
	"./da": 9528,
	"./da.js": 9528,
	"./de": 4540,
	"./de-at": 9430,
	"./de-at.js": 9430,
	"./de-ch": 7978,
	"./de-ch.js": 7978,
	"./de.js": 4540,
	"./dv": 3426,
	"./dv.js": 3426,
	"./el": 6616,
	"./el.js": 6616,
	"./en-au": 3816,
	"./en-au.js": 3816,
	"./en-ca": 2162,
	"./en-ca.js": 2162,
	"./en-gb": 3305,
	"./en-gb.js": 3305,
	"./en-ie": 1954,
	"./en-ie.js": 1954,
	"./en-il": 3060,
	"./en-il.js": 3060,
	"./en-in": 9923,
	"./en-in.js": 9923,
	"./en-nz": 3540,
	"./en-nz.js": 3540,
	"./en-sg": 6505,
	"./en-sg.js": 6505,
	"./eo": 1907,
	"./eo.js": 1907,
	"./es": 6640,
	"./es-do": 1246,
	"./es-do.js": 1246,
	"./es-mx": 6131,
	"./es-mx.js": 6131,
	"./es-us": 6430,
	"./es-us.js": 6430,
	"./es.js": 6640,
	"./et": 2551,
	"./et.js": 2551,
	"./eu": 2711,
	"./eu.js": 2711,
	"./fa": 4572,
	"./fa.js": 4572,
	"./fi": 3390,
	"./fi.js": 3390,
	"./fil": 7860,
	"./fil.js": 7860,
	"./fo": 8216,
	"./fo.js": 8216,
	"./fr": 9291,
	"./fr-ca": 8527,
	"./fr-ca.js": 8527,
	"./fr-ch": 8407,
	"./fr-ch.js": 8407,
	"./fr.js": 9291,
	"./fy": 7054,
	"./fy.js": 7054,
	"./ga": 9540,
	"./ga.js": 9540,
	"./gd": 3917,
	"./gd.js": 3917,
	"./gl": 1486,
	"./gl.js": 1486,
	"./gom-deva": 6245,
	"./gom-deva.js": 6245,
	"./gom-latn": 8868,
	"./gom-latn.js": 8868,
	"./gu": 9652,
	"./gu.js": 9652,
	"./he": 9019,
	"./he.js": 9019,
	"./hi": 2040,
	"./hi.js": 2040,
	"./hr": 3402,
	"./hr.js": 3402,
	"./hu": 9322,
	"./hu.js": 9322,
	"./hy-am": 7609,
	"./hy-am.js": 7609,
	"./id": 7942,
	"./id.js": 7942,
	"./is": 8275,
	"./is.js": 8275,
	"./it": 3053,
	"./it-ch": 4378,
	"./it-ch.js": 4378,
	"./it.js": 3053,
	"./ja": 6176,
	"./ja.js": 6176,
	"./jv": 679,
	"./jv.js": 679,
	"./ka": 2726,
	"./ka.js": 2726,
	"./kk": 2953,
	"./kk.js": 2953,
	"./km": 6957,
	"./km.js": 6957,
	"./kn": 9181,
	"./kn.js": 9181,
	"./ko": 7148,
	"./ko.js": 7148,
	"./ku": 7752,
	"./ku.js": 7752,
	"./ky": 5675,
	"./ky.js": 5675,
	"./lb": 1263,
	"./lb.js": 1263,
	"./lo": 5746,
	"./lo.js": 5746,
	"./lt": 1143,
	"./lt.js": 1143,
	"./lv": 8753,
	"./lv.js": 8753,
	"./me": 4054,
	"./me.js": 4054,
	"./mi": 1573,
	"./mi.js": 1573,
	"./mk": 202,
	"./mk.js": 202,
	"./ml": 8523,
	"./ml.js": 8523,
	"./mn": 9794,
	"./mn.js": 9794,
	"./mr": 6681,
	"./mr.js": 6681,
	"./ms": 6975,
	"./ms-my": 9859,
	"./ms-my.js": 9859,
	"./ms.js": 6975,
	"./mt": 3691,
	"./mt.js": 3691,
	"./my": 5152,
	"./my.js": 5152,
	"./nb": 7607,
	"./nb.js": 7607,
	"./ne": 1526,
	"./ne.js": 1526,
	"./nl": 6368,
	"./nl-be": 76,
	"./nl-be.js": 76,
	"./nl.js": 6368,
	"./nn": 8420,
	"./nn.js": 8420,
	"./oc-lnc": 1906,
	"./oc-lnc.js": 1906,
	"./pa-in": 4504,
	"./pa-in.js": 4504,
	"./pl": 4721,
	"./pl.js": 4721,
	"./pt": 4645,
	"./pt-br": 4548,
	"./pt-br.js": 4548,
	"./pt.js": 4645,
	"./ro": 1977,
	"./ro.js": 1977,
	"./ru": 6042,
	"./ru.js": 6042,
	"./sd": 8849,
	"./sd.js": 8849,
	"./se": 7739,
	"./se.js": 7739,
	"./si": 84,
	"./si.js": 84,
	"./sk": 2449,
	"./sk.js": 2449,
	"./sl": 3086,
	"./sl.js": 3086,
	"./sq": 3139,
	"./sq.js": 3139,
	"./sr": 607,
	"./sr-cyrl": 63,
	"./sr-cyrl.js": 63,
	"./sr.js": 607,
	"./ss": 131,
	"./ss.js": 131,
	"./sv": 1665,
	"./sv.js": 1665,
	"./sw": 5642,
	"./sw.js": 5642,
	"./ta": 3622,
	"./ta.js": 3622,
	"./te": 4825,
	"./te.js": 4825,
	"./tet": 8336,
	"./tet.js": 8336,
	"./tg": 9238,
	"./tg.js": 9238,
	"./th": 9463,
	"./th.js": 9463,
	"./tk": 9986,
	"./tk.js": 9986,
	"./tl-ph": 9672,
	"./tl-ph.js": 9672,
	"./tlh": 43,
	"./tlh.js": 43,
	"./tr": 1212,
	"./tr.js": 1212,
	"./tzl": 110,
	"./tzl.js": 110,
	"./tzm": 482,
	"./tzm-latn": 8309,
	"./tzm-latn.js": 8309,
	"./tzm.js": 482,
	"./ug-cn": 2495,
	"./ug-cn.js": 2495,
	"./uk": 4157,
	"./uk.js": 4157,
	"./ur": 984,
	"./ur.js": 984,
	"./uz": 4141,
	"./uz-latn": 3662,
	"./uz-latn.js": 3662,
	"./uz.js": 4141,
	"./vi": 2607,
	"./vi.js": 2607,
	"./x-pseudo": 6460,
	"./x-pseudo.js": 6460,
	"./yo": 2948,
	"./yo.js": 2948,
	"./zh-cn": 2658,
	"./zh-cn.js": 2658,
	"./zh-hk": 9352,
	"./zh-hk.js": 9352,
	"./zh-mo": 8274,
	"./zh-mo.js": 8274,
	"./zh-tw": 8451,
	"./zh-tw.js": 8451
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map