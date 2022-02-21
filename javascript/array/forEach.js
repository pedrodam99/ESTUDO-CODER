//! Método ForEach
//? Esse método percorre cada elemento do array separadamente

const aprovados = ['Ana', 'Bia', 'Julio', 'Pedro']

//* Na função callback podemos passar até 3 parameters, o value, o index, e o proprio array
aprovados.forEach((nome, indice) => {
    console.log(indice + 1, nome)
})