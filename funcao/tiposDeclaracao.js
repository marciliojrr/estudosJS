// Function declaration - será carregada em memória antes, dessa forma, podemos criar um código usando essa função mesmo antes da declaração dela
console.log(soma(3, 4)) // não dará erro
function soma (x, y) {
    return x + y
}

// Function expression - a função só poderá ser usada depois da declaração da função
// console.log(sub(3, 4)) - erro
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// Named Function Expression - ajuda na hora de debugar, mas é pouco usada. - a função só poderá ser usada depois da declaração da função
// console.log(mult(3, 4)) - erro
const mult = function mult (x, y) {
    return x * y
}
console.log(mult(3, 4))

