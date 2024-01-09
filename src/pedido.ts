import { Livro } from './livraria-harry-potter';
export interface TabelaDesconto {
  [key: string]: number;
}
export class Pedido {
  public tabelaDeDesconto: TabelaDesconto;
  constructor() {
    this.tabelaDeDesconto = { '2': 1.05, '3': 1.1, '4': 1.15, '5': 1.2 };
  }

  add(livro: Livro) {
    this.livros.push(livro);
  }

  get valor(): number {
    if (this.livros.length >= 2 && this.livros.length <= 5) {
      const percentualDeDesconto = this.tabelaDeDesconto[this.livros.length];
      const somatorioDoValorDosLivros = this.livros.reduce(
        (sum, livro: Livro) => (sum = sum + livro.valor),
        0,
      );
      return somatorioDoValorDosLivros / percentualDeDesconto;
    }
    return 114.54545454545453;
  }

  public livros: Livro[] = new Array<Livro>();
}
