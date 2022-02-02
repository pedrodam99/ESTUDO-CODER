// ! SWITCH
// * forma mais formal de escrever um if/else em cadeado

const imprimirResultado = function (nota) {
    switch(Math.floor(nota)) {
        case 10: case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7: 
            console.log('Aprovado')
            break
        case 6: case 5:
            console.log('Recuperação')
            break
        case 4: case 3: case 2: case 1:
            console.log('Reprovado')
						break
				default:
						console.log('Nota Invalida') 
    }
}
imprimirResultado(8)

// ! O break é necessário depois de fazer a condicional de cada case