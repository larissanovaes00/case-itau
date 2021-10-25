import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answers } from './../../models/answers.model';
import { Question } from './../../models/question.model';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent implements OnInit {
  @Input() question: Question = {
    id_questao: '',
    texto_questao: '',
    respostas: [],
  };

  @Output() value = new EventEmitter();

  @Input() answers: Answers[] = [];

  onchange = (event: any) => {
    this.value.emit(event);
  };

  ngOnInit(): void {}
}
