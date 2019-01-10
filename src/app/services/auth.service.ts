import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient } from '@angular/common/http';
import { Token } from '../models/Token';
import { LoginUser } from '../models/LoginUser';
const Api_Url = 'https://localhost:44311';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(regUserData: RegisterUser){
    console.log(regUserData)
    return this._http.post(`${Api_Url}/api/Auth/Register`, regUserData);
  }

  login(loginInfo: LoginUser){


    return this._http.post(`${Api_Url}/api/Auth/Login`, loginInfo).subscribe( (token: any) => {
      localStorage.setItem('id_token', token.token);
    });
  }
}
