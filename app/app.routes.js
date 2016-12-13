"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./home/welcome.component');
var login_components_1 = require('./login/login.components');
var register_component_1 = require('./register/register.component');
var addProduct_components_1 = require('./addProduct/addProduct.components');
var viewProduct_component_1 = require('./viewProduct/viewProduct.component');
// Route Configuration
exports.router = [
    { path: '', component: welcome_component_1.WelcomeComponent },
    { path: 'home', component: welcome_component_1.WelcomeComponent },
    { path: 'login', component: login_components_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'addProduct', component: addProduct_components_1.AddProductComponent },
    { path: 'viewProduct', component: viewProduct_component_1.ViewProductComponent }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.routes.js.map