/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado */

const repetir = (value, x) => {
    const arr = []
    for (let i = 0; i < x; i++) {
       arr.push(value)
    }
    console.log(arr)
}

// console.log(repetir('vida', 3))
repetir('código', 8)