import { Component } from '@angular/core';
import { LoginService } from './login.services';
import { Router } from '@angular/router';

@Component({
    selector: 'login-app',
    templateUrl: 'app/login/login.components.html'    
})
export class LoginComponent { 

user : any = {};
userData:String;
error: String;

 constructor( private router: Router,private _loginService :LoginService){  
  }

  login(){
       this._loginService.logincheck(this.user)
       .subscribe(
                data => {
                    if(data.responsestatus=='SUCCESS'){
                        this.userData=JSON.stringify(data);
                        this.router.navigate(['/home']); 
                    }else{
                        this.error = 'Username or password is incorrect';
                        this.router.navigate(['/login']);
                    }                  
                },
                error => {
                 alert("Connection Problem !..");
             });    
      }

}
