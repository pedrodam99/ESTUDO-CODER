//! DIFERENTES FORMAS DE DECLARAR UM OBJETO
//? Criando forma lieteral

const obj1 = {
    nome: 'Julia',
    idade: 22
}

//? Usando a palavra reservada Object

const obj2 = new Object
obj2.nome = 'Amanda'
obj2.idade = 19

//? Usando factory function

function criarFuncionario(nome, salarioBase, faltas){
    return  {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30- faltas)
        }
    }
}
const f1 = criarFuncionario('Jordan', 3000, 5)
console.log(f1)

//? Usando Objcet.create

const filha = Object.create(null)
filha.nome = 'Ana'

//! TRANSFOMRANDO JSON EM OBJECT

const fromJSON = JSON.parse('{"info" : "Sou um JSON"}')
console.log(fromJSON)