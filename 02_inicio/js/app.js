console.log('Iniciando JS desde un fichero')

document.addEventListener('DOMContentLoaded', () => {

    let div = document.querySelector('#output')
    let temp = document.querySelector('[rel="import"]').import
    .querySelector('template')
    div.innerHTML = temp.innerHTML
})