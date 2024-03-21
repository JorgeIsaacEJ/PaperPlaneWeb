import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Clients } from '../Interfaces/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "api/Paper/"

  constructor(private http:HttpClient) { }

  getList():Observable<Clients>{
    return this.http.get<Clients>(`${this.apiUrl}GetClients`);
  }

  add(clients:Clients):Observable<Clients>{
    return this.http.post<Clients>(`${this.apiUrl}NewClients`, clients);
  }

  update(clients:Clients):Observable<Clients>{
    return this.http.patch<Clients>(`${this.apiUrl}UpdateClients`, clients);
  }
}
