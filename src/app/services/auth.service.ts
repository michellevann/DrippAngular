import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { LoginUser } from '../models/LoginUser';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { APIURL } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, 
    private _router: Router,
    private _jwtHelperService: JwtHelperService
    ) { }
   
    search(data) {
      return this._http.get(`${APIURL}/api/${data}`);
    }

  loggedIn(){
    const token = localStorage.getItem('id_token');
    return !this._jwtHelperService.isTokenExpired(token);
  } 

  login(loginInfo: LoginUser){
    return this._http.post(`${APIURL}/api/Auth/Login`, loginInfo).subscribe( (token: any) => {
      localStorage.setItem('id_token', token.token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/painting/index']);
    });
  }

currentUser(): Observable<Object> {
  if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

  return this._http.get(`${APIURL}/api/Account/UserInfo`, { headers: this.setHeader() });
}

logout()  {
  localStorage.clear();
  this.isLoggedIn.next(false);
  const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);

  this._http.post(`${APIURL}/api/Auth/Logout`, {headers: authHeader});
  this._router.navigate(['/admin'])
  window.location.reload();
}

private setHeader(): HttpHeaders {
  return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
}
}


