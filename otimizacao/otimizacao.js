const PROJETOS = [
    {
        cenario: "<b>Sistema Atual:</b> Bomba de água industrial com retentor de NBR.<br><b>Operação:</b> Funciona bem, mas o retentor precisa ser trocado a cada 6 meses por ressecamento.",
        meta: "Aumentar a temperatura de trabalho da água para 120°C e dobrar a vida útil da vedação.",
        pergunta: "Qual upgrade no retentor atinge a nova meta de temperatura e durabilidade?",
        opcoes: [
            { txt: "A) Manter o retentor de NBR, mas de uma marca melhor.", correct: false, feedback: "Solução Ineficaz. A limitação do NBR é o material, que degrada acima de 100-110°C. Uma marca melhor não muda a química. A falha continuaria." },
            { txt: "B) Trocar por um retentor de Viton (FKM).", correct: true, feedback: "Solução Perfeita! O Viton (FKM) é projetado para altas temperaturas (até 200°C) e tem excelente resistência química, garantindo a nova meta de temperatura e vida útil." },
            { txt: "C) Usar dois retentores de NBR em série.", correct: false, feedback: "Solução Ruim. Isso não resolve o problema da temperatura e ainda pode causar superaquecimento por atrito, levando a uma falha ainda mais rápida." }
        ]
    },
    {
        cenario: "<b>Sistema Atual:</b> Prensa hidráulica com O-ring de NBR em um pistão.<br><b>Operação:</b> Veda bem, mas em picos de pressão, o O-ring é 'extrudado' e falha.",
        meta: "Eliminar a falha por extrusão sem precisar trocar o anel O-ring ou usinar o cilindro.",
        pergunta: "Qual componente adicional resolve o problema de extrusão de forma simples e barata?",
        opcoes: [
            { txt: "A) Adicionar um Anel Anti-Extrusão (Back-up Ring).", correct: true, feedback: "Engenharia Inteligente! O anel back-up, feito de um material mais duro como PTFE, é instalado ao lado do O-ring. Ele apoia o anel e fisicamente impede que ele seja forçado para dentro da folga." },
            { txt: "B) Aumentar o tamanho (bitola) do O-ring.", correct: false, feedback: "Incorreto. Um O-ring maior não caberá no alojamento (rasgo), será esmagado na montagem e falhará imediatamente." },
            { txt: "C) Usar um O-ring de material mais mole.", correct: false, feedback: "Incorreto. Um material mais mole (menor dureza) seria extrudado ainda mais facilmente pela pressão." }
        ]
    },
     {
        cenario: "<b>Sistema Atual:</b> Flange em uma linha de vapor que sofre ciclos de aquecimento e resfriamento.<br><b>Operação:</b> Usa uma gaxeta de papelão hidráulico. Ocorre vazamento após alguns ciclos devido ao 'afrouxamento' da junta.",
        meta: "Garantir uma vedação confiável e duradoura que se adapte à expansão e contração térmica dos flanges.",
        pergunta: "Qual tipo de gaxeta possui a 'resiliência' necessária para compensar os movimentos térmicos?",
        opcoes: [
            { txt: "A) Gaxeta de PTFE puro.", correct: false, feedback: "Inadequado. O PTFE tem ótima resistência química, mas sofre de 'fluência a frio' (deformação permanente sob carga), o que o torna ruim para ciclos térmicos." },
            { txt: "B) Manter o papelão, mas com um torque de aperto maior.", correct: false, feedback: "Solução paliativa e perigosa. Aumentar o torque pode esmagar a gaxeta e danificar os parafusos ou o flange, sem resolver o problema fundamental da falta de resiliência." },
            { txt: "C) Gaxeta Espiralada (Grafite + Aço Inox).", correct: true, feedback: "A Escolha do Profissional! A construção em espiral de metal e grafite funciona como uma 'mola', mantendo a carga de vedação mesmo quando os flanges se movem. É o padrão-ouro para serviço crítico e ciclos térmicos." }
        ]
    }
];

// A lógica JS pode ser exatamente a mesma do csi.js, apenas trocando os nomes das variáveis e IDs
let currentStep = 0;
let gameEnded = false;

function el(id) { return document.getElementById(id); }

function start() {
    currentStep = 0;
    gameEnded = false;
    el('result-overlay').classList.remove('active');
    renderProject();
}

function renderProject() {
    if (gameEnded) return;

    const projeto = PROJETOS[currentStep];
    el('progress').textContent = `Projeto ${currentStep + 1} de ${PROJETOS.length}`;
    el('project-scenario').innerHTML = projeto.cenario;
    el('project-goal').innerHTML = projeto.meta;
    el('user-question').textContent = projeto.pergunta;

    const optionsContainer = el('options-container');
    optionsContainer.innerHTML = "";
    projeto.opcoes.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.txt;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    if (gameEnded) return;

    const selectedOption = PROJETOS[currentStep].opcoes[selectedIndex];
    const buttons = el('options-container').querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);
    buttons[selectedIndex].classList.add(selectedOption.correct ? 'correct' : 'wrong');
    
    el('user-question').innerHTML = selectedOption.feedback;

    setTimeout(() => {
        if (gameEnded) return;

        if (selectedOption.correct) {
            currentStep++;
            if (currentStep < PROJETOS.length) {
                renderProject();
            } else {
                endGame(true, "PROJETO CONCLUÍDO!", "Suas soluções de engenharia foram aprovadas. O sistema está mais eficiente e confiável!");
            }
        } else {
            endGame(false, "SOLUÇÃO REPROVADA!", "A otimização falhou e não atendeu aos requisitos do projeto, gerando custos extras.");
        }
    }, 6000);
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