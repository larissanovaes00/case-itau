import { Component, Input, OnInit } from '@angular/core';
import { Answers } from './../../models/answers.model';
import { Questions } from './../../models/question.model';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent implements OnInit {
  @Input() question: Questions = { id_questao: '' , texto_questao: '', respostas: [] };
  @Input() answers: Answers[] = [];

  constructor() { }

  ngOnInit(): void {}
}
