const botao = document.querySelector('.botao')


botao.addEventListener('click',ConverterMoeda)


function ConverterMoeda(){

var real = document.querySelector('.real').value
var dolar = document.querySelector('.dolar').value    


const soma= parseFloat(real)/parseFloat(dolar)

const resultado = document.querySelector('.resultado')


resultado.innerHTML=` O valor em dolar é ${soma.toFixed(2)}`

}