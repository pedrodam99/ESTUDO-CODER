//TIPO NUMBER
let n1 = 123
let n2 = Number('123')


//TIPO STRING (VALORES ALFANUMERICOS)
let s1 = ('Hello World')
let s2 = String('Hello World')

//TIPO BOOLEAN (APENAS TRUE OR FALSE)
let b1 = true

//casos que dá true
//números inteiros tirando o 0
//string com um espaço ou cheia = true
//array vazio = true 
//objeto vazio = true
//infinity = true
//atribuição = true

let b2 = Boolean(false)
// casos que da false 
// number 0 = false
// string vazia = false
// NaN = false
// null = false
// undefined = false

//TIPO ARRAY
//array é uma estrutura unidimensional e indexada 
//no js ela é heterogênea, ou seja, aceita diversos tipos de dados no mesmo array
//não tem tamanho fixo
//seu indice começa no [0]

const array1 = [1, 'Teste']

//TIPO OBJECT
//coleção de chave e valor
//o valor pode ser variaveis, funções e até mesmos outros objetos

const Pessoa = {
    nome: 'Paulo Cezar',
    cpf: 1234343232
}

//TIPO FUNCTION
//a function é um bloco de código que pode ou não retornar um valor 
//pode ou não utilizar parametros

//sem retorno
function soma(a, b) {
	console.log(a + b)
}

//com retorno
function newSoma (n1, n2) {
	return n1 + n2
}
const result = newSoma (5, 7)

