import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { map, pluck } from 'rxjs/operators';
import { CardModel } from 'src/app/models/card.model';
import { OfertasService } from 'src/app/services/offers/offers.service';

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
  cards: CardModel[] = [];

  constructor(private offersService: OfertasService) {}

  ngOnInit(): void {
    this.offersService
      .getOfertas()
      .pipe(
        pluck('produtos', '0', 'coberturas'),
        map((res: any) => {
          this.cards = res as CardModel[];
        })
      )
      .subscribe();
  }

  reset = () => {};
}
