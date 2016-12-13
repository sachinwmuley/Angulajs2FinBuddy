"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./app/home/welcome.component');
var login_components_1 = require('./app/login/login.components');
var register_component_1 = require('./app/register/register.component');
// Route Configuration
exports.routes = [
    { path: 'home', component: welcome_component_1.WelcomeComponent },
    { path: 'login', component: login_components_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map