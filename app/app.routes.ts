import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent}  from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {LoginComponent} from './login/login.components';
import {RegisterComponent} from './register/register.component';
import {AddProductComponent} from './addProduct/addProduct.components';
import {ViewProductComponent} from './viewProduct/viewProduct.component';



// Route Configuration
export const router: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'viewProduct', component: ViewProductComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: NgModule = RouterModule.forRoot(router);
