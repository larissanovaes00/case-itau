import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { Answers } from './../../models/answers.model';
import { Questions } from './../../models/question.model';
import { QuestionsService } from './../../services/questions/questions.service';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-stepper-cotacao',
  templateUrl: './stepper-cotacao.component.html',
  styleUrls: ['./stepper-cotacao.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: false },
    },
  ],
})
export class StepperCotacaoComponent implements OnInit {
  h1Text = 'quer saber quanto custa seu seguro?';
  h1TextSecondary = 'comece respondendo as perguntas abaixo e descubra :)';

  questions: Questions[] = [];
  answers: Answers[] = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {

    return this.questionsService.getQuestions()
    .pipe(
      map(res => {
          this.questions = res;
          this.answers = res.map(e => e.respostas) as Answers[];
      })
    ).subscribe()

  }

  reset = () => {
    console.log('reset');
  };
}
