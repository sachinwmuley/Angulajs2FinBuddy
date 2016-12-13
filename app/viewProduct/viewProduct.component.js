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
var viewProduct_service_1 = require('./viewProduct.service');
var ViewProductComponent = (function () {
    function ViewProductComponent(router, _viewProductService) {
        this.router = router;
        this._viewProductService = _viewProductService;
        this.products = [];
    }
    ViewProductComponent.prototype.viewProduct = function () {
        var _this = this;
        alert("OK");
        this._viewProductService.viewProducts()
            .subscribe(function (data) {
            if (data.responsestatus == 'SUCCESS') {
                _this.products = data.data;
            }
            else {
                _this.error = 'Problem to insert data';
                _this.router.navigate(['/home']);
            }
        }, function (error) {
            alert("Connection Problem !..");
        });
    };
    ViewProductComponent = __decorate([
        core_1.Component({
            selector: '',
            templateUrl: 'app/viewProduct/viewProduct.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, viewProduct_service_1.ViewProductService])
    ], ViewProductComponent);
    return ViewProductComponent;
}());
exports.ViewProductComponent = ViewProductComponent;
//# sourceMappingURL=viewProduct.component.js.map