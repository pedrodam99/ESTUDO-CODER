//! GETTER E SETTER
//* são funcoções que servem para ter um melhor controle dos dados

//? GET serve para ler e SETTER para alterar o valor da variável
// usando o _variavel por convenção mostra que a variável é privada
//

const sequencia = {
    _valor: 1,
    get valor() { return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
sequencia._valor = 100
console.log(sequencia.valor, sequencia.valor)