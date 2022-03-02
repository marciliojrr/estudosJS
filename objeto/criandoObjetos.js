// criando usando a notacao literal (nao eh json!!)
const obj1 = {}
console.log(obj1)

// criando a partir do Object
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// criando atraves de funcoes construtoras proprias
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () =>  {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// criando a partir de uma Funcao Factory usando a notacao literal
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// criando objetos a partir do Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// criando a partir do json.parse, que transforma um json em um objeto
// json e' uma string!!
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)