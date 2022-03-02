function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

// Podemos reescrever da seguinte maneira o código acima:
/*
function criarProduto(nome = 'nome', preco = 0) {
    return {
        nome,
        preco,
        desconto = 0.1
    }
}
Podemos substituir (nome: nome) por somente nome. Visto que são os mesmos nomes dos parâmetros da função
*/

console.log(criarProduto('Notebook', 2199,49))
console.log(criarProduto('iPad', 1199,49))
