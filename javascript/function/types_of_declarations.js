//! TIPOS DE DECLARAÇÃO
//* Diferentes formas de declarar uma função

//? Function Declaration
//* usando a palavra reservada function 
//* tem a vantagem de serem carregadas linhas antes, pois são lidas primeiro
//* sofrem o efeito de hoisting

console.log(soma(10, 2))
function soma(x, y) {
    return x + y
}

//? Function Expression
//* Declarar uma função anonima e atribuir a uma variável

const sub = function(x, y){
    return x - y
}
console.log(sub(10, 3)) 

//? Function Name Expression 
//* Além de atribuir um nome a função, armazena-la em um variavel

const mult = function mult(x, y) {
    return x * y
}
console.log(mult(10, 2))