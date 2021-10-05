import Modal from './modal.js'

const modal = Modal()

// pegar elementos para mudá-los na modal //
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// botões marcar como lida //
// pegar todos os botões que existem com a classe check //
const checkButtons = document.querySelectorAll(".actions a.check")

// adicionar o Event Listener nos botões //
checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})


// botões excluir //
// quando o botão for clicado, ele abre a modal //
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

// função para abrir modal e mudar os textos do título, descrição e botão //
function handleClick(event, check = true){
    // variável para a repetição do texto //
    const text = check ? "Marcar como lida" : "Excluir"

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    // abrir modal //
    modal.open()
}