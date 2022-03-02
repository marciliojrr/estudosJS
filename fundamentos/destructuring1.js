// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// const { atributos que deseja copiar os valores } = objeto onde está os atributos
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // 'sobrenome' e 'bemHumorada' não existem; 'sobrenome' retornará 'undefined' e bemHumorada retornará 'true', que foi setada manualmente
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
//Irá criar as variáveis logradouro, numero e cep do objeto 'pessoa' que está dentro da chave 'endereco'
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa // Erro! Pois não existe nem atributo 'conta', muito menos 'ag' ou 'num'
//Somente o último elemento pode ser nulo ou undefined. Todo o caminho até este dado precisa existir.

