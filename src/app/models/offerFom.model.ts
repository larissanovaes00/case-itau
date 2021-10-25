export class Product {
  assistencias?: Assistencias[];
  coberturas?: Cobertura[];
  id_produto?: string;
  importancia_base?: number;
}

export class Cobertura {
  id_cobertura?: string;
  importancia_segurada?: number;
}

export class Assistencias {
  id_assistencia?: string;
}
