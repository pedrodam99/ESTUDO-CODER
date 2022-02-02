//DESTRUCTURING
//Serve para extrair dados de Arrasys e de objetos

//exemplo dde destructuring em um objeto

const codigofontetv = {
    nome: "Codigo Fonte TV",
    subs: "380 mil",
    views: "18 Milhões"
}
const {nome: titulo, subs: inscritos, views} = codigofontetv //podemos trocar o nome da chave 
console.log(titulo, inscritos)

//usando destructuring em objetos aninhados
const Pessoa = {
    nome: 'Romeu',
    sobrenome: 'Pereira',
    endereco: {
        rua: 'Rua Santa Helena',
        numero: 435,
        complemento: 'Proximo da farmacia'
    }
}
const {nome, endereco: {rua}} = Pessoa
console.log(nome, rua)

//usando destructuring em array usando o spreed
//a ordem define em qual variavel o valor vai ser atribuido

const times = ['Corinthians', 'Santos', 'Palmeiras', 'Flamengo', 'Fluminense', 'São Paulo', 'Vasco']
let [primeiro, segundo, terceiro, quarto, ...outG4] = times

console.log(primeiro, segundo, terceiro, quarto, outG4);


//Podemos fazer o swap de maneira bem mais facil usando o destructuring, sem usar variavel AUX
[primeiro, segundo] = [segundo, primeiro]
console.log(primeiro, segundo, terceiro, quarto, outG4);
