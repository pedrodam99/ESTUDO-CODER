//! MÉTODOS RELEVANTES PARA SE USAR EM ARRAYS

let aprovados = ['joao', 'maria', 'vinicius', 'ana', 'pedro', 'paulo', 'carlos']

//? Sort e Delete

//* Sort reorganiza os elementos de forma aleatória
aprovados.sort()
console.log(aprovados)

//* Deleta o elemento, deixando a posição undefined
delete aprovados[4]
console.log(aprovados)

//? Método Splice e sua flexibilidade
//* Esse método serve tanto para excluir, tanto para add elementos no array

aprovados.splice(1, 1) // a partir do indice 1 ele remove 1 elemento
aprovados.splice(1, 2) // a partir do indice 1 remove 2 elementos
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2') //remove o elemento de indice [1] e [2] e add Elemento 1 e Elemento 2
aprovados.splice(1, 0, 'Elemento 3', 'Elemento 4') //a partir do [1] add o Elemento 3 e Elemento 4)

console.log(aprovados)

//? Métodos pop, psuh, shift e unshift

const pilotos = ['Vettel', 'Alonso', 'Raikkoken', 'Massa']

//* Pop remove o ultimo elemento do array
pilotos.pop()

//* Push serve para add um elemento na ultima posição
pilotos.push('Verstappen')
pilotos.push('Senna')
pilotos.push('Bottas')

//* Shift remove o primeiro elemento do array
pilotos.shift()

//* Unshift add na primeira posição do array [0]
pilotos.unshift('Hamilton')

console.log(pilotos)

//? Método Slice
//* Retorna um pedaço do array

const algunsPilotos1 = pilotos.slice(1, 4) //retorna do 2° elemento até o 4°



