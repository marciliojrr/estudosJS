const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}
// Repetiriamos demais caso fossemos criar vários produtos, o que não é interessante.

// *** Função factory é uma função que retorna um objeto *** (não se usa new para um novo objeto)
// Dentro do objeto retornado, podemos retornar não somente dados, mas também funções, por exemplo.
// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
console.log(criarPessoa())