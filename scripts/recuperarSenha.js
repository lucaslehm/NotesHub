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
    const email = formulario.email().value

    if (email) {
        esconderErro(formulario.caixaErroEmail())
        if (validarEmail(email)) {
            esconderErro(formulario.caixaErroEmail())
            formulario.botaoRecuperar().disabled = !validarEmail(email) 
        } else {
            formulario.botaoRecuperar().disabled = !validarEmail(email) 
            mostrarErro(formulario.caixaErroEmail(),formulario.mensagemErroEmail(), '"Email" não é válido')
        }
    } else {
        formulario.botaoRecuperar().disabled = !validarEmail(email) 
        mostrarErro(formulario.caixaErroEmail(), formulario.mensagemErroEmail(), '"Email" não pode estar vazio')
    }
}

// envia email de recuperacão
formulario.botaoRecuperar().addEventListener('click', function(e) {
    e.preventDefault()
    formulario.formEsqueci().style.display = 'none'
    formulario.respostaEsqueci().style.display = 'flex'
})

formulario.botaoVoltar().addEventListener('click', function() {
    window.location.href = '../index.html'
})