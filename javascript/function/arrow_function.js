//! ARROW FUNCTION
//* A arrow function surgiu por dois motivos
//* 1° motivo é para deixar a síntaxe do código mais simples
//* 2° motivo é é devido ao this, que é associado diretamente ao contexto léxico onde a função foi escrita

//Exemplo de 3 funções que fazem a mesma coisa

let dobro1 = function(a) {
    return a * 2
}

let dobro2 = (a) => {
    return a * 2
}

let dobro3 = a => a *2 //return implicito

//? Na arrow function o this respeita o contexto léxico, adotando o contexto do pai