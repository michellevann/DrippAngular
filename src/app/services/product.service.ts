import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';
const ApiUrl = 'https://dripp-web-api.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }
  search(data) {
    return this._http.get(`${APIURL}/api/${data}`);
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token_token')}`);
  }

  createPurchaseToken(purchase: FormData) {
    var post = this._http.post(`${ApiUrl}/Purchase/CreateCharge`, purchase, { headers: this.getHeaders()});
    console.log("Post:", post);
    
    return post;
  }

}
