const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
// Chamando as funções e as invocando
funcs[2]() // resultado: 10
funcs[8]() // resultado: 10
