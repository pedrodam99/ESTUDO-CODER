//! REVISÃO DE OBJETO
//* Lembrando que objeto é uma coleção de chave: valor

//? Add e removendo pares de forma dinamica

const produto = new Object

//add de forma dinamica
produto.nome = 'Cadeira'
produto ['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)

//removendo de forma dinamica
delete produto['marca do produto']
delete produto.preco

console.log(produto)

//* Um objeto aceita diversos tipo de dados como valor
//Exemplo

const carro = {
    modelo: 'A4',
    preco: 89000,
    proprietario: {
        nome: 'Romeu',
        idade: 56,
        endereco: {
            logradouro: 'Rua Santo Capital',
            numero: 452
        }
    },
    condutores: [{
        nome: 'Ana',
        idade: 19
    },
    {
        nome: 'Junior',
        idade: 32
    }],
    CalcularValorSeguro: function() {
        //codigo
    }

}

//acessando com a notação ponto
console.log(carro.proprietario.endereco.numero)