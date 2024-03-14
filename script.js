var button = document.getElementById('hassan')

button.addEventListener('click', function() {
    var card = document.querySelector('.hassan')
    card.classList.toggle('active')

    if (card.classList.contains('active')) {
        return button.textContent = 'Ler menos'
    }

    button.textContent = 'Ler mais'
})

var button = document.getElementById('zabaniya')

button.addEventListener('click', function() {
    var card = document.querySelector('.zabaniya')
    card.classList.toggle('active')

    if (card.classList.contains('active')) {
        return button.textContent = 'Ler menos'
    }

    button.textContent = 'Ler mais'
})