import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'



@Injectable()
export class RegisterService{
     constructor(private http: Http) { }

      register(user:any) {          
        return this.http.post('http://localhost:8888/register', user)
          .map(response =>  response.json());
    }

  
}