// ? FOR
// * O for também é uma estrutura de repetição
// * Mais usada quando sabemos a quantidade de repetições

//sua estrutura é for (declara a variavel; condição; encremento)

for (let i = 0; i <= 10; i++) {
    console.log(`contador com for: ${i}`)    
}
console.log('Fim!')

const Pessoa = {
    nome: 'Pedro',
    idade: 19,
    peso: '70kg'
}

// ? FOR IN
// * usado principalmente para percorrer objetos
//* executa o codigo para cada propriedade do objeto

const colocacao = {
    primeiro: 'Corinthians',
    segundo: 'Santos',
    terceiro: 'Santos'
}
for (let times in colocacao) {
   console.log(times, colocacao[times])
}

//? FOR OF
//* usado para arrays
//* podemos fazer o mesmo codigo com o for in, mas com o for of fica mais simples
//* executa o bloco de código para cada elemento do array

const notas = [100, 43, 65, 45, 20, , 70]

let aprovados = 0
let reprovados = 0

for (let nota of notas) {
    nota > 60 ? aprovados++ : reprovados++
}
console.log("Aprovados:", aprovados)
console.log("Reprovados:", reprovados)