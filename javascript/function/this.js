//! THIS
//* o this (isto) pode mudar pra onde está apontando dependendo de como ele foi chamado
//* Por isso devemos prestar bastante atenção no contexto em que o this for declarado 

//? Exemplo mostrando o this em prática
const Pessoa = {
    nome: 'Pedro',
    idade: 18,
    nota: 9.8,
    falarNota() {
        console.log(`Olá ${this.nome}, sua nota foi ${this.nota}`)
        console.log(Pessoa === this) //vai retornar true, pois aponta para o objeto Pessoa
    }
}
Pessoa.falarNota()
console.log(Pessoa === this) //vai retornar false, já que aqui o this aponta para um escopo global

//? Exemplo onde o this varia de acordo com o objeto em que ele foi chamado

function estado() {
    console.log(`${this.nome} está ${this.barulho}.....`)
}

const Cachorro = {
    nome: 'Doug',
    raca: 'Poodle',
    barulho: 'latindo',
    estado
}

const Gato = {
    nome: 'Astrid',
    raca: 'Persa',
    barulho: 'miando',
    estado
}
Cachorro.estado()
Gato.estado()

//! BIND
//* Serve para "fixar" a referencia do this em algum lugar

function apresentarPessoa() {
    console.log(`Este é o ${this.nome} e ele tem ${this.idade} anos!!`)
}

const apresentar = apresentarPessoa.bind(Pessoa) // atribuição em uma variável usando o bind explícito
apresentar() //chamada da função já com o bind