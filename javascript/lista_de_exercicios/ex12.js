/*Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro. */

const pessoa = {
    nome: 'Julia',
    idade: 29,
    signo: 'Aries'
}

const removeAtrr = (object, attr) => {
    const copia = object
    delete copia[attr]
    return copia
} 

const resultado = removeAtrr(pessoa, 'nome')
console.log(resultado)