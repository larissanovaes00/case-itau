import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class SimulationService {

  BASE_URL = 'http://localhost:5001';

  constructor(private httpClient: HttpClient) { }

  getSimulation(){
    return this.httpClient.get(`${this.BASE_URL}/simulation`);
  }

  requirementSimulation() { };


}
