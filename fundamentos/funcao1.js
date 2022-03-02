// Função sem retorno em JS
function imprimirSoma(a, b){ // 'a' e 'b' são os parâmetros da função e podem ser de qualquer tipo
    console.log(a + b)
}

// se 'a' e 'b' forem strings, a função irá concatenar, se forem inteiros irá somar, e assim por diante...

imprimirSoma(2, 3)

imprimirSoma(2) // apesar da função receber dois parâmetros, podemos passar apenas um, o outro será undefined

imprimirSoma(2, 10, 4, 5, 6, 7, 8) // a função irá utilizar os dois primeiros parâmetros e ignorar o resto

imprimirSoma() // podemos não passar nenhum parâmetro, e não irá gerar erro

// Função com retorno em JS
function soma(a, b = 1) { // 'b', por padrão, é 1 quando o valor de 'b' não é passado
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // NaN, pois vai tentar somar undefined com b = 1