//! Funções Importantes de Objetos

//? A palavra "Object" é uma palavra reservada da linguagem que na verdade, é uma função
//? A função "Object" tem diversos métodos interessantes

const pessoa = {
    nome: "Pedro",
    idade: 19,
    telefone:  948564774,
    dataDeNasc: "02/10/2000"
}

//* Formas de ler um conteúdo de um objeto

console.log(Object.keys(pessoa)) // array com apenas chaves
console.log(Object.values(pessoa)) //array com apenas os valores das chaves
console.log(Object.entries(pessoa)[0]) //retorna um array com todas as entradas

//* definePropery serve para definir caracteristicas especificas de um obj (se pode ser editada, listada, e seu valor)
//* sua sintaxe é .defineProprery(objeto, propriedade)

Object.defineProperty(pessoa, 'dataDeNasc', {
    enumerable: true, //pode ou não ser listada
    writable: false, // pode ou não pode ser editada 
    value: "15/03/1998"
})
console.log(pessoa)

//* Object.assign surgiu no ES6+
//* Server para concatenar objetos
//* Caso tenha mais de uma propriedade com o mesmo nome, a ultima que foi declarada sobrescreve a ultima

const dest = {a: 1}
const o1 = {b: 2, c: 3}
const o2 = {a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj) // a: 4 sobrescreveu o a: 1
