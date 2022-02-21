//! METODO MAP
//* Esse método serve para transformar um array em outro array, do mesmo tamanho
//* Dentro do map existe um laço dentro dele
//* Recebe os mesmos três parametros do forEach

const nums = [1, 2, 3, 4]

let dobro = nums.map((value) => {
    return value * 2 
})
console.log ('quadrado = ', dobro)

//? Cadeia Maps

//* Aqui temos bem mais código declarando a function callback dentro do .map
let resultado1 = nums.map((value) => {
    return value + 10
}).map((value) => {
    return value * 3
}).map((value) => {
    return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`
})
console.log(resultado1)

//* Declarando a função fora do .map
const soma10 = (value) => value + 10
const triplo = (value) => value * 3
const paraDinheiro = (value) => `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`

let resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado2)