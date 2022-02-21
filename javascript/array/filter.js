//! FILTER
//* Serve para filtrar um array, dessa forma retornando um sub array
//* Seus parametros são os mesmos que os outros métodos

const produtos = [
    {nome: 'Notebook', preco: 2999, fragil: true},
    {nome: 'Ipad Pro', preco: 4789, fragil: true},
    {nome: 'Copo de Vidro', preco: 17.88, fragil: true},
    {nome: 'Copo de Plástico', preco: 5.97, fragil: false}
]

const isExpansive = (prod) => {if (prod.preco > 2500) return prod}
const isFragile = (prod) => {if (prod.fragil == true) return prod}

const resultado = produtos.filter(isExpansive).filter(isFragile)
console.log(resultado) //retorna os produtos caros e frageis
