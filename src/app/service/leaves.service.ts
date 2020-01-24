import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILeave } from '../leave';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  private _url: string='http://192.168.70.44:8080/leaves/leaves';
 
  private options: any;
  
  
  constructor(private http:HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + (JSON.parse(window.localStorage.getItem('token')).access_token),
        contentType: 'application/x-www-form-urlencoded'
      })
    }
    // this.options = {
    //   headers : new HttpHeaders().append(
    //     'Authorization', 'Bearer ' + btoa(JSON.parse(window.localStorage.getItem('token')).access_token))
    //     .append('Content-type', 'application/x-www-form-urlencoded')
    //   }
  }

  // getleaves(): Observable<ILeave[]>
  getleaves(): Observable<any>
  {
    return this.http.get<ILeave[]>(this._url, this.options).pipe(catchError(this.errorHandler)); 
  }

  errorHandler(error: HttpErrorResponse){
    console.log(error);
    return ObservableThrowError (error.message || "Server Error");
}
}
