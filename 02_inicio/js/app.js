console.log('Iniciando JS desde un fichero')

document.addEventListener('DOMContentLoaded', () => {

    let div1 = document.querySelector('#output1')
    let div2 = document.querySelector('#output2')
    
    // para el primer componente
    let temp = document.querySelector('[rel="import"]').import
    .querySelector('template')
    div1.innerHTML = temp.innerHTML

    // para el segundo componete
    div2.innerHTML = document.querySelector('#temple2').innerHTML
})