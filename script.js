function calcularIMC(){
    const peso = parseFloat(document.querySelector('#peso').value)

    const altura = parseFloat(document.querySelector('#altura').value)

    const imc = peso / (altura * altura )

    return document.querySelector('.resultado  p').innerHTML = `Seu IMC é <strong>${imc.toFixed(2)} </strong>`
}