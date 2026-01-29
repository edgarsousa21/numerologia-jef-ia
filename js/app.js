/* ============================================================
   APP.JS - MOTOR DA APLICAÇÃO (VERSÃO FINAL CORRIGIDA)
   ============================================================ */

/**
 * 0. UTILITÁRIOS DE SEGURANÇA E FORMATAÇÃO
 */
const Utils = {
    escapeHTML: (str) => {
        if (!str) return '';
        return str.replace(/[&<>'"]/g, tag => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
        }[tag]));
    },
    formatDateBR: (isoDate) => {
        if (!isoDate) return '';
        const [ano, mes, dia] = isoDate.split('-');
        return `${dia}/${mes}/${ano}`;
    },
    getSaudacao: () => {
        const hora = new Date().getHours();
        return hora < 12 ? "Bom dia" : (hora < 18 ? "Boa tarde" : "Boa noite");
    }
};

/**
 * 1. ESTADO GLOBAL (STATE)
 */
const AppState = {
    user: { 
        nome: null, 
        dataNascimento: null, 
        ciclos: null 
    },
    runtime: {
        viewAtual: 'welcome',
        contextoDetalhe: null, 
        tabAtiva: 0,
        tabDashboard: 'previsoes', 
        dadosAmor: null,
        dadosCasa: { numero: null, letra: null, resultado: null, harmonizacao: null },
        horaAtiva: null,
        tabHoras: 'iguais'
    }
};

// Função para atualizar o estado e redesenhar a tela
function updateState(updates) {
    if(updates.user) Object.assign(AppState.user, updates.user);
    if(updates.runtime) Object.assign(AppState.runtime, updates.runtime);
    renderApp();
}

/**
 * 2. NAVEGAÇÃO E ROTEAMENTO
 */
function navigateTo(view, contexto = null) {
    updateState({ runtime: { viewAtual: view, contextoDetalhe: contexto, tabAtiva: 0 } });
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (['welcome', 'form', 'loading'].includes(view)) {
        RemoveAppMenu();
    }
}

// --- FUNÇÕES GLOBAIS ---

window.switchTab = (idx) => {
    AppState.runtime.tabAtiva = idx;
    renderApp();
};

window.switchDashboardTab = (tabName) => {
    // 1. Atualiza o estado da aba
    AppState.runtime.tabDashboard = tabName;
    
    // 2. Redesenha a tela para refletir a mudança
    renderApp();
    
    // 3. LÓGICA DE RITMO: Centraliza a aba que foi clicada suavemente
    setTimeout(() => {
        // Busca a pílula que acabou de ganhar a classe .active
        const activeTab = document.querySelector(`.tab-pill.active`);
        if (activeTab) {
            activeTab.scrollIntoView({
                behavior: 'smooth',  // Movimento deslizante
                block: 'nearest',   // Não move a tela verticalmente
                inline: 'center'    // Traz o botão para o CENTRO do carrossel
            });
        }
    }, 50); // Delay de 50ms garante que o HTML já foi montado
};

window.openDetail = (id) => navigateTo('detail', id);
window.openDetailJornada = (tipo, index) => navigateTo('jornada_detail', { tipo, index });

window.navGoTo = (destino) => {
    if (destino === 'dashboard') {
        navigateTo('dashboard');
    } else {
        if (AppState.runtime.viewAtual === 'dashboard') {
            const mapa = { 'mapa': 'ciclos', 'oraculo': 'portais', 'diario': 'ferramentas' };
            window.switchDashboardTab(mapa[destino] || 'previsoes');
        } else {
            AppState.runtime.tabDashboard = (destino === 'oraculo' ? 'portais' : 'previsoes');
            navigateTo('dashboard');
        }
    }
};

window.voltarSmartGlobal = () => {
    // Lista de IDs que pertencem à aba Ferramentas
    const toolsContexts = ['sorte', 'cores', 'cristais', 'ervas', 'dias'];
    
    // Se o usuário estiver saindo de uma ferramenta, volta para a aba Ferramentas
    if (toolsContexts.includes(AppState.runtime.contextoDetalhe)) {
        AppState.runtime.tabDashboard = 'ferramentas';
    } else {
        // Caso contrário (ex: saindo de Previsões), volta para o padrão
        AppState.runtime.tabDashboard = 'previsoes';
    }
    
    navigateTo('dashboard');
    
    // Pequeno delay para garantir que a aba correta ganhe foco visual no scroll
    setTimeout(() => {
        const activeTab = document.querySelector(`.tab-pill.active`);
        if(activeTab) activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }, 100);
};

/**
 * 3. RENDERIZADOR PRINCIPAL (ROUTER)
 */
function renderApp() {
    const appContainer = document.getElementById('app');
    if (!appContainer) return;
    
    const map = { 
    'welcome': ViewWelcome, 
    'form': ViewForm, 
    'loading': ViewLoading, 
    'dashboard': ViewDashboard, 
    'detail': ViewDetail, 
    'jornada_detail': ViewJornadaDetail,
    'amor_form': ViewAmorForm,
    'amor_resultado': ViewAmorResult,
    'horas_lista': ViewHorasLista,
    'hora_detalhe': ViewHoraDetalhe,

    // --- BLOCO INTEGRAL: CASA ---
    'casa_form': ViewCasaForm,
    'casa_result': ViewCasaResult,                 
    'casa_categorias': ViewCasaCategorias,         
    'casa_frequencias': ViewCasaFrequencias,       
    'casa_harmonizacao_form': ViewCasaHarmonizacaoForm,   
    'casa_carrossel': ViewCasaCarrossel           
};
    
    if (map[AppState.runtime.viewAtual]) {
        appContainer.innerHTML = map[AppState.runtime.viewAtual]();
        
        if(AppState.runtime.viewAtual === 'form') bindForm();
        if(AppState.runtime.viewAtual === 'amor_form') bindAmorForm();
        
        if(AppState.runtime.viewAtual === 'dashboard') {
             setTimeout(() => { 
                 initSmartInfiniteScroll(); 
                 renderProgressBar(); 
             }, 100);
        }

        const telasSemMenu = ['welcome', 'form', 'loading'];
        if (!telasSemMenu.includes(AppState.runtime.viewAtual)) {
            RenderAppMenu(); 
        } else {
            RemoveAppMenu(); 
        }
    }
}

/**
 * 4. VIEWS: INICIAIS
 */
const ViewWelcome = () => `
    <div class="view-container view-center animate-fade-in">
        <h3 class="welcome-subtitle">${AppTexts.welcome.subtitle}</h3>
        <h1 class="header-greeting-serif" style="font-size:3rem; line-height:1.1; margin:15px 0;">${AppTexts.welcome.titleMain}<br><span class="welcome-title-italic">${AppTexts.welcome.titleAlt}</span></h1>
        <p class="welcome-desc">${AppTexts.welcome.description}</p>
        <button class="btn-primary ripple" style="margin-top:30px;" onclick="navigateTo('form')">${AppTexts.welcome.btnStart}</button>
    </div>`;

const ViewForm = () => `
    <div class="view-container animate-fade-in">
        <button class="btn-back-light" onclick="navigateTo('welcome')" style="margin-bottom:20px;"><i class="ph ph-arrow-left"></i> ${AppTexts.global.btnBack}</button>
        <h1 class="header-greeting-serif" style="font-size:2rem; margin-bottom:10px;">${AppTexts.form.title}</h1>
        <p class="welcome-desc">${AppTexts.form.subtitle}</p>
        <form id="userForm" style="margin-top:30px;">
            <div style="margin-bottom: 24px;">
                <label class="form-label">${AppTexts.form.labelName}</label>
                <input type="text" id="inputNome" class="form-input" placeholder="${AppTexts.form.placeholderName}" required>
            </div>
            <div style="margin-bottom: 40px;">
                <label class="form-label">${AppTexts.form.labelBirth}</label>
                <input type="tel" id="inputDataFormatted" class="form-input" placeholder="DD/MM/AAAA" maxlength="10" inputmode="numeric" required>
            </div>
            
            <button type="submit" class="btn-primary ripple" style="margin: 0 auto; display: block;">${AppTexts.form.btnGenerate}</button>
        </form>
    </div>`;

const ViewLoading = () => `
    <div class="view-container view-center">
        <div class="spinner"></div>
        <p class="loading-text" style="margin-top:20px; color:var(--c-primary); font-family:var(--font-serif);">${AppTexts.loading.text}</p>
    </div>`;

/**
 * 5. VIEW: DASHBOARD PREMIUM
 */
const ViewDashboard = () => {
    const c = AppState.user.ciclos;
    if (!c) return navigateTo('welcome');

    const nomeSeguro = Utils.escapeHTML(AppState.user.nome.split(' ')[0]);
    const tabDash = AppState.runtime.tabDashboard || 'previsoes';
    
    const dObj = new Date();
    const dataWidget = `${String(dObj.getDate()).padStart(2, '0')}/${String(dObj.getMonth() + 1).padStart(2, '0')}`;
    const diaSemana = dObj.toLocaleDateString('pt-BR', { weekday: 'long' });
    const resumoDia = (typeof TextosDia !== 'undefined' && TextosDia[c.dia]) 
        ? TextosDia[c.dia].subtitulo : "Sincronize sua energia.";

    return `
    <div class="dashboard-wrapper animate-fade-in">
        <header class="header-premium">
            <div class="avatar-center">
                <div class="avatar-circle"><i class="ph-fill ph-leaf"></i></div>
            </div>
            <p class="header-date-top">${dataWidget} ${diaSemana}</p>
            <h1 class="header-greeting-serif">${Utils.getSaudacao()}, <span>${nomeSeguro}</span></h1>
            
            <section class="section-daily-msg" onclick="openDetail('dia')">
    <div class="daily-widget-premium">
        <div class="msg-date-side">
            <span class="d-day">${dataWidget.split('/')[0]}</span>
            <span class="d-month">${dataWidget.split('/')[1]}</span>
        </div>
        
        <div class="msg-content-premium">
            <span class="label-internal">Mensagem para você hoje</span>
            <div class="msg-flex-text">
                <p>${resumoDia}</p>
                <i class="ph-bold ph-arrow-right"></i>
            </div>
        </div>
    </div>
</section>
        </header>

        <div class="content-sheet-white">
            <nav class="tabs-nav-container">
                <span class="label-tiny">Navegue nas opçÕes desejadas</span>
                <div class="tabs-scroll">
                    ${['Previsoes', 'Ciclos', 'Desafios', 'Portais', 'Ferramentas'].map(t => {
                        const id = t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        const activeClass = tabDash === id ? 'active' : '';
                        return `<button class="tab-pill ${activeClass}" onclick="switchDashboardTab('${id}')">${t}</button>`;
                    }).join('')}
                </div>
            </nav>

            <main class="grid-content-area">
                ${renderDashboardContent(tabDash, c)}
            </main>
        </div>
    </div>`;
};

function renderDashboardContent(tab, c) {
    const j = c.jornadaVida;
    let html = ""; // Variável para acumular o conteúdo e aplicar a animação ao final

    if (tab === 'previsoes') {
        html = `
        <div class="grid-cards-premium">
            <div class="card-premium cp-1" onclick="openDetail('ano')">
                <i class="ph-fill ph-coffee"></i>
                <h3>Ano Pessoal</h3>
                <p>A energia que guia suas decisões neste ano</p>
            </div>
            <div class="card-premium cp-2" onclick="openDetail('mes')">
                <i class="ph-fill ph-star"></i>
                <h3>Mês Pessoal</h3>
                <p>As tendências que influenciam este mês</p>
            </div>
            <div class="card-premium cp-3" onclick="openDetail('dia')">
                <i class="ph-fill ph-sun"></i>
                <h3>Dia Pessoal</h3>
                <p>Como agir melhor hoje</p>
            </div>
            <div class="card-premium cp-4" onclick="openDetail('id_quem')">
                <i class="ph-fill ph-fingerprint"></i>
                <h3>Sua Essência</h3>
                <p>Seu propósito e identidade vibracional</p>
            </div>
        </div>
        
        <div class="section-block" style="padding: 0 24px; margin-top: 35px; margin-bottom: 40px;">
            <h3 class="special-section-title"><i class="ph-fill ph-sparkle"></i> Análises Profundas</h3>
            <div class="premium-banner theme-love ripple" onclick="navigateTo('amor_form')">
                <div class="badge-tag badge-new">Novo</div>
                <div class="banner-icon"><i class="ph-fill ph-heart"></i></div>
                <div class="banner-content">
                    <h4 class="banner-title">${AppTexts.dashboard.specials.loveTitle}</h4>
                    <p class="banner-desc">${AppTexts.dashboard.specials.loveDesc}</p>
                </div>
                <i class="ph-bold ph-caret-right banner-arrow"></i>
            </div>
            <div class="premium-banner theme-house ripple" onclick="navigateTo('casa_form')">
                <div class="badge-tag badge-exclusive">Exclusivo</div>
                <div class="banner-icon"><i class="ph-fill ph-house-line"></i></div>
                <div class="banner-content">
                    <h4 class="banner-title">${AppTexts.dashboard.specials.houseTitle}</h4>
                    <p class="banner-desc">${AppTexts.dashboard.specials.houseDesc}</p>
                </div>
                <i class="ph-bold ph-caret-right banner-arrow"></i>
            </div>
        </div>`;
    }

    else if (tab === 'ciclos') {
        const anoAtual = new Date().getFullYear();
        html = `
        <div class="section-block" style="padding: 0 24px;">
            <div class="intro-box-premium">
                ${AppTexts.dashboard.jornadaInst}
            </div>
            <div class="timeline-container">
                <div class="timeline-line"><div id="life-progress-bar" class="timeline-fill"></div></div>
                ${j.ciclosVida.map((item, idx) => {
                    const isCurrent = (anoAtual >= item.inicio && (typeof item.fim === 'string' || anoAtual <= item.fim));
                    const statusClass = isCurrent ? "active" : "future";
                    return `
                    <div class="timeline-step ${statusClass}" onclick="openDetailJornada('ciclo', ${idx})">
                        ${isCurrent ? `<div class="here-badge" style="position:absolute; top:-10px; right:0; background:var(--c-accent); color:white; font-size:0.6rem; padding:2px 8px; border-radius:10px;">ATUAL</div>` : ''}
                        <div class="cycle-circle">${item.num}</div>
                        <div class="step-info">
                            <span class="label-tiny" style="display:block; padding:0; margin-bottom:2px;">${idx + 1}º CICLO</span>
                            <span class="cycle-years">${item.inicio} - ${item.fim === 9999 ? '∞' : item.fim}</span>
                        </div>
                        <i class="ph-bold ph-caret-right" style="opacity:0.3;"></i>
                    </div>`;
                }).join('')}
            </div>
        </div>`;
    }

    else if (tab === 'desafios') {
        const anoNasc = parseInt(AppState.user.dataNascimento.split('-')[0]); 
        const infinito = '\u221E'; // Símbolo Unicode seguro

        html = `
        <div class="section-block" style="padding: 0 24px;">
             <div class="intro-box-premium" style="background: rgba(255, 243, 224, 0.4); border-color: rgba(230, 81, 0, 0.2);">
                ${AppTexts.dashboard.desafiosInst}
            </div>
            <div style="display:grid; gap:12px;">
                ${j.desafios.map((d, idx) => {
                    // REGRA DE OURO: Desafios herdam datas dos Ciclos
                    // Desafio 1 e 2 = Ciclo 1 e 2. Desafio 3 = Vida toda.
                    const ref = (idx < 2) ? j.ciclosVida[idx] : { inicio: anoNasc, fim: 9999 };
                    
                    const fimReal = (ref.fim === 9999 || ref.fim === "...") ? infinito : ref.fim;
                    const duracaoFormatada = `${ref.inicio} a ${fimReal}`;
                    
                    return `
                    <div class="boutique-card ripple" onclick="openDetailJornada('desafio', ${idx})" style="display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <span class="stat-label">${AppTexts.dashboard.labelsFases[idx]} — de ${duracaoFormatada}</span>
                            <h4 style="color:var(--c-primary); margin:4px 0;">Desafio <strong>${d.num}</strong></h4>
                        </div>
                        <div class="cycle-circle" style="background:#f0f0f0; color:var(--c-primary); width:40px; height:40px;">${d.num}</div>
                    </div>`;
                }).join('')}
            </div>
        </div>`;
    }

    else if (tab === 'portais') {
        const anoAtual = new Date().getFullYear(); 
        const anoNasc = parseInt(AppState.user.dataNascimento.split('-')[0]);
        const infinito = '\u221E';
        
        html = `
        <div class="section-block">
            <div style="padding: 0 24px;">
                <div class="intro-box-premium" style="background: rgba(224, 242, 241, 0.4); border-color: rgba(0, 137, 123, 0.2);">
                    ${AppTexts.dashboard.momentosInst}
                </div>
            </div>
            <div id="carouselWindow" class="momento-carousel">
                ${j.momentos.map((m, idx) => {
                    const frase = AppTexts.dashboard.momentosDefinicoes[idx] || AppTexts.dashboard.momentoEvolucao;
                    
                    // Ajuste: 1º Momento começa no nascimento
                    const startYear = idx === 0 ? anoNasc : m.inicio;
                    
                    // Ajuste: Lógica anti-duplicidade (anoAtual < m.fim)
                    const isCurrent = anoAtual >= startYear && (m.fim === 9999 || anoAtual < m.fim);
                    const activeClass = isCurrent ? 'active' : '';
                    const fimFormatado = m.fim === 9999 ? infinito : m.fim;

                    return `
                    <div class="momento-card-premium ${activeClass}" onclick="openDetailJornada('momento', ${idx})">
                        <div class="momento-tag-top">MOMENTO DECISIVO</div>
                        <div class="momento-body">
                            <h4 class="momento-main-title">${idx + 1}º</h4>
                            <p class="momento-phrase-italic">"${frase}"</p>
                        </div>
                        <div class="momento-time-row">
                            <i class="ph ph-calendar-blank"></i> 
                            <strong>de ${startYear} a ${fimFormatado}</strong>
                        </div>
                        ${isCurrent ? `<div class="momento-status-badge"><span class="pulse-dot"></span> VIVENDO AGORA</div>` : ''}
                        <div class="momento-action-footer">ENTENDER FASE <i class="ph ph-arrow-right"></i></div>
                    </div>`;
                }).join('')}
            </div>
        </div>`;
    }

    else if (tab === 'ferramentas') {
        const tools = [
            { id: 'horas', icon: 'ph-clock-afternoon', label: 'Horas Iguais' },
			{ id: 'sorte', icon: 'ph-clover', label: AppTexts.dashboard.tools.sorteTitle },
            { id: 'dias', icon: 'ph-sun-dim', label: AppTexts.dashboard.tools.diasTitle },
            { id: 'cores', icon: 'ph-palette', label: AppTexts.dashboard.tools.coresTitle },
            { id: 'cristais', icon: 'ph-sketch-logo', label: 'Cristais' },
            { id: 'ervas', icon: 'ph-plant', label: 'Ervas' },
			
        ];

        html = `
        <div class="grid-cards-premium" style="gap: 12px;">
            ${tools.map(t => {
                // Lógica para abrir a ferramenta de horas ou o detalhe padrão
                const clickAction = t.id === 'horas' ? "navigateTo('horas_lista')" : `openDetail('${t.id}')`;
                return `
                <div class="card-premium ripple" style="min-height: 140px; text-align: center; align-items: center;" onclick="${clickAction}">
                    <i class="ph-fill ${t.icon}" style="margin:0; font-size: 2.2rem; color: var(--c-primary); opacity: 0.8;"></i>
                    <h4 style="margin-top: 15px; font-size: 0.9rem; font-weight: 800; color: var(--c-primary);">${t.label}</h4>
                </div>`;
            }).join('')}
        </div>`;
    }
    
    else {
        html = `<div style="padding:40px; text-align:center;">Conteúdo em carregamento...</div>`;
    }

    // Retorno final encapsulado na camada de animação líquida
    return `<div class="tab-content-wrapper">${html}</div>`;
}

/**
 * 6. VIEW: DETALHES UNIFICADA (Hero Header + Sheet)
 */
const ViewDetail = () => {
    const ctx = AppState.runtime.contextoDetalhe;
    if (!AppState.user.nome) return navigateTo('welcome');

    if (['sorte', 'cores', 'cristais', 'ervas', 'dias', 'id_quem'].includes(ctx)) {
        return renderFerramentaDetail(ctx);
    }

    const c = AppState.user.ciclos;
    let headInfo = { label: "", concept: "", title: "", desc: "" };
    let contentBody = "";
    let explanationText = ""; // Variável para o texto novo

    if (ctx === 'ano') {
        const d = TextosAno[c.ano];
        headInfo = { label: "CICLO ATUAL", concept: c.ano, title: "Ano Pessoal", desc: d.subtitulo };
        // Busca o texto explicativo
        explanationText = `<div class="didactic-box theme-orange"><p><strong>${TextosExplicativos.previsoes.ano.titulo}:</strong> ${TextosExplicativos.previsoes.ano.texto}</p></div>`;
        
contentBody = `
    ${explanationText}
    
    <div class="content-section">
        <div class="section-header">
            <div class="icon-box"><i class="ph-bold ph-book-open"></i></div>
            <h3 class="section-title">Visão Geral</h3>
        </div>
        <div class="text-body">${d.visao}</div>
    </div>

    <div class="content-section">
        <div class="section-header">
            <div class="icon-box"><i class="ph-bold ph-sparkle"></i></div>
            <h3 class="section-title">O Cenário</h3>
        </div>
        <div class="text-body">${d.cenario}</div>
    </div>

    <div class="content-section">
        <div class="section-header">
            <div class="icon-box"><i class="ph-bold ph-heart"></i></div>
            <h3 class="section-title">No Amor</h3>
        </div>
        <div class="text-body">${d.noamor}</div>
    </div>

    <div class="content-section">
        <div class="section-header">
            <div class="icon-box"><i class="ph-bold ph-briefcase"></i></div>
            <h3 class="section-title">No Trabalho</h3>
        </div>
        <div class="text-body">${d.trabalho}</div>
    </div>

    <div class="content-section">
        <div class="section-header">
            <div class="icon-box"><i class="ph-bold ph-warning-circle"></i></div>
            <h3 class="section-title">O Alerta do Mentor</h3>
        </div>
        <div class="text-body">${d.alerta}</div>
    </div>

    <div class="content-section">
        <div class="section-header">
            <div class="icon-box"><i class="ph-bold ph-house-line"></i></div>
            <h3 class="section-title">O Dever de Casa</h3>
        </div>
        <div class="text-body">${d.dever}</div>
    </div>
`;
    } else if (ctx === 'mes') {
    const d = TextosMes[c.mes];
    headInfo = { label: "VIBRAÇÃO DO MÊS", concept: c.mes, title: "Mês Pessoal", desc: d.subtitulo };
    explanationText = `<div class="didactic-box theme-blue"><p><strong>${TextosExplicativos.previsoes.mes.titulo}:</strong> ${TextosExplicativos.previsoes.mes.texto}</p></div>`;

    contentBody = `
        ${explanationText}
        
        <div class="content-section">
            <div class="section-header">
                <div class="icon-box"><i class="ph-bold ph-calendar-check"></i></div>
                <h3 class="section-title">Clima do Mês</h3>
            </div>
            <div class="text-body">${d.texto}</div>
        </div>

        ${d.topicos.map(item => `
            <div class="content-section">
                <div class="section-header">
                    <div class="icon-box"><i class="ph-bold ${item.i}"></i></div>
                    <h3 class="section-title">${item.t}</h3>
                </div>
                <div class="text-body">${item.d}</div>
            </div>
        `).join('')}

        <div class="spacer-bottom"></div>`;
    } else if (ctx === 'dia') {
        const d = TextosDia[c.dia];
        headInfo = { label: "ENERGIA DE HOJE", concept: c.dia, title: "Dia Pessoal", desc: d.subtitulo };
        explanationText = `<div class="didactic-box theme-green"><p><strong>${TextosExplicativos.previsoes.dia.titulo}:</strong> ${TextosExplicativos.previsoes.dia.texto}</p></div>`;

        contentBody = `
            ${explanationText}
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-sun"></i></div><h3 class="section-title">Clima do Dia</h3></div>
                <div class="text-body">${d.texto}</div>
            </div>
            ${d.topicos.map(item => `
                <div class="content-section">
                    <div class="section-header">
                        <div class="icon-box"><i class="ph-bold ${item.i}"></i></div>
                        <h3 class="section-title">${item.t}</h3>
                    </div>
                    <div class="text-body">${item.d}</div>
                </div>
            `).join('')}`;
    }

    // RETORNO DA INTERFACE COMPLETA
    return `
    <div class="view-container" style="padding:0; background:var(--bg-sheet);">
        <div class="hero-header theme-orange animate-fade-in">
            <button class="btn-back-white" onclick="voltarSmartGlobal()"><i class="ph-bold ph-arrow-left"></i> Voltar</button>
            <span class="hero-label"><i class="ph-fill ph-star"></i> ${headInfo.label}</span>
            <div class="hero-number">${headInfo.concept}</div>
            <h1 class="hero-title">${headInfo.title}</h1>
            <p class="hero-subtitle">"${headInfo.desc}"</p>
        </div>
        <div class="reading-sheet animate-fade-in" style="animation-delay: 0.1s;">
            ${contentBody}
            <div style="height: 60px;"></div>
        </div>
    </div>`;
};

/**
 * 7. RENDERIZADOR DE FERRAMENTAS
 */
function renderFerramentaDetail(tipo) {
    const u = AppState.user.ciclos;
    const diaNasc = parseInt(AppState.user.dataNascimento.split('-')[2]);
    const diaReduzido = Logic.reduzir(diaNasc);
    
    let themeClass = "theme-blue";
    let iconClass = "ph-star";
    let title = "";
    let content = "";
    let concept = "";
    let subtitle = "Ferramenta de poder pessoal";
    
    // Pega a explicação genérica da ferramenta se existir
    let toolExplanation = TextosExplicativos.ferramentas[tipo] 
        ? `<div class="didactic-box"><p>${TextosExplicativos.ferramentas[tipo]}</p></div>` 
        : "";

    if (tipo === 'sorte') {
        themeClass = "theme-orange";
        iconClass = "ph-clover";
        title = "Números da Sorte";
        concept = u.extras.numerosSorte.join(" - ");
        content = `
            ${toolExplanation}
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-info"></i></div><h3 class="section-title">O Conceito</h3></div>
                <div class="text-body">${AppTexts.details.sorte.tab1}</div>
            </div>
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-check-circle"></i></div><h3 class="section-title">Como Usar</h3></div>
                <div class="text-body">${AppTexts.details.sorte.tab2}</div>
            </div>`;
    } 
    else if (tipo === 'cores') {
        themeClass = "theme-blue";
        iconClass = "ph-palette";
        title = "Cores Vibracionais";
        const dados = DadosCores[diaReduzido];
        concept = `<div style="display:flex; gap:12px; justify-content:center; margin-top:10px;">
            ${dados.hex.map(c => `<div style="width:45px; height:45px; border-radius:50%; background:${c}; border:3px solid rgba(255,255,255,0.2); box-shadow: 0 4px 10px rgba(0,0,0,0.1);"></div>`).join('')}
        </div>`;
        content = `
            ${toolExplanation}
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-paint-brush"></i></div><h3 class="section-title">Sua Paleta</h3></div>
                <div class="text-body">${dados.texto}</div>
            </div>
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-house"></i></div><h3 class="section-title">Onde Aplicar</h3></div>
                <div class="text-body">${AppTexts.details.cores.tab2}</div>
            </div>`;
    }
    else if (tipo === 'cristais') {
        themeClass = "theme-purple";
        iconClass = "ph-gem";
        title = "Cristal Regente";
        const dados = DadosCristais[diaReduzido];
        concept = `<span style="font-size:2.5rem; line-height:1.1;">${dados.nome}</span>`;
        content = `
            ${toolExplanation}
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-sparkle"></i></div><h3 class="section-title">Propriedade</h3></div>
                <div class="text-body"><p>${dados.desc}</p></div>
            </div>
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-hand-palm"></i></div><h3 class="section-title">Como Usar</h3></div>
                <div class="text-body"><p>${dados.uso}</p></div>
            </div>`;
    }
    else if (tipo === 'ervas') {
        themeClass = "theme-green";
        iconClass = "ph-plant";
        title = "Erva de Poder";
        const dados = DadosErvas[diaReduzido];
        concept = `<span style="font-size:2.5rem; line-height:1.1;">${dados.nome}</span>`;
        content = `
            ${toolExplanation}
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-leaf"></i></div><h3 class="section-title">Benefícios</h3></div>
                <div class="text-body"><p>${dados.desc}</p></div>
            </div>
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-drop"></i></div><h3 class="section-title">Ritual</h3></div>
                <div class="text-body"><p>${dados.uso}</p></div>
            </div>`;
    }
    else if (tipo === 'dias') {
        themeClass = "theme-orange";
        iconClass = "ph-calendar-check";
        title = "Dias de Poder";
        concept = u.extras.diasFavoraveis.slice(0,4).join(", ") + "...";
        content = `
            ${toolExplanation}
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-waves"></i></div><h3 class="section-title">O Fluxo</h3></div>
                <div class="text-body">${AppTexts.details.dias.tab1}</div>
            </div>
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-list-checks"></i></div><h3 class="section-title">Agenda</h3></div>
                <div class="text-body">
                    <p>Seus dias favoráveis neste mês são:</p>
                    <div style="display:flex; flex-wrap:wrap; gap:8px;">
                        ${u.extras.diasFavoraveis.map(d => `<span style="background:#fff3e0; color:#e65100; padding:6px 12px; border-radius:8px; font-weight:bold;">Dia ${d}</span>`).join('')}
                    </div>
                    <br>${AppTexts.details.dias.tab2}
                </div>
            </div>`;
    }
    else if (tipo === 'id_quem') {
        themeClass = "theme-purple";
        iconClass = "ph-fingerprint";
        title = `Destino ${u.identidade}`;
        concept = u.identidade;
        const dId = ConteudoIdentidade[u.identidade];
        content = `
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-user"></i></div><h3 class="section-title">Quem é você</h3></div>
                <div class="text-body">${dId.textoQuem}</div>
            </div>
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-eye"></i></div><h3 class="section-title">Como te veem</h3></div>
                <div class="text-body">${dId.textoPercepcao}</div>
            </div>
            <div class="content-section">
                <div class="section-header"><div class="icon-box"><i class="ph-bold ph-lightning"></i></div><h3 class="section-title">Seu Padrão</h3></div>
                <div class="text-body">${dId.textoPadrao}</div>
            </div>`;
    }

    return `
    <div class="view-container" style="padding:0; background:var(--bg-sheet);">
    <div class="hero-header ${themeClass} animate-fade-in">
        <button class="btn-back-white" onclick="voltarSmartGlobal()"><i class="ph-bold ph-arrow-left"></i> Voltar</button>
        <span class="hero-label"><i class="ph-fill ${iconClass}"></i> FERRAMENTA</span>
        <div class="hero-number hero-number-tool">${concept}</div> 
        <h1 class="hero-title">${title}</h1>
        <p class="hero-subtitle">"${subtitle}"</p>
    </div>
        <div class="reading-sheet animate-fade-in" style="animation-delay: 0.1s;">
            ${content}
            <div style="height: 40px;"></div>
        </div>
    </div>`;
}

/**
 * 8. VIEW: JORNADA (Ciclos, Desafios, Momentos)
 */
const ViewJornadaDetail = () => {
    const ctx = AppState.runtime.contextoDetalhe; 
    if (!ctx) return navigateTo('dashboard');
    const { tipo, index } = ctx; 
    const c = AppState.user.ciclos.jornadaVida;
    const anoNasc = parseInt(AppState.user.dataNascimento.split('-')[0]);
    
    let item, base, tituloHero, mappedKey;
    
    if (tipo === 'ciclo') { 
        item = c.ciclosVida[index]; base = TextosJornada.ciclo; tituloHero = `Ciclo ${index + 1}`; mappedKey = 'ciclos';
    } else if (tipo === 'desafio') { 
        item = c.desafios[index]; base = TextosJornada.desafio; tituloHero = AppTexts.dashboard.labelsFases[index]; mappedKey = 'desafios';
    } else { 
        item = c.momentos[index]; base = TextosJornada.momento; tituloHero = `Momento ${index + 1}`; mappedKey = 'momentos';
    }

    // --- LÓGICA CIRÚRGICA FINAL ---
    let exibicaoDuracao = "";
    const infinito = '\u221E';

    // 1. Normalização dos Dados (Garante que sempre temos Anos Civis)
    let itemData;
    if (tipo === 'desafio') {
        // Desafios buscam datas nos Ciclos para evitar "undefined"
        if (index === 0) itemData = c.ciclosVida[0]; 
        else if (index === 1) itemData = c.ciclosVida[1];
        else itemData = { inicio: anoNasc, fim: 9999 };
    } else {
        itemData = item;
    }

    // 2. Definição de Início e Fim
    let sYear = (tipo === 'momento' && index === 0) ? anoNasc : itemData.inicio;
    let eYear = (itemData.fim === 9999 || itemData.fim === "...") ? 9999 : itemData.fim;
    
    // 3. Cálculo das Idades (Ano Civil - Nascimento)
    const sAge = sYear - anoNasc;
    const eAge = eYear === 9999 ? infinito : (eYear - anoNasc);
    const eYearTxt = eYear === 9999 ? infinito : eYear;

    // 4. Montagem da String
    if (tipo === 'momento') {
        exibicaoDuracao = `de ${sYear} a ${eYearTxt}`;
    } else {
        exibicaoDuracao = `de ${sYear} a ${eYearTxt} (de ${sAge} a ${eAge} anos de idade)`;
    }

    const introExplanation = TextosExplicativos[mappedKey] && TextosExplicativos[mappedKey][index]
        ? `<div class="didactic-box"><p>${TextosExplicativos[mappedKey][index]}</p></div>` : "";

    const chave = (tipo === 'desafio') ? base.conteudos : base.conteudos[`${tipo}${index + 1}`];
    
    const cardsHTML = base.secoes.map((secao, i) => {
        const texto = (chave && chave[item.num]) ? chave[item.num][i] : "Conteúdo em análise vibracional.";
        return `
        <div class="content-section animate-fade-in" style="animation-delay: ${0.1 * i}s;">
            <div class="section-header">
                <div class="icon-box"><i class="ph-bold ph-sparkle"></i></div>
                <h3 class="section-title">${secao}</h3>
            </div>
            <div class="text-body">${texto}</div>
        </div>`;
    }).join('');

    return `
    <div class="view-container" style="padding:0;">
        <div class="hero-header theme-green animate-fade-in">
            <button class="btn-back-white" onclick="navigateTo('dashboard')"><i class="ph-bold ph-arrow-left"></i> Voltar</button>
            <span class="hero-label">JORNADA DE VIDA</span>
            <div class="hero-number">${item.num}</div>
            <h1 class="hero-title">${tituloHero}</h1>
            <p class="hero-subtitle">"${base.subtitulos[item.num]}"</p>
        </div>
        <div class="reading-sheet animate-fade-in">
            <div style="background:#f1f8e9; padding:18px; border-radius:18px; margin-bottom:30px; display:flex; align-items:center; gap:12px; color:#1b5e20; border:1px solid #c8e6c9;">
                <i class="ph-fill ph-calendar-blank" style="font-size:1.4rem;"></i>
                <span style="font-weight:800; font-size:0.95rem;">Duração: ${exibicaoDuracao}</span>
            </div>
            ${introExplanation}
            ${cardsHTML}
        </div>
    </div>`;
};

/**
 * 9. FLUXO ESPECIAL: AMOR (SINASTRIA)
 */
const ViewAmorForm = () => `
    <div class="view-container animate-fade-in">
        <button class="btn-back-light" onclick="voltarSmartGlobal()" style="margin-bottom:20px;"><i class="ph ph-arrow-left"></i> Voltar</button>
        <h1 class="header-greeting-serif">Sinastria do <span style="color:var(--c-danger);">Amor</span></h1>
        <p class="welcome-desc">${AppTexts.amor.formDesc}</p>
        
        <div style="margin-top:30px;">
            <label class="form-label">${AppTexts.amor.labelName}</label>
            <input type="text" id="amorNomePar" class="form-input" placeholder="${AppTexts.amor.placeholderName}">
            
            <label class="form-label" style="margin-top:20px;">${AppTexts.amor.labelBirth}</label>
            <input type="tel" id="amorDataPar" class="form-input" placeholder="DD/MM/AAAA" maxlength="10">
            
            <button class="btn-primary" style="background:var(--c-danger); margin-top:20px;" onclick="processarCalculoAmor()">${AppTexts.amor.btnAction}</button>
        </div>
    </div>`;

window.processarCalculoAmor = () => {
    const nome = document.getElementById('amorNomePar').value;
    const dataStr = document.getElementById('amorDataPar').value;
    
    if(!nome || dataStr.replace(/\D/g, '').length < 8) return alert(AppTexts.amor.errData);
    if (!AppState.user || !AppState.user.dataNascimento) return alert(AppTexts.amor.errLogin);

    try {
        const nUser = Logic.calcularDestinoAmor(AppState.user.dataNascimento);
        const nPar = Logic.calcularDestinoAmor(dataStr);
        const nRel = Logic.reduzir(nUser + nPar, { allow11: false, allow22: false });

        AppState.runtime.dadosAmor = { 
            nomePar: Utils.escapeHTML(nome), 
            numUser: nUser, 
            numPar: nPar, 
            numRelacao: nRel 
        };
        AppState.runtime.tabAtiva = 0; 
        navigateTo('amor_resultado');
    } catch (e) {
        alert("Ocorreu um erro ao processar os dados. Verifique o formato da data.");
    }
};

const ViewAmorResult = () => {
    const d = AppState.runtime.dadosAmor;
    if(!d) return navigateTo('amor_form');
    
    const tabIdx = AppState.runtime.tabAtiva;
    const userNome = AppState.user.nome ? AppState.user.nome.split(' ')[0] : "Você";
    const parNome = d.nomePar.split(' ')[0];
    
    // Conteúdo dinâmico baseado na NOVA ordem de abas
    let contentHTML = "";
    
    if (tabIdx === 0) { // Aba: Você
        contentHTML = `<div class="content-section"><div class="section-header"><div class="icon-box" style="background:#fee2e2; color:#ef4444;"><i class="ph-bold ph-user"></i></div><h3 class="section-title">Sua Energia (${d.numUser})</h3></div><div class="text-body">${TextosAmor.voce[d.numUser] || "Indisponível."}</div></div>`;
    } 
    else if (tabIdx === 1) { // Aba: Nome Consultado
        contentHTML = `<div class="content-section"><div class="section-header"><div class="icon-box" style="background:#fee2e2; color:#ef4444;"><i class="ph-bold ph-users"></i></div><h3 class="section-title">Energia de ${parNome} (${d.numPar})</h3></div><div class="text-body">${TextosAmor.ele[d.numPar] || "Indisponível."}</div></div>`;
    } 
    else if (tabIdx === 2) { // Aba: União
        contentHTML = `<div class="content-section"><div class="section-header"><div class="icon-box" style="background:#fee2e2; color:#ef4444;"><i class="ph-bold ph-heart"></i></div><h3 class="section-title">Pontos Fortes da União</h3></div><div class="text-body">${TextosAmor.forte[d.numRelacao] || "Indisponível."}</div></div>`;
    } 
    else { // Aba: Desafios
        contentHTML = `<div class="content-section"><div class="section-header"><div class="icon-box" style="background:#fee2e2; color:#ef4444;"><i class="ph-bold ph-warning"></i></div><h3 class="section-title">Desafios do Casal</h3></div><div class="text-body">${TextosAmor.desafio[d.numRelacao] || "Indisponível."}</div></div>`;
    }

    return `
    <div class="view-container" style="padding:0; background:var(--bg-sheet);">
        <div class="hero-header animate-fade-in" style="background: radial-gradient(circle at top, #d32f2f, #b71c1c); display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; padding-top: 60px; padding-bottom: 40px;">
            
            <button class="btn-back-white" onclick="navigateTo('amor_form')" style="position: absolute; top: 24px; left: 20px;"><i class="ph-bold ph-arrow-left"></i> Nova Consulta</button>
            
            <span class="hero-label"><i class="ph-fill ph-heart"></i> RESULTADO</span>
            <div class="hero-number" style="margin: 10px 0;">${d.numRelacao}</div>
            <h1 class="hero-title" style="margin-bottom: 15px;">${AppTexts.amor.arquetipos[d.numRelacao] || "União"}</h1>
            
            <p style="font-size: 0.75rem; font-weight: 500; color: rgba(255,255,255,0.8); margin-bottom: 15px; max-width: 80%;">
               O resultado acima é a soma da sua data de nascimento com a do seu amor.
            </p>

            <div style="background:rgba(255,255,255,0.15); display:inline-flex; align-items:center; gap:10px; padding:10px 24px; border-radius:30px; font-size:0.9rem; backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.2);">
                <span style="font-weight: 800;">${userNome} (${d.numUser})</span> 
                <i class="ph-bold ph-plus" style="opacity: 0.6; font-size: 0.8rem;"></i> 
                <span style="font-weight: 800;">${parNome} (${d.numPar})</span>
            </div>
        </div>

        <div class="reading-sheet animate-fade-in">
            <p style="font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: var(--c-text-sec); margin-left: 5px; margin-bottom: 10px; opacity: 0.7;">
                Deslize pelas abas
            </p>

            <div style="display:flex; gap:8px; overflow-x:auto; padding-top: 15px; padding-bottom:20px; margin-bottom:10px; scrollbar-width:none;">
                <button class="tab-pill ${tabIdx === 0 ? 'active' : ''}" onclick="switchTab(0)">Você</button>
                <button class="tab-pill ${tabIdx === 1 ? 'active' : ''}" onclick="switchTab(1)">${parNome}</button>
                <button class="tab-pill ${tabIdx === 2 ? 'active' : ''}" onclick="switchTab(2)">União</button>
                <button class="tab-pill ${tabIdx === 3 ? 'active' : ''}" onclick="switchTab(3)">Desafios</button>
            </div>
            
            <div class="tab-content-wrapper">
                ${contentHTML}
            </div>
            <div style="height: 40px;"></div>
        </div>
    </div>`;
};

/**
 * 10. FLUXO ESPECIAL: CASA (JORNADA PREMIUM REFATORADA)
 * ////// HARMONIZAÇÃO //////
 */

// Lógica de segurança para calcular a letra
const calcularHarmoniaInterna = (atual, desejado) => {
    let diff = parseInt(desejado) - parseInt(atual);
    if (diff <= 0) diff += 9;
    const mapa = {
        1: ['A', 'J', 'S'], 2: ['B', 'K', 'T'], 3: ['C', 'L', 'U'],
        4: ['D', 'M', 'V'], 5: ['E', 'N', 'W'], 6: ['F', 'O', 'X'],
        7: ['G', 'P', 'Y'], 8: ['H', 'Q', 'Z'], 9: ['I', 'R']
    };
    return { desejado, letras: mapa[diff] || [] };
};

// 1. FORMULÁRIO PRINCIPAL (UX MOBILE FIRST)
const ViewCasaForm = () => `
    <div class="view-container animate-fade-in" style="padding:24px;">
        <button class="btn-back-light" onclick="navGoTo('dashboard')"><i class="ph ph-arrow-left"></i> Voltar</button>
        <header style="text-align:center; margin:30px 0 40px;">
            <div class="icon-badge-pulse"><i class="ph-fill ph-house-line"></i></div>
            <h1 class="header-title-premium">Sua Casa</h1>
            <p class="header-subtitle-premium">Descubra a energia oculta que rege o seu lar.</p>
        </header>
        <div class="premium-card">
            <div class="form-group-premium">
                <label class="form-label-premium">Número da Residência</label>
                <input type="tel" id="casaNum" class="form-input-premium" placeholder="Ex: 104" inputmode="numeric">
            </div>
            <div class="form-group-premium">
                <label class="form-label-premium">Opcional: <small style="opacity:0.6;">(Use este campo somente se o número da casa tiver letras (ex: 12A)</small></label>
                <input type="text" id="casaComp" class="form-input-premium" placeholder="Apenas a letra aqui">
            </div>
            <button class="btn-primary-premium ripple" onclick="executarCalculoCasa()">Analisar Energia</button>
        </div>
    </div>`;

window.executarCalculoCasa = () => {
    const n = document.getElementById('casaNum').value;
    const c = document.getElementById('casaComp').value;
    if(!n) return alert("Por favor, digite o número.");
    AppState.runtime.dadosCasa.resultado = Logic.calcularCasa(n, c);
    navigateTo('casa_result');
};

// 2. DIAGNÓSTICO (LAYOUT DE ALERTA PARA 1, 4, 7, 9)
const ViewCasaResult = () => {
    const res = AppState.runtime.dadosCasa.resultado;
    const info = TextosCasa.analises[res];
    const isCritical = [1, 4, 7, 9].includes(parseInt(res));

    return `
    <div class="view-container view-no-padding">
        <div class="hero-header ${isCritical ? 'theme-alert' : 'theme-house-result'}">
            <button class="btn-back-white" onclick="navGoTo('casa_form')" style="position:absolute; top:24px; left:20px;"><i class="ph ph-arrow-left"></i></button>
            <span class="diagnosis-badge">${isCritical ? 'ALERTA DE VIBRAÇÃO' : 'ENERGIA DO LAR'}</span>
            <div class="hero-number-xl">${res}</div>
            <h1 class="header-title-premium" style="color:#fff;">${isCritical ? 'Vibração Desafiadora' : info.titulo}</h1>
        </div>
        <div class="reading-sheet">
            <div class="content-section">
                <div class="text-body">${info.texto}</div>
            </div>
            <button class="btn-primary ripple" style="margin-top:30px; ${isCritical ? 'background:var(--c-danger);' : ''}" onclick="navigateTo('casa_categorias')">
                ${isCritical ? 'Veja agora as melhores' : 'Ver outras energias'}
            </button>
        </div>
    </div>`;
};

// 3. CATEGORIAS (2 CARDS)
const ViewCasaCategorias = () => `
    <div class="view-container animate-fade-in" style="padding:24px;">
        <button class="btn-back-light" onclick="navigateTo('casa_result')"><i class="ph ph-arrow-left"></i> Voltar</button>
        
        <h1 class="header-greeting-serif" style="margin:20px 0 10px;">Melhores <span style="color:var(--c-accent);">Frequências</span></h1>
        
        <p class="header-subtitle-premium" style="text-align:left; margin-bottom:30px; margin-left:0; max-width:100%;">
            Escolha o principal objetivo que você deseja atrair para o seu lar por meio da harmonização numerológica, clicando na opção desejada.
        </p>
        <div class="grid-cards">
            <div class="card-item bg-mint" onclick="navigateTo('casa_frequencias', 'empresarios')">
                <i class="ph-fill ph-briefcase" style="font-size:2rem; color:var(--c-primary);"></i>
                <h3>Indicado para empresários e influenciadores que atuam a partir de casa</h3>
                <p>Números: 3, 5 e 8</p>
            </div>
            <div class="card-item bg-peach" onclick="navigateTo('casa_frequencias', 'familia')">
                <i class="ph-fill ph-users" style="font-size:2rem; color:var(--c-primary);"></i>
                <h3>Para toda a família</h3>
                <p>Números: 2 e 6</p>
            </div>
        </div>
    </div>`;

// 4. LISTA DE FREQUÊNCIAS (AÇÃO DIRETA)
const ViewCasaFrequencias = () => {
    const catId = AppState.runtime.contextoDetalhe;
    const dadosCat = TextosCasa.opcoes[catId];
    
    return `
    <div class="view-container animate-fade-in" style="padding:24px;">
        <button class="btn-back-light" onclick="navigateTo('casa_categorias')"><i class="ph ph-arrow-left"></i> Voltar</button>
        
        <div style="text-align: center; width: 100%;">
            <h1 class="header-greeting-serif" style="margin-bottom: 10px;">${dadosCat.titulo}</h1>
            <p class="welcome-desc">${dadosCat.subtitulo}</p>
        </div>
        
        <div style="margin-top:40px;">
            ${dadosCat.casas.map(c => {
                // Lógica para remover "Casa X:" do título e evitar repetição
                const nomeLimpo = c.nome.includes(':') ? c.nome.split(':')[1].trim() : c.nome;

                return `
                <div class="casa-insight-card ripple" style="padding:30px 24px; text-align: center;">
                    <div class="casa-header-vertical">
                        <div class="casa-icon-badge-top">${c.num}</div>
                        <h4 class="casa-card-title">${nomeLimpo}</h4>
                    </div>
                    
                    <div style="font-size:0.95rem; color:var(--c-text-sec); line-height:1.6; margin-bottom:25px;">
                        ${c.desc}
                    </div>
                    
                    <button class="btn-primary ripple" style="width:100%;" onclick="navigateTo('casa_harmonizacao_form', ${c.num})">
                        Quero essa energia para o meu lar
                    </button>
                </div>
                `;
            }).join('')}
        </div>
    </div>`;
};

// 5. FORMULÁRIO DE HARMONIZAÇÃO (VALIDAÇÃO)
const ViewCasaHarmonizacaoForm = () => {
    const atual = AppState.runtime.dadosCasa.resultado;
    const preSel = AppState.runtime.contextoDetalhe || '';
    setTimeout(() => { if(preSel) renderizarFeedbackHarmonizacao(preSel); }, 50);

    return `
    <div class="view-container animate-fade-in" style="padding:24px;">
        <button class="btn-back-light" onclick="navigateTo('casa_categorias')"><i class="ph ph-arrow-left"></i> Voltar</button>
        <div class="premium-card" style="text-align:center; margin-top:30px;">
            <span class="form-label-premium" style="color:var(--c-text-soft);">Sua Casa Atual (A SOMA ENERGETICA DELA)</span>
            <div style="font-family:var(--font-serif); font-size:4.5rem; color:var(--c-primary); line-height:1; margin:10px 0 30px;">${atual}</div>
            <div class="form-group-premium">
                <label class="form-label-premium">Qual vibração você deseja?</label>
                <input type="tel" id="inputDesejado" class="form-input-premium" style="text-align:center;" placeholder="?" maxlength="1" value="${preSel}" oninput="renderizarFeedbackHarmonizacao(this.value)">
            </div>
            <div id="feedback-harmonizacao"></div>
        </div>
    </div>`;
};

// Lógica de Separação (Pure Function para HTML + Render Function)
function gerarHTMLFeedbackHarmonizacao(n) {
    if (!n || isNaN(n)) return '';
    if ([1, 4, 7, 9].includes(n)) {
        return `
            <div class="feedback-box error animate-fade-in">
                <i class="ph-fill ph-warning-circle" style="font-size:2rem; display:block; margin-bottom:10px;"></i>
                <strong>Xiii… essa vibração não é indicada.</strong>
            </div>`;
    }
    return `
        <div class="feedback-box success animate-fade-in">
            <i class="ph-fill ph-check-circle" style="font-size:2rem; display:block; margin-bottom:10px;"></i>
            <strong>Excelente escolha!</strong>
            <p style="font-size:0.9rem; margin-top:10px;">${TextosCasa.escolhas[n] || ''}</p>
        </div>
        <button class="btn-primary ripple" style="margin-top:20px;" onclick="abrirEtapaFinal(${n})">Ver como harmonizar agora</button>`;
}

window.renderizarFeedbackHarmonizacao = (val) => {
    const container = document.getElementById('feedback-harmonizacao');
    if (container) container.innerHTML = gerarHTMLFeedbackHarmonizacao(parseInt(val));
};

window.abrirEtapaFinal = (n) => {
    const atual = AppState.runtime.dadosCasa.resultado;
    const harmonia = calcularHarmoniaInterna(atual, n);
    AppState.runtime.dadosCasa.harmonizacao = { desejado: n, letras: harmonia.letras };
    navigateTo('casa_carrossel');
};

// 6. TELA FINAL (CARROSSEL COM 2 SLIDES E 4 CAIXAS TÉCNICAS)
const ViewCasaCarrossel = () => {
    // 1. Validação de Estado
    const h = AppState.runtime.dadosCasa.harmonizacao;
    if (!h) return navigateTo('casa_form');

    // 2. Lógica Visual para as Letras (Transforma em Chips Individuais)
    // O separador "ou" agora é uma classe sutil que não compete com a letra
    const letrasChips = h.letras.map(l => `<div class="letter-chip">${l}</div>`).join('<span class="letter-separator">ou</span>');

    return `
    <div class="view-container animate-fade-in" style="padding:0;">
        <header style="text-align:center; padding: 60px 24px 30px;">
     <h1 class="header-title-premium" style="margin-bottom: 12px;">Seu Alinhamento</h1>
     <p class="header-subtitle-premium">Deslize lateralmente para ver as opções e siga as instruções.</p>
</header>

        <div class="carousel-wrapper-house" style="margin-top: 10px;">
            
            <div class="slide-technique">
                <div class="instruction-box-premium">
                    <span class="technique-label">Opção 1: Usando as letras</span>
                    <h3 style="margin-top:5px; font-family:var(--font-serif); color:var(--c-house-primary); font-size:1.2rem;">Atenção:</h3>
                    <p style="font-size:0.9rem; line-height:1.5; color:var(--c-text-sec); margin-bottom:15px;">
                        Utilize as letras abaixo para fazer sua casa vibrar na energia do número desejado.<br><br>Caso você more em apartamento ou condomínio e não seja permitido alterar ou remover o número original da porta, as letras funcionam como um complemento energético, permitindo acessar a força do número <strong>${h.desejado}</strong>.
                    </p>
                    
                    <div class="highlight-vibration-box">
                        <span style="font-size:0.65rem; font-weight:800; opacity:0.6; text-transform:uppercase; letter-spacing:1.5px; display:block; margin-bottom:12px; text-align:center;">Letra(s) – escolha apenas uma</span>
                        <div class="val">${letrasChips}</div>
                    </div>
                </div>

                <div class="image-vago-placeholder">
                    <h4 style="font-family:var(--font-serif); margin-bottom:5px; color:var(--c-house-primary); font-size:1rem;">Exemplo de como usar a letra escolhida</h4>
                    <i class="ph-fill ph-image-square" style="font-size:2.2rem; opacity:0.15;"></i>
                    <span style="font-size:0.65rem; font-weight:800; color:var(--c-text-soft); letter-spacing:1px; text-transform:uppercase;">[Área da Imagem]</span>
                </div>
            </div>

            <div class="slide-technique">
                <div class="instruction-box-premium">
                    <span class="technique-label" style="background:var(--c-house-accent);">Opção 2: Usando o número</span>
                    <h3 style="margin-top:5px; font-family:var(--font-serif); color:var(--c-house-primary); font-size:1.2rem;">Algarismo na Porta</h3>
                    <p style="font-size:0.9rem; line-height:1.5; color:var(--c-text-sec); margin-bottom:15px;">
                        Fixe o número <strong>${h.desejado}</strong> na parte externa da porta de entrada da sala, caso não queira usar as letras.<br><br>Não importa se já existe número no portão ou no muro: o que vale é o número mais próximo da família.<br><br> Quanto mais perto da porta principal, maior será a influência na casa.
                    </p>
                    
                    <div class="highlight-vibration-box">
                        <span style="font-size:0.65rem; font-weight:800; opacity:0.6; text-transform:uppercase; letter-spacing:1.5px; display:block; margin-bottom:12px; text-align:center;">Número para fixar:</span>
                        <div class="val">
                            <div class="letter-chip" style="width: 80px; height: 85px; font-size: 3.5rem;">${h.desejado}</div>
                        </div>
                    </div>
                </div>

                <div class="image-vago-placeholder">
                    <h4 style="font-family:var(--font-serif); margin-bottom:5px; color:var(--c-house-primary); font-size:1rem;"> Aplique na porta de entrada, pelo lado de fora</h4>
                    <i class="ph-fill ph-image-square" style="font-size:2.2rem; opacity:0.15;"></i>
                    <span style="font-size:0.65rem; font-weight:800; color:var(--c-text-soft); letter-spacing:1px; text-transform:uppercase;">[Área da Imagem]</span>
                </div>
            </div>

        </div>

        <div class="carousel-indicator">
            <div class="dot active"></div>
            <div class="dot"></div>
        </div>

        <div class="casa-action-footer" style="padding: 10px 24px 40px;">
            <button class="btn-primary-premium ripple" onclick="navGoTo('dashboard')">Concluir Harmonização</button>
        </div>
    </div>`;
};

/**
 * 11. FLUXO ESPECIAL: HORAS IGUAIS (ESTRUTURA FINAL SINCRONIZADA)
 */

// 1. TELA DE LISTAGEM
const ViewHorasLista = () => {
    const tab = AppState.runtime.tabHoras || 'iguais';
    
    return `
    <div class="view-container view-no-padding">
        <div class="hero-header theme-purple">
            <button class="btn-back-white" onclick="navGoTo('dashboard')"><i class="ph-bold ph-arrow-left"></i> Voltar</button>
            <span class="hero-label"><i class="ph-fill ph-clock"></i> SINAIS DO TEMPO</span>
            <h1 class="hero-title">Horas & Significados</h1>
            <p class="hero-subtitle">Descubra as mensagens ocultas que o universo comunica a você por meio das horas iguais e repetidas.</p>
        </div>

        <div class="reading-sheet">
            <nav class="tabs-nav-container">
                <div class="tabs-scroll">
                    <button class="tab-pill ${tab === 'iguais' ? 'active' : ''}" onclick="mudarTabHoras('iguais')">Horas Iguais</button>
                    <button class="tab-pill ${tab === 'espelhadas' ? 'active' : ''}" onclick="mudarTabHoras('espelhadas')">Horas Espelho</button>
                    <button class="tab-pill ${tab === '7dias' ? 'active' : ''}" onclick="mudarTabHoras('7dias')">7 Dias de Reflexão</button>
                </div>
            </nav>
            
            <div id="dynamic-content-area">
                ${renderConteudoHoras(tab)}
            </div>
            
            <div class="spacer-bottom"></div>
        </div>
    </div>`;
};

// 2. RENDERIZADOR DO CONTEÚDO
function renderConteudoHoras(tab) {
    if (tab === '7dias') {
        const desafios = DadosHoras.desafio7Dias;
        if (!desafios) return '<p class="msg-empty">Dados não encontrados.</p>';

        return `
        <div class="list-7dias-area">
            ${desafios.map(d => `
                <div class="card-reflexao-7dias">
                    <span class="day-badge">${d.dia}º Dia</span>
                    <h4>${d.tema}</h4>
                    <p>${d.exercicio}</p>
                </div>
            `).join('')}
        </div>`;
    }

    const categoria = tab === 'iguais' ? 'iguais' : 'espelhadas';
    const dadosCategoria = DadosHoras[categoria];
    if (!dadosCategoria) return '<p class="msg-empty">Carregando horários...</p>';

    const listaHoras = Object.keys(dadosCategoria); 
    
    return `
        <div class="grid-horas-area">
            ${listaHoras.map(h => `
                <div class="hora-bubble" onclick="abrirDetalheHora('${categoria}', '${h}')">
                    <strong>${h}</strong>
                    <span>Ver Sinal</span>
                </div>
            `).join('')}
        </div>`;
}

// 3. TELA DE DETALHE DA HORA (CORRIGIDA: INTRO NO CORPO DO TEXTO)
const ViewHoraDetalhe = () => {
    const h = AppState.runtime.horaAtiva;
    if(!h) return navigateTo('horas_lista');
    
    const categoria = h.tipo === 'iguais' ? DadosHoras.iguais : DadosHoras.espelhadas;
    const info = categoria ? categoria[h.valor] : null;

    if(!info) return navigateTo('horas_lista');

    return `
    <div class="view-container view-no-padding">
        <div class="hero-header theme-purple">
            <button class="btn-back-white" onclick="navigateTo('horas_lista')"><i class="ph-bold ph-arrow-left"></i> Voltar</button>
            <div class="hero-number hero-number-big">${h.valor}</div>
            <h1 class="hero-title">${info.titulo}</h1>
        </div>
        
        <div class="reading-sheet">
            
            ${info.intro ? `
            <div class="intro-box animate-fade-in" style="margin-bottom: 30px; border-bottom: 1px solid var(--c-border);">
                <p style="font-size: 1.05rem; line-height: 1.6; color: var(--c-text-main); font-weight: 500; margin-bottom: 20px;">
                    ${info.intro}
                </p>
            </div>` : ''}
            
            <div class="content-section">
                <div class="section-header">
                    <div class="icon-box"><i class="ph-bold ph-lightning"></i></div>
                    <h3 class="section-title">${info.tituloSignificado || 'Significado Espiritual'}</h3>
                </div>
                <div class="text-body">${info.significado}</div>
            </div>

            <div class="didactic-box">
                <h4><i class="ph-fill ph-hand-heart"></i> ${info.tituloOrientacao || 'Orientação'}</h4>
                <p>${info.orientacao}</p>
            </div>

            <div class="content-section">
                <div class="section-header">
                    <div class="icon-box"><i class="ph-bold ph-book-open"></i></div>
                    <h3 class="section-title">Direcionamento Espiritual</h3>
                </div>
                <div class="text-body text-italic quote-border">
                    "${info.versiculo}"
                </div>
            </div>

            <div class="content-section">
                <div class="section-header">
                    <div class="icon-box"><i class="ph-bold ph-list-checks"></i></div>
                    <h3 class="section-title">Aplicação Prática</h3>
                </div>
                <ul class="list-topics">
                    ${info.topicos.map(t => `
                        <li>
                            <i class="ph-bold ph-check-circle icon-check"></i> 
                            <span>${t}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            ${info.mensagemFinal ? `
            <div class="final-message-box" style="margin-top: 30px; text-align: center; padding: 20px; background: var(--bg-body); border-radius: 12px; border: 1px dashed var(--c-purple);">
                <i class="ph-fill ph-star" style="color: var(--c-accent); font-size: 1.5rem; margin-bottom: 10px;"></i>
                <p style="font-weight: 600; color: var(--c-text-main); font-style: italic;">"${info.mensagemFinal}"</p>
            </div>` : ''}

            <div class="spacer-bottom"></div>
        </div>
    </div>`;
};

// --- FUNÇÕES DE SUPORTE (Definidas apenas uma vez) ---
window.mudarTabHoras = (tabName) => { 
    AppState.runtime.tabHoras = tabName; 
    renderApp(); 
};

window.abrirDetalheHora = (tipo, valor) => { 
    AppState.runtime.horaAtiva = { tipo, valor }; 
    navigateTo('hora_detalhe'); 
};

/**
 * 11. BINDINGS E EVENTOS
 */
function bindForm() {
    const input = document.getElementById('inputDataFormatted');
    if (input) input.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, '');
        if (v.length > 4) v = v.replace(/^(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
        else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
        e.target.value = v;
    });

    const form = document.getElementById('userForm');
    if(form) form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('inputNome').value;
        const dataBr = input.value;
        if(nome && dataBr.length === 10) {
            const [d, m, a] = dataBr.split('/');
            const iso = `${a}-${m}-${d}`;
            updateState({ user: { nome, dataNascimento: iso } });
            navigateTo('loading');
            setTimeout(() => { 
                AppState.user.ciclos = Logic.calcular(iso); 
                navigateTo('dashboard'); 
            }, 1500);
        } else {
            alert("Dados inválidos.");
        }
    });
}

function bindAmorForm() {
    const el = document.getElementById('amorDataPar');
    if(el) el.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, '');
        if (v.length > 4) v = v.replace(/^(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
        else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
        e.target.value = v;
    });
}

/**
 * 12. UI COMPONENTS
 */
const RenderAppMenu = () => {
    if (document.getElementById('app-nav-bar')) return;
    document.body.insertAdjacentHTML('beforeend', `
        <div id="app-nav-bar" class="app-bottom-nav">
            ${AppTexts.menu.map(m => `
                <button class="nav-btn ${AppState.runtime.tabDashboard === m.id || AppState.runtime.viewAtual === m.id ? 'active' : ''}" onclick="navGoTo('${m.id}')">
                    ${m.icon}<span>${m.label}</span>
                </button>`).join('')}
        </div>`);
};

const RemoveAppMenu = () => { 
    const menu = document.getElementById('app-nav-bar'); 
    if (menu) menu.remove(); 
};

function renderProgressBar() {
    const bar = document.getElementById('life-progress-bar');
    if(!bar || !AppState.user.ciclos) return;
    const j = AppState.user.ciclos.jornadaVida;
    const hoje = new Date().getFullYear();
    const total = (j.ciclosVida[2].inicio - j.ciclosVida[0].inicio) + 20;
    const prog = ((hoje - j.ciclosVida[0].inicio) / total) * 100;
    bar.style.width = `${Math.min(Math.max(prog, 5), 100)}%`;
}

function initSmartInfiniteScroll() {
    const c = document.getElementById('carouselWindow');
    if(c) c.addEventListener('wheel', (e) => { e.preventDefault(); c.scrollLeft += e.deltaY; });
}

window.addEventListener('DOMContentLoaded', renderApp);