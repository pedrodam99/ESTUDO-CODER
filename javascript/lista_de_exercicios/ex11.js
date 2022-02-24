/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:*/

const marcas = ['Adidas', 'Nike', 'Oakley', 'Lacoste']

const firstAndLast = (arr) => {
    const firstElement = arr.shift()
    const lastElement = arr.pop()
    console.log([firstElement, lastElement]) 
}
firstAndLast(marcas)