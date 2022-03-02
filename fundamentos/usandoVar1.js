{ { { { var sera = 'Será???' } } } }
console.log(sera) // É possível pegar o valor da variável 'sera', pois ainda que esteja dentro de blocos de cód., não está dentro de uma função

function teste(){
    var local = 123
}

teste()
console.log(local) /* Não será possível pegar o valor da variável 'local', 
                    pois esta se encontra dentro de uma função. Seu escopo é apenas dentro da função */

/*
'var' só tem dois escopos possíveis, global ou dentro de uma função.
Evitar usar muitas variáveis globais.
*/

