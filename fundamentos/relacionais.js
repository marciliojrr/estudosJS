console.log('01)', '1' == 1)  // Resultado: true, pois está comparando apenas o valor e não os tipos
console.log('02)', '1' === 1) // Resultado: false, pois está comparando os tipos
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
// No caso 9 e caso 10, tanto faz usar '==' ou '===', pois está sendo criada uma constante que referência uma posição de memória.

console.log('11)', d1.getTime() === d2.getTime()) // true, pois possuem o mesmo tipo e o mesmo valor

console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false
// Melhor prática é usar o estritamente igual '==='
