import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Answers } from 'src/app/models/answers.model';
import { Question } from './../../models/question.model';
import { QuestionsService } from './../../services/questions/questions.service';

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

  imgUrl =
    'https://itau-mkt-place-seguros.s3-sa-east-1.amazonaws.com/images/residencial/ilustracoes/incendio.svg';
  title = 'incêndio, explosão, implosão, fumaça e queda de aeronave';

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
