const formulario = {
    // === Inputs
    email: () => document.querySelector('#email'),
    senha: () => document.querySelector('#senha'),
    // === Campos de erro
    caixaErroEmail: () => document.querySelector('#caixaErroEmail'),
    caixaErroSenha: () => document.querySelector('#caixaErroSenha'),
    mensagemErroEmail: () => document.querySelector('#mensagemErroEmail'),
    mensagemErroSenha: () => document.querySelector('#mensagemErroSenha'),
    // === Botoes
    botaoLogin: () => document.querySelector('#loginBotao'),
    revelarSenha: () => document.querySelector('#revelarSenhaBotao')
}

function validandoEmail() {
    const email = formulario.email().value

    if (email) {

    } else {

    }


    // email é valido?
}

function validandoSenha() {
    const senha = formulario.senha().value
}

function lancarMensagemDeErro (mensagem) {

}