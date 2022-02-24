/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. */

const justNumbers = (arr) => {
    const newArr = []
    const isNumber = (element) => {
        if (typeof element == 'number') {
            newArr.push(element)
        }
    }
    arr.filter(isNumber)
    return newArr
}

const a = ['ola', 45, 10, '10', 3, 12, 'merda']

const resultado = justNumbers(a)
console.log(resultado)