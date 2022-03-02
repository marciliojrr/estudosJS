/*
Hoisting significa içamento.
As declarações das variáveis com 'var', são colocadas para cima, no código.
O código abaixo está sendo formatado da seguinte forma:
    var a
    console.log('a = ', a)
    a = 2
    console.log('a = ', a)
*/

console.log('a = ', a)
var a = 2
console.log('a = ', a)

// Também funciona dentro de funções
// Não é uma boa prática

console.log('b = ', b) // Erro
let b = 2
console.log('b = ', b)