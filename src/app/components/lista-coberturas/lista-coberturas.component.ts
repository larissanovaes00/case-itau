import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-coberturas',
  templateUrl: './lista-coberturas.component.html',
  styleUrls: ['./lista-coberturas.component.scss'],
})
export class ListaCoberturasComponent implements OnInit {
  imgUrl =
    'https://itau-mkt-place-seguros.s3-sa-east-1.amazonaws.com/images/residencial/ilustracoes/incendio.svg';
  title = 'incêndio, explosão, implosão, fumaça e queda de aeronave';

  constructor() {}

  ngOnInit(): void {}

  navigateForm = () => {};
}
