const formulario = {
    // === Formularios
    formEsqueci: () => document.querySelector('#esqueciMinhaSenhaForm'),
    respostaEsqueci: () => document.querySelector('.resposta-sucesso-conteudo'),
    // === Inputs
    email: () => document.querySelector('#email'),
    // === Campos de erro
    caixaErroEmail: () => document.querySelector('#caixaErroEmail'),
    mensagemErroEmail: () => document.querySelector('#mensagemErroEmail'),
    // === Botoes
    botaoRecuperar: () => document.querySelector('#enviarEmailRecuperacaoBtn'),
    botaoVoltar: () => document.querySelector('#botaoVoltarRecuperacao')
}

function validandoEmail() {
    interruptorBotao()
    const email = formulario.email().value
    const caixaErro = formulario.caixaErroEmail()
    const mensagemErro = formulario.mensagemErroEmail()

    if (!email) return mostrarErro(caixaErro, mensagemErro, '"Email" não pode estar vazio')

    if (!validarEmail(email)) return mostrarErro(caixaErro, mensagemErro, '"Email" é inválido')
    
    interruptorBotao()
    esconderErro(caixaErro)
}

function interruptorBotao() {
    const email = formulario.email().value
    formulario.botaoRecuperar().disabled = !validarEmail(email)
}

// envia email de recuperacão
formulario.botaoRecuperar().addEventListener('click', function(e) {
    e.preventDefault()
    mostrarCarregando()
    firebase.auth().sendPasswordResetEmail(formulario.email().value)
    .then(res => {
        esconderCarregando()
        formulario.formEsqueci().style.display = 'none'
        formulario.respostaEsqueci().style.display = 'flex'
    }).catch(err => {
        esconderCarregando()
        console.error("Erro ao enviar email:", err.message);
    })

})

formulario.botaoVoltar().addEventListener('click', function() {
    window.location.href = '../index.html'
})