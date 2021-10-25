import { Contacts } from './contacts.model';
import { homeAdress } from './home-address.model';
import { Product } from './offerFom.model';
import { Questions } from './questions.model';

export class SubmitForm {
  item_risco?: {
    imovel?: {
      endereco?: homeAdress;
    };
  };
  oferta?: {
    id_oferta?: string;
    produtos?: Product[];
  };
  proponente?: {
    contatos?: Contacts[];
    cpf?: string;
    data_nascimento?: string;
    nome?: string;
  };
  questoes?: Questions[];
}
