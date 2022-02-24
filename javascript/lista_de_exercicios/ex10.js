/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

const repete = (number) => {
    let string = ''
    for (let i = 0; i < number; i++) {
       string += '+'
    }
    console.log(string)
}

repete(5)