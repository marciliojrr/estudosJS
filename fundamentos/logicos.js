function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // 'ou'
    const comprarTv50 = trabalho1 && trabalho2 // 'e'
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //xor simulado
    const manterSaudavel = !comprarSorvete // 'negação'

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // não é necessário criar da forma par 'chave: valor'. mas essa forma reduzida também funciona como par chave: valor, internamente
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
