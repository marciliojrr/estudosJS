function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa
/*
/ Diferente do erro dado quando este exemplo foi feito
/ no arquivo thisEBind2.js, aqui não temos erro pois
/ o fato de usar uma Arrow Function, amarra o this ao
/ contexto usado durante a criação. Neste caso "Pessoa".
/ Desta forma, mesmo que quem esteja chamando o this seja
/ um temporizador, o this associado continua sendo o de Pessoa,
/ e assim, não apresentando o erro visto anteriormente.
*/

