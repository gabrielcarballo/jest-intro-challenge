/* eslint-disable no-unused-vars */

const vqv = (string, number) => {
  if (typeof string === 'undefined' || typeof number === 'undefined') {
    return undefined;
  }
  return `Oi, meu nome é ${string}!
Tenho ${number} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};

module.exports = vqv;
