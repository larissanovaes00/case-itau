import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
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

  question: any;
  answers = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe((e) => {
      this.question = e;
      this.answers = e.respostas;
      //   this.answers = i.texto_resposta;
      // });
      console.log(e);

      //console.log(this.answers);
    });
    console.log(this.answers);
  }

  reset = () => {
    console.log('reset');
  };
}
