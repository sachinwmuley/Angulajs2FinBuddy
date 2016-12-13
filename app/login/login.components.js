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
var login_services_1 = require('./login.services');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(router, _loginService) {
        this.router = router;
        this._loginService = _loginService;
        this.user = {};
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._loginService.logincheck(this.user)
            .subscribe(function (data) {
            if (data.responsestatus == 'SUCCESS') {
                _this.userData = JSON.stringify(data);
                _this.router.navigate(['/home']);
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.router.navigate(['/login']);
            }
        }, function (error) {
            alert("Connection Problem !..");
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-app',
            templateUrl: 'app/login/login.components.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_services_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.components.js.map