//! REDUCE
//* Esse método transforma todo os elementos de um array em apenas um elemento
//* Pode receber quatro parametes: o acumulador (acc); o valor atual (cur); index atual (idx); array original (src)

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: false},
]

//map para pegar as notas e o reduce para somar todas
const notas = alunos.map(aluno => aluno.nota)
const resultado = notas.reduce((acumulador, valorAtual) => acumulador += valorAtual)
// console.log(resultado)

//Desafio 1: Todos os alunos são bolsistas? False
const situacaoBolsistas = (aluno => aluno.bolsista)
const todosBolsista = (aux = 10,bolsista) => bolsista && aux


const resultadoD1 = alunos.map(situacaoBolsistas).reduce(todosBolsista)
console.log(resultadoD1)

//Desafio 2: Algum aluno é bolsista: True
const temBolsista = (aux = 10, bolsista) => bolsista || aux

const resultadoD2 = alunos.map(situacaoBolsistas).reduce(temBolsista)
console.log(resultadoD2)
