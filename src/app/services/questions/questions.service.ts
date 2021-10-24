import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from 'src/app/models/question.model';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  BASE_URL = 'http://localhost:5002';

  constructor(private httpClient: HttpClient) {}

  getQuestions(): Observable<Questions[]> {
    return this.httpClient.get<Questions[]>(`${this.BASE_URL}/questions`);
  }
}
