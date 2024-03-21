import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Schemes } from '../Interfaces/schemes';

@Injectable({
  providedIn: 'root'
})
export class SchemesService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "api/Paper/"

  constructor(private http:HttpClient) { }

  getList():Observable<Schemes>{
    return this.http.get<Schemes>(`${this.apiUrl}GetSchemes`)
  }

  add(schemes:Schemes):Observable<Schemes>{
    return this.http.post<Schemes>(`${this.apiUrl}NewSchemes`, schemes);
  }

  update(schemes:Schemes):Observable<Schemes>{
    return this.http.patch<Schemes>(`${this.apiUrl}UpdateSchemes`, schemes);
  }
}
