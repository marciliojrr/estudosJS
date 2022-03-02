function tratarErroELancar(erro) {
    //throw new Error('Ih mané... deu ruim, ó...')
    //throw 10
    //throw 'mensagem'
    /*throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }*/
    throw 'Ih mané... deu ruim, ó...'
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)
