/*Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...". */

const inverso = (value) => {
    if (typeof value == 'number') {
        console.log(value * -1)
    } else if (typeof value == 'boolean') {
        console.log(!value)
    } else {
    console.log(`Booleano ou números esperados, mas o parametro é do tipo ${typeof value} `)
    }
}
inverso(1)
inverso(-100)
inverso(true)
inverso(false)
inverso('que fita')