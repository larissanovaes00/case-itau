import { Answers } from './answers.model';

export class Question {
  id_questao?: string;
  respostas?: Answers[];
  texto_questao?: string;
}
