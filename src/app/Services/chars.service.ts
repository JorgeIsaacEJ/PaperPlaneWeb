import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Pie, Point } from '../Interfaces/chars';

@Injectable({
  providedIn: 'root'
})
export class CharsService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "api/Paper/"

  constructor(private http:HttpClient) { }

  getListServices():Observable<any>{
    return this.http.get<Pie>(`${this.apiUrl}GetServicesChar`);
  }

  getListSales():Observable<any>{
    return this.http.get<Point>(`${this.apiUrl}GetSalesChar`);
  }

  getListGoals(year: number):Observable<any>{
    return this.http.get<Point>(`${this.apiUrl}GetGoalsChar?year=`+ year);
  }
}
 