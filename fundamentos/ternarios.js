//                        |        Operador ternário          |
//                        |expressão |  se true  |  se false  |
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

/*
* Pode-se escrever essa função arrow da seguinte forma, também:
* const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/

console.log(resultado(7.1)) // 'Aprovado'
console.log(resultado(6.7)) // 'Reprovado'
