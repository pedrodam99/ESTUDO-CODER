/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas. */


const todasDespesas = []
const addDespesa = (despesa) => {
    todasDespesas.push(despesa)
}

function criarDespesa(nome, categoria, preco) {
    const obj = {
        nome,
        categoria,
        preco
    }
   addDespesa(obj)
}

criarDespesa('Conta de Água', 'Conta', 159)
criarDespesa('Conta de Água', 'Conta', 210)
criarDespesa('Cinema', 'Entretenimento', 99)

const Total = () => {
    const totalDeGastos = todasDespesas.map((element) => element.preco)
    const resultado = totalDeGastos.reduce((acumulador, valorAtual) => acumulador += valorAtual)
        console.log(resultado)
}

Total()




