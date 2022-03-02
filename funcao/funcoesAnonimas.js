const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { return x - y }) // função anônima
imprimirResultado(3, 4, (x, y) => x * y) // função arrow

const pessoa = {
    falar: function () {
        console.log('Opa...')
    }
}

pessoa.falar() // Acesso a função através de um atributo de um objeto

/*
const pessoa = {
    falar() {
        console.log('Opa...')
    }
}
/ Esta é uma versão mais moderna, suportada pelas versões mais atuais da linguagem.
*/

