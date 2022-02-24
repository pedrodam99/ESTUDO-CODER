/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

const mult = (n1, n2) => {
    let resultado = 0
    for (let i = 1; i <= n2; i++) resultado += n1
    console.log(resultado) 
}
mult(5, 10)
