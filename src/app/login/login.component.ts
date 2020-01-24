import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''
  invalidLogin = false


  constructor(private router: Router,
    private loginservice: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit() {
  
  }

  checkLogin() {
    
    const options = {

      params: new HttpParams().set('client_id', 'baycorr-app').
        set('client_secret', '4147c913-a62c-425f-9c67-c0b6da085b7e').
        set('username',this.loginForm.controls.email.value).
        set('password',this.loginForm.controls.password.value).
        set('grant_type','password')
    }
    
    this.loginservice.authenticate(options).subscribe(response => {
        window.localStorage.setItem('token',JSON.stringify(response));
        console.log(window.localStorage.getItem('token'));
        this.router.navigate(['dashboard1']);
      }, error => {
        console.log('error');
        console.log(error);
      });
     
  }

  get passWord() {
    return this.loginForm.get('password');
  }

  loginForm = this.fb.group({
    email : ['', Validators.required],
    password : ['', [Validators.required, Validators.minLength(8)]]

  })
  
  

  }