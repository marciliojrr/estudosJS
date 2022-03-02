const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro' // E' possivel, pois estamos alterando o conteudo da constante, e nao a variavel em si. A constante aponta para uma posicao de memoria.
console.log(pessoa)

//pessoa = { nome: 'Ana' } // Erro! Pois estamos tentando alterar a constante em si, nao seu conteudo. Estaria tentando atribuir outro valor de memoria para a constante que ja existe.

Object.freeze(pessoa)
pessoa.nome = 'Maria' // Comando ignorado, pois agora o objeto esta congelado.
pessoa.end = 'Rua ABC' // Comando ignorado, pois agora o objeto esta congelado.
delete pessoa.nome // Comando ignorado, pois agora o objeto esta congelado.
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'})
console.log(pessoaConstante)