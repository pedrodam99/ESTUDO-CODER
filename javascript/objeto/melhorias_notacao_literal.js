//! Melhorias que chegaram no ES6+

//? Evitar duplicidade na hora de declaração literal de par chave: valor

const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //versão antiga
const obj2 = {a, b, c} //versão nova

console.log(obj1, obj2)

//? Na hora de atribuir par de um objeto a uma variavel

const nome_atributo = "nota"
const valor_atributo = 7.89

//versão antiga
const obj3 = {} 
obj3 [nome_atributo] = valor_atributo

//versão nova
const obj4 = {[nome_atributo] : valor_atributo}

console.log(obj3, obj4)



//? Quando definirmos funções dentro de um obj, a sintaxe ficou reduzida

const obj5 = {
    //forma antiga
    funcao1: function(){

    },
    //forma nova
    funcao2(){

    }
}

