// == Regex Validacao Email
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarEmail(email) {

  return regexEmail.test(email)

}

function mostrarErro (caixa, campo, mensagem) {
    campo.innerText = mensagem
    caixa.style.display = 'flex' 
}

function esconderErro (caixa) {
    caixa.style.display = 'none' 
}

function revelarSenha(botao, input) {
    const olho = document.getElementById(botao)
    const campoSenha = document.getElementById(input)

    if (olho.classList.contains('ri-eye-line')) {
        olho.classList.replace('ri-eye-line','ri-eye-off-line')
        campoSenha.type = 'text'
    } else {
        olho.classList.replace('ri-eye-off-line', 'ri-eye-line')
        campoSenha.type = 'password'
    }
}