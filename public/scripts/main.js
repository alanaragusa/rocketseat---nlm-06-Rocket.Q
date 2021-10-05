import Modal from './modal.js'

const modal = Modal()

// pegar todos os botões que existem com a classe check //
const checkButtons = document.querySelectorAll(".actions a.check")

// adicionar o Event Listener nos botões //
checkButtons.forEach(button => {
    button.addEventListener("click", event => {
        // abrir a modal //
        modal.open()
    })
})
