import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../../models/card.model';
@Component({
  selector: 'app-lista-coberturas',
  templateUrl: './lista-coberturas.component.html',
  styleUrls: ['./lista-coberturas.component.scss'],
})
export class ListaCoberturasComponent implements OnInit {
  @Input() cardInput: CardModel[] = [];

  cardForm: CardModel[] = [];

  constructor() {}

  ngOnInit(): void {}

  changes(e: CardModel) {
    if (
      this.cardForm.findIndex((el: any, index) => {
        if (el.id_cobertura === e.id_cobertura) {
          this.cardForm.splice(index, 1);
        }
      })
    )
      this.cardForm.push({
        id_cobertura: e.id_cobertura,
      });
    // localStorage.setItem('Questionario-imovel', JSON.stringify(this.cardForm));
    console.log(e);
  }
}
