// PEQUENA REVISÃO SOBRE REFERÊNCIA //

/*
* A constante a não armanzena o objeto {name: 'Teste'},
* e sim o endereço de memória deste objeto.
*/
const a = {name: 'Teste'}
console.log(a)

/*
* Ao realizar a atribuiçao const b = a, não estamos
* copiando para b o objeto {name: 'Teste'} e sim
* estamos copiando o endereço de memória contido em a,
* que por sua vez, é o endereço do objeto.
* Por isso, quando alteramos o objeto a partir de b,
* podemos ver a alteraçao a partir do a.
*/
const b = a // Isto é uma atribuição por referência
console.log(b)

b.name = 'Olá'

console.log(a)

let c = 3 // Como c recebe um tipo primitivo (int), esta cópia é dita 'cópia' por valor
let d = c
d++

console.log(d)
console.log(c)
 //-----------------------------------
 // Agora, conceito de null e undefined

 let valor // variável não inicializada
 console.log(valor)
 //console.log(valor2) // ReferenceError: valor2 is not defined: significa que nem foi declarado, o que é diferente de undefined.

 valor = null // ausência de valor... não aponta para nada na memória

 console.log(valor)

 // console.log(valor.toString()) // Erro!

 const produto = {}
 console.log(produto.preco) // Não gera erro, pois produto existe, o que não existe é o atributo preco

 console.log(produto)
 produto.preco = 3.50
 console.log(produto)

 produto.preco = undefined // evitar atribuir undefined
 console.log(!!produto.preco)
 console.log(produto)

 produto.preco = null // sem preço
 console.log(!!produto.preco)
 console.log(produto)