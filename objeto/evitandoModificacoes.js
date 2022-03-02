// Object.preventExtensions
// Nao permite adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // sera' ignorado por conta do Object.preventExtensions
delete produto.tag // Apesar do Object.preventExtensions, e' permitido deletar 
console.log(produto)

// Object.seal: nao e' possivel adicionar e remover atributos, mas e' possivel modificar nos existentes
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa), 'Extensivel: ', Object.isExtensible(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze: selado + valores constantes
