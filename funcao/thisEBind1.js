const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Erro
/*
/ A linha 11 dá erro pois 'saudacao' está apontando agora para um this diferente, que não
/ é mais o objeto 'pessoa'. 
/ Na chamada de função da linha 11, o objeto não tem 'saudacao' dentro dele e esse é o
/ motivo do resultado ser undefined.
/ Assim, temos um conflito entre o Programação OO e a programação funcional.
/ Em resumo: a linha 11 não está chamando a função falar, a partir do contexto 'pessoa'.
*/

const falarDePessoa = pessoa.falar.bind(pessoa)
/*
/ Usando o bind() e passando como argumento o objeto ao qual você quer que seja resolvido o this.
/ Nesse caso, é 'pessoa'.
*/
falarDePessoa()