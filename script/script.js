const formTurma = document.getElementById("formTurma")
import { toastSucess, toastError } from './toast.js';

const sessionUser = document.getElementById("sessionUser")

document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem("token")
  if (!token) window.location.href = '../pages/login.html'
  const user = decodeJWT(token)
  sessionUser.innerHTML = `Seja bem vindo, ${user.name}`

})

formTurma.addEventListener('submit', (event) => {
  event.preventDefault()
  toastSucess('Deu bom')
})

const btnTurma = document.getElementById("btn-turma")
btnTurma.addEventListener('click', () => {
  const token = decodeJWT(localStorage.getItem("token"))
  if (!token) {
    toastError('Voce precisa estar logado para acessar essa pagina')
  } else {
    console.log(token);

  }
  if (token.status == "admin") {
    document.getElementById("meumodal").showModal()
  } else {
    toastError("Você não tem permissão para acessar essa página")
  }
})

function decodeJWT(token) {
  if (!token) return false
  const base64Payload = token.split('.')[1];
  const decodedPayload = atob(base64Payload);
  return JSON.parse(decodedPayload);
}

