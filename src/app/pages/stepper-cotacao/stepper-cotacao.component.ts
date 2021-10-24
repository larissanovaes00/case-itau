import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Component({
  selector: 'app-stepper-cotacao',
  templateUrl: './stepper-cotacao.component.html',
  styleUrls: ['./stepper-cotacao.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: false },
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
    },
  ],
})
export class StepperCotacaoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  reset = () => {};
}
