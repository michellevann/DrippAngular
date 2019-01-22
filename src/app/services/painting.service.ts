import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Edit } from '../models/Edit';
import { APIURL } from '../../../src/environments/environment.prod';

const ApiUrl = 'https://localhost:44311/api';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  
  constructor(private _http: HttpClient) { }
  search(data) {
    return this._http.get(`${APIURL}/api/${data}`);
  }

 getPaintings() {
    return this._http.get(`${ApiUrl}/Painting`, { headers: this.getHeaders() });
  }

  getPaintingById(id:string){
    return this._http.get(`${ApiUrl}/Painting/${id}`, { headers: this.getHeaders() });
  } 

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createPainting(painting: FormData) {
    return this._http.post(`${ApiUrl}/Painting`, painting, { headers: this.getHeaders()});
  }
  
  updatePainting(edit: Edit){
    return this._http.put(`${ApiUrl}/Painting/${edit.PaintingEntityId}`, edit, { headers: this.getHeaders() });
  }

  deletePainting(id: number) {
    console.log(id)
    return this._http.delete(`${ApiUrl}/Painting/${id}`, { headers: this.getHeaders() });
  }
}

