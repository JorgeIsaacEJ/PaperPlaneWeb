import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Clientsservices } from '../Interfaces/clientsservices';
import { Clientsservicesfull } from '../Interfaces/clientsservicesfull';

@Injectable({
  providedIn: 'root'
})
export class ClientsservicesService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "api/Paper/"

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }
  //GET ALL *Model FULL
  getList():Observable<any>{
    return this.http.get<Clientsservicesfull>(`${this.apiUrl}GetClientsServices`).pipe(catchError((error:
      HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }
  //GET ONE *Model FULL
  find(PpcsId:number):Observable<any>{
    return this.http.get<Clientsservicesfull>(`${this.apiUrl}GetClientsServices` + PpcsId).pipe(catchError((error:
      HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }
  //ADD
  add(clients:Clientsservices):Observable<any>{
    return this.http.post<Clientsservices>(`${this.apiUrl}NewClientsServices`, clients).pipe(catchError((error:
      HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }
  //UPDATE
  update(clients:Clientsservices):Observable<any>{
    return this.http.patch<Clientsservices>(`${this.apiUrl}UpdateClientsServices`, clients).pipe(catchError((error:
      HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }
}
