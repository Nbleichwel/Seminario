// main.js

document.addEventListener('DOMContentLoaded', () => {
    const escapeModuleLink = document.getElementById('module-escape');

    function checkUnlockState() {
        if (localStorage.getItem('treinamentoCompleto') === 'true') {
            escapeModuleLink.classList.add('unlocked');
            escapeModuleLink.classList.remove('locked');
            // Não precisa de style.pointerEvents aqui, o CSS já cuida disso.
        } else {
            escapeModuleLink.classList.add('locked');
            escapeModuleLink.classList.remove('unlocked');
        }
    }

    // Adiciona um listener de clique que mostra o alerta se estiver bloqueado
    escapeModuleLink.addEventListener('click', (event) => {
        // A verificação deve ser feita pela CLASSE, não pelo localStorage aqui.
        // A classe é a "fonte da verdade" sobre o estado visual.
        if (escapeModuleLink.classList.contains('locked')) {
            event.preventDefault(); // Impede a navegação
            alert("🔒 BLOQUEADO! Você precisa completar o 'Modo Treinamento' primeiro.");
        }
    });

    // Roda a verificação quando a página carrega
    checkUnlockState();
});