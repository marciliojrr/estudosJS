function soma() {
    let soma = 0
    for (let i in arguments) { // arguments é um array interno que contém todos os argumentos que foram passados, ainda que na declaração da função, não indique passagem de parametros
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))

