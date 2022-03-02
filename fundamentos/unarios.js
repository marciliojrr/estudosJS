let num1 = 1
let num2 = 2

console.log(num1)

num1++ // acrescenta uma unidade. forma pós-fixada
console.log(num1)

--num1 // forma pré-fixada
console.log(num1)

console.log(++num1 === num2--) // true, pois o incremento foi feito antes da comparação e o decremento só depois da comparação
