// ==============================================
// CONFIGURAÇÃO DOS DESAFIOS
// ==============================================
const DESAFIOS = [
    {
        cenario: "<b>Sistema:</b> Eixo rotativo de bomba.<br><b>Condições:</b> 3.000 RPM, água a 90°C.",
        escolhaDoZeca: "Gaxeta de Papelão Hidráulico",
        justificativaDoZeca: "Zeca disse: 'Se é pra vedar, uma gaxeta resolve, né?'",
        perguntaParaUsuario: "O Zeca usou uma vedação estática em um eixo rotativo. Qual é o elemento CORRETO?",
        opcoesDeCorrecao: [
            { txt: "A) Anel O-ring de NBR", correct: false, feedback: "Incorreto. Um O-ring sofreria falha por torção (extrusão em espiral) e desgaste abrasivo rápido devido à alta velocidade de rotação." },
            { txt: "B) Retentor de Viton (FKM)", correct: true, feedback: "Perfeito! Retentores são projetados com um lábio de vedação e mola para suportar movimento rotativo. O material Viton (FKM) é ideal para a temperatura de trabalho." },
            { txt: "C) Manter a Gaxeta", correct: false, feedback: "Incorreto. A Gaxeta sofreria superaquecimento por atrito e se desintegraria, causando uma falha catastrófica no selo." }
        ]
    },
    {
        cenario: "<b>Sistema:</b> Pistão de prensa hidráulica.<br><b>Condições:</b> Movimento axial, 200 bar de pressão.",
        escolhaDoZeca: "Retentor de Silicone",
        justificativaDoZeca: "Zeca disse: 'O nome é retentor, então ele deve reter o óleo.'",
        perguntaParaUsuario: "Ele confundiu o tipo de movimento. Qual a vedação ideal para a ALTA PRESSÃO de um pistão?",
        opcoesDeCorrecao: [
            { txt: "A) Selo de Pistão de Poliuretano (PU)", correct: true, feedback: "Exato! Selos de Pistão em Poliuretano (PU) são projetados especificamente para resistir à alta pressão e abrasão dos cilindros." },
            { txt: "B) Retentor de Viton (FKM)", correct: false, feedback: "Incorreto. O lábio de um retentor é projetado para vedação unidirecional em eixos ROTATIVOS, não para o movimento axial de um pistão sob pressão." },
            { txt: "C) Gaxeta de Papelão Hidráulico", correct: false, feedback: "Incorreto. Esta gaxeta é estática e não possui a elasticidade necessária, resultando em falha por extrusão através das folgas do cilindro." }
        ]
    },
    {
        cenario: "<b>Sistema:</b> Flange em linha de ácido.<br><b>Condições:</b> Estático, 150°C, 100 bar, corrosivo.",
        escolhaDoZeca: "Anel O-ring de Borracha (NBR)",
        justificativaDoZeca: "Zeca disse: 'Achei um saco de anéis na oficina. Serve para tudo e é barato.'",
        perguntaParaUsuario: "Essa é a pior escolha possível. Qual é a ÚNICA solução segura para esta aplicação crítica?",
        opcoesDeCorrecao: [
            { txt: "A) O-ring de Viton", correct: false, feedback: "Incorreto. Embora o Viton resista às condições, um O-ring simples não possui a mesma resistência a esmagamento e 'blowout' (expulsão por pressão) que uma gaxeta composta." },
            { txt: "B) Gaxeta de Grafite (Norma ASME B16.20)", correct: true, feedback: "Perfeito! Você evitou um desastre. Esta é a especificação de segurança máxima.<br><img class='feedback-image' src='https://cdn.awsli.com.br/600x450/116/116289/produto/7058638/91e3fcb6b7.jpg' alt='Gaxetas espiraladas'>" },
            { txt: "C) Retentor de PTFE", correct: false, feedback: "Erro fundamental de aplicação. Retentores são elementos para vedações dinâmicas rotativas, não para flanges estáticos." }
        ]
    },
    // NOVO DESAFIO 1
    {
        cenario: "<b>Sistema:</b> Misturador de iogurte.<br><b>Condições:</b> Contato direto com alimento, limpeza com vapor.",
        escolhaDoZeca: "Anel O-ring de NBR (Borracha Nitrílica)",
        justificativaDoZeca: "Zeca disse: 'Encontrei um anel que encaixou certinho. Borracha é borracha, né?'",
        perguntaParaUsuario: "Zeca ignorou uma regra crítica. Qual material é obrigatório para contato com alimentos?",
        opcoesDeCorrecao: [
            { txt: "A) Manter o O-ring de NBR", correct: false, feedback: "Gravíssimo! NBR não é atóxico e pode contaminar o produto. Risco de interdição da fábrica pela vigilância sanitária." },
            { txt: "B) O-ring de Viton (FKM)", correct: false, feedback: "Quase lá. Viton resiste à temperatura, mas nem todos os seus compostos são aprovados para alimentos. Há uma opção mais segura e comum." },
            { txt: "C) O-ring de Silicone (VMQ) Grau Alimentício", correct: true, feedback: "Corretíssimo! O Silicone grau alimentício (atóxico e com certificação FDA) é o padrão para esta indústria, resistindo bem à temperatura da limpeza." }
        ]
    },
    // NOVO DESAFIO 2
    {
        cenario: "<b>Sistema:</b> Tampa de uma câmara de vácuo.<br><b>Condições:</b> Pressão negativa, ambiente de laboratório.",
        escolhaDoZeca: "Junta de Papelão Hidráulico",
        justificativaDoZeca: "Zeca pensou: 'Se essa junta aguenta pressão alta, vácuo que é pressão baixa vai ser moleza.'",
        perguntaParaUsuario: "Ele inverteu a lógica. O que é crucial para vedar contra a entrada de ar (vácuo)?",
        opcoesDeCorrecao: [
            { txt: "A) Anel O-ring de EPDM", correct: true, feedback: "Perfeito! Vácuo exige um material macio e resiliente que se amolde perfeitamente às superfícies. O-rings são ideais para isso." },
            { txt: "B) Gaxeta de Cobre Maciço", correct: false, feedback: "Incorreto. Juntas metálicas são muito duras e não conseguem se deformar o suficiente para vedar as micro-imperfeições contra o vácuo." },
            { txt: "C) Manter o Papelão Hidráulico", correct: false, feedback: "Incorreto. Papelão hidráulico é rígido e poroso. O ar passaria facilmente através do material e das falhas de assentamento, impedindo a formação de vácuo." }
        ]
    }
];

let state = {};

// ==============================================
// FUNÇÕES AUXILIARES (DOM, SOM)
// ==============================================
function el(id) { 
    return document.getElementById(id);
}

function playSound(id) {
    try {
        const audio = el(id);
        audio.currentTime = 0;
        audio.play().catch(e => {});
    } catch (e) {}
}

// ==============================================
// LÓGICA PRINCIPAL DO JOGO
// ==============================================

// Inicia ou reinicia o jogo
function start() {
    state = { currentStep: 0, gameEnded: false };
    playSound('sound-start');
    renderChallenge();
}

// Mostra o desafio atual na tela
function renderChallenge() {
    if (state.gameEnded) return;

    const challenge = DESAFIOS[state.currentStep];

    // Reseta a interface para o novo desafio
    el('user-correction-box').classList.add('hidden');
    el('intern-stamp').classList.add('hidden');
    el('review-btn').classList.remove('hidden');
    el('review-btn').disabled = false;

    // Preenche os dados do erro do estagiário
    el('progress').textContent = `Erro ${state.currentStep + 1} de ${DESAFIOS.length}`;
    el('intern-scenario').innerHTML = challenge.cenario;
    el('intern-justification').innerHTML = `<span style="font-weight:bold; color:#ffcdd2;">${challenge.escolhaDoZeca}</span><br><em>${challenge.justificativaDoZeca}</em>`;
}

// Mostra a UI de correção após o usuário clicar em "Revisar"
function showCorrectionUI() {
    if (state.gameEnded) return;
    playSound('sound-err');
    
    el('intern-stamp').classList.remove('hidden');
    el('review-btn').classList.add('hidden');
    
    const challenge = DESAFIOS[state.currentStep];
    el('user-question').textContent = challenge.perguntaParaUsuario;
    const optionsContainer = el('options-container');
    optionsContainer.innerHTML = ""; 

    challenge.opcoesDeCorrecao.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.txt;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    el('user-correction-box').classList.remove('hidden');
}

// Processa a resposta do usuário
function selectAnswer(selectedIndex) {
    if (state.gameEnded) return;

    const selectedOption = DESAFIOS[state.currentStep].opcoesDeCorrecao[selectedIndex];
    playSound(selectedOption.correct ? 'sound-ok' : 'sound-bip');

    const buttons = el('options-container').querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);
    buttons[selectedIndex].classList.add(selectedOption.correct ? 'correct' : 'wrong');
    
    el('user-question').innerHTML = selectedOption.feedback;

    // Espera um tempo para o usuário ler o feedback
    setTimeout(() => {
        if (state.gameEnded) return;

        if (selectedOption.correct) {
            proceedToNextChallenge();
        } else {
            endGame(false, "CORREÇÃO INCORRETA!", "Essa não era a melhor solução. A responsabilidade era grande e o sistema falhou.");
        }
    }, 4000); // Aumentei um pouco o tempo para dar para ler feedbacks mais longos
}

// Avança para o próximo desafio ou termina o jogo
function proceedToNextChallenge() {
    state.currentStep++;
    if (state.currentStep < DESAFIOS.length) {
        renderChallenge();
    } else {
        localStorage.setItem('treinamentoCompleto', 'true');
        endGame(true, "TREINAMENTO CONCLUÍDO!", "Excelente trabalho! Você corrigiu todos os erros do Zeca e desbloqueou o Modo Simulação de Crise.");
    }
}

// Finaliza o jogo e mostra a tela de resultado
function endGame(isSuccess, title, message) {
    state.gameEnded = true;
    playSound(isSuccess ? 'sound-win' : 'sound-fail');
    
    el('result-title').textContent = title;
    el('result-title').className = isSuccess ? 'success' : 'fail';
    el('result-msg').innerHTML = message;
    
    el('result-overlay').classList.add('active');
}

// ==============================================
// INICIALIZAÇÃO
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o evento de clique ao botão principal de revisão
    el('review-btn').addEventListener('click', showCorrectionUI);

    // Inicia o primeiro desafio
    start();
});