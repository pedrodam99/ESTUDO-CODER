//! BIND
//* O bind é um método de função, serve para fixar a referencia do this em algum objeto
//* quando usamos 'use strict' o this fica undefined

//Exemplo
//*'use strict'
function thisBindExample () {
    console.log(this)
}

const obj = {exemplo: 'exemplo'}

thisBindExample = thisBindExample.bind(obj) //o this não é mais global, aponta agora para o objeto "obj"
//thisBindExample()

//! CALL E APPLY
//* call() e aplly() tem a sintaxe idêntica
//* call() aceita uma lista de argumentos
//* aplly() aceita um array de argumentos
//* A única diferença é como os argumentos são passados

//? CALL

const obj1 = {
    exemplo1: 'exemplo1',
    mostrarThis: function () { console.log(this)}
}
obj1.mostrarThis() //mostrou o this do exemplo1

const obj2 = {
    exemplo2: "exemplo2"
}

obj1.mostrarThis.call(obj2) // aqui o this está apontando pro obj2

//? APLY
//* é a mesma coisa que o call, muda apenas a forma de passar argumentos

const obj3 = {exemplo3: "exemplo3"}
obj1.mostrarThis.apply(obj3) // aqui o this está apontando para o obj3