import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  
  authenticate(options) : any {
    
  return this.http.post('http://192.168.70.24:8180/auth/realms/BayCorr/protocol/openid-connect/token' + '?testuser=password', options.params);
  }

  
  isUserLoggedIn() {
    let user = localStorage.getItem('token')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    localStorage.removeItem('token')
  }
}
