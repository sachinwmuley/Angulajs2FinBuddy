import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ViewProductService } from './viewProduct.service';

@Component({
    selector: '',
    templateUrl: 'app/viewProduct/viewProduct.component.html'
})
export class ViewProductComponent {
 products : any = [];

 error: String;

  constructor(private router: Router,private _viewProductService :ViewProductService){
  }

  viewProduct(){
      alert("OK");
       this._viewProductService.viewProducts()
           .subscribe(
                data => {
                    if(data.responsestatus=='SUCCESS'){  
                        this.products=data.data;                     
                       // this.router.navigate(['/viewProduct']); 
                    }else{
                        this.error = 'Problem to insert data';
                        this.router.navigate(['/home']);
                    }                  
                },
                error => {
                     alert("Connection Problem !..");
             });    
      }

}
