import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
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

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe((e: Question[]) => {
      this.questions = e;
    });
  }

  reset = () => {
    console.log('reset');
  };
}
