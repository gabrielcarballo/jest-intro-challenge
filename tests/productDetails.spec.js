const productDetails = require("../src/productDetails");
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Teste se productDetails é uma função", () => {
    expect(typeof productDetails).toBe("function");
  });
  it("Teste se o retorno da função é um array", () => {
    expect(Array.isArray(productDetails())).toBe(true);
  });

  it("Teste se o array retornado pela função contém dois itens dentro", () => {
    expect(productDetails().length).toBe(2);
  });

  it("Teste se os dois itens dentro do array retornado pela função são objetos", () => {
    expect(typeof productDetails()[0]).toBe("object");
    expect(typeof productDetails()[1]).toBe("object");
  });

  it("Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si", () => {
    if (productDetails[0] !== productDetails[1]) {
      expect(productDetails()[0].not.toBe(productDetails()[1]));
    }
  });

  it("Teste se os dois productIds terminam com 123", () => {
    const id = Object.values(productDetails()[1]);
    const id1 = Object.values(id[1]);
    const place = id1.length;
    expect(id1[place - 1]).toMatch("3");
    expect(id1[place - 2]).toMatch("2");
    expect(id1[place - 3]).toMatch("1");
  });
});
// ESCREVA SEUS TESTES ABAIXO:
// Teste se productDetails é uma função.
// Teste se o retorno da função é um array.
// Teste se o array retornado pela função contém dois itens dentro.
// Teste se os dois itens dentro do array retornado pela função são objetos.
// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
// Teste se os dois productIds terminam com 123.
