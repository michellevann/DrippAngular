import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { LoginUser } from '../models/LoginUser';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';


const Api_Url = 'https://localhost:44311';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
  

  constructor(private _http: HttpClient, private _router: Router) { }

  login(loginInfo: LoginUser){
    return this._http.post(`${Api_Url}/api/Auth/Login`, loginInfo).subscribe( (token: any) => {
      localStorage.setItem('id_token', token.token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/painting/index']);
    });
  }

currentUser(): Observable<Object> {
  if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

  return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() });
}

logout(): Observable<Object> {
  localStorage.clear();
  this.isLoggedIn.next(false);
  const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);

  this._http.post(`${Api_Url}/api/Auth/Logout`, {headers: authHeader});
  this._router.navigate(['/admin'])
  window.location.reload();

  return this._http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() } );
}

private setHeader(): HttpHeaders {
  return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
}
}


