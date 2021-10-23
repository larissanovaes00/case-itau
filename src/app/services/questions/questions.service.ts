import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  BASE_URL = 'http://localhost:5002';

  constructor(private httpClient: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/questions`);
  }
}
