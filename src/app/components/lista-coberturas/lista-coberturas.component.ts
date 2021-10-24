import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../../models/card.model'
@Component({
  selector: 'app-lista-coberturas',
  templateUrl: './lista-coberturas.component.html',
  styleUrls: ['./lista-coberturas.component.scss'],
})
export class ListaCoberturasComponent implements OnInit {

  @Input() cardInput: CardModel[] = [];

  constructor() {}

  ngOnInit(): void { }

}
