
//! IIFE
//* Função anonima que é invocada imediatamente


//Exemplo: 
(function(){
    console.log('Executou imediatamente')
})()

//! CONTEXTO LÉXICO
//* Basicamente é onde os componentes foram declarados fisicamente no código

//Exemplo


const valor = 'Global'
function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec() //Retorna "Global", pq a variavel foi fisicamente declarada no escopo global
