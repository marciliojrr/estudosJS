let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}
/*
/ Função arrow é sempre uma função anônima. Se você quiser
/ chamar ela em outro momento, esta função deve estar contida
/ dentro de uma variável.
*/

dobro = a => 2 * a // Função arrow mais simples, com retorno implícito.
/*
/ Se você tiver apenas um parâmetro, pode remover os '()'.
*/
console.log(dobro(Math.PI))

let ola = function() { // Quando utilizadas '{}', obrigatoriamente é preciso usar return
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())

// ola = _ => 'Olá' também é válido
hello = _ => 'Hello'
console.log(hello())