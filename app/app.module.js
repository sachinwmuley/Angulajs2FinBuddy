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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var welcome_component_1 = require('./home/welcome.component');
var login_components_1 = require('./login/login.components');
var register_component_1 = require('./register/register.component');
var addProduct_components_1 = require('./addProduct/addProduct.components');
var viewProduct_component_1 = require('./viewProduct/viewProduct.component');
var login_services_1 = require('./login/login.services');
var register_service_1 = require('./register/register.service');
var addProduct_service_1 = require('./addProduct/addProduct.service');
var viewProduct_service_1 = require('./viewProduct/viewProduct.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.routing],
            declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent, login_components_1.LoginComponent, register_component_1.RegisterComponent, addProduct_components_1.AddProductComponent, viewProduct_component_1.ViewProductComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [login_services_1.LoginService, register_service_1.RegisterService, addProduct_service_1.AddProductService, viewProduct_service_1.ViewProductService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map