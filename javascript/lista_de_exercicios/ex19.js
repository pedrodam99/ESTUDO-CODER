/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números. */

const a = [0, 10]

const makeMedia = (arr) => {
    soma = 0
    for (let e of arr) {
        soma = soma + e
    }
    soma = soma / arr.length
    console.log(soma)
}
makeMedia(a)

