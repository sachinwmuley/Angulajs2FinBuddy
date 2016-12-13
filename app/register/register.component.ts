import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from './register.service';

@Component({
    selector: 'register-app',
    templateUrl: 'app/register/register.component.html'
})
export class RegisterComponent {
 user : any = {};

 error: String;

  constructor(private router: Router,private _registerService :RegisterService){
  }

  registerUser(){
       this._registerService.register(this.user)
           .subscribe(
                data => {
                    if(data.responsestatus=='SUCCESS'){                       
                        this.router.navigate(['/login']); 
                    }else{
                        this.error = 'Problem to insert data';
                        this.router.navigate(['/register']);
                    }                  
                },
                error => {
                     alert("Connection Problem !..");
             });    
      }

}
