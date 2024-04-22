import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Login } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    validate: boolean = false;
    private endpoint:string = environment.endPoint;
    private apiUrl:string = this.endpoint + "api/Paper/"

    constructor(private http:HttpClient,
                @Inject(DOCUMENT) private document: Document,) {
                  const localStorage = document.defaultView?.localStorage;
                 }

    get(mail:string, pass:string):Observable<Login[]>{
        return this.http.get<Login[]>(`${this.apiUrl}GetLogin?mail=`+ mail + "&pass=" + pass);
      }

    //Valida accesos
    validateAccess():Observable<boolean>{
      if (localStorage) {
        const counter = localStorage.getItem('paperaccess');
        if (counter) {
          this.validate = true;
        }
      }
      return of(this.validate);
    }
}
