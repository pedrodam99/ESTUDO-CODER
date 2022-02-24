/*Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos: */
const nums = [15, 7, 8, 3, 9]

function menorNumero (arr) {
    for (let element of arr) {
        for (let i = 0; i < arr.length; i++ ) {
            console.log(i, element)
        }
    } 
}
menorNumero(nums)