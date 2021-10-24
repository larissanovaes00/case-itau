import { Answers } from './answers.model';

export class Questions {
  id_questao: string | undefined;
  respostas: Answers[] | undefined;
  texto_questao: string | undefined;
}
