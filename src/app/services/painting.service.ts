import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Painting } from '../models/Painting';

const ApiUrl = 'https://localhost:44311';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  
  constructor(private _http: HttpClient) { }

  getPainting() {
    return this._http.get(`${ApiUrl}/Painting`, { headers: this.getHeaders() });
  }
  getPaintingById(id:string){
    return this._http.get(`${ApiUrl}/Painting/${id}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  createPainting(painting: Painting) {
    return this._http.post(`${ApiUrl}/Painting`, painting, { headers: this.getHeaders()});
  }
  updatePainting(painting: Painting){
    return this._http.put(`${ApiUrl}/Painting`, painting, { headers: this.getHeaders() });
  }
  deletePainting(id: number) {
    return this._http.delete(`${ApiUrl}/Painting/${id}`, { headers: this.getHeaders() });
  }
}

