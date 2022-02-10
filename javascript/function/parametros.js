//! ARGUMENTS
//* A palavra reservada arguments basicamente é um array, que contem todas os parametros da função

function soma() {
    let soma = 0
    for (let i in arguments) {
        soma +=  arguments [0]
    }
    return soma 
}
let resultado = soma(20, 10, 10)
console.log(resultado)

//! ESTRATEGIAS PARA GERAR PARAMETROS PADRÃO
// ? Usando o operador OU

function soma1(a, b, c){    
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
// * o problema dessa abordagem é para casos onde o parametro seja 0, dessa forma o JS interpreta como false e assume o valor de 1

//? Usando o operador ternário e verificando de 3 formas diferentes

function soma2 (a, b, c){
    a !== undefined ? a : 1
    b = 1 in arguments ? a : 1
    c = isNaN(c) ? 1 : c //mais segura, pois passa apenas número 

}

// ! Padrão ES6+
//*  É a forma mais reduzida e mais utilizada hoje em dia, declarando seu valor prévio já na função

function soma3 (a = 1, b = 1, c = 1) {
    return a + b +c
}
