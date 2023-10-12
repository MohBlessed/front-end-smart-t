import { Injectable } from '@angular/core';
import { Garbagept } from '../classes/garbagept';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable({
  providedIn: 'root'
})

export class GarbageServiceService {
  search(searchQuery: string) {
    return this.http.get(`${API_URL}garbage-points?search=${searchQuery}`)  
  }
  getAllGarbagePts() {
    return this.http.get(`${API_URL}all`);
  }
  constructor(private http: HttpClient) {}


  postAll(garbagept: Garbagept) {
    return this.http.post(`${API_URL}add`, garbagept,httpOptions);
  }
  updategarbagept(id: number, garbagept: Garbagept) {
    return this.http.put(`${API_URL}users/update/`+id, garbagept);
  }
  getGarbagePoints(id: number) {
    return this.http.get(`${API_URL}`+ id);
  }

}
