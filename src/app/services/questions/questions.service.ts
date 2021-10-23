import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class QuestionsService {

  BASE_URL = 'http://localhost:5002';

  constructor(private httpClient: HttpClient) { }

  getQuestions(){
    this.httpClient.get(`${this.BASE_URL}/questions`);
  }
}
