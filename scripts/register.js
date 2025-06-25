const formulario = {
    // === Inputs
    nome: () => document.querySelector('#nome'),
    email: () => document.querySelector('#email'),
    senha: () => document.querySelector('#password'),
    confirmarSenha:  () => document.querySelector('#confirmarPassword'),
    // === Campos de erro
    caixaErroNome: () => document.querySelector('#caixaErroNome'),
    caixaErroEmail: () => document.querySelector('#caixaErroEmail'),
    caixaErroSenha: () => document.querySelector('#caixaErroSenha'),
    caixaValidacaoSenha: () => document.querySelector('#caixaValidacaoSenha'),
    caixaErroConfirmarSenha: () => document.querySelector('#caixaErroConfirmarSenha'),
    mensagemErroNome: () => document.querySelector('#mensagemErroNome'),
    mensagemErroEmail: () => document.querySelector('#mensagemErroEmail'),
    mensagemErroSenha: () => document.querySelector('#mensagemErroSenha'),
    mensagemErroConfirmarSenha: () => document.querySelector('#mensagemErroConfirmarSenha'),
    // === Botoes
    botaoRegistrar: () => document.querySelector('#registrarBotao')
}

function validandoNome() {
    interruptorBotao()
    const nome = formulario.nome().value

    const caixaErro = formulario.caixaErroNome()
    const mensagemErro = formulario.mensagemErroNome()

    if (!nome) return mostrarErro(caixaErro, mensagemErro, '"Nome" não pode estar vazio')
    
    if (nome.length < 3) return mostrarErro(caixaErro, mensagemErro, '"Nome" não pode ter menos de 3 letras.')

    if (nome.length > 22) return mostrarErro(caixaErro, mensagemErro, '"Nome" não pode ter mais de 22 letras.')

    if (/\d/.test(nome)) return mostrarErro(caixaErro, mensagemErro, '"Nome" não pode conter números.')

    interruptorBotao()
    esconderErro(caixaErro)
}

// validar email
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

function validandoSenha() {
    interruptorBotao()
    const senha = formulario.senha().value
    const caixaErro = formulario.caixaErroSenha()
    const mensagemErro = formulario.mensagemErroSenha()
    const caixaValidacao = formulario.caixaValidacaoSenha()

    const criteriosSenha = {
        // === Campos
        letraMinuscula: () => document.querySelector('#criterioSenhaMinusculo'),
        letraMaiuscula: () => document.querySelector('#criterioSenhaMaiusculo'),
        numero: () => document.querySelector('#criterioSenhaNumero'),
        simbolo: () => document.querySelector('#criterioSenhaSimbolo'),
        tamanho: () => document.querySelector('#criterioSenhaTamanho'),
        // === Ícones
        iconeLetraMinuscula: () => document.querySelector('#iconeCriterioSenhaMinusculo'),
        iconeLetraMaiuscula: () => document.querySelector('#iconeCriterioSenhaMaiusculo'),
        iconeNumero: () => document.querySelector('#iconeCriterioSenhaNumero'),
        iconeSimbolo: () => document.querySelector('#iconeCriterioSenhaSimbolo'),
        iconeTamanho: () => document.querySelector('#iconeCriterioSenhaTamanho')
    }

    caixaValidacao.style.display = 'flex'

    const temMinuscula = /[a-z]/.test(senha)
    const temMaiuscula = /[A-Z]/.test(senha)
    const temNumero = /[0-9]/.test(senha)
    const temSimbolo = /[^A-Za-z0-9]/.test(senha)
    const temTamanho = senha.length >= 6

    atualizarCriterio(criteriosSenha.letraMinuscula(), criteriosSenha.iconeLetraMinuscula(), temMinuscula)
    atualizarCriterio(criteriosSenha.letraMaiuscula(), criteriosSenha.iconeLetraMaiuscula(), temMaiuscula)
    atualizarCriterio(criteriosSenha.numero(), criteriosSenha.iconeNumero(), temNumero)
    atualizarCriterio(criteriosSenha.simbolo(), criteriosSenha.iconeSimbolo(), temSimbolo)
    atualizarCriterio(criteriosSenha.tamanho(), criteriosSenha.iconeTamanho(), temTamanho)

    const senhaValida = temMinuscula && temMaiuscula && temNumero && temSimbolo && temTamanho

    if (!senha) {
        caixaValidacao.style.display = 'none';
        return mostrarErro(caixaErro, mensagemErro, '"Senha" não pode estar vazia');
    }

    if (!senhaValida) {
        return mostrarErro(caixaErro, mensagemErro, '"Senha" não atende aos requisitos.');
    }

    interruptorBotao()
    esconderErro(caixaErro);
}

function atualizarCriterio(elementoTexto, elementoIcone, atendido) {
    if (atendido) {
        elementoTexto.classList.remove('criterio-nao-atendido')
        elementoTexto.classList.add('criterio-atendido')
        elementoIcone.classList.remove('ri-close-line')
        elementoIcone.classList.add('ri-check-line')
    } else {
        elementoTexto.classList.add('criterio-nao-atendido')
        elementoTexto.classList.remove('criterio-atendido')
        elementoIcone.classList.add('ri-close-line')
        elementoIcone.classList.remove('ri-check-line')
    }
}

function esconderValidacaoSenha() {
    const caixaValidacao = formulario.caixaValidacaoSenha()
    caixaValidacao.style.display = 'none'
}

// validar confirmar senha

function validandoConfirmarSenha() {
    interruptorBotao()
    const senha = formulario.senha().value
    const confirmarSenha = formulario.confirmarSenha().value
    const caixaErro = formulario.caixaErroConfirmarSenha()
    const mensagemErro = formulario.mensagemErroConfirmarSenha()

    if (!confirmarSenha) return mostrarErro(caixaErro, mensagemErro, '"Confirmar Senha" não pode estar vazio')
    
    if (!(senha == confirmarSenha)) return mostrarErro(caixaErro, mensagemErro, 'As senhas devem ser iguais')
    
    interruptorBotao()
    esconderErro(caixaErro)
}

// liberar o botao registro

function interruptorBotao() {
    const nome = formulario.nome().value
    const email = formulario.email().value
    const senha = formulario.senha().value
    const confirmarSenha = formulario.confirmarSenha().value

    const valido = 
        nomeValido(nome) &&
        validarEmail(email) &&
        senhaValida(senha) &&
        senha === confirmarSenha

    formulario.botaoRegistrar().disabled = !valido
}

function nomeValido(nome) {
    const nomeValido = /^[A-Za-zÀ-ÿ\s]{4,21}$/
    return nomeValido.test(nome)
}

function senhaValida(senha) {
    const senhaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/
    return senhaValida.test(senha)

}

// registrar de fato!
formulario.botaoRegistrar().addEventListener('click', function(e) {
    e.preventDefault()
    alert('Criou conta!')
})