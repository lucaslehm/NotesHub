// == Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBe2cpA_XrzpnQ6UV78rYc-KEdMD3gT0dc",
    authDomain: "noteshub-d89c2.firebaseapp.com",
    projectId: "noteshub-d89c2",
    storageBucket: "noteshub-d89c2.firebasestorage.app",
    messagingSenderId: "547666760086",
    appId: "1:547666760086:web:612b03674967e9258c8db7"
};

firebase.initializeApp(firebaseConfig)

function mostrarCarregando() {
    const div = document.createElement('div');
    div.classList.add('carregando');

    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        div.appendChild(span);
    }

    document.body.appendChild(div);
}


function esconderCarregando() {
    const carregadores = document.getElementsByClassName('carregando');

    if (carregadores.length > 0) {
        carregadores[0].remove(); // remove o primeiro .loading encontrado
    }
}


// == Regex Validacao Email
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarEmail(email) {

    return regexEmail.test(email)

}

function mostrarErro(caixa, campo, mensagem) {
    campo.innerText = mensagem
    caixa.style.display = 'flex'
}

function esconderErro(caixa) {
    caixa.style.display = 'none'
}

function revelarSenha(botao, input) {
    const olho = document.getElementById(botao)
    const campoSenha = document.getElementById(input)

    if (olho.classList.contains('ri-eye-line')) {
        olho.classList.replace('ri-eye-line', 'ri-eye-off-line')
        campoSenha.type = 'text'
    } else {
        olho.classList.replace('ri-eye-off-line', 'ri-eye-line')
        campoSenha.type = 'password'
    }
}

function ajustarPaddingConteudo() {
    const conteudo = document.querySelector('.conteudo-principal');
    const sidebar = document.querySelector('.barra-lateral');
    const largura = window.innerWidth;

    if (largura >= 1024) {
        conteudo.style.paddingLeft = '266px';
    } else if (largura >= 768 && largura < 1024) {
        // Se barra lateral estiver aberta no mobile médio
        conteudo.style.paddingLeft = sidebar.classList.contains('ativa') ? '80px' : '70px';
    } else {
        // Mobile pequeno
        conteudo.style.paddingLeft = sidebar.classList.contains('ativa') ? '70px' : '1em';
    }
}

document.getElementById('botaoMenuMobile').addEventListener('click', () => {
    const sidebar = document.querySelector('.barra-lateral');
    sidebar.classList.toggle('ativa');
    ajustarPaddingConteudo();
});

// Recalcular sempre que a tela for redimensionada
window.addEventListener('resize', ajustarPaddingConteudo);

// Rodar no carregamento inicial
window.addEventListener('DOMContentLoaded', ajustarPaddingConteudo);