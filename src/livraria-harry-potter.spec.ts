import { Livro } from './livraria-harry-potter';
import { Pedido } from './pedido';

describe('Testes de descontos', () => {
  it('Qualquer livro deve custar 42 reais', () => {
    const precoDeVenda = 42;
    const livro = new Livro();

    const precoLivro = livro.valor;

    expect(precoLivro).toEqual(precoDeVenda);
  });

  it('Na compra de dois livros, recebem 5% de desconto', () => {
    const livro = new Livro();
    const livro2 = new Livro();
    const pedido = new Pedido();
    const valorDoPedidoEsperado = (livro.valor + livro2.valor) / 1.05;

    pedido.add(livro);
    pedido.add(livro2);

    expect(pedido.valor).toEqual(valorDoPedidoEsperado);
  });

  it('Na compra de três livros, recebem 10% de desconto', () => {
    const livro = new Livro();

    const livro2 = new Livro();
    const livro3 = new Livro();
    const pedido = new Pedido();
    const valorDoPedido = (livro.valor + livro2.valor + livro3.valor) / 1.1;
    pedido.add(livro);
    pedido.add(livro2);
    pedido.add(livro3);

    expect(pedido.valor).toEqual(valorDoPedido);
  });
});
