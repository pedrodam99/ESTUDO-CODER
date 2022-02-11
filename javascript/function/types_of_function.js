//! TIPOS DE FUNÇÃO

//? Funções Anonimas
//* São funções que não levam nome

//Exemplo
const anonima = function() {
    return console.log('bla')
}
anonima()

//? Funções callbacks
//* É uma função que é passada como argumento para outra função
//* Usado bastante em requiições AJAX

//Exemplo
// a função meuNome é a callback de inserirNome, já que ela é passada como parametro 

const inserirNome = (callback) => {
    let name = 'Pedro'
    callback(name)
}

const meuNome = (name) => {
    console.log('Ola, ' + name)
}

inserirNome(meuNome)

//? Funções Construtoras
//* Mesmo conceito de Classes, ou seja, uma forma de molde
//* A partir desse molde que ocorre a instancia dos objetos

//Para transformar um método privado em método publico usa-se o this (que apontará para o objeto global)
//Exemplo

function Carro(velocidadeMax = 200, delta = 5){
    //método privado
    let velocidadeAtual = 0 

    //método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMax
        }
        //metodo publico
        this.getVelocidadeAtual = function () {
            return velocidadeAtual
        }
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(340, 30)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

//? Factory Functions
//* São funções que retornam um objeto

//Exemplo
function criarProduto(nome, preco){
   let desconto = preco * 0.10
   novoPreco = preco - desconto
    return {
        nome,
        preco,
        desconto,
        novoPreco
    }
}
console.log(criarProduto('Celular', 2000))
console.log(criarProduto('Notebook', 3000))