import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private endpoint:string = environment.endPoint;
    private apiUrl:string = this.endpoint + "api/Paper/"

    constructor(private http:HttpClient) { }

    getList(mail:string, pass:string):Observable<Login>{
        return this.http.get<Login>(`${this.apiUrl}GetLogin`+ mail + pass);
      }
}
