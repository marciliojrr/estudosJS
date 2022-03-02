const pai = { nome: 'Pedro', corCabelo: 'preto' }
const filha1 = Object.create(pai) // cria um novo objeto novo tendo como prototipo 'pai'

filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla' // sera' ignorando, pois 'writable' esta' como 'true'

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? // descobre se uma propriedade e' do proprio objeto ou se veio por heranca
        console.log(key) : console.log(`Por heranca: ${key}`)
}
