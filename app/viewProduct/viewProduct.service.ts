import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'



@Injectable()
export class ViewProductService{
     constructor(private http: Http) { }

      viewProducts() {          
        return this.http.get('http://localhost:8888/viewProduct')
          .map(response =>  response.json());
    }

  
}