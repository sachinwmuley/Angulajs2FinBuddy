import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { routing } from './app.routes';


import {AppComponent }  from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {LoginComponent} from './login/login.components';
import {RegisterComponent} from './register/register.component';
import {AddProductComponent} from './addProduct/addProduct.components';
import {ViewProductComponent} from './viewProduct/viewProduct.component';

import {LoginService} from './login/login.services';
import {RegisterService } from './register/register.service';
import {AddProductService } from './addProduct/addProduct.service';
import {ViewProductService } from './viewProduct/viewProduct.service';



@NgModule({
  imports: [BrowserModule,FormsModule,HttpModule,routing],
  declarations: [AppComponent,WelcomeComponent,LoginComponent,RegisterComponent,AddProductComponent,ViewProductComponent],  
  bootstrap: [ AppComponent ],
  providers:[LoginService,RegisterService,AddProductService,ViewProductService]
})
export class AppModule { }
