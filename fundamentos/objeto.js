// Objeto é uma coleçao de chave: valor
const prod1 = {} // par de chaves representa um objeto de forma literal
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

// O código abaixo se parece com json, mas não é.
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

// Este é um json
'{ "nome": "Camisa Polo", "preco": 79.90 }'

// json não é um objeto, é um elemento textual de um objeto.
console.log(prod2)