// ==============================================
// CONFIGURAÇÃO DOS ENIGMAS
// ==============================================
const ENIGMAS = [
    {
        hint: '<img src="https://www.valaco.com.br/Images/produtos/conexoes_flg/des_sw.jpg" alt="Diagrama de um flange" style="width: 180px; height: auto; border-radius: 5px; background: white; padding: 5px;">',
        question: "Detectamos uma perda de pressão na junta. Qual elemento devemos usar para vedar esta conexão de flange?",
        options: [
            { txt: "A) Retentor", correct: false, feedback: "Negativo. Falha de aplicação. Retentores são para eixos rotativos." },
            { txt: "B) Gaxeta", correct: true, feedback: "Positivo! Gaxetas são a escolha padrão para flanges.<br><b>Dígito do código: <span style='color:#ffea00'>8</span></b>" },
            { txt: "C) Anel O-ring", correct: false, feedback: "Negativo. Risco de extrusão. O-rings não são ideais para flanges críticos." }
        ]
    },
    {
        hint: '⚠️ <span style="font-size:1.3em">☠️</span> <span style="font-size:1.2em">🌡️</span><br><span style="color:#ffd600">150°C</span> | Ácido corrosivo',
        question: "A temperatura sobe e o fluido é corrosivo. Qual material resiste?",
        options: [
            { txt: "A) Borracha (NBR)", correct: false, feedback: "Falha iminente! NBR sofre degradação térmica acima de 110°C e não tem compatibilidade química." },
            { txt: "B) Grafite", correct: true, feedback: "Análise perfeita! Grafite é quimicamente inerte e suporta altas temperaturas.<br><b>Dígito do código: <span style='color:#ffea00'>4</span></b>" },
            { txt: "C) Papelão Hidráulico", correct: false, feedback: "Falha catastrófica! O material se desintegraria em contato com o ácido corrosivo." }
        ]
    },
    {
        hint: '<img src="https://www.juntax.com.br/imagens/informacoes/junta-espiralada-01.jpg" alt="Gaxetas espiraladas" style="width: 150px; height: auto; border-radius: 5px;">',
        question: "Para este tipo de gaxeta espiralada em serviço crítico, qual norma principal devemos seguir?",
        options: [
            { txt: "A) ASME B16.20", correct: true, feedback: "Especificação correta! Esta é a principal norma para gaxetas metálicas e espirais.<br><b>Dígito do código: <span style='color:#ffea00'>2</span></b>" },
            { txt: "B) ISO 3601 (O-rings)", correct: false, feedback: "Parâmetro incorreto. ISO 3601 especifica as dimensões de O-rings, não o desempenho de gaxetas." },
            { txt: "C) DIN 3760 (Retentores)", correct: false, feedback: "Parâmetro incorreto. DIN 3760 é a norma para as dimensões de retentores." }
        ]
    },
    {
        hint: '<img src="https://mesindustrial.com.br/wp-content/uploads/2016/08/Selo_Mecanico_Cartucho-1.jpg" alt="Foto de um selo mecânico tipo cartucho" style="width: 160px; height: auto; border-radius: 5px; border: 2px solid #00e7ff;">',
        question: "Vibração excessiva no eixo da bomba. O retentor instalado falhou. Qual vedação avançada é necessária para esta condição severa?",
        options: [
            { txt: "A) Gaxeta de PTFE", correct: false, feedback: "Negativo. Gaxetas geram muito atrito e calor em alta velocidade, não resolveria a vibração." },
            { txt: "B) Anel X-Ring", correct: false, feedback: "Negativo. X-Rings são melhores que O-Rings, mas ainda não são adequados para a vedação primária de uma bomba." },
            { txt: "C) Selo Mecânico", correct: true, feedback: "Exato! Selos mecânicos são projetados para aplicações rotativas de alta performance e longa vida útil.<br><b>Dígito do código: <span style='color:#ffea00'>7</span></b>" },
        ]
    },
    {
        hint: '<div style="font-size:1.5em; line-height: 1.3;">O₃ + ☀️ + 💧</div><div style="font-size:1em; color:#ffd600">Vedação Externa</div>',
        question: "A vedação de uma escotilha externa está ressecando e trincando. Qual elastômero é famoso por sua resistência a ozônio, UV e intempéries?",
        options: [
            { txt: "A) EPDM", correct: true, feedback: "Análise correta! EPDM é a escolha número 1 para aplicações externas devido à sua excelente resistência ao clima.<br><b>Dígito do código: <span style='color:#ffea00'>5</span></b>" },
            { txt: "B) Borracha Natural (NR)", correct: false, feedback: "Falha! A borracha natural tem péssima resistência a ozônio e raios UV, se degradando rapidamente." },
            { txt: "C) Poliuretano (PU)", correct: false, feedback: "Negativo. PU tem ótima resistência à abrasão, mas não é a melhor escolha para exposição contínua a UV e umidade." },
        ]
    }
];

const FINAL_CODE = "84275";
const INITIAL_TIME = 120;

let state = {};
let timerInterval = null;
let isTyping = false;

function el(id) { return document.getElementById(id); }

function playSound(id) {
    try {
        const audio = el(id);
        audio.currentTime = 0;
        audio.play().catch(e => {});
    } catch (e) {}
}

function typeWriter(element, text, callback) {
    isTyping = true;
    element.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
            i++;
            setTimeout(type, 20);
        } else {
            element.innerHTML = text;
            isTyping = false;
            if (callback) callback();
        }
    }
    type();
}

function startGame() {
    state = { currentStep: 0, time: INITIAL_TIME, gameEnded: false };
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
    el('timer').textContent = formatTime(state.time);
    el('timer').classList.remove('lowtime');
    el('result-overlay').classList.remove('active');
    
    // Garante que a tela de código comece escondida
    el('code-entry').classList.add('hidden');
    // Garante que os elementos do jogo comecem visíveis
    el('visual-hint').classList.remove('hidden');
    el('enigma-text').classList.remove('hidden');
    el('options-container').classList.remove('hidden');
    el('progress').classList.remove('hidden');

    playSound('sound-alarm');
    startTimer();
    renderPuzzle();
}

function renderPuzzle() {
    const puzzle = ENIGMAS[state.currentStep];
    el('progress').textContent = `Enigma ${state.currentStep + 1} de ${ENIGMAS.length}`;
    el('visual-hint').innerHTML = puzzle.hint;
    
    const optionsContainer = el('options-container');
    optionsContainer.innerHTML = "";
    puzzle.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.txt;
        button.disabled = true;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    typeWriter(el('enigma-text'), puzzle.question, () => {
        optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
            if (!state.gameEnded) btn.disabled = false;
        });
    });
}

function selectAnswer(selectedIndex) {
    if (isTyping || state.gameEnded) return;
    const puzzle = ENIGMAS[state.currentStep];
    const selectedOption = puzzle.options[selectedIndex];
    const buttons = el('options-container').querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);
    buttons[selectedIndex].classList.add(selectedOption.correct ? 'correct' : 'wrong');
    playSound(selectedOption.correct ? 'sound-ok' : 'sound-err');
    
    let feedbackText = selectedOption.feedback;
    if (!selectedOption.correct) {
        state.time = Math.max(0, state.time - 10);
        el('timer').textContent = formatTime(state.time);
        feedbackText += "<br><span style='color:#ff4444'>Penalidade: -10 segundos!</span>";
    }

    typeWriter(el('enigma-text'), feedbackText, () => {
        setTimeout(() => {
            if (state.gameEnded) return;
            if (selectedOption.correct) {
                proceedToNextStep();
            } else {
                 if (state.time <= 0) {
                    endGame(false, "TEMPO ESGOTADO!", "A penalidade esgotou seu tempo. O sistema entrou em modo de falha.");
                } else {
                    proceedToNextStep();
                }
            }
        }, 2500);
    });
}

function proceedToNextStep() {
    state.currentStep++;
    if (state.currentStep < ENIGMAS.length) {
        renderPuzzle();
    } else {
        // CORREÇÃO: Chama a função que faz a transição de tela
        transitionToCodeScreen();
    }
}

// ===== NOVA FUNÇÃO PARA TRANSIÇÃO DE TELA =====
function transitionToCodeScreen() {
    // 1. Esconde todos os elementos da tela de enigma
    el('visual-hint').classList.add('hidden');
    el('enigma-text').classList.add('hidden');
    el('options-container').classList.add('hidden');
    el('progress').classList.add('hidden');

    // 2. Mostra a seção de código, que agora vai ocupar a tela
    el('code-entry').classList.remove('hidden');
    el('code-entry-prompt').textContent = "Sistema aguardando código de anulação de emergência...";
    el('code-input').focus();
}


function checkCode() {
    playSound('sound-bip');
    if (el('code-input').value === FINAL_CODE) {
        endGame(true, "SISTEMA ESTABILIZADO!", "Parabéns! Você especificou a vedação corretamente e salvou a planta.");
    } else {
        el('code-error').textContent = "CÓDIGO INCORRETO";
        el('code-input').value = "";
        state.time = Math.max(0, state.time - 15);
        el('timer').textContent = formatTime(state.time);
         if (state.time <= 0) {
            endGame(false, "ACESSO NEGADO!", "O código incorreto e a penalidade de tempo acionaram o bloqueio final.");
        }
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (state.gameEnded) {
            clearInterval(timerInterval);
            return;
        }
        state.time--;
        el('timer').textContent = formatTime(state.time);
        if (state.time > 0 && state.time <= 15) {
             el('timer').classList.add('lowtime');
        }
        if (state.time <= 0) {
            endGame(false, "TEMPO ESGOTADO!", "Você demorou demais para agir e o sistema entrou em modo de falha.");
        }
    }, 1000);
}

function endGame(isSuccess, title, message) {
    if (state.gameEnded) return;
    state.gameEnded = true;
    if (timerInterval) clearInterval(timerInterval);
    el('result-title').textContent = title;
    el('result-title').className = isSuccess ? 'success' : 'fail';
    el('result-msg').innerHTML = message;
    playSound(isSuccess ? 'sound-win' : 'sound-fail');
    el('result-overlay').classList.add('active');
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const codeForm = el('code-form');
    if(codeForm) {
        codeForm.addEventListener("submit", e => { 
            e.preventDefault(); 
            checkCode(); 
        });
    }
    startGame();
});