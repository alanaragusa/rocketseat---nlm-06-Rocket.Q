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
    // tag a não alterar a url //
    event.preventDefault()
    // variável para a repetição do texto //
    const text = check ? "Marcar como lida" : "Excluir"
    // variável para o action //
    const slug = check ? "check" : "delete"
    // variável para o id da sala //
    const roomId = document.querySelector("#room-id").dataset.id
    // variável para o data-id das perguntas //
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    // mudando o texto da modal //
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    // abrir modal //
    modal.open()
}