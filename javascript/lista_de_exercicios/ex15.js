/**Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares. */

const a1 = [1, 2, 3, 4]
const a2 = [10, 70, 22, 43]

const apenasPares = (arr) => {
    const totalPar = (e, index) => {
        if (index % 2 === 0 && e % 2 === 0) return e
    }
    console.log(arr.filter(totalPar))
}
apenasPares(a1)
apenasPares(a2)
