const CASOS = [
    {
        cenario: "<b>Equipamento:</b> Cilindro hidráulico.<br><b>Sintoma:</b> Vazamento externo, perda de pressão.<br><b>Dados:</b> Pressão de pico medida em 250 bar, folga do pistão no limite máximo.",
        // MUDANÇA AQUI: Apontando para a imagem local
        foto: "images/falha-extrusao.jpg", 
        pergunta: "Analisando a marca 'mordida' no anel, qual a causa mais provável da falha?",
        opcoes: [
            { txt: "A) Ataque Químico", correct: false, feedback: "Incorreto. Ataque químico causaria inchaço ou degradação do material, não um corte mecânico como este." },
            { txt: "B) Extrusão por Alta Pressão", correct: true, feedback: "Diagnóstico Perfeito! A alta pressão forçou o material do O-ring para dentro da folga (gap) entre o pistão e o cilindro, causando o 'corte' ou 'extrusão'. Uso de anéis anti-extrusão (back-up) resolveria." },
            { txt: "C) Instalação Incorreta", correct: false, feedback: "Incorreto. Um erro de instalação geralmente causa cortes ou torção no anel inteiro, não uma marca localizada como essa, típica da pressão." }
        ]
    },
    {
        cenario: "<b>Equipamento:</b> Eixo de motor elétrico.<br><b>Sintoma:</b> Vazamento de óleo após poucas horas de uso.<br><b>Dados:</b> O eixo foi usinado recentemente e não foi polido.",
        // MUDANÇA AQUI: Apontando para a imagem local
        foto: "images/falha-abrasao.jpg",
        pergunta: "O sulco perfeitamente circular no lábio do retentor indica que tipo de problema?",
        opcoes: [
            { txt: "A) Desgaste por Abrasão", correct: true, feedback: "Exato! A superfície áspera do eixo funcionou como uma lixa, desgastando o lábio de vedação do retentor rapidamente e criando um caminho para o vazamento. A rugosidade do eixo é crítica para a vida do retentor." },
            { txt: "B) Excesso de Temperatura", correct: false, feedback: "Incorreto. Alta temperatura deixaria o lábio ressecado, duro e quebradiço, não com um sulco de desgaste uniforme." },
            { txt: "C) Incompatibilidade Química", correct: false, feedback: "Incorreto. Incompatibilidade com o óleo causaria o amolecimento ou inchaço do material, e não um desgaste mecânico focado." }
        ]
    },
    {
        cenario: "<b>Equipamento:</b> Flange de linha de acetona.<br><b>Sintoma:</b> Vazamento massivo após manutenção.<br><b>Dados:</b> A equipe de manutenção usou uma gaxeta de NBR (borracha nitrílica) que estava em estoque.",
        // MUDANÇA AQUI: Apontando para a imagem local
        foto: "images/falha-quimica.jpg",
        pergunta: "A gaxeta está inchada e amolecida. Qual é o diagnóstico óbvio aqui?",
        opcoes: [
            { txt: "A) Aperto Excessivo do Flange", correct: false, feedback: "Incorreto. Aperto excessivo esmagaria ou rasgaria a gaxeta, mas não a faria inchar e perder suas propriedades desta forma." },
            { txt: "B) Vibração na Tubulação", correct: false, feedback: "Incorreto. Vibração poderia causar afrouxamento ou desgaste mecânico, mas não alteraria a composição química do material." },
            { txt: "C) Incompatibilidade Química", correct: true, feedback: "Correto! A acetona é um solvente forte que ataca a borracha NBR, causando inchaço e destruição da estrutura molecular. A escolha do material foi errada. Uma gaxeta de PTFE ou Viton seria necessária." }
        ]
    }
];

// O resto do código continua o mesmo...

let currentStep = 0;
let gameEnded = false;

function el(id) { return document.getElementById(id); }

function start() {
    currentStep = 0;
    gameEnded = false;
    el('result-overlay').classList.remove('active');
    renderCase();
}

function renderCase() {
    if (gameEnded) return;

    const caso = CASOS[currentStep];
    el('progress').textContent = `Caso ${currentStep + 1} de ${CASOS.length}`;
    el('failure-scenario').innerHTML = caso.cenario;
    el('evidence-photo').src = caso.foto;
    el('user-question').textContent = caso.pergunta;

    const optionsContainer = el('options-container');
    optionsContainer.innerHTML = "";
    caso.opcoes.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.txt;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    if (gameEnded) return;

    const selectedOption = CASOS[currentStep].opcoes[selectedIndex];
    const buttons = el('options-container').querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);
    buttons[selectedIndex].classList.add(selectedOption.correct ? 'correct' : 'wrong');
    
    el('user-question').innerHTML = selectedOption.feedback;

    setTimeout(() => {
        if (gameEnded) return;

        if (selectedOption.correct) {
            currentStep++;
            if (currentStep < CASOS.length) {
                renderCase();
            } else {
                endGame(true, "INVESTIGAÇÃO CONCLUÍDA!", "Parabéns, detetive! Você diagnosticou todas as falhas com precisão e salvou a produção.");
            }
        } else {
            endGame(false, "DIAGNÓSTICO INCORRETO!", "A causa raiz não foi identificada e o problema persistiu, causando mais prejuízos.");
        }
    }, 5000);
}

function endGame(isSuccess, title, message) {
    gameEnded = true;
    const resultOverlay = el('result-overlay');
    el('result-title').textContent = title;
    el('result-title').className = isSuccess ? 'success' : 'fail';
    el('result-msg').innerHTML = message;
    resultOverlay.classList.remove('hidden');
    resultOverlay.classList.add('active');
}

document.addEventListener('DOMContentLoaded', start);