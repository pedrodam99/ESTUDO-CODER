/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento: */

const Pessoa = { 
    nome: "Pedro", 
    idade: 54,
    profissao: 'Engenheiro'
}

const objInArr = (obj) => {
    const newArr = []
    for (let atributo in obj) {
        const chave = atributo
        const valor = obj[atributo]
        newArr.push([chave, valor])
    }
    return newArr        

}
const resultado = objInArr(Pessoa) 
console.log(resultado)
