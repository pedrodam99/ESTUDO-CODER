//Estrutura de controle mais simples
function Media (n1, n2) {
    const result = (n1 + n2) / 2
    if (result > 7) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}
// const media = Media(6, 5)
// console.log(media)

//Essa é uma cadeia de Elses e Ifs aninhadas
function newMedia(n1, n2) {
    const result = (n1 + n2) / 2
    if (result > 7) {
        return 'Aprovado'
    } else if ( result >= 5 && result <= 6.5) {
        return 'Recuperação'
    } else {
        return 'Reprovado'
    }
}
const media = newMedia(3, 1)
console.log(media)