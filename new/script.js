// ======================================================
// =================== APLICAÇÃO V2.6 ===================
// ======================================================

const App = {
    // Referências para os elementos da UI (Interface do Usuário)
    UI: {
        screens: document.querySelectorAll('.screen'),
        moduleLinks: document.querySelectorAll('.module-card'),
        backToMenuButtons: document.querySelectorAll('.back-to-menu-btn'),
        resultOverlay: document.getElementById('result-overlay'),
        resultTitle: document.getElementById('result-title'),
        resultMsg: document.getElementById('result-msg'),
    },

    // Dados de todos os jogos
    Data: {
        estagiario: [{ cenario: "<b>Sistema:</b> Eixo rotativo de bomba.<br><b>Condições:</b> 3.000 RPM, água a 90°C.", escolhaDoZeca: "Gaxeta de Papelão Hidráulico", justificativaDoZeca: "Zeca disse: 'Se é pra vedar, uma gaxeta resolve, né?'", perguntaParaUsuario: "O Zeca usou uma vedação estática em um eixo rotativo. Qual é o elemento CORRETO?", opcoes: [ { txt: "A) Anel O-ring de NBR", correct: false, feedback: "Incorreto. Um O-ring sofreria falha por torção e desgaste abrasivo rápido." },{ txt: "B) Retentor de Viton (FKM)", correct: true, feedback: "Perfeito! Retentores são projetados para movimento rotativo. Viton é ideal para a temperatura." },{ txt: "C) Manter a Gaxeta", correct: false, feedback: "Incorreto. A Gaxeta sofreria superaquecimento por atrito e se desintegraria." } ] }, { cenario: "<b>Sistema:</b> Pistão de prensa hidráulica.<br><b>Condições:</b> Movimento axial, 200 bar de pressão.", escolhaDoZeca: "Retentor de Silicone", justificativaDoZeca: "Zeca disse: 'O nome é retentor, então ele deve reter o óleo.'", perguntaParaUsuario: "Ele confundiu o tipo de movimento. Qual a vedação ideal para a ALTA PRESSÃO de um pistão?", opcoes: [ { txt: "A) Selo de Pistão de Poliuretano (PU)", correct: true, feedback: "Exato! Selos de Pistão em PU são projetados para resistir à alta pressão e abrasão." },{ txt: "B) Retentor de Viton (FKM)", correct: false, feedback: "Incorreto. O lábio de um retentor é projetado para eixos ROTATIVOS, não para movimento axial." },{ txt: "C) Gaxeta de Papelão Hidráulico", correct: false, feedback: "Incorreto. Esta gaxeta é estática e falharia por extrusão." } ] }, { cenario: "<b>Sistema:</b> Flange em linha de ácido.<br><b>Condições:</b> Estático, 150°C, 100 bar, corrosivo.", escolhaDoZeca: "Anel O-ring de Borracha (NBR)", justificativaDoZeca: "Zeca disse: 'Achei um saco de anéis na oficina. Serve para tudo.'", perguntaParaUsuario: "Essa é a pior escolha possível. Qual é a ÚNICA solução segura para esta aplicação?", opcoes: [ { txt: "A) O-ring de Viton", correct: false, feedback: "Incorreto. Um O-ring simples não tem a mesma resistência a esmagamento que uma gaxeta composta." },{ txt: "B) Gaxeta de Grafite (Norma ASME B16.20)", correct: true, feedback: "Perfeito! Você evitou um desastre. Esta é a especificação de segurança máxima." },{ txt: "C) Retentor de PTFE", correct: false, feedback: "Erro fundamental. Retentores são para vedações dinâmicas rotativas." } ] }, { cenario: "<b>Sistema:</b> Misturador de iogurte.<br><b>Condições:</b> Contato direto com alimento.", escolhaDoZeca: "Anel O-ring de NBR", justificativaDoZeca: "Zeca disse: 'Borracha é borracha, né?'", perguntaParaUsuario: "Zeca ignorou uma regra crítica. Qual material é obrigatório para contato com alimentos?", opcoes: [ { txt: "A) Manter o O-ring de NBR", correct: false, feedback: "Gravíssimo! NBR não é atóxico e pode contaminar o produto." },{ txt: "B) O-ring de Viton (FKM)", correct: false, feedback: "Quase lá. Nem todos os compostos de Viton são aprovados para alimentos." },{ txt: "C) O-ring de Silicone (VMQ) Grau Alimentício", correct: true, feedback: "Corretíssimo! O Silicone grau alimentício é o padrão para esta indústria." } ] }, { cenario: "<b>Sistema:</b> Tampa de uma câmara de vácuo.<br><b>Condições:</b> Pressão negativa.", escolhaDoZeca: "Junta de Papelão Hidráulico", justificativaDoZeca: "Zeca pensou: 'Se aguenta pressão alta, vácuo é moleza.'", perguntaParaUsuario: "Ele inverteu a lógica. O que é crucial para vedar contra a entrada de ar (vácuo)?", opcoes: [ { txt: "A) Anel O-ring de EPDM", correct: true, feedback: "Perfeito! Vácuo exige um material macio e resiliente que se amolde perfeitamente." },{ txt: "B) Gaxeta de Cobre Maciço", correct: false, feedback: "Incorreto. Juntas metálicas são muito duras para vedar as micro-imperfeições." },{ txt: "C) Manter o Papelão Hidráulico", correct: false, feedback: "Incorreto. Papelão hidráulico é poroso e não veda vácuo." } ] }],
        escape: { config: { finalCode: "84275", initialTime: 120 }, enigmas: [ { hint: '<img src="https://www.valaco.com.br/Images/produtos/conexoes_flg/des_sw.jpg" alt="Diagrama de um flange" style="width: 180px; height: auto; border-radius: 5px; background: white; padding: 5px;">', question: "Detectamos uma perda de pressão na junta. Qual elemento usar para vedar este flange?", options: [{ txt: "A) Retentor", correct: false, feedback: "Incorreto. Retentores são para eixos rotativos." }, { txt: "B) Gaxeta", correct: true, feedback: "Positivo! Gaxetas são a escolha padrão.<br><b>Dígito: 8</b>" }, { txt: "C) Anel O-ring", correct: false, feedback: "Incorreto. O-rings não são ideais para flanges críticos." }] }, { hint: '⚠️<span style="font-size:1.3em">☠️</span><span style="font-size:1.2em">🌡️</span><br><span>150°C</span> | Ácido', question: "A temperatura sobe e o fluido é corrosivo. Qual material resiste?", options: [{ txt: "A) Borracha (NBR)", correct: false, feedback: "Incorreto. NBR não suporta essa temperatura." }, { txt: "B) Grafite", correct: true, feedback: "Análise perfeita! Grafite é inerte.<br><b>Dígito: 4</b>" }, { txt: "C) Papelão Hidráulico", correct: false, feedback: "Incorreto. O ácido desintegraria o material." }] }, { hint: '<img src="https://www.juntax.com.br/imagens/informacoes/junta-espiralada-01.jpg" alt="Gaxetas espiraladas" style="width: 150px; height: auto; border-radius: 5px;">', question: "Para esta gaxeta espiralada em serviço crítico, qual norma principal seguir?", options: [{ txt: "A) ASME B16.20", correct: true, feedback: "Especificação correta!<br><b>Dígito: 2</b>" }, { txt: "B) ISO 3601 (O-rings)", correct: false, feedback: "Incorreto. Esta norma é para O-rings." }, { txt: "C) DIN 3760 (Retentores)", correct: false, feedback: "Incorreto. Esta norma é para retentores." }] }, { hint: '<img src="https://mesindustrial.com.br/wp-content/uploads/2016/08/Selo_Mecanico_Cartucho-1.jpg" alt="Foto de um selo mecânico tipo cartucho" style="width: 160px; height: auto; border-radius: 5px; border: 2px solid #00e7ff;">', question: "Vibração excessiva no eixo da bomba. O retentor falhou. Qual vedação avançada é necessária?", options: [{ txt: "A) Gaxeta de PTFE", correct: false, feedback: "Incorreto. Gaxetas geram muito atrito." }, { txt: "B) Anel X-Ring", correct: false, feedback: "Incorreto. Não é ideal para vedação primária de bomba." }, { txt: "C) Selo Mecânico", correct: true, feedback: "Exato! Selos mecânicos são para alta performance.<br><b>Dígito: 7</b>" }] }, { hint: '<div style="font-size:1.5em; line-height: 1.3;">O₃ + ☀️ + 💧</div><div style="font-size:1em;">Vedação Externa</div>', question: "A vedação externa está ressecando. Qual elastômero resiste a ozônio, UV e intempéries?", options: [{ txt: "A) EPDM", correct: true, feedback: "Análise correta! EPDM é a escolha nº 1 para clima.<br><b>Dígito: 5</b>" }, { txt: "B) Borracha Natural (NR)", correct: false, feedback: "Incorreto. NR tem péssima resistência a UV." }, { txt: "C) Poliuretano (PU)", correct: false, feedback: "Incorreto. PU não é a melhor escolha para exposição a UV." }] }] },
        csi: [ { cenario: "<b>Equipamento:</b> Cilindro hidráulico.<br><b>Sintoma:</b> Vazamento externo, perda de pressão.", foto: "https://i.postimg.cc/4xFDRNF0/aneloringdesgastado.png", pergunta: "Analisando a marca 'mordida' no anel, qual a causa mais provável da falha?", opcoes: [ { txt: "A) Ataque Químico", correct: false, feedback: "Incorreto. Ataque químico causaria inchaço, não um corte." }, { txt: "B) Extrusão por Alta Pressão", correct: true, feedback: "Diagnóstico Perfeito! A alta pressão forçou o material para dentro da folga. Anéis back-up resolveriam." }, { txt: "C) Instalação Incorreta", correct: false, feedback: "Incorreto. Erro de instalação geralmente causa cortes ou torção no anel inteiro." } ] }, { cenario: "<b>Equipamento:</b> Eixo de motor elétrico.<br><b>Sintoma:</b> Vazamento de óleo após poucas horas.", foto: "https://i.postimg.cc/HLgQxbK8/desgaste-por-abras-o-em-retentores.png", pergunta: "O sulco circular no lábio do retentor indica que tipo de problema?", opcoes: [ { txt: "A) Desgaste por Abrasão", correct: true, feedback: "Exato! A superfície áspera do eixo funcionou como uma lixa, desgastando o lábio." }, { txt: "B) Excesso de Temperatura", correct: false, feedback: "Incorreto. Alta temperatura deixaria o lábio ressecado e quebradiço." }, { txt: "C) Incompatibilidade Química", correct: false, feedback: "Incorreto. Incompatibilidade causaria amolecimento ou inchaço." } ] }, { cenario: "<b>Equipamento:</b> Flange de linha de acetona.<br><b>Sintoma:</b> Vazamento massivo.", foto: "https://i.postimg.cc/Vk8yFLVQ/aneloringinchado.png", pergunta: "A gaxeta está inchada e amolecida. Qual é o diagnóstico óbvio aqui?", opcoes: [ { txt: "A) Aperto Excessivo do Flange", correct: false, feedback: "Incorreto. Aperto excessivo esmagaria ou rasgaria a gaxeta." }, { txt: "B) Vibração na Tubulação", correct: false, feedback: "Incorreto. Vibração causaria afrouxamento ou desgaste mecânico." }, { txt: "C) Incompatibilidade Química", correct: true, feedback: "Correto! A acetona atacou a borracha NBR. A escolha do material foi errada." } ] } ],
        otimizacao: [{ cenario: "<b>Sistema Atual:</b> Bomba de água com retentor de NBR, trocado a cada 6 meses.", meta: "Aumentar a temperatura de trabalho para 120°C e dobrar a vida útil.", pergunta: "Qual upgrade no retentor atinge a nova meta?", opcoes: [ { txt: "A) Manter o retentor de NBR, mas de uma marca melhor.", correct: false, feedback: "Ineficaz. A limitação do NBR é o material, que degrada acima de 110°C." }, { txt: "B) Trocar por um retentor de Viton (FKM).", correct: true, feedback: "Solução Perfeita! O Viton (FKM) é projetado para altas temperaturas e tem excelente resistência." }, { txt: "C) Usar dois retentores de NBR em série.", correct: false, feedback: "Solução Ruim. Isso não resolve o problema da temperatura e pode causar superaquecimento." } ] }, { cenario: "<b>Sistema Atual:</b> Prensa hidráulica com O-ring de NBR que falha por extrusão.", meta: "Eliminar a falha sem trocar o anel ou usinar o cilindro.", pergunta: "Qual componente adicional resolve o problema de forma simples?", opcoes: [ { txt: "A) Adicionar um Anel Anti-Extrusão (Back-up Ring).", correct: true, feedback: "Engenharia Inteligente! O anel back-up apoia o O-ring e impede que ele seja forçado para a folga." }, { txt: "B) Aumentar o tamanho (bitola) do O-ring.", correct: false, feedback: "Incorreto. Um O-ring maior não caberá no alojamento e será esmagado." }, { txt: "C) Usar um O-ring de material mais mole.", correct: false, feedback: "Incorreto. Um material mais mole seria extrudado ainda mais facilmente." } ] }, { cenario: "<b>Sistema Atual:</b> Flange em linha de vapor com gaxeta de papelão hidráulico.", meta: "Garantir uma vedação confiável que se adapte à expansão e contração térmica.", pergunta: "Qual tipo de gaxeta possui a 'resiliência' necessária?", opcoes: [ { txt: "A) Gaxeta de PTFE puro.", correct: false, feedback: "Inadequado. PTFE sofre de 'fluência a frio' e não é bom para ciclos térmicos." }, { txt: "B) Manter o papelão, mas com mais torque.", correct: false, feedback: "Paliativo e perigoso. Pode esmagar a gaxeta e danificar os parafusos." }, { txt: "C) Gaxeta Espiralada (Grafite + Aço Inox).", correct: true, feedback: "A Escolha do Profissional! A construção em espiral funciona como uma 'mola', mantendo a vedação." } ] }]
    },
    
    activeTimer: null,

    init() {
        this.checkUnlockState();
        this.setupEventListeners();
        this.UI.screens[0].classList.add('active');
    },

    setupEventListeners() {
        this.UI.moduleLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                if (link.classList.contains('locked')) {
                    alert("🔒 BLOQUEADO! Você precisa completar o 'Modo Treinamento' primeiro.");
                    return;
                }
                const moduleName = link.dataset.module;
                this.startGame(moduleName);
            });
        });
        
        this.UI.backToMenuButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.returnToMenu();
            });
        });

        document.getElementById('review-btn').addEventListener('click', () => EstagiarioGame.showCorrectionUI());
        document.getElementById('code-form').addEventListener('submit', (e) => { e.preventDefault(); EscapeGame.checkCode(); });
    },
    
    returnToMenu() {
        if (this.activeTimer) {
            clearInterval(this.activeTimer);
            this.activeTimer = null;
        }
        this.UI.resultOverlay.classList.remove('active');
        this.showScreen('main-menu-screen');
    },

    showScreen(screenId) {
        this.UI.screens.forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    },

    startGame(moduleName) {
        this.showScreen(`${moduleName}-game-screen`);
        switch (moduleName) {
            case 'estagiario': EstagiarioGame.start(); break;
            case 'escape': EscapeGame.start(); break;
            case 'csi': CsiGame.start(); break;
            case 'otimizacao': OtimizacaoGame.start(); break;
        }
    },

    showResult(isSuccess, title, message) {
        this.playSound(isSuccess ? 'sound-win' : 'sound-fail');
        this.UI.resultTitle.textContent = title;
        this.UI.resultTitle.className = isSuccess ? 'success' : 'fail';
        this.UI.resultMsg.innerHTML = message;
        this.UI.resultOverlay.classList.add('active');
    },

    checkUnlockState() {
        const escapeModule = document.getElementById('module-escape');
        if (localStorage.getItem('treinamentoCompleto') === 'true') {
            escapeModule.classList.remove('locked');
            escapeModule.classList.add('unlocked');
        } else {
            escapeModule.classList.add('locked');
            escapeModule.classList.remove('unlocked');
        }
    },
    
    playSound(soundId) {
        try {
            const audio = document.getElementById(soundId);
            audio.currentTime = 0;
            audio.play();
        } catch (e) {
            console.error(`Could not play sound: ${soundId}`, e);
        }
    }
};

// ======================================================
// =================== LÓGICA DOS JOGOS =================
// ======================================================

const EstagiarioGame = {
    state: {},
    UI: {
        progress: document.getElementById('estagiario-progress'),
        correctionBox: document.getElementById('user-correction-box'),
        stamp: document.getElementById('intern-stamp'),
        reviewBtn: document.getElementById('review-btn'),
        scenario: document.getElementById('intern-scenario'),
        justification: document.getElementById('intern-justification'),
        question: document.getElementById('estagiario-user-question'),
        optionsContainer: document.getElementById('estagiario-options-container'),
    },
    start() {
        this.state = { currentStep: 0, score: 0, isProcessing: false };
        this.render();
    },
    render() {
        const challenge = App.Data.estagiario[this.state.currentStep];
        this.UI.correctionBox.classList.add('hidden');
        this.UI.stamp.classList.add('hidden');
        this.UI.reviewBtn.classList.remove('hidden');
        this.UI.progress.textContent = `Erro ${this.state.currentStep + 1} de ${App.Data.estagiario.length}`;
        this.UI.scenario.innerHTML = challenge.cenario;
        this.UI.justification.innerHTML = `<span style="font-weight:bold; color:#ffcdd2;">${challenge.escolhaDoZeca}</span><br><em>${challenge.justificativaDoZeca}</em>`;
    },
    showCorrectionUI() {
        if (this.state.isProcessing) return;
        App.playSound('sound-err');
        this.UI.stamp.classList.remove('hidden');
        this.UI.reviewBtn.classList.add('hidden');
        const challenge = App.Data.estagiario[this.state.currentStep];
        this.UI.question.textContent = challenge.perguntaParaUsuario;
        this.UI.optionsContainer.innerHTML = ""; 
        challenge.opcoes.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.txt;
            button.onclick = () => this.selectAnswer(index);
            this.UI.optionsContainer.appendChild(button);
        });
        this.UI.correctionBox.classList.remove('hidden');
    },
    selectAnswer(selectedIndex) {
        if (this.state.isProcessing) return;
        this.state.isProcessing = true;
        const selectedOption = App.Data.estagiario[this.state.currentStep].opcoes[selectedIndex];
        App.playSound(selectedOption.correct ? 'sound-ok' : 'sound-bip');
        if (selectedOption.correct) {
            this.state.score++;
        }
        const buttons = this.UI.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.disabled = true);
        buttons[selectedIndex].classList.add(selectedOption.correct ? 'correct' : 'wrong');
        this.UI.question.innerHTML = selectedOption.feedback;
        setTimeout(() => {
            this.state.currentStep++;
            if (this.state.currentStep < App.Data.estagiario.length) {
                this.state.isProcessing = false;
                this.render();
            } else {
                localStorage.setItem('treinamentoCompleto', 'true');
                App.checkUnlockState();
                const totalQuestions = App.Data.estagiario.length;
                const passingScore = Math.ceil(totalQuestions * 0.6);
                const isSuccess = this.state.score >= passingScore;
                const title = isSuccess ? "TREINAMENTO CONCLUÍDO!" : "PRECISA MELHORAR!";
                const message = `Você acertou ${this.state.score} de ${totalQuestions} desafios. ${isSuccess ? 'Excelente trabalho! Modo Simulação desbloqueado.' : 'Continue estudando e tente novamente.'}`;
                App.showResult(isSuccess, title, message);
            }
        }, 4000);
    }
};

const CsiGame = {
    // ... (mesma lógica de score do EstagiarioGame)
    state: {},
    UI: {
        progress: document.getElementById('csi-progress'),
        scenario: document.getElementById('failure-scenario'),
        photo: document.getElementById('evidence-photo'),
        question: document.getElementById('csi-user-question'),
        optionsContainer: document.getElementById('csi-options-container'),
    },
    start() {
        this.state = { currentStep: 0, score: 0, isProcessing: false };
        this.render();
    },
    render() {
        const caso = App.Data.csi[this.state.currentStep];
        this.UI.progress.textContent = `Caso ${this.state.currentStep + 1} de ${App.Data.csi.length}`;
        this.UI.scenario.innerHTML = caso.cenario;
        this.UI.photo.src = caso.foto;
        this.UI.question.textContent = caso.pergunta;
        this.UI.optionsContainer.innerHTML = "";
        caso.opcoes.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.txt;
            button.onclick = () => this.selectAnswer(index);
            this.UI.optionsContainer.appendChild(button);
        });
    },
    selectAnswer(selectedIndex) {
        if (this.state.isProcessing) return;
        this.state.isProcessing = true;
        const selectedOption = App.Data.csi[this.state.currentStep].opcoes[selectedIndex];
        App.playSound(selectedOption.correct ? 'sound-ok' : 'sound-bip');
        if (selectedOption.correct) {
            this.state.score++;
        }
        const buttons = this.UI.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.disabled = true);
        buttons[selectedIndex].classList.add(selectedOption.correct ? 'correct' : 'wrong');
        this.UI.question.innerHTML = selectedOption.feedback;
        setTimeout(() => {
            this.state.currentStep++;
            if (this.state.currentStep < App.Data.csi.length) {
                this.state.isProcessing = false;
                this.render();
            } else {
                const totalQuestions = App.Data.csi.length;
                const passingScore = 2; // Precisa acertar pelo menos 2 de 3
                const isSuccess = this.state.score >= passingScore;
                const title = isSuccess ? "INVESTIGAÇÃO CONCLUÍDA!" : "RELATÓRIO INCONCLUSIVO";
                const message = `Você diagnosticou corretamente ${this.state.score} de ${totalQuestions} casos. ${isSuccess ? 'Excelente trabalho, detetive!' : 'Mais treinamento é necessário.'}`;
                App.showResult(isSuccess, title, message);
            }
        }, 5000);
    }
};

const OtimizacaoGame = {
    // ... (mesma lógica de score do EstagiarioGame)
    state: {},
    UI: {
        progress: document.getElementById('otimizacao-progress'),
        scenario: document.getElementById('project-scenario'),
        goal: document.getElementById('project-goal'),
        question: document.getElementById('otimizacao-user-question'),
        optionsContainer: document.getElementById('otimizacao-options-container'),
    },
    start() {
        this.state = { currentStep: 0, score: 0, isProcessing: false };
        this.render();
    },
    render() {
        const projeto = App.Data.otimizacao[this.state.currentStep];
        this.UI.progress.textContent = `Projeto ${this.state.currentStep + 1} de ${App.Data.otimizacao.length}`;
        this.UI.scenario.innerHTML = projeto.cenario;
        this.UI.goal.innerHTML = projeto.meta;
        this.UI.question.textContent = projeto.pergunta;
        this.UI.optionsContainer.innerHTML = "";
        projeto.opcoes.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.txt;
            button.onclick = () => this.selectAnswer(index);
            this.UI.optionsContainer.appendChild(button);
        });
    },
    selectAnswer(selectedIndex) {
        if (this.state.isProcessing) return;
        this.state.isProcessing = true;
        const selectedOption = App.Data.otimizacao[this.state.currentStep].opcoes[selectedIndex];
        App.playSound(selectedOption.correct ? 'sound-ok' : 'sound-bip');
        if (selectedOption.correct) {
            this.state.score++;
        }
        const buttons = this.UI.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.disabled = true);
        buttons[selectedIndex].classList.add(selectedOption.correct ? 'correct' : 'wrong');
        this.UI.question.innerHTML = selectedOption.feedback;
        setTimeout(() => {
            this.state.currentStep++;
            if (this.state.currentStep < App.Data.otimizacao.length) {
                this.state.isProcessing = false;
                this.render();
            } else {
                const totalQuestions = App.Data.otimizacao.length;
                const passingScore = 2; // Precisa acertar pelo menos 2 de 3
                const isSuccess = this.state.score >= passingScore;
                const title = isSuccess ? "PROJETO CONCLUÍDO!" : "SOLUÇÃO REPROVADA!";
                const message = `Você acertou ${this.state.score} de ${totalQuestions} otimizações. ${isSuccess ? 'Suas soluções foram aprovadas!' : 'Mais estudo é necessário.'}`;
                App.showResult(isSuccess, title, message);
            }
        }, 6000);
    }
};

const EscapeGame = {
    state: {},
    UI: {
        timer: document.getElementById('timer'),
        progress: document.getElementById('escape-progress'),
        visualHint: document.getElementById('visual-hint'),
        enigmaText: document.getElementById('enigma-text'),
        optionsContainer: document.getElementById('escape-options-container'),
        escapeContent: document.getElementById('escape-content'),
        codeEntry: document.getElementById('code-entry'),
        codeInput: document.getElementById('code-input'),
        codeError: document.getElementById('code-error'),
    },
    start() {
        this.state = { currentStep: 0, score: 0, time: App.Data.escape.config.initialTime, gameEnded: false, isTyping: false };
        App.activeTimer = null;
        this.UI.timer.textContent = this.formatTime(this.state.time);
        this.UI.timer.classList.remove('lowtime');
        this.UI.escapeContent.classList.remove('hidden');
        this.UI.codeEntry.classList.add('hidden');
        this.UI.codeInput.value = '';
        this.UI.codeError.textContent = '';
        App.playSound('sound-alarm');
        this.startTimer();
        this.render();
    },
    render() {
        const puzzle = App.Data.escape.enigmas[this.state.currentStep];
        this.UI.progress.textContent = `Enigma ${this.state.currentStep + 1} de ${App.Data.escape.enigmas.length}`;
        this.UI.visualHint.innerHTML = puzzle.hint;
        this.UI.optionsContainer.innerHTML = "";
        puzzle.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.txt;
            button.disabled = true;
            button.onclick = () => this.selectAnswer(index);
            this.UI.optionsContainer.appendChild(button);
        });
        this.typeWriter(puzzle.question, () => {
            this.UI.optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
                if (!this.state.gameEnded) btn.disabled = false;
            });
        });
    },
    selectAnswer(selectedIndex) {
        if (this.state.isTyping || this.state.isProcessing) return;
        this.state.isProcessing = true;

        const puzzle = App.Data.escape.enigmas[this.state.currentStep];
        const selectedOption = puzzle.options[selectedIndex];
        
        const buttons = this.UI.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.disabled = true);
        buttons[selectedIndex].classList.add(selectedOption.correct ? 'correct' : 'wrong');
        App.playSound(selectedOption.correct ? 'sound-ok' : 'sound-err');
        
        if (selectedOption.correct) {
            this.state.score++;
        } else {
            this.state.time = Math.max(0, this.state.time - 10);
            this.UI.timer.textContent = this.formatTime(this.state.time);
        }

        this.typeWriter(selectedOption.feedback, () => {
            setTimeout(() => {
                if (this.state.time <= 0) {
                    this.endGame(false, "TEMPO ESGOTADO!", "A penalidade esgotou seu tempo.");
                    return;
                }
                
                this.state.currentStep++;
                if (this.state.currentStep < App.Data.escape.enigmas.length) {
                    this.state.isProcessing = false;
                    this.render();
                } else {
                    this.transitionToCodeScreen();
                }
            }, 2500);
        });
    },
    transitionToCodeScreen() {
        this.UI.escapeContent.classList.add('hidden');
        this.UI.codeEntry.classList.remove('hidden');
        this.UI.codeInput.focus();
    },
    checkCode() {
        if (this.state.gameEnded) return;
        App.playSound('sound-bip');
        if (this.UI.codeInput.value === App.Data.escape.config.finalCode) {
            this.endGame(true, "SISTEMA ESTABILIZADO!", "Parabéns! Você evitou a crise e salvou a planta.");
        } else {
            this.UI.codeError.textContent = "CÓDIGO INCORRETO";
            this.UI.codeInput.value = "";
            this.state.time = Math.max(0, this.state.time - 15);
            this.UI.timer.textContent = this.formatTime(this.state.time);
            if (this.state.time <= 0) {
                this.endGame(false, "ACESSO NEGADO!", "O código incorreto e a penalidade de tempo acionaram o bloqueio final.");
            }
        }
    },
    startTimer() {
        App.activeTimer = setInterval(() => {
            if (this.state.gameEnded) return;
            this.state.time--;
            this.UI.timer.textContent = this.formatTime(this.state.time);
            if (this.state.time > 0 && this.state.time <= 15) { this.UI.timer.classList.add('lowtime'); }
            if (this.state.time <= 0) {
                this.endGame(false, "TEMPO ESGOTADO!", "Você demorou demais para agir e o sistema entrou em falha.");
            }
        }, 1000);
    },
    endGame(isSuccess, title, message) {
        if(this.state.gameEnded) return;
        this.state.gameEnded = true;
        clearInterval(App.activeTimer);
        App.activeTimer = null;
        const scoreMessage = `Sua pontuação final foi de ${this.state.score} de ${App.Data.escape.enigmas.length} enigmas corretos.`;
        App.showResult(isSuccess, title, `${message}<br><br>${scoreMessage}`);
    },
    formatTime(seconds) {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    },
    typeWriter(text, callback) {
        this.state.isTyping = true;
        this.UI.enigmaText.innerHTML = "";
        let i = 0;
        const type = () => {
            if (i < text.length) {
                this.UI.enigmaText.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
                i++;
                setTimeout(type, 20);
            } else {
                this.UI.enigmaText.innerHTML = text; // Remove cursor at end
                this.state.isTyping = false;
                if (callback) callback();
            }
        };
        type();
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());