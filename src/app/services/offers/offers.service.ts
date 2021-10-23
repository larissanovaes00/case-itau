import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class OfertasService {

  BASE_URL = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }

  getOfertas(){
    return this.httpClient.get(`${this.BASE_URL}/offers-residential`);
  }

}
