import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../../src/environments/environment.prod';

const ApiUrl = 'https://localhost:44311/api';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private _http: HttpClient) { }
  search(data) {
    return this._http.get(`${APIURL}/api/${data}`);
  }

  getPurchases() {
    return this._http.get(`${ApiUrl}/Purchase`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token_token')}`);
  }
  getPurchaseById(id:string) {
    return this._http.get(`${ApiUrl}/Purchase/${id}`, { headers: this.getHeaders() } );
  }
  deletePurchase(id: number) {
    return this._http.delete(`${ApiUrl}/Purchase/${id}`, { headers: this.getHeaders() });
  }
  getPaintingById(id:string){
    return this._http.get(`${ApiUrl}/Painting/${id}`, { headers: this.getHeaders() });
  } 
}
