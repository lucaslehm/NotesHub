const formulario = {
    // === Inputs
    email: () => document.querySelector('#email'),
    senha: () => document.querySelector('#password'),
    // === Campos de erro
    caixaErroEmail: () => document.querySelector('#caixaErroEmail'),
    caixaErroSenha: () => document.querySelector('#caixaErroSenha'),
    mensagemErroEmail: () => document.querySelector('#mensagemErroEmail'),
    mensagemErroSenha: () => document.querySelector('#mensagemErroSenha'),
    // === Botoes
    botaoLogin: () => document.querySelector('#loginBotao')
}

function validandoEmail() {
    const email = formulario.email().value
    const caixaErro = formulario.caixaErroEmail()
    const mensagemErro = formulario.mensagemErroEmail()

    if (!email) {
        interruptorBotao()
        return mostrarErro(caixaErro, mensagemErro, '"Email" não pode estar vazio')
    }

    if (!validarEmail(email)) {
        interruptorBotao()
        return mostrarErro(caixaErro, mensagemErro, '"Email" é inválido')
    }
    
    esconderErro(caixaErro);
}


function validandoSenha() {
    const senha = formulario.senha().value

    if (senha) {
        esconderErro(formulario.caixaErroSenha())
        interruptorBotao()
    } else {
        interruptorBotao()
        mostrarErro(formulario.caixaErroSenha(), formulario.mensagemErroSenha(), '"Senha" não pode estar vazio.')
    }
}

function interruptorBotao() {
    const email = formulario.email().value
    const senha = formulario.senha().value

    formulario.botaoLogin().disabled = validarEmail(email) && senha ? false : true
}

// fazer login de fato.
formulario.botaoLogin().addEventListener('click', function(e) {
    e.preventDefault()
    
    mostrarCarregando()
    firebase.auth().signInWithEmailAndPassword(formulario.email().value, formulario.senha().value)
    .then(res => {
        esconderCarregando()
        window.location.href = '../pages/home.html'
    }).catch(err => {
        esconderCarregando()
        esconderCarregando()
        console.error("Erro ao logar:", err.message);
    })
})