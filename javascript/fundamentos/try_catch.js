//Serve para tratamento de erros no codigo

const main = () => {
    try { // tenta pegar o erro
        'codigo'
    } catch (error) { //lança o erro
        console.error(`Deu erro no codigo.\n Erro: ${error}`)
    } finally { //manda de qualquer forma 
        console.log('Aopa')
    }

}
main()