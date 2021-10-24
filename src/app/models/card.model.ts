export class CardModel {
  nome?: string;
  descricao?:  string
  resumo?: string;
  cobertura_obrigatoria?: boolean;
  imagem_uri?: string;
  identificador?: string;
  importancias_segurada ?: ISegurada[];
  nao_incluso?: string;
  dependencias?: string;
  ocultar_descricao?: boolean
}

export class ISegurada {
  tipo?: string;
  minimo?: number;
  maximo?: number;
  incremento?: number;
  valor_sugerido?: IValorSugerido[]
}

export class IValorSugerido {
  tipo_imovel?: number;
  valor?: number;
}


