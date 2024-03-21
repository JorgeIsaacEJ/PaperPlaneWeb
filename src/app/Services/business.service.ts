import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Business } from '../Interfaces/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "api/Paper/"

  constructor(private http:HttpClient) { }

  getList():Observable<Business>{
    return this.http.get<Business>(`${this.apiUrl}GetBusiness`);
  }

  add(business:Business):Observable<Business>{
    return this.http.post<Business>(`${this.apiUrl}NewBusiness`, business);
  }

  update(business:Business):Observable<Business>{
    return this.http.patch<Business>(`${this.apiUrl}UpdateBusiness`, business);
  }
}
