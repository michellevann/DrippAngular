import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://dripp-web-api.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private _http: HttpClient) { }

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
}
