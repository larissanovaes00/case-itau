import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  reset = () => {
    console.log('reset');
  };
}
