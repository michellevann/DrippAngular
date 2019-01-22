import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { APIURL } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }
  
  search(data) {
    return this._http.get(`${APIURL}/${data}`);
  }
  getProducts(){
    return this._http.get(`${APIURL}/Products`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
