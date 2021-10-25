import { Cobertura } from './offerFom.model';
export class CardModel {
  id_cobertura?: string | undefined;
  nome?: string;
  descricao?: string;
  resumo?: string;
  cobertura_obrigatoria?: boolean;
  imagem_uri?: string;
  identificador?: string;
  importancia_segurada?: Cobertura[];
  importancias_segurada?: number;
  nao_incluso?: string;
  dependencias?: string;
  ocultar_descricao?: boolean;
}

export class ISegurada {
  tipo?: string;
  minimo?: number;
  maximo?: number;
  incremento?: number;
  valor_sugerido?: IValorSugerido[];
}

export class IValorSugerido {
  tipo_imovel?: number;
  valor?: number;
}
