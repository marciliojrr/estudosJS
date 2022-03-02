const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
// Chamando as funções e as invocando
funcs[2]() // resultado: 2
funcs[8]() // resultado: 8
funcs[6]() // resultado: 6
