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
var router_1 = require('@angular/router');
var register_service_1 = require('./register.service');
var RegisterComponent = (function () {
    function RegisterComponent(router, _registerService) {
        this.router = router;
        this._registerService = _registerService;
        this.user = {};
    }
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this._registerService.register(this.user)
            .subscribe(function (data) {
            if (data.responsestatus == 'SUCCESS') {
                _this.router.navigate(['/login']);
            }
            else {
                _this.error = 'Problem to insert data';
                _this.router.navigate(['/register']);
            }
        }, function (error) {
            alert("Connection Problem !..");
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register-app',
            templateUrl: 'app/register/register.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof register_service_1.RegisterService !== 'undefined' && register_service_1.RegisterService) === 'function' && _a) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map