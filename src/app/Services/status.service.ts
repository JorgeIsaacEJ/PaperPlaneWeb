import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Status } from '../Interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "api/Paper/"

  constructor(private http:HttpClient) { }

  getList():Observable<Status>{
    return this.http.get<Status>(`${this.apiUrl}GetStatus`)
  }

  add(status:Status):Observable<Status>{
    return this.http.post<Status>(`${this.apiUrl}NewStatus`, status);
  }

  update(status:Status):Observable<Status>{
    return this.http.patch<Status>(`${this.apiUrl}UpdateStatus`, status);
  }
}
