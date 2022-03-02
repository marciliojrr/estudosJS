// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 // caso a primeira parte da operação seja false, assume o valor 1 (que serve como "padrão")
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
// soma1(0, 0, 0) dá errado, uma vez que '0' retorna false

// Estratégias 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se usar '!=', o null também seria pego
    b = 1 in arguments ? b : 1  // param 'b' foi passado? se sim, use 'b', se não, use 1 | uso: indice de arguments ? param : valor padrão
    c = isNaN(c) ? 1 : c        // se c for NaN, use 1, se não, use 'c'

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão do ES2015(ES6)

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))