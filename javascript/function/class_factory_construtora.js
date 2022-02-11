//! Criando uma Pessoa usando Classe

class Pessoa1 {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log("Meu nome é " + this.nome)
    }
}
const p1 = new Pessoa1('João')
p1.falar()

//! Criando uma Pessoa usando Factory
//* Usando a factory, o this não muda, diferente da classe que o this pode variar

const Pessoa2 = nome => {
    return {
        falar: () => console.log('Meu nome é ' + nome)
    }
}
const p2 = Pessoa2('Pedro')
p2.falar()

//! Transformando Classe em função construtora

function Pessoa3(nome){
    this.nome = nome
    this.falar = function(){ console.log('Meu nome é '+ this.nome)}
}
const p3 = new Pessoa3('Paulo') //instaciando 
p3.falar()