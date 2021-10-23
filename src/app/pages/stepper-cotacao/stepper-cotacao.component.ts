import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { Answers } from './../../models/answers.model';
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

  questions: Question[] = [];
  answers: Answers[] = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe((e: Question[]) => {
      this.questions = e;
      e.map((e) => console.log('===>>>>', e.respostas));
    });
    console.log(this.answers);
  }

  reset = () => {
    console.log('reset');
  };
}
