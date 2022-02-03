// ? WHILE
// * While (enquanto) é estrutura de repetição
// * Usada quando não sabemos a quantidade exata de repetições

//enquanto a condicional for verdadeira a repetição ocorre
let n1 = 0

while (n1 <= 5) {
    console.log(n1)
    n1++
}


// ? DO WHILE
// * É uma variação do while, pouco usada
// * Sua estrutura de condição ocorre depois do bloco de código
// * Dessa forma garante que o bloco vai ser executado pelo menos 1x
let n2 = 0
do {
    console.log(`Volta ${n2 + 1} = ${n2}`)
    n2++
    
} while (n2 <= 3)