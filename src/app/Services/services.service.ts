import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Services } from '../Interfaces/services';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "api/Paper/"

  constructor(private http:HttpClient) { }

  getList():Observable<Services>{
    return this.http.get<Services>(`${this.apiUrl}GetServices`)
  }

  add(services:Services):Observable<Services>{
    return this.http.post<Services>(`${this.apiUrl}NewServices`, services);
  }

  update(services:Services):Observable<Services>{
    return this.http.patch<Services>(`${this.apiUrl}UpdateServices`, services);
  }
}
