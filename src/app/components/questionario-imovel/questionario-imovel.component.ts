import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Answers } from 'src/app/models/answers.model';
import { Question } from 'src/app/models/question.model';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-questionario-imovel',
  templateUrl: './questionario-imovel.component.html',
  styleUrls: ['./questionario-imovel.component.scss'],
})
export class QuestionarioImovelComponent implements OnInit {
  questions: Question[] = [];
  answers: Answers[] = [];
  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    return this.questionsService
      .getQuestions()
      .pipe(
        map((res) => {
          this.questions = res;
          this.answers = res.map((e) => e.respostas) as Answers[];
        })
      )
      .subscribe();
  }

  reset = () => {};
}
