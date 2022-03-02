function teste1(num) {
    if (num > 7) //se houver apenas um código para o if, os {} são opcionais
        console.log(num)
        
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7)/*;*/ { // cuidado com os ';'
        console.log(num)
    }
}

teste2(6)
teste2(8)
