/**Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */

const a = [1, 2, 4]

const somarElementos = (arr) => {
    const soma = (acumulador, valorAtual) => {return  acumulador += valorAtual}
    return arr.reduce(soma) 
}

let resultado = somarElementos(a)
console.log(resultado)