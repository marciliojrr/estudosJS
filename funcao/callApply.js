function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const Produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log('Usando dados do contexto global', getPreco())

console.log('Usando "Produto" como contexto', Produto.getPreco())

// CALL e APPLY

const carro = { preco: 49990, desc: 0.2 }
console.log(getPreco.call(carro))

console.log(getPreco.apply(carro))

/*
CALL
console.log(funcao.call(contexto, 1o. parametro que sera passado para a funcao, 2o. param, ...))

APPLY
console.log(funcao.apply(contexto, [1o. parametro que sera passado para a funcao, 2o. param, ...]))
*/

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
