import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../../models/card.model'
@Component({
  selector: 'app-lista-coberturas',
  templateUrl: './lista-coberturas.component.html',
  styleUrls: ['./lista-coberturas.component.scss'],
})
export class ListaCoberturasComponent implements OnInit {
  @Input() cardInput: CardModel[] = [];

  imgUrl =
    'https://itau-mkt-place-seguros.s3-sa-east-1.amazonaws.com/images/residencial/ilustracoes/incendio.svg';
  title = 'incêndio, explosão, implosão, fumaça e queda de aeronave';

  constructor() {}

  ngOnInit(): void {
    console.log(this.cardInput);

  }

}
