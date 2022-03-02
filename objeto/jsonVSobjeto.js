const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(JSON.stringify(obj)) // a funcao nao sera incluida, pois JSON e' apenas para dados | Objeto para JSON
//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // erro
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // erro
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // valido! observe as aspas simples e duplas!

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) // JSON para Objeto
