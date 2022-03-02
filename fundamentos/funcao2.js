// Armazenando uma função em uma variável
const imprimirSoma = function(a, b) { // esta é uma função anônima
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável (forma reduzida de construir uma função)
const soma = (a, b) => { // '=>' substitui a palavra 'function'
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal')