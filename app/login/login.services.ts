import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'



@Injectable()
export class LoginService{
     constructor(private http: Http) { }

      logincheck(user:any) {          
        return this.http.post('http://localhost:8888/login', user)
            .map(response =>  response.json());
    }

  
}