/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário. */

function calcularArea (base, altura) {
    const area = (base * altura) / 2
    area.toFixed(2)
    console.log(area) 
}
calcularArea(7, 9)
