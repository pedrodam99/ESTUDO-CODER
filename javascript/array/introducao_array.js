//! ARRAY
//* no JS o array cresce e diminui de forma dinamica
//* A estrutura do array no js é heterogenea, permitindo misturar dados em um unico array

//? Formas de criar um Array

//* Instanciando usando o new Array (não é a forma mais recomendada)

let aprovados = new Array('ana', 'pedro', 'paulo', 'carlos') 
console.log(aprovados)

//* Declarando o array de forma literal

let reprovados = ['joao', 'maria', 'vinicius', 'ana', 'pedro', 'paulo', 'carlos']

//* Outras duas formas de colocar um elemento dentro de um array
aprovados[4] = 'regina' //mais comum para substituir
aprovados.push('moacir') //mais comum para add um novo elemento

console.log(aprovados)

