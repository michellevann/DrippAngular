import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  search(data) {
    return this._http.get(`${APIURL}/api/${data}`);
  }  
  createPurchaseToken(purchase: FormData) {
    return this._http.post(`${APIURL}/Purchase/CreateCharge`, purchase, { headers: this.getHeaders()});
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token_token')}`);
  }
}
