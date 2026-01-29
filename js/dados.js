/* ==========================================================================
   DADOS.JS - BANCO DE TEXTOS E INTERFACE (VERSÃO FINAL)
   ========================================================================== */

const AppTexts = {
    global: {
        btnBack: "Voltar",
        btnExit: "Sair",
        btnExplore: "EXPLORAR",
        btnHome: "INÍCIO",
        btnBackHome: "VOLTAR AO INÍCIO",
        btnSaveExit: "VOLTAR AO INÍCIO",
        btnDone: "Concluir",
        badgeNew: "Novo",
        badgeExclusive: "Exclusivo",
        errCalc: "Ops! Ocorreu um erro no cálculo:\n"
    },

    welcome: {
        subtitle: "Bem-vindo ao seu momento",
        titleMain: "Numerologia",
        titleAlt: "Essencial",
        description: "Uma jornada de autoconhecimento desenhada para trazer clareza aos seus dias.",
        btnStart: "Iniciar Leitura"
    },

    form: {
        title: "Vamos começar",
        subtitle: "Veja o que 2026 revela para você.",
        labelName: "Apenas o seu primeiro nome",
        placeholderName: "Digite aqui",
        labelBirth: "Data de Nascimento",
        btnGenerate: "Gerar Mapa"
    },

    loading: {
        text: "Calculando Ciclos..."
    },

    dashboard: {
        greeting: "Olá",
        birthTag: "NASC.",
        hereBadge: "VOCÊ ESTÁ AQUI",
        cycleLabel: "CICLO",
        desafioTitle: "Desafio",
        labelsFases: ["JUVENTUDE", "MATURIDADE", "VIDA TODA"],
        momentosDefinicoes: [
            "A Formação da Personalidade",      
            "Construção e Responsabilidades",  
            "Expansão da Consciência",    
            "Sabedoria e Legado de Vida"        
        ],
        momentoEvolucao: "Ciclo de Evolução",
        momentoCategory: "MOMENTO DECISIVO",
        momentoTitle: "Momento",
        livingNow: "VIVENDO AGORA",
        understandPhase: "ENTENDER FASE",
        heroOverline: "Seu Ciclo Atual",
        heroTitle: "Ano Pessoal",
        heroDesc: "Toque na tela para ler seu direcionamento para os próximos meses deste ano.",
        statLabelMes: "Mês Pessoal",
        statLabelDia: "Dia Pessoal",
        statToday: "Hoje, dia",
        secJornada: "Ciclos de Vida",
        jornadaInst: "São os 3 grandes ciclos aos quais você sofrerá influência ao longo da sua vida. Através do seu conhecimento, você poderá tirar o máximo de proveito de cada um deles, uma vez que eles lhe mostrarão as condições e as circunstâncias as quais você será exposto(a).",
        clickHint: "Toque no número para ver detalhes",
        secDesafios: "Desafios de vida",
        desafiosInst: "Os desafios revelam as dificuldades e os aprendizados que irão surgir ao longo da sua vida. Eles precisam ser superados ou compreendidos para que você possa realizar ajustes na sua personalidade, promovendo crescimento, maturidade e evolução pessoal.",
        secMomentos: "Momentos Decisivos",
        momentosInst: "Revelam eventos que podem acontecer em determinados períodos da sua vida, indicando quais serão as melhores atitudes a serem tomadas em cada uma dessas situações. Porém, lembre-se de que o que for dito sobre um certo momento irá servir apenas para o período em questão.",
        secFerramentas: "Ferramentas de Sorte",
        tools: {
            sorteTitle: "Números<br>da Sorte",
            
            diasTitle: "Dias<br>de Poder",
            
            coresTitle: "Cores<br>Vibracionais",
           
            essenciaTitle: "Minha<br>Essência",
            
        },
        secEspeciais: "Análises Especiais",
        especiaisInst: "Conheça a ferramenta que irá revelar a você as energias presentes em sua casa e tudo sobre sua vida amorosa.",
        specials: {
            loveTitle: "Numerologia do Amor",
            loveDesc: "Mapa do casal",
            houseTitle: "Numerologia da Casa",
            houseDesc: "Entenda a energia da sua casa e como equilibrá-la"
        }
    },

    details: {
        labels: {
            anoLabel: "VOCÊ ESTÁ VIVENDO ATUALMENTE O ANO PESSOAL DE NÚMERO:",
            mesLabel: "O SEU MÊS PESSOAL ATUAL CORRESPONDE AO NÚMERO:",
            diaLabel: "SUA ENERGIA PARA O DIA DE HOJE É O NÚMERO:",
            chaveMes: "CHAVE VIBRACIONAL DO MÊS",
            chaveAno: "CHAVE VIBRACIONAL DO ANO",
            conexaoCiclos: "CONEXÃO DE CICLOS",
            btnNextAno: "VER MEU ANO",
            btnNextMes: "ORIENTAÇÃO DO MÊS",
            btnNextDia: "VER MEU MÊS"
        },
        tabs: {
            concept: "O Conceito",
            usage: "Como Usar",
            palette: "Sua Paleta",
            where: "Onde Ativar",
            flux: "O Fluxo",
            agenda: "Agenda",
            soul: "Minha Alma",
            perception: "Percepção"
        },
        sorte: {
            title: "Números da Sorte",
            tab1: `<div class="didactic-card"><div class="d-icon-circle"><i class="ph-fill ph-key"></i></div><h4>Frequências de Atração</h4><p>Estes números são chaves vibracionais que reduzem a resistência nos seus caminhos e alinham sua energia ao fluxo do sucesso.</p></div><div class="pro-tip-tag"><i class="ph-fill ph-lightbulb"></i><span><strong>DICA:</strong> Use a soma dos dígitos. Se o resultado final for um desses números, você está em sintonia.</span></div>`,
            tab2: `<div class="usage-list-premium"><div class="usage-item-box"><i class="ph-fill ph-lock-key"></i><div><strong>Senhas e Pins</strong><br><small>Use em bancos, celular e alarmes.</small></div></div><div class="usage-item-box"><i class="ph-fill ph-currency-dollar"></i><div><strong>Valores de Venda</strong><br><small>Ajuste preços para somar seu número.</small></div></div></div>`
        },
        cores: {
            title: "Cores Vibracionais",
            labelPal: "Alinhamento Visual",
            tab2: `<div class="usage-list-premium"><div class="usage-item-box"><i class="ph-fill ph-t-shirt"></i><div><strong>Vestuário</strong><br><small>Acessórios ou peças em dias decisivos.</small></div></div><div class="usage-item-box"><i class="ph-fill ph-desktop"></i><div><strong>Ambiente</strong><br><small>Papel de parede do celular ou escritório.</small></div></div></div>`
        },
        dias: {
            title: "Dias de Poder",
            tab1: `<div class="didactic-card"><div class="d-icon-circle"><i class="ph-fill ph-waves"></i></div><h4>Maré a Favor</h4><p>Nestes dias, a resistência do mundo diminui para você. É o momento em que os "Sims" acontecem com naturalidade.</p></div>`,
            tab2: `<div class="usage-list-premium"><div class="usage-item-box"><i class="ph-fill ph-handshake"></i><div><strong>Negócios</strong><br><small>Contratos, propostas e vendas.</small></div></div><div class="usage-item-box"><i class="ph-fill ph-heart"></i><div><strong>Relacionamento</strong><br><small>Conversas importantes e convites.</small></div></div></div>`
        },
        essencia: {
            title: "Sua Essência"
        }
    },

    jornada: {
        ciclo: { label: "ESTA É A VIBRAÇÃO DO SEU CICLO:", desc: "Grandes fases que moldam a estrutura do seu destino." },
        desafio: { label: "A ENERGIA PARA SUPERAR SEU DESAFIO:", desc: "Obstáculos necessários para o seu amadurecimento espiritual." },
        momento: { label: "A LUZ DO SEU MOMENTO DECISIVO:", desc: "Fases de colheita e manifestação do seu potencial máximo." },
        cardText: (n, s) => `Sua frequência de número ${n} indica que você deve focar em ${s}.`,
        mapTitle: "MAPA DE ALINHAMENTO",
        mapDesc: (n, i, f) => `O número <strong>${n}</strong> traz uma lição específica entre ${i} e ${f}.`
    },

    amor: {
        formTitle: "Numerologia",
        formTitleAlt: "do Amor",
        formDesc: "Descubra a vibração energética, os desafios e a química espiritual entre você e quem você ama.",
        labelName: "Nome do seu amor",
        placeholderName: "Digite aqui",
        labelBirth: "Data de nascimento dele(a)",
        btnAction: "Descobrir Energia do Casal",
        security: "Análise privada e segura.",
        resLabel: "RESULTADO DA SINASTRIA",
        mathUser: "Você",
        mathUs: "REPRESENTA VOCÊS DOIS",
        errData: "Preencha o nome e a data corretamente.",
        errLogin: "Erro: Data de nascimento do usuário não encontrada. Refaça o login.",
        defaultArquetipo: "Vibração do Relacionamento",
        arquetipos: {
            1: "A Dupla Dinâmica", 2: "União de Almas", 3: "O Casal Magnético",
            4: "Os Construtores de Impérios", 5: "Os Parceiros de Aventura", 6: "O Santuário do Afeto",
            7: "Conexão Espiritual", 8: "A Potência da Prosperidade", 9: "Amor Universal",
            
        },
        getTabs: (p) => [
            { label: 'Sua Energia', id: 0 },
            { label: `Energia de ${p}`, id: 1 },
            { label: 'Desafios', id: 2 },
            { label: 'Pontos Fortes', id: 3 }
        ],
        resTab0: { t: "Quem é você na relação", p: (n) => `sua numerologia (${n}) revela que você entra nessa relação com uma postura específica. Entender sua própria natureza é o primeiro passo.` },
        resTab1: { t: (p) => `A essência de ${p}`, p: (p, n) => `Para compreender a dinâmica a dois, precisamos olhar com empatia para <strong>${p}</strong>. O número pessoal (${n}) mostra como essa pessoa ama.` },
        resTab2: { t: "Onde requer atenção", p: (n) => `A combinação das energias de vocês gera o número <strong>${n}</strong>. Este ponto revela onde a relação pode encontrar atrito.` },
        resTab3: { t: "A força da união", p: "É aqui que a mágica acontece. Quando vocês vibram em harmonia, esta é a potência que vocês entregam ao mundo juntos." }
    },



    menu: [
        { id: 'dashboard', icon: '<i class="ph-fill ph-house"></i>', label: 'Início' },
        { id: 'mapa', icon: '<i class="ph-bold ph-map-trifold"></i>', label: 'Mapa' },
        { id: 'oraculo', icon: '<div class="menu-orb"><i class="ph-fill ph-sparkle"></i></div>', label: 'Oráculo', highlight: true },
        { id: 'diario', icon: '<i class="ph-bold ph-book-open"></i>', label: 'Diário' },
        { id: 'perfil', icon: '<i class="ph-bold ph-user"></i>', label: 'Perfil' }
    ]
};

/* ==========================================================================
   NOVO: TEXTOS EXPLICATIVOS E EDUCACIONAIS
   ========================================================================== */
const TextosExplicativos = {
    previsoes: {
        ano: {
            titulo: "Ano Pessoal",
            texto: "mostra a energia que guia suas decisões e atitudes ao longo do ano.<br><br> Compreender seu Ano Pessoal ajuda a saber o que favorecer, o que evitar e qual o melhor momento para agir durante esse período."
        },
        mes: {
            titulo: "Mês Pessoal",
            texto: "revela a vibração do seu mês atual e muda a cada virada de mês.<br><br> Ele indica onde focar sua energia, quais escolhas ganham força e como agir de forma mais alinhada no momento presente."
        },
        dia: {
            titulo: "Dia Pessoal",
            texto: "indica a energia do dia em que você está vivendo.<br><br> Essa vibração muda diariamente e orienta as melhores decisões, atitudes e cuidados para o dia, ajudando você a agir com mais consciência."
        }
    },
    ciclos: {
        0: "<strong>O Ciclo Formativo:</strong> este ciclo reflete o cenário inicial da vida, funcionando como um palco para a chegada ao planeta, a adaptação ao ambiente familiar na infância, as primeiras experiências independentes na adolescência e juventude, até a maturidade.<br><br> Ele revela como a criança absorve, ou está absorvendo, a presença dos pais e como vivencia suas primeiras experiências emocionais dentro do ambiente familiar. Este ciclo também representa a transição da infância para a adolescência e, posteriormente, para a fase adulta.",
        1: "<strong>O Ciclo Produtivo:</strong> este ciclo representa o centro da vida e reflete a disposição para as realizações pessoais. Mostra como o ser humano se manifesta no palco da vida durante sua fase mais produtiva e o que veio fazer para si mesmo e para os outros.<br><br> É o período em que o ser humano dedica todas as suas energias à construção de seus patrimônios pessoais - família, profissão e outros. Se não conseguir realizar suas metas, poderá sentir-se frustrado.",
        2: "<strong>O Ciclo da Colheita e do Compartilhamento:</strong> este é o último ciclo da vida, a fase da maturidade plena, quando a riqueza das experiências forma o cenário das realizações pessoais. Há uma desaceleração no ritmo acelerado das conquistas, mas ocorre um aumento na produtividade devido às escolhas mais assertivas resultantes das experiências bem-sucedidas.<br><br> É um período de colheita e compartilhamento, em busca de valores atemporais e sabedoria. Nesta fase, o ser humano se volta mais para o seu mundo interior e para a espiritualidade.<br><br> A maturidade traz reflexões que antes não ocorriam e desperta o desejo de exemplificar virtudes e valores éticos para as gerações mais jovens."
    },
    desafios: {
        0: "<strong>Primeiro Desafio (Juventude):</strong> representa as carências de habilidades, na personalidade, que se tornam as barreiras e possíveis dificuldades enfrentadas durante o Primeiro Ciclo de Vida (infância, adolescência e juventude).",
        1: "<strong>Segundo Desafio (Maturidade):</strong> representa as carências de habilidades, na personalidade, que se tornam as barreiras e possíveis dificuldades enfrentadas durante o Segundo Ciclo de Vida (fase produtiva).",
        2: "<strong>Desafio Principal (Vida Toda):</strong> é o desafio mais significativo e influente na vida da pessoa e representa as carências de habilidades, na personalidade, que se tornam as barreiras e possíveis dificuldades, impactando o Terceiro Ciclo de Vida (fase de maturidade e colheita)."
    },
    momentos: {
        0: "<strong>Primeiro Momento Decisivo:</strong> é o período que reflete o início da vida, quando o ser humano é mais influenciável, e apresenta as primeiras oportunidades para reagir, agir e tomar decisões.<br><br> Ele indica as atitudes, comportamentos e reações mais comuns durante a formação da personalidade nas três etapas do primeiro Ciclo de Vida: infância, adolescência e juventude.",
        1: "<strong>Segundo Momento Decisivo:</strong> reflete um período de maior estabilidade, especialmente na carreira profissional. As oportunidades que surgem nesse momento tendem a ser mais decisivas, desempenhando um papel crucial na consolidação da carreira e no desenvolvimento pessoal e profissional.",
        2: "<strong>Terceiro Momento Decisivo:</strong> reflete o momento em que, geralmente, o ser humano alcança uma posição mais consolidada e estável.<br><br> As oportunidades que surgem agora tendem a ser mais decisivas para a realização dos objetivos pessoais e profissionais, além de contribuir para o aprimoramento contínuo da carreira e da vida como um todo.",
        3: "<strong>Quarto Momento Decisivo:</strong> reflete a fase da vida em que, geralmente, o ser humano alcançou uma posição mais estável, especialmente na carreira profissional.<br><br> Este momento traz novas oportunidades que se estenderão pelos anos seguintes, frequentemente mantendo uma trajetória mais constante e sem grandes mudanças até o final da vida."
    },
    ferramentas: {
        sorte: "Revelam quais são os números que você possui harmonia, sendo bastante uteis para verificar contas bancárias, sociedades, números de telefone, etc.",
        cores: "São consideradas as suas “cores da sorte”, as quais, ao ser utilizadas durante os seus dias favoráveis, irão intensificar o seu poder de atração positiva.",
        dias: "São considerados os seus “dias da sorte”, sendo favoráveis para realizar coisas importantes. Porém, é importante checar se o mês e o ano pessoal também se encontram favoráveis à determinadas situações.",
        cristais: "Cristais de proteção atuam como amuletos naturais que ajudam a repelir, absorver ou transmutar energias negativas. Os cristais indicados aqui são harmônicos e alinhados com você, fortalecendo seu campo energético e trazendo mais equilíbrio e proteção.",
        ervas: "Ervas de proteção auxiliam na limpeza energética e na criação de um escudo contra influências negativas, inveja e mau-olhado. As ervas indicadas aqui são escolhidas especialmente para você, podendo ser usadas em banhos, defumações ou na entrada do ambiente."
    }
};



/* ==========================================================================
   2. TEXTOS FIXOS E INTERPRETATIVOS (VERSÃO COMPLETA E INTEGRADA)
   ========================================================================== */

const TextosAno = {
    1: {
        titulo: "1",
        subtitulo: "O Início de um Novo Ciclo",
        visao: `<p>Escute o que eu vou te dizer agora, e quero que você leve isso para o seu travesseiro hoje: o Universo acaba de te entregar uma folha em branco e uma caneta de ouro. Sabe aquele peso que você carregou nos últimos anos? Aquelas histórias que já não fazem mais sentido? Acabou. O Ano 1 é o "Big Bang" da sua vida. É o início de um ciclo de nove anos. O que você decidir, plantar e agir agora vai ecoar por quase uma década. Se você ficar sentado esperando um sinal, o sinal vai passar e você vai ficar para trás.</p>`,
        cenario: `<p>Você vai sentir uma inquietação que não sabe de onde vem. É como se a sua pele antiga estivesse ficando apertada demais. Sabe aquela vontade de mandar tudo para o alto e começar do zero? Não é loucura, é a sua essência pedindo espaço. Você terá mais energia, mais coragem e, curiosamente, menos paciência para bobeira. O cenário é de abertura de caminhos. As portas que estavam trancadas não vão apenas abrir; você vai sentir que tem a chave de todas elas. Mas atenção: porta aberta não significa que o caminho está pavimentado. Você vai ter que capinar o mato alto primeiro.</p>`,
        noamor: `<p>Pare de tentar carregar o outro nas costas se você nem sabe para onde está indo. No Ano 1, o seu relacionamento principal é com o espelho. Se você está em uma relação, a dinâmica precisa mudar: ou o parceiro caminha ao seu lado na sua nova fase, ou você vai sentir um abismo crescendo. É hora de dizer "eu quero", "eu prefiro", "eu não aceito". Se você está solteira, não é ano de ficar "caçando" ninguém por carência. É ano de se tornar tão foda, tão autêntica, que as pessoas certas serão atraídas pelo seu brilho natural. Primeiro você se ama, depois o mundo te ama.</p>`,
        trabalho: `<p>Chega de ser o coadjuvante na história dos outros. O Ano 1 é o ano do Empreendedorismo Pessoal. Mesmo que você trabalhe como funcionário, sua postura deve ser de dono. Proponha ideias, mude processos, assuma riscos que você teve medo de assumir no passado. O Universo vai te colocar em situações onde a sua liderança será testada. Não tenha medo de brilhar por medo de "ofuscar" os outros. Quem se incomoda com a sua luz é porque prefere viver no escuro. Plante as sementes da sua independência financeira agora.</p>`,
        alerta: `<p>Aqui é onde eu preciso ser firme com você: o maior inimigo do seu Ano 1 é a procrastinação disfarçada de planejamento. Não adianta comprar dez cadernos novos e não escrever nada neles. O perigo aqui é você ter tantas ideias que acaba tendo um "ataque de paralisia" e não sai do lugar. Outro ponto: o ego. Não confunda liderança com arrogância. Você está começando um caminho novo, então seja humilde para aprender as novas regras, mas feroz para executar. Se você deixar passar a energia de início deste ano, vai passar os próximos oito anos tentando compensar o tempo perdido.</p>`,
        dever: `<p>Eu não quero que você apenas leia este mapa; eu quero que você mude sua realidade. Sua tarefa é a seguinte: Identifique uma coisa — um hábito, um projeto, uma crença ou até um objeto — que pertence ao seu passado e que não cabe mais nessa sua nova versão. Livre-se disso hoje. Pode ser cancelar uma assinatura que você não usa, ter aquela conversa difícil que você está adiando ou finalmente comprar o domínio do seu site. Dê um passo concreto, por menor que seja, que diga ao Universo: "Eu assumi o comando".</p>`
    },
    2: {
        titulo: "2",
        subtitulo: "A Virtude da Paciência",
        visao: `<p>Escuta o que eu vou te dizer: nem tudo na vida se resolve no grito ou na correria. Agora, o seu papel é aprender a virtude da paciência. Sabe aquele momento em que a semente já está debaixo da terra e você não consegue ver nada acontecendo do lado de fora? É exatamente onde você está. Se você tentar puxar a planta para ela crescer mais rápido, você vai acabar matando a raiz. Este momento pede cuidado, silêncio e, principalmente, parceria.</p>`,
        cenario: `<p>As coisas vão parecer mais lentas, e eu sei que isso pode te dar uma agonia, como se você estivesse andando com o freio de mão puxado. Mas entenda: essa lentidão tem um motivo. Você está sendo convidada a olhar para os detalhes que a pressa não deixa ver. Você vai se sentir mais sensível, com os nervos à flor da pele. É um tempo de bastidores. O palco está sendo montado, e você precisa garantir que cada parafuso esteja no lugar certo.</p>`,
        noamor: `<p>Este é o momento de olhar para quem caminha ao seu lado. Se você está em um relacionamento, é hora de sentar e ouvir de verdade, sem querer ter sempre a última palavra. O foco é a parceria, a doçura e o entendimento. Pequenos gestos valem mais do que grandes declarações agora. Para as solteiras, o amor não vem com barulho; ele vem de mansinho, através de uma conversa honesta ou de alguém que já faz parte da sua rotina. Procure cumplicidade, não intensidade.</p>`,
        trabalho: `<p>Se você tentar ser a "heroína solitária" agora, vai se esgotar e não vai chegar a lugar nenhum. O seu sucesso hoje depende da sua capacidade de trabalhar em equipe. É o momento de formar parcerias, de pedir ajuda e de saber ouvir a opinião dos outros. Use esse tempo para organizar o que está bagunçado, planejar com calma e cuidar da burocracia. Não é hora de dar saltos no escuro, mas de fortalecer a base de onde você já está.</p>`,
        alerta: `<p>Presta atenção: como você está mais sensível, o perigo é você virar um "tapete" para os outros passarem por cima. Por querer evitar brigas, você pode acabar engolindo sapos que vão te fazer mal. Não confunda ser gentil com ser omissa. Outro ponto é a dúvida: não deixe que o medo de errar te deixe travada. Escute a sua intuição, mas não se perca no meio de tantas incertezas.</p>`,
        dever: `<p>Sua tarefa é simples: Identifique uma pessoa próxima (no trabalho ou em casa) com quem você teve algum desentendimento ou falta de sintonia. Sente com ela esta semana e tenha uma conversa focada em ouvir. Não tente se explicar; apenas tente entender o lado do outro. O seu dever hoje é ser a ponte, não o muro.</p>`
    },
    3: {
        titulo: "3",
        subtitulo: "O Momento de Florescer",
        visao: `<p>Abra as janelas da sua vida, porque o sol bateu na sua porta. Este momento é para você se comunicar, se expressar e, principalmente, aparecer. Chega de ficar escondida no cantinho. Você tem algo a dizer, e o mundo está pronto para ouvir. É um tempo de muita criatividade e movimento. Tudo o que você coloca a sua energia agora tende a crescer e ganhar cor. Só não se esqueça de que quem quer estar em todos os lugares ao mesmo tempo acaba não ficando em lugar nenhum.</p>`,
        cenario: `<p>A energia é de alegria, de conversa e de muita gente ao seu redor. Você vai sentir uma vontade enorme de mudar o cabelo, de comprar roupas novas e de circular por lugares diferentes. A vida social vai acelerar. Você estará mais magnética, atraindo olhares e convites. É um cenário de expansão. Sabe aquela ideia que você achava que ninguém ia ligar? Agora é a hora de tirar ela da cabeça e colocar na boca.</p>`,
        noamor: `<p>No amor, a palavra de ordem é prazer. Menos cobrança e mais risada. Se você já tem um parceiro, tire o relacionamento do sério: saiam para se divertir, viajem, tragam o frescor de volta. Se você está solteira, você estará impossível de ser ignorada. É um excelente momento para conhecer pessoas novas e se permitir viver romances leves. Mas cuidado: não confunda atenção com amor real. Divirta-se, mas saiba quem merece o seu tempo de verdade.</p>`,
        trabalho: `<p>No trabalho, você precisa ser vista. Melhore a sua imagem pessoal, fale mais nas reuniões, use as redes sociais a seu favor. É o momento de vender o seu peixe. Se você trabalha com público, vendas ou ensino, a energia está toda ao seu lado. Use a sua criatividade para resolver problemas de um jeito novo. Só tome cuidado para não começar dez projetos e deixar todos pela metade. Escolha o que realmente importa e coloque a sua voz ali.</p>`,
        alerta: `<p>Escuta o mentor: o seu maior risco agora é a distração. Como tudo parece interessante, você pode acabar gastando a sua energia com fofoca, bobagem na internet ou conversas que não levam a lugar nenhum. Brilhar é diferente de fazer barulho. Se você não tiver um mínimo de foco, vai chegar no fim do dia exausta e com a sensação de que não produziu nada de concreto. Não se perca no meio do seu próprio entusiasmo.</p>`,
        dever: `<p>Escolha uma ideia ou um talento seu que você morre de vergonha de mostrar. Esta semana, você vai fazer um post, um vídeo ou uma apresentação para alguém sobre isso. Não precisa ser perfeito, só precisa ser real. O seu compromisso hoje é parar de se esconder.</p>`
    },
    4: {
        titulo: "4",
        subtitulo: "Construção e Segurança",
        visao: `<p>Agora o papo é sério e o pé é no chão. Esqueça a facilidade e a sorte por um instante; o que vai contar aqui é o seu suor e a sua organização. Este momento exige que você construa os pilares da sua vida. Imagine que você está levantando uma parede: se os tijolos estiverem tortos, tudo vai cair lá na frente. O Universo está te pedindo método, seriedade e responsabilidade. É o tempo do "fazer o que precisa ser feito", sem desculpas.</p>`,
        cenario: `<p>A vida vai exigir mais de você. O trabalho pode parecer mais pesado e a rotina, mais rígida. Você terá que lidar com horários, prazos e muitas obrigações. Não veja isso como um peso, mas como a chance de organizar a sua vida de um jeito que ninguém consiga te derrubar depois. O cenário pede que você olhe para as suas contas, para a sua saúde e para a sua casa. É hora de consertar o que está quebrado e descartar o que é inútil.</p>`,
        noamor: `<p>Aqui, o romance dá lugar à realidade. O que importa não é o "eu te amo" da boca para fora, mas se vocês têm planos reais juntos. É o momento de falar sobre dinheiro, sobre o futuro e sobre como vocês se apoiam no dia a dia. Para as solteiras, o seu critério vai subir. Você não tem mais paciência para gente imatura ou para quem não sabe o que quer. Você busca alguém que seja um porto seguro, alguém em quem você possa confiar de olhos fechados.</p>`,
        trabalho: `<p>Este é o momento de ser a pessoa mais competente que você conhece. Não procure atalhos. Organize os seus processos, limpe a sua mesa, cumpra os seus horários. O reconhecimento virá, mas ele será fruto da sua persistência. É um excelente período para assinar contratos de longo prazo, comprar bens duradouros ou investir na sua formação técnica. O trabalho duro hoje é a sua garantia de tranquilidade amanhã.</p>`,
        alerta: `<p>Cuidado para não virar uma "máquina de trabalhar". Por estar tão focada nas obrigações, você corre o risco de ficar ranzinza, teimosa e fria com as pessoas que ama. Não deixe o medo da falta de dinheiro ou a obsessão por controle te transformarem em uma pessoa rígida demais. A vida exige esforço, mas você também precisa de um banho quente e de um descanso para não pifar.</p>`,
        dever: `<p>Você vai escolher a área da sua vida que está mais bagunçada hoje (pode ser o seu guarda-roupa, o seu extrato bancário ou a sua gaveta de documentos). Você vai dedicar pelo menos duas horas desta semana para organizar isso do começo ao fim. O seu dever hoje é provar para você mesma que você é a mestre da sua própria rotina.</p>`
    },
    5: {
        titulo: "5",
        subtitulo: "O Furacão da Mudança",
        visao: `<p>Olha só, o papo agora é o seguinte: se você estava esperando a vida se acalmar para tomar uma atitude, esquece. O seu momento agora é de movimento. Sabe aquela sensação de que tudo está mudando ao mesmo tempo e você não tem onde se segurar? Pois é, o Universo tirou o seu tapete para você aprender a andar em terreno incerto. Não adianta tentar controlar cada detalhe, porque este ano é um furacão. Se você ficar rígida, você quebra; se você for flexível, você voa.</p>`,
        cenario: `<p>A sua rotina vai virar do avesso. Vão aparecer convites que você não esperava, pessoas que você nunca viu e vontades que você nem sabia que tinha. É como se a sua vida estivesse pedindo uma reforma geral. Você vai sentir uma pressa, uma vontade de ser livre, de sair por aí e de experimentar coisas novas. O cenário é de imprevisibilidade. Prepare o seu estômago para as curvas, porque este ano não tem linha reta.</p>`,
        noamor: `<p>O amor aqui ganha um tempero de aventura. Se você tem um parceiro, ou o relacionamento ganha um fôlego novo e sai da mesmice, ou você vai começar a se sentir sufocada. É hora de viajar juntos, de tentar algo diferente entre quatro paredes e de dar espaço um ao outro. Para quem está sozinha, o seu mel vai atrair muita gente, mas cuidado: nem todo mundo que chega é para ficar. É um ano de paixões rápidas e muita curtição. Não tenha pressa de colocar uma coleira em ninguém agora.</p>`,
        trabalho: `<p>No trabalho, o tédio é o seu pior inimigo. Se você ficar fazendo a mesma coisa do mesmo jeito, vai acabar explodindo de frustração. É hora de aprender uma ferramenta nova, de mudar a forma como você fala com seus clientes ou até de considerar um novo rumo. As oportunidades vão surgir do nada, e você vai precisar decidir rápido. Não tenha medo de arriscar um pouco, desde que você não jogue tudo para o alto sem ter um plano B na mão.</p>`,
        alerta: `<p>Escuta aqui o que eu vou te falar: o perigo deste momento é você "chutar o balde" só porque está com a cabeça quente. Cuidado para não trocar o certo pelo duvidoso por pura impaciência. Outro ponto: você pode começar mil coisas e não terminar nenhuma, virando aquela pessoa que fala muito e faz pouco. Não se perca na bagunça. Liberdade não é falta de responsabilidade. Se você não tiver um mínimo de foco, vai chegar no fim do ano cansada e sem ter construído nada real.</p>`,
        dever: `<p>Você vai escolher uma coisa na sua rotina que você faz sempre do mesmo jeito (pode ser o caminho para o trabalho, o horário que acorda ou o que come) e vai mudar isso hoje. Além disso, escolha um assunto que você sempre quis aprender e compre um livro ou faça uma aula experimental. O seu compromisso hoje é com o novo.</p>`
    },
    6: {
        titulo: "6",
        subtitulo: "Harmonia e Responsabilidade",
        visao: `<p>Agora o clima mudou. O foco saiu do mundo lá fora e entrou para dentro da sua casa. Este é o momento em que você é chamado para ser o pilar, o suporte, aquela pessoa que resolve os problemas da família e mantém todo mundo unido. Você vai sentir um desejo maior de conforto, de beleza e de harmonia. É como se você estivesse sendo convidada a cuidar do seu jardim para que as flores voltem a crescer.</p>`,
        cenario: `<p>Você vai ser mais solicitada do que nunca. O seu telefone vai tocar com gente pedindo conselho, ajuda ou apenas um ombro amigo. A sua casa vai virar o centro das atenções. É um momento de assumir compromissos sérios. Sabe aquelas pendências familiares que todo mundo finge que não vê? Elas vão cair no seu colo. O cenário pede que você seja justa e amorosa, mas sem esquecer de você mesma no meio de tanta gente.</p>`,
        noamor: `<p>Se você está em um relacionamento, este é o momento de decidir: vamos construir uma família, reformar a casa ou oficializar essa união? O foco é o compromisso. É um ótimo período para casar ou para renovar os votos. Se as coisas não estão bem, os problemas vão aparecer para serem resolvidos de vez. Para quem está solteira, a chance de encontrar alguém que queira algo sério é enorme. Você não está para brincadeira; você quer alguém que queira construir um futuro com você.</p>`,
        trabalho: `<p>No trabalho, o seu sucesso vai vir através da sua capacidade de ajudar os outros. É um ano para trabalhar em equipe e para mostrar que você é uma pessoa em quem se pode confiar. Se você está insatisfeita, não é hora de fazer loucuras, mas de planejar algo que te dê mais estabilidade e prazer. O seu ambiente de trabalho precisa estar bonito e organizado, porque isso vai afetar diretamente a sua produtividade.</p>`,
        alerta: `<p>Presta atenção: o seu maior erro agora é querer carregar o mundo nas costas. Se você se anular para fazer a vontade da família ou dos amigos, você vai virar uma pessoa amargurada. Cuidado para não se tornar aquela pessoa que "cobra" o que faz pelos outros. Não seja o capacho de ninguém. Outro ponto é o perfeccionismo: pare de querer que tudo seja perfeito. A vida tem defeitos, e as pessoas também. Aceite isso para não viver frustrada.</p>`,
        dever: `<p>Você vai escolher um canto da sua casa que está bagunçado ou que precisa de um reparo e vai cuidar disso pessoalmente nesta semana. Além disso, vai ligar para aquela pessoa da sua família que você sabe que precisa de uma palavra de apoio e vai apenas ouvir, sem julgar. O seu dever hoje é cuidar do seu ninho.</p>`
    },
    7: {
        titulo: "7",
        subtitulo: "A Jornada Interior",
        visao: `<p>Para tudo. O que você precisa agora não está nos livros, na internet ou no que os outros dizem. O que você busca está aí dentro, no silêncio que você tem medo de encarar. Este é o ano do autoconhecimento profundo. Não se assuste se você sentir vontade de ficar mais na sua, de ler mais e de sair menos. Você está em uma fase de "limpeza de alma". É como se você estivesse tirando o excesso para ver o que realmente sobra de essencial na sua vida.</p>`,
        cenario: `<p>O ritmo diminuiu, e não é porque a vida parou, mas porque você precisa de profundidade. O cenário é de estudo, reflexão e espiritualidade (do seu jeito, sem religiosidade barata). Você vai começar a questionar tudo: "Por que eu faço o que eu faço?", "Eu sou feliz de verdade?". É um ano de milagres internos. Coisas que você não entendia vão começar a fazer sentido. É uma fase de amadurecimento intelectual e espiritual que você nunca teve antes.</p>`,
        noamor: `<p>No amor, a conversa agora é outra. Você não quer mais só companhia para ir ao cinema; você quer conexão de alma. Se você tem um parceiro, vocês vão precisar aprofundar a relação, ou você vai se sentir muito sozinha mesmo estando acompanhada. É um tempo de muita conversa profunda. Se você está solteira, não tenha pressa. Use esse tempo para se curar de feridas antigas. O amor que vier agora precisa ser alguém que respeite o seu espaço e a sua necessidade de silêncio.</p>`,
        trabalho: `<p>No trabalho, é o ano de se tornar autoridade no que você faz. Estude, faça um curso de especialização, mergulhe nos livros. Não é um ano de grandes expansões financeiras "na força bruta", mas de ganhar respeito pela sua inteligência e competência. Projetos que exigem pesquisa e detalhamento vão fluir muito bem. Confie na sua intuição para fechar negócios; se algo parecer estranho, ouça o seu estômago e caia fora.</p>`,
        alerta: `<p>Cuidado para não se isolar demais e virar uma pessoa "fria" ou arrogante. O perigo do Ano 7 é você se perder nos seus pensamentos e começar a ver defeito em tudo e em todos. Não se torne uma pessoa inacessível. Outro alerta: não se perca em dúvidas intermináveis. Analisar é bom, mas ficar paralisada pelo excesso de pensamento é doença. Saiba a hora de sair da caverna e colocar os pés no chão.</p>`,
        dever: `<p>Você vai reservar 20 minutos de cada dia desta semana para ficar em silêncio total. Sem celular, sem música, sem ninguém. Apenas você e seus pensamentos. Tenha um caderno ao lado e anote a primeira pergunta que vier à sua cabeça sobre a sua vida. A resposta vai aparecer ao longo do dia, preste atenção aos sinais.</p>`
    },
    8: {
        titulo: "8",
        subtitulo: "O Ano da Autoridade e Colheita",
        visao: `<p>Escuta aqui: o tempo de ficar se escondendo ou de ter vergonha de querer mais acabou. Este é o seu ano de autoridade. Se você trabalhou, se você se dedicou, agora é a hora de bater na mesa e cobrar os seus resultados. O Universo está te entregando as chaves do cofre, mas ele também vai te cobrar eficiência. Não é um ano para amadores; é um ano para quem sabe o que quer e não tem medo de ser grande.</p>`,
        cenario: `<p>Você vai sentir uma força crescendo dentro de você, uma autoconfiança que talvez nunca tenha sentido antes. O cenário é de prosperidade, mas também de muita exigência. O mundo vai te olhar como uma pessoa poderosa, capaz de resolver problemas e de liderar. É como se você estivesse no topo de uma montanha: a vista é linda, mas o vento sobra forte. Você vai lidar com dinheiro, com justiça e com burocracia. Esteja com a coluna ereta, porque você vai ser testada na sua capacidade de comandar a sua própria vida.</p>`,
        noamor: `<p>No amor, a conversa agora é sobre admiração. Você vai querer estar ao lado de alguém que você respeite e que te dê orgulho. Cuidado para não tratar o seu parceiro como se fosse seu funcionário. O clima é de construção material conjunta — comprar um carro, investir em um imóvel ou organizar a vida financeira do casal. Se você está solteira, o seu magnetismo estará ligado ao seu sucesso. Você vai atrair pessoas decididas. Mas lembre-se: não deixe o trabalho engolir o carinho. O poder só vale a pena se você tiver com quem compartilhar.</p>`,
        trabalho: `<p>Este é o seu melhor momento profissional. O foco é o crescimento, a expansão e o lucro. Se você quer uma promoção, peça. Se quer abrir um negócio, este é o ano de estruturar com seriedade. As oportunidades de ganhar dinheiro são reais, mas o esforço terá que ser proporcional. Não aceite migalhas. O Ano 8 pede que você seja uma estrategista: planeje cada passo, cuide dos investimentos e mostre para que veio. A sua ambição não é um defeito, é a sua maior ferramenta agora.</p>`,
        alerta: `<p>Presta atenção no que eu vou te dizer agora: o perigo aqui é a arrogância. Por se sentir poderosa, você pode acabar passando por cima das pessoas ou querendo ser a dona da verdade. Outro ponto é o excesso de foco no dinheiro, esquecendo que você é um ser humano e não uma máquina. Cuidado também com questões de justiça; faça tudo de forma correta, sem jeitinhos. Se você tentar trapacear agora, o tombo vai ser grande. O poder exige responsabilidade, não esqueça disso.</p>`,
        dever: `<p>Você vai fazer um raio-x das suas finanças esta semana. Coloque tudo no papel: o que entra, o que sai e o que você quer conquistar. Além disso, escolha um objetivo material que você deseja realizar até o fim do ano e dê o primeiro passo prático para ele hoje — seja abrindo uma conta poupança específica ou marcando uma reunião estratégica. O seu dever hoje é se comportar como a dona do seu destino.</p>`
    },
    9: {
        titulo: "9",
        subtitulo: "O Encerramento Sagrado",
        visao: `<p>Olha nos meus olhos: a sua vida está cheia de coisas que já morreram, mas você continua tentando ressuscitar. O Ano 9 é o ano do ponto final. É o momento de limpar as gavetas da alma, de perdoar o que passou e de deixar ir embora quem não quer ficar. É um período de transição, onde você se torna mais sábia e mais madura. Se você tentar segurar o que precisa ir, você vai sofrer. Se você abrir as mãos, vai se sentir leve como nunca.</p>`,
        cenario: `<p>Você vai sentir uma mistura de cansaço com uma vontade enorme de ajudar as pessoas. O cenário é de encerramento. Coisas que pareciam importantes vão perder o sentido, e projetos que se arrastavam vão finalmente chegar ao fim. É como se você estivesse arrumando a mala para uma viagem longa, mas para a nova viagem você não pode levar tralha. Você estará mais emotiva, mais voltada para o bem comum e com uma visão muito clara do que realmente importa na vida.</p>`,
        noamor: `<p>No amor, o Ano 9 é o teste da verdade. Se o seu relacionamento é sólido, vocês vão passar por uma fase de profunda compreensão e ajuda mútua. Se a relação está desgastada e só sobrevive por costume, ela corre um sério risco de acabar agora. E se acabar, entenda que é um livramento. Para as solteiras, é hora de curar as feridas dos relacionamentos passados. Não entre em algo novo carregando o lixo do ex. Limpe o seu coração primeiro, resolva as mágoas e se prepare para ser uma pessoa inteira.</p>`,
        trabalho: `<p>No trabalho, o foco não é começar coisas grandiosas, mas terminar o que foi começado. Feche contratos, conclua projetos, organize os arquivos. É um ano maravilhoso para o trabalho humanitário ou para ensinar o que você sabe. O dinheiro vem como consequência de um trabalho bem feito e generoso. Se você sente que a sua profissão não faz mais sentido, comece a se despedir dela internamente. Não chute o balde agora, mas comece a tirar a mão do que não vibra mais com quem você é.</p>`,
        alerta: `<p>O seu maior erro aqui é o apego. Querer segurar pessoas, empregos ou situações que já deram o que tinham que dar. Se você resistir ao fim, o Universo vai dar um jeito de encerrar as coisas de forma mais brusca. Outro perigo é o drama: não se sinta a vítima das circunstâncias. Entenda que tudo o que acaba agora está liberando espaço para algo novo. Não viva de passado, não fique remoendo o que "poderia ter sido". O que importa é o que você aprendeu com tudo isso.</p>`,
        dever: `<p>Você vai fazer uma limpeza física e emocional esta semana. Doe roupas que você não usa mais, jogue fora papéis velhos e apague contatos que não fazem mais sentido. No campo emocional, escreva uma carta para alguém que te magoou (você não precisa entregar a carta), diga tudo o que sente e, no final, escreva: "Eu te perdoo e te liberto para seguir o seu caminho, assim como eu sigo o meu". Queime a carta e sinta o peso saindo dos seus ombros.</p>`
    }
};

/* ==========================================================================
   3. TEXTOS DOS MESES PESSOAIS (VERSÃO INTEGRAL COM ÍCONES ESPECÍFICOS)
   ========================================================================== */

const TextosMes = {
    1: { 
        titulo: "Mês Pessoal 1", 
        subtitulo: "Hora de começar e brilhar", 
        texto: `<p>Este é o mês de dar o primeiro passo. A vida está te chamando para assumir o comando e plantar as sementes do que você quer colher lá na frente. É um tempo de independência, de enxergar as coisas com clareza e de abraçar responsabilidades que antes pareciam pesadas. Agora, a energia está ao seu lado para você ser o autor da sua própria história.</p>`, 
        topicos: [
            { i: "ph-rocket-launch", t: "Coragem para tirar os planos da gaveta", d: "Saia da inércia. Se tem um projeto, uma ideia ou até uma mudança de atitude que você está adiando, a hora de começar é agora. Não espere que ninguém abra as portas para você; este mês exige que você mesmo tome a iniciativa e segure a chave do seu destino." },
            { i: "ph-hand-palm", t: "Cuidado para não querer mandar em tudo", d: "Com essa força toda, pode surgir a vontade de controlar tudo e todos ao seu redor. Observe se a sua busca por independência não está virando autoritarismo. O foco aqui é liderar a si mesmo; querer governar a vida do outro é o maior erro deste período." },
            { i: "ph-user-focus", t: "Foco em você e menos agito social", d: "Mesmo com a energia lá no alto, você precisa de foco. Não é o melhor momento para se jogar em novas amizades ou festas sem propósito. Mantenha sua rotina, proteja seu tempo e não se distraia com quem ainda não conhece seus planos. O segredo é ter clareza." },
            { i: "ph-currency-circle-dollar", t: "Ação firme e olho nas finanças", d: "Nas decisões práticas e no dinheiro, sua visão estará muito afiada. É um mês excelente para negociar, fechar acordos e estruturar passos que exigem coragem. O sucesso virá da sua capacidade de ser racional e inventivo. Confie no seu taco e não tenha medo de inovar." }
        ] 
    },
    2: { 
        titulo: "Mês Pessoal 2", 
        subtitulo: "Tempo de escuta e paciência", 
        texto: `<p>Este é um mês que pede calma e suavidade. Não é hora de forçar a barra ou querer que as coisas aconteçam no grito. O segredo agora é a diplomacia: saiba ouvir, seja gentil e tente se harmonizar com as pessoas e os ambientes. Sua força este mês vem da paciência.</p>`, 
        topicos: [
            { i: "ph-chats", t: "Aposte na gentileza e no diálogo", d: "Trate tudo e todos com doçura. É o momento de agir com 'jeitinho', evitando brigas diretas. Ao ser compreensivo e receptivo, você vai conseguir resolver problemas que a agressividade só pioraria. A paz é sua melhor aliada agora." },
            { i: "ph-scales", t: "Lidando com a dúvida e a indecisão", d: "É normal se sentir um pouco dividido entre dois caminhos este mês. Não tente apressar uma decisão se você ainda não sente firmeza. Entenda que essa hesitação faz parte do ciclo. Observe suas dúvidas com calma; elas mostram que você ainda está encontrando o seu equilíbrio." },
            { i: "ph-warning-diamond", t: "Cuidado ao começar coisas novas", d: "Fica o alerta: pense duas vezes antes de mergulhar em novos projetos agora. Se houver qualquer dúvida lá no fundo, as chances de não dar certo são grandes. Não é hora de dar 'tiros no escuro'. Só avance se tiver certeza absoluta e se o seu coração estiver em paz." },
            { i: "ph-leaf", t: "Decisões que vêm do silêncio", d: "Mesmo sendo um mês mais parado, decisões importantes vão surgir. A diferença é que elas devem vir da calma, não da pressa. Tire um tempo para olhar os detalhes e deixe a resposta amadurecer. A solução certa aparece quando você para de lutar contra a maré." }
        ] 
    },
    3: { 
        titulo: "Mês Pessoal 3", 
        subtitulo: "Mês de celebrar e se mostrar", 
        texto: `<p>Chegou a hora de colocar o seu brilho no mundo! Este ciclo é sobre alegria, comunicação e criatividade. A energia favorece quem se mostra, quem conversa e quem espalha entusiasmo. É o momento perfeito para renovar seus contatos e deixar sua vida mais leve e movimentada.</p>`, 
        topicos: [
            { i: "ph-users-three", t: "Saia de casa e faça novos amigos", d: "Sua vida social vai ganhar um fôlego novo. Saia do isolamento, conheça gente nova e fortaleça seus laços. Ser feliz e trocar ideias é fundamental agora. Mostre-se para o mundo; as amizades feitas agora trarão uma leveza que vai alimentar sua alma e abrir portas." },
            { i: "ph-lightbulb", t: "Dê asas à sua criatividade", d: "Sua mente estará rápida e cheia de sacadas geniais. Use isso para tirar seus planos do papel. Não guarde suas ideias só para você; converse sobre elas e planeje com inteligência. Se tem algo para criar ou dizer, não perca tempo. O momento de brilhar é agora." },
            { i: "ph-crown", t: "Controle o ego e a ambição", d: "Este mês desperta um lado mais ambicioso e orgulhoso. É gostoso ser reconhecido, mas cuidado para não virar vaidade excessiva. Direcione essa vontade de crescer para projetos que te deem prazer real, sem precisar ofuscar ninguém pelo caminho." },
            { i: "ph-map-trifold", t: "Planeje para ter sucesso", d: "Apesar da festa, o mês pede estratégia. Use seu charme e sua fala para organizar seus próximos passos. Converse com quem você confia e atraia aliados para os seus planos. Unir um bom planejamento com o seu entusiasmo atual é a receita certa para o sucesso." }
        ] 
    },
    4: { 
        titulo: "Mês Pessoal 4", 
        subtitulo: "Pés no chão e organização", 
        texto: `<p>Este ciclo pede que você seja o mestre da sua própria realidade. O foco agora é estabilidade. Não é hora de sonhar acordado ou improvisar; a vida quer que você coloque os pés no chão, organize a bagunça e trabalhe com método para construir uma base sólida para o seu futuro.</p>`, 
        topicos: [
            { i: "ph-list-checks", t: "Organize a casa e a vida", d: "A hora é de colocar tudo em ordem. Olhe para as suas finanças, seus horários e até para os cantos da sua casa. O sucesso agora não vem da inspiração, mas da disciplina. Seja prático, racional e coloque cada coisa em seu devido lugar. Onde houver bagunça, leve organização." },
            { i: "ph-warning", t: "Cuidado com o estresse e a raiva", d: "Este mês pode testar sua paciência. Se as coisas demorarem a andar, você pode se sentir irritado ou desanimado. Tente não ser rígido demais; o excesso de cobrança gera tensão. Mantenha o foco nos seus planos, mas não deixe que os obstáculos estraguem o seu humor." },
            { i: "ph-scales", t: "Seja justo e faça o que é certo", d: "Neste mês, a honestidade é sua regra de ouro. Seja justo com os outros e com você mesmo. Não tente pegar atalhos. Agir com integridade agora garante que lá na frente você colha frutos que realmente valem a pena. Coerência é a palavra-chave." },
            { i: "ph-hammer", t: "Resolva problemas com praticidade", d: "Se surgir um problema, não sofra: resolva. Não se perca em 'porquês' emocionais. Pergunte-se: 'Qual é a solução prática para isso agora?'. Mantendo a cabeça fria e os pés no chão, você vai conseguir superar qualquer imprevisto que apareça." }
        ] 
    },
    5: { 
        titulo: "Mês Pessoal 5", 
        subtitulo: "Ventos de mudança e liberdade", 
        texto: `<p>Prepare-se para o movimento! Este é um mês de novidades, viagens e mudanças de rumo. O ciclo 5 é um convite para você sair da rotina e descobrir novos horizontes. Nada de ficar parado; a vida agora pede que você seja flexível e se abra para o inesperado.</p>`, 
        topicos: [
            { i: "ph-wind", t: "Abrace o novo sem medo", d: "Sua mente vai querer coisas diferentes. É o momento perfeito para testar novos projetos ou mudar o jeito de fazer as coisas. Não tenha medo de trocar o velho pelo novo ou de experimentar um caminho desconhecido. A coragem de inovar vai te trazer resultados muito rápidos." },
            { i: "ph-users", t: "Circule e conheça gente nova", d: "Este período é ótimo para renovar seu círculo de amigos. Seu magnetismo estará em alta, facilitando novos encontros que trazem um ar fresco para sua vida. Frequente lugares diferentes e ouça o que as pessoas têm a dizer. Essa troca de experiências é o que vai te dar gás este mês." },
            { i: "ph-sparkle", t: "Aproveite os prazeres e o romance", d: "Este número tem tudo a ver com os sentidos e o prazer de viver. Se você já tem alguém, é hora de sair da rotina e apimentar a relação. Se está só, o momento favorece encontros intensos e novas sensações. Viva o seu corpo e curta os prazeres da vida de forma vibrante." },
            { i: "ph-arrows-left-right", t: "Adapte-se para colher frutos", d: "Como é um mês muito movimentado, quem sabe se adaptar ganha mais. Esteja pronto para lidar com surpresas de um jeito leve e criativo. O sucesso virá para quem souber 'surfar na onda' das mudanças sem resistência. Acredite: mudar é o caminho para crescer agora." }
        ] 
    },
    6: { 
        titulo: "Mês Pessoal 6", 
        subtitulo: "Cuidado com o coração e com a casa", 
        texto: `<p>Este é um mês para olhar para dentro e cuidar de quem você ama. O foco não é ganhar o mundo lá fora, mas deixar o seu 'ninho' em ordem. A vida pede que você seja aquele que traz paz e equilíbrio para a família, para os relacionamentos e para o seu lar.</p>`, 
        topicos: [
            { i: "ph-heart", t: "Prioridade total para quem você ama", d: "Neste mês, o que mais importa é o seu coração. Cultive a calma e o equilíbrio nas suas relações. Se houver alguma briga antiga, aproveite para fazer as pazes com paciência. Dedique tempo de verdade para as pessoas próximas; o afeto é o seu maior tesouro agora." },
            { i: "ph-house-line", t: "Cuide da sua casa e da sua família", d: "Sua casa e seus familiares vão precisar mais de você. Pode ser arrumar um canto do seu lar ou dar um ombro amigo para alguém da família. Não veja isso como um peso, mas como um investimento no seu próprio bem-estar e na sua segurança emocional." },
            { i: "ph-calendar", t: "Mantenha a rotina e a paz", d: "Diferente de outros meses, agora não é hora de inventar moda ou fazer mudanças bruscas no trabalho. O mais inteligente é manter o que já está dando certo e caprichar nos detalhes. Fazer o 'feijão com arroz' bem feito vai te trazer a paz que você precisa." },
            { i: "ph-shield-check", t: "Fuja de confusão e briga", d: "Sua paciência para drama vai estar curta. Proteja sua paz e fuja de fofocas ou polêmicas. Se surgir um conflito, não responda com raiva; use o diálogo para acalmar os ânimos. Sua missão este mês é ser o porto seguro, e não quem coloca lenha na fogueira." }
        ] 
    },
    7: { 
        titulo: "Mês Pessoal 7", 
        subtitulo: "Silêncio e olhar para dentro", 
        texto: `<p>Este mês é um convite para você dar um tempo do barulho do mundo. O foco agora é interno. É um período de 'retiro', onde você cresce através do silêncio, da meditação e da observação. A vida lá fora desacelera para que você possa entender melhor quem você é e o que realmente quer.</p>`, 
        topicos: [
            { i: "ph-moon", t: "O valor de ficar um pouco na sua", d: "O silêncio será seu melhor amigo este mês. Procure momentos só seus para pensar na vida e organizar as ideias. Isso não é solidão, é necessidade de clareza. Ao diminuir o ritmo das festas e agitos, você consegue enxergar padrões na sua vida que antes não via." },
            { i: "ph-book-open-text", t: "Estude e busque se conhecer melhor", d: "A energia favorece muito a mente e o aprendizado. É um ótimo mês para ler, fazer um curso ou meditar sobre sua trajetória. Use o pensamento crítico: 'Como eu posso me tornar uma pessoa mais consciente e preparada?'. O conhecimento agora é poder." },
            { i: "ph-sparkle", t: "Ouça a sua intuição", d: "Sua sensibilidade vai estar muito aguçada. Você vai sentir as coisas 'no ar' e perceber o que ninguém está dizendo. Confie nos seus pressentimentos. Essa voz interna é um guia poderoso neste mês; aprenda a ouvi-la antes de tomar qualquer decisão importante." },
            { i: "ph-handshake", t: "Acordos feitos com sabedoria", d: "Mesmo sendo um mês mais quieto, parcerias e acordos podem surgir. Mas atenção: só feche negócio se sentir que os valores são sólidos e que há profundidade. Não faça nada por impulso. Use sua inteligência para garantir que tudo esteja alinhado com o seu futuro." }
        ] 
    },
    8: { 
        titulo: "Mês Pessoal 8", 
        subtitulo: "Foco no dinheiro e no autocontrole", 
        texto: `<p>Este é o momento de colocar a mão na massa e lidar com o lado prático da vida: dinheiro, poder e resultados. É o mês da colheita de tudo o que você trabalhou até aqui. O sucesso agora depende da sua capacidade de ser profissional, manter a cabeça fria e liderar com autoridade.</p>`, 
        topicos: [
            { i: "ph-trend-up", t: "Foco em resultados e negócios", d: "O período é excelente para tratar de dinheiro, investimentos ou fechar contratos. Se tiver decisões financeiras pendentes, a hora é agora. Seja o objetivo, analise os números e aja com a segurança de quem conhece o próprio valor. O foco é colher lucros e ser prático." },
            { i: "ph-brain", t: "Mantenha a calma sob pressão", d: "Este mês pode deixar seus nervos à flor da pele. A cobrança por resultados e as mil coisas para resolver podem gerar estresse. O segredo é o autocontrole: não deixe o nervosismo falar por você. Ter calma não é fraqueza, é estratégia para manter o respeito." },
            { i: "ph-users-four", t: "Lidere sem brigar", d: "Fuja de discussões a todo custo. Neste mês, bater de frente raramente ajuda e pode até estragar bons negócios. Se alguém discordar de você, mantenha sua posição com firmeza, mas sem agressividade. Liderar de verdade é manter o controle da situação sem precisar gritar." },
            { i: "ph-bank", t: "Organize suas contas e seus bens", d: "Use este mês para colocar ordem na sua vida material. Organize seu patrimônio, revise seus gastos e finalize o que está pendente no trabalho. Ter clareza sobre o que você tem e onde quer chegar é o que vai te dar confiança para crescer." }
        ] 
    },
    9: { 
        titulo: "Mês Pessoal 9", 
        subtitulo: "Desapego e olhar para o próximo", 
        texto: `<p>Este ciclo te convida a olhar para fora do seu umbigo. É um tempo de ampliar horizontes e entender que somos parte de algo maior. A energia favorece a coragem, a generosidade e o desejo de fazer a diferença no mundo. É também um mês de finalizações e limpezas profundas.</p>`, 
        topicos: [
            { i: "ph-globe-hemisphere-west", t: "Busque novos significados para a vida", d: "Seus interesses vão se voltar para temas mais profundos. É a hora ideal para ler sobre filosofia, espiritualidade ou qualquer assunto que te faça entender melhor o mundo. Não fique no raso; procure o significado por trás das coisas que te acontecem." },
            { i: "ph-door-open", t: "Seja independente e tome decisões", d: "Você vai se sentir mais confiante e com vontade de ser dono do seu próprio nariz. Use essa coragem para resolver situações que antes pareciam difíceis. É o momento de encerrar o que não faz mais sentido e se posicionar com força diante dos desafios." },
            { i: "ph-hand-heart", t: "Ajude os outros de coração", d: "O foco aqui é o desprendimento. Veja como você pode ajudar alguém ou contribuir com uma causa. Agir com generosidade e empatia no seu dia a dia vai te trazer uma satisfação enorme. A verdadeira realização agora vem de ser útil para o próximo." },
            { i: "ph-palette", t: "Conecte-se com a arte e a beleza", d: "Sua sensibilidade estará muito alta. Aproveite para produzir arte, ouvir música ou ir a um museu. Isso ajuda a equilibrar suas emoções intensas. A arte e a filosofia vão te ajudar a expressar sua visão de mundo de um jeito muito mais bonito e inspirado." }
        ] 
    },
    11: { 
        titulo: "Mês Pessoal 11", 
        subtitulo: "Sinal verde para a intuição e as grandes ideias", 
        texto: `<p>Este é um mês especial, com uma energia muito forte e elevada. Você terá "estalos" de consciência e ideias poderosas que podem mudar tudo. É um período de grandes revelações, onde a sua intuição será o seu melhor radar para guiar seus passos, tanto no trabalho quanto na vida pessoal.</p>`, 
        topicos: [
            { i: "ph-sparkle", t: "Ouça seus palpites e sonhos", d: "Sua percepção estará afiadíssima. Não ignore aqueles pressentimentos ou sonhos que parecem mensagens reais. Fique atento aos sinais que a vida te dá de forma inesperada. Sua intuição é a ferramenta mais rápida para entender o que está acontecendo e saber o que fazer." },
            { i: "ph-list-bullets", t: "Organize o turbilhão de ideias", d: "Sua mente vai estar a mil por hora, o que pode gerar uma certa confusão. Anote tudo o que vier à cabeça e tente colocar essas ideias em ordem. O desafio é não ficar só no 'mundo da lua', mas filtrar o que realmente dá para colocar em prática agora." },
            { i: "ph-trophy", t: "Mire alto e busque grandes feitos", d: "Este mês não aceita menos do que o melhor. Você será empurrado para buscar conquistas que realmente impactem sua vida. Seja em um projeto material ou em uma mudança espiritual, mire alto! Insights poderosos podem surgir e mudar o rumo dos seus planos para melhor." },
            { i: "ph-eye", t: "Esteja pronto para ver a verdade", d: "Abra o olho para a verdade, mesmo que ela te surpreenda. Revelações sobre situações ou pessoas podem aparecer agora, tirando as vendas dos seus olhos. Use essa clareza para ajustar sua rota. O mês pede honestidade: aceite o que for revelado e use isso para agir com sabedoria." }
        ] 
    },
    22: { 
        titulo: "Mês Pessoal 22", 
        subtitulo: "Transformando grandes sonhos em realidade concreta", 
        texto: `<p>Esse é o mês de colocar as mãos na massa para construir algo que realmente importa. A energia do 22 é poderosa e te chama para tirar os seus maiores ideais do papel e transformá-los em algo que você — e o mundo — possam ver e tocar. É um tempo de muito trabalho e de uma capacidade gigante de realizar o que antes parecia impossível, desde que você mantenha os pés no chão.</p>`, 
        topicos: [
            { i: "ph-wall", t: "Construa com solidez e propósito", d: "Não se contente com o básico ou com o que é passageiro. Este mês favorece projetos que têm base firme e que podem durar por muito tempo. Se você tem um grande objetivo de vida, a hora de estruturar os pilares é agora. Use sua inteligência para organizar cada detalhe e transformar sua visão em algo prático e real." },
            { i: "ph-anchor", t: "Lidando com a pressão da responsabilidade", d: "Psicologicamente, você pode sentir que o peso sobre os seus ombros aumentou. Isso acontece porque o 22 exige muito de quem o vive. O segredo é não se deixar levar pelo estresse ou pela ansiedade de querer tudo pronto para ontem. Encare a responsabilidade como um degrau para o seu crescimento e mantenha a calma para liderar sua própria jornada." },
            { i: "ph-gear", t: "Organização máxima para grandes voos", d: "Para dar conta de tanta energia, sua rotina precisa estar impecável. Onde houver desorganização, haverá perda de força. Arrume suas prioridades, limpe o que está atrapalhando o seu fluxo e foque na eficiência. Quando você se organiza, a energia do mês trabalha a seu favor, multiplicando a sua capacidade de entrega e realização." },
            { i: "ph-compass", t: "Pense grande, mas aja com realismo", d: "Sua visão estará muito ampla, permitindo enxergar longe. No entanto, o sucesso deste mês depende da sua capacidade de ser realista. Não se perca em promessas vazias ou em planos sem fundamento. Aja com ética, seja justo em suas parcerias e mantenha o foco no que é tangível. É o momento de ser um mestre na arte de realizar." }
        ] 
    }
};

/* ==========================================================================
   4. TEXTOS DOS DIAS PESSOAIS (VERSÃO INTEGRAL COM ÍCONES ESPECÍFICOS)
   ========================================================================== */

const TextosDia = {
    1: { 
        titulo: "Dia Pessoal 1", 
        subtitulo: "O dia de confiar em você", 
        texto: `<p>Hoje o foco é a sua individualidade. É um dia para você se colocar em primeiro lugar, confiar nas suas próprias ideias e resolver suas pendências com autonomia. A energia favorece quem tem coragem de agir por conta própria e não fica esperando a aprovação dos outros.</p>`, 
        topicos: [
            { i: "ph-check-circle", t: "Termine o que está aberto", d: "Antes de se jogar em algo novo, use a manhã para concluir o que já começou. Esse dia pede eficiência: feche ciclos curtos para que o caminho fique livre para as novidades que você quer criar." },
            { i: "ph-fingerprint", t: "Confie no seu taco", d: "Hoje não é o melhor dia para pedir conselhos ou seguir o que os outros dizem. Ouça a sua própria voz. Seus pensamentos estão mais afiados e você sabe melhor do que ninguém o que precisa ser feito." },
            { i: "ph-user", t: "Aposte na sua independência", d: "Procure tarefas que você possa realizar sozinho. A sua capacidade de trabalhar de forma autônoma está lá no alto. É um ótimo momento para mostrar do que você é capaz sem precisar de supervisão." },
            { i: "ph-target", t: "Inicie com foco", d: "Depois de organizar o que estava pendente, escolha uma semente para plantar hoje. Pode ser um novo hábito, uma ligação importante ou o rascunho de um projeto. O importante é dar o primeiro passo." }
        ] 
    },
    2: { 
        titulo: "Dia Pessoal 2", 
        subtitulo: "O dia de ouvir e cooperar", 
        texto: `<p>Diferente de ontem, hoje o segredo é a parceria. É um dia de harmonia e diplomacia. A vida pede que você diminua o ritmo, tenha paciência e saiba trabalhar em conjunto. O sucesso hoje vem da união, não da força individual.</p>`, 
        topicos: [
            { i: "ph-handshake", t: "Busque parcerias e associações", d: "Hoje o 'nós' é mais forte que o 'eu'. É um excelente dia para fazer acordos, conversar com sócios ou parceiros e buscar pontos em comum. Unir forças vai te levar muito mais longe." },
            { i: "ph-ear", t: "Esteja aberto a conselhos", d: "Sabe aquela opinião que você ignorou? Hoje é o dia de ouvi-la com carinho. As pessoas ao seu redor podem ter a peça que falta para o seu quebra-cabeça. Escutar não é fraqueza, é estratégia." },
            { i: "ph-heart", t: "Use o tato e a gentileza", d: "Se precisar resolver um conflito, faça isso com delicadeza. A energia do dia favorece quem age com diplomacia e lealdade. Uma palavra gentil hoje vale mais do que qualquer argumento lógico." },
            { i: "ph-hourglass", t: "Pratique a paciência", d: "As coisas podem demorar um pouquinho mais para acontecer hoje, e tudo bem. Não force o tempo. Use esse ritmo mais lento para observar os detalhes e garantir que tudo esteja em harmonia." }
        ] 
    },
    3: { 
        titulo: "Dia Pessoal 3", 
        subtitulo: "O dia de brilhar e se comunicar", 
        texto: `<p>Hoje a energia é leve e criativa! É o dia perfeito para colocar o seu rosto no mundo, conversar com as pessoas e expressar o que você sente e pensa. A vida quer que você seja visto e ouvido com clareza e alegria.</p>`, 
        topicos: [
            { i: "ph-broadcast", t: "Expanda seus contatos", d: "Mande mensagens, faça ligações, apareça! Sua vida social está favorecida. Use o dia para reativar contatos ou conhecer gente nova. Sua simpatia será sua melhor ferramenta de conquista." },
            { i: "ph-paint-brush-broad", t: "Coloque a criatividade para jogo", d: "Seja no trabalho ou na vida pessoal, busque formas diferentes de fazer as coisas. Não tenha medo de ser ousado. Hoje a rotina pode ser quebrada com boas ideias e um toque de originalidade." },
            { i: "ph-megaphone", t: "Fale com clareza e simplicidade", d: "Não precisa de palavras difíceis. Exponha seus ideais de forma direta e sem rodeios. Quando você fala com o coração e com simplicidade, as pessoas entendem e se conectam muito mais rápido com você." },
            { i: "ph-smiley", t: "Busque o prazer e o entusiasmo", d: "Trabalhe com alegria. Deixe que o seu bom humor guie o seu dia. Esse entusiasmo é contagiante e ajuda a destravar situações que pareciam complicadas. Seja a luz do ambiente." }
        ] 
    },
    4: { 
        titulo: "Dia Pessoal 4", 
        subtitulo: "O dia de colocar a mão na massa", 
        texto: `<p>Hoje o assunto é trabalho sério e organização. É o dia de construir alicerces, planejar os próximos passos e agir com realismo. O foco é a produtividade e a segurança de saber que você está fazendo o que precisa ser feito.</p>`, 
        topicos: [
            { i: "ph-hammer", t: "Foco total na execução", d: "Dia de trabalho duro, mas recompensador. Pegue aquela lista de tarefas e vá riscando uma a uma. Sua capacidade de concentrar e realizar está muito forte hoje. Vá direto ao ponto." },
            { i: "ph-list-checks", t: "Organize o seu dia", d: "Sem planejamento, a energia se perde. Tire uns minutos para organizar sua agenda e seu espaço de trabalho. A clareza visual ajuda a manter a sua mente focada no que realmente importa." },
            { i: "ph-scales", t: "Seja prático e realista", d: "Não se perca em sonhos mirabolantes hoje. Olhe para a realidade e veja o que é possível fazer com os recursos que você tem. O pé no chão é o que vai garantir que sua conquista seja sólida." },
            { i: "ph-wall", t: "Construa sua segurança", d: "Aproveite o dia para resolver questões burocráticas ou estruturais. É um ótimo momento para assentar as bases de um projeto que exige disciplina e atenção aos detalhes." }
        ] 
    },
    5: { 
        titulo: "Dia Pessoal 5", 
        subtitulo: "O dia de ser flexível e mudar", 
        texto: `<p>Prepare-se para um dia movimentado! A energia hoje pede adaptabilidade. É o momento de entender que nem tudo sai como a gente quer, e que mudar de ideia ou de rota pode ser o melhor caminho para o sucesso.</p>`, 
        topicos: [
            { i: "ph-arrows-left-right", t: "Adapte-se aos imprevistos", d: "Se o plano mudar, mude com ele. Hoje a flexibilidade é sua maior virtude. Não brigue com os acontecimentos; tente entender como você pode tirar proveito das novas situações que surgirem." },
            { i: "ph-eye", t: "Mude o seu ponto de vista", d: "Às vezes, a gente fica preso em uma ideia só. Hoje a vida te convida a olhar por outro ângulo. Perceba que o mundo é grande e que ouvir o desejo dos outros pode te ajudar a encontrar uma solução melhor." },
            { i: "ph-feather", t: "Abrace a responsabilidade com leveza", d: "Mesmo sendo um dia de mudanças, não fuja das suas obrigações. O desafio é unir o que você quer com o que o mundo precisa de você. Equilibre seus desejos com as suas entregas." },
            { i: "ph-airplane-tilt", t: "Saia da rotina", d: "Se puder, mude o caminho, experimente um almoço diferente ou troque a ordem das tarefas. Pequenas mudanças hoje renovam a sua energia e te dão uma nova perspectiva sobre a vida." }
        ] 
    },
    6: { 
        titulo: "Dia Pessoal 6", 
        subtitulo: "O coração em primeiro plano.", 
        texto: `<p>Hoje o dia pede calma e afeto. É o momento de olhar para os seus relacionamentos e para o seu lar. A vida quer que você seja o ponto de equilíbrio, agindo com amor e responsabilidade para manter a harmonia ao seu redor.</p>`, 
        topicos: [
            { i: "ph-house-line", t: "Priorize a família e os amigos", d: "Dedique um tempo do seu dia para estar com quem você ama. Pode ser um jantar, uma conversa rápida ou apenas um gesto de carinho. Esses laços são o que dão sustentação para todo o resto." },
            { i: "ph-chat-centered-text", t: "Ouça mais e fale menos", d: "A sabedoria de hoje está na escuta. Ao ouvir o outro com atenção, você entende o que ele realmente precisa. Isso evita discussões desnecessárias e cria um ambiente de confiança." },
            { i: "ph-flower-lotus", t: "Apresente suas ideias com suavidade", d: "Se precisar dar a sua opinião, faça isso sem imposição. Use argumentos tranquilos e demonstre o seu ponto de vista com clareza, mas sem alarde. A doçura convence muito mais do que o grito." },
            { i: "ph-sparkles", t: "Cuide do seu bem-estar", d: "Respire fundo e busque manter a calma em todas as situações. É um dia para cultivar a beleza e a serenidade, tanto dentro de casa quanto dentro de você. Seja o pacificador do dia." }
        ] 
    },
    7: { 
        titulo: "Dia Pessoal 7", 
        subtitulo: "Silêncio que traz respostas.", 
        texto: `<p>Hoje a energia pede que você dê um passo atrás para enxergar melhor. Não tente forçar a barra no mundo externo; a prioridade hoje é o seu mundo interno. É um dia excelente para estudar, planejar e ouvir o que a sua intuição está gritando.</p>`, 
        topicos: [
            { i: "ph-moon", t: "Busque momentos de solitude", d: "Ficar sozinho hoje não é solidão, é necessidade. Use esse tempo para organizar seus pensamentos e entender o que está acontecendo na sua vida. A clareza vem quando o ruído externo diminui." },
            { i: "ph-book-open-text", t: "Invista no conhecimento", d: "Excelente dia para ler um livro, fazer uma pesquisa ou se aprofundar em algum assunto que você gosta. Sua mente está faminta por aprendizado e sua capacidade de concentração está aguçada." },
            { i: "ph-brain", t: "Medite e reflita", d: "Tire alguns minutos para fechar os olhos e silenciar. A meditação ajuda a baixar a ansiedade e te conecta com a sua intuição. As respostas que você procura costumam aparecer nesses momentos de quietude." },
            { i: "ph-binoculars", t: "Observe antes de agir", d: "Não tenha pressa para tomar grandes decisões hoje. Prefira observar, analisar e processar as informações. Hoje o 'pensar' é muito mais importante do que o 'fazer' impulsivo." }
        ] 
    },
    8: { 
        titulo: "Dia Pessoal 8", 
        subtitulo: "O dia da eficiência e do poder", 
        texto: `<p>Hoje o papo é reto: resultado, dinheiro e poder. Deixe o drama de lado e foque nos fatos. É um dia de energia executiva, onde a vida te testa para ver se você sabe ser firme e justo. É o momento de assumir o comando e fazer a coisa acontecer.</p>`, 
        topicos: [
            { i: "ph-trend-up", t: "Foque nos seus grandes projetos", d: "Pegue o que é importante e faça acontecer. Hoje sua eficiência está no nível máximo. É o dia de lidar com questões de poder, liderar processos e mostrar o seu valor profissional." },
            { i: "ph-currency-circle-dollar", t: "Lide com o dinheiro com inteligência", d: "Dia excelente para iniciar negócios, negociar pagamentos ou planejar investimentos. Olhe para as suas finanças com objetividade e tome decisões baseadas na lógica e no lucro." },
            { i: "ph-balance", t: "Aja com justiça e integridade", d: "O poder do dia 8 exige responsabilidade. Seja justo em todas as suas trocas. Quando você age com ética, a energia do sucesso se torna duradoura e verdadeira. Faça o que é certo." },
            { i: "ph-crown", t: "Assuma o seu lugar", d: "Não tenha medo de brilhar ou de ocupar espaços de liderança. Hoje a vida favorece quem se posiciona com confiança. Mostre que você tem controle sobre a sua realidade material." }
        ] 
    },
    9: { 
        titulo: "Dia Pessoal 9", 
        subtitulo: "Limpeza geral e ponto final.", 
        texto: `<p>Hoje o dia é de encerramento. A energia não favorece começos, mas sim finalizações. É hora de fechar a porta, terminar o que está pendente e limpar o terreno. Se algo ou alguém sair da sua vida hoje, deixe ir; é livramento.</p>`, 
        topicos: [
            { i: "ph-hand-heart", t: "Pense no próximo primeiro", d: "Como você pode ajudar alguém hoje? Às vezes, um conselho ou um gesto simples de apoio faz toda a diferença. Colocar o interesse do outro à frente do seu hoje traz uma satisfação imensa." },
            { i: "ph-gift", t: "Pratique a doação", d: "Pode ser doar um objeto que você não usa, mas também pode ser doar o seu tempo ou o seu conhecimento. A generosidade limpa a alma e abre espaço para que coisas novas cheguem no futuro." },
            { i: "ph-users", t: "Dê e receba conselhos com carinho", d: "Hoje as trocas de sabedoria estão favorecidas. Falar em público ou orientar alguém é muito positivo. Da mesma forma, esteja aberto para ouvir o que as pessoas mais experientes têm a te dizer." },
            { i: "ph-door-open", t: "Não comece nada novo hoje", d: "O dia 9 é para terminar, não para começar. Use hoje para concluir tarefas, organizar gavetas e encerrar conversas pendentes. Deixe os novos inícios para quando a energia estiver no 1." }
        ] 
    },
    11: { 
        titulo: "Dia Pessoal 11", 
        subtitulo: "Conexão direta com o alto.", 
        texto: `<p>Prepare-se, porque hoje você está ligado no 220v! Sua sensibilidade está no nível máximo e você vai sentir as coisas antes mesmo delas acontecerem. É um dia de inspiração pura, onde suas palavras podem mudar a vida de alguém.</p>`, 
        topicos: [
            { i: "ph-lightning", t: "Ouça a sua voz interior", d: "Fique atento aos seus pressentimentos e insights. Aquela ideia que surge do nada hoje pode ser a resposta que você tanto buscava. Confie na sua intuição, ela está muito bem ajustada agora." },
            { i: "ph-lamp", t: "Seja um exemplo para os outros", d: "Sua postura hoje inspira as pessoas. Sem precisar mandar, você lidera pelo exemplo. Mostre como agir com integridade e sabedoria; os outros vão naturalmente seguir o seu rastro." },
            { i: "ph-hands-praying", t: "Mantenha a humildade", d: "Mesmo sentindo essa energia poderosa, mantenha os pés no chão. Use o seu poder para elevar o ambiente e as pessoas, nunca para se sentir superior. A verdadeira força do 11 vem da simplicidade." },
            { i: "ph-magnifying-glass-plus", t: "Busque grandes respostas", d: "Se houver algo complexo para resolver, use a energia de hoje para encontrar uma saída criativa e elevada. É um dia para pensar grande e buscar soluções que tragam paz e progresso para todos." }
        ] 
    },
    22: { 
        titulo: "Dia Pessoal 22", 
        subtitulo: "O dia de construir o impossível.", 
        texto: `<p>Se você tinha um sonho grande, hoje é o dia de colocar o primeiro tijolo. A energia combina uma visão de futuro incrível com uma capacidade de trabalho fora do comum. Não é dia para pensar pequeno; é dia para realizar o que parece difícil.</p>`, 
        topicos: [
            { i: "ph-bridge", t: "Pratique o bem de forma concreta", d: "Não fique só no pensamento; hoje é dia de ação. Veja como o seu trabalho ou as suas atitudes podem melhorar a vida das pessoas. Servir ao próximo hoje traz um retorno energético muito forte." },
            { i: "ph-gavel", t: "Mestre da justiça", d: "Em todas as suas decisões, busque o que é justo para todos os envolvidos. Sua capacidade de equilibrar interesses e agir com ética está no ápice. Seja a voz da razão e da integridade." },
            { i: "ph-globe-hemisphere-east", t: "Aproveite a potência do dia", d: "Sinta a força que o dia te oferece. É um momento superpoderoso para realizar tarefas difíceis e projetos grandes. Não desperdice esse fôlego com coisas pequenas ou fofocas; foque no que é grandioso." },
            { i: "ph-chat-circle-dots", t: "Ouça as pessoas com atenção", d: "Esteja disponível para ouvir o que o mundo está pedindo. Muitas vezes, a grande realização do dia começa com uma escuta atenta a uma necessidade real. Transforme o que você ouve em solução e ajuda." }
        ] 
    }
};

/* ==========================================================================
   5. OUTROS DADOS COMPLEMENTARES
   ========================================================================== */

const ConteudoIdentidade = {
    1: { quem: "Líder Natural", textoQuem: `<p>Você traz na alma a marca da liderança e da originalidade. Sabe aquela sensação de que você não nasceu para seguir a boiada? Isso é a sua essência pulsando.</p><p>Existe uma força interna que te empurra para a autonomia. Muitas vezes, essa natureza pioneira pode ter te feito sentir um "estranho no ninho", mas isso é apenas o seu chamado para abrir caminhos.</p>`, padrao: "Ação Imediata", textoPadrao: `<p>O seu "piloto automático" é a ação imediata. Diante de um desafio, você é sempre quem se levanta primeiro. Existe uma pressa natural em você.</p><p>É muito comum que você tome a frente e diga "deixa que eu faço". Esse comportamento proativo é o seu grande motor, mas cuidado para não acabar carregando o mundo nas costas.</p>`, percepcao: "Autossuficiente", textoPercepcao: `<p>Para quem te olha de fora, a imagem que fica é de força e autoconfiança inabaláveis. Você transmite segurança, como alguém que sabe exatamente o que quer.</p><p>As pessoas tendem a te respeitar. O lado curioso é que, por parecer tão forte, muitos assumem que você não precisa de ajuda ou de colo.</p>` },
    2: { quem: "Diplomata", textoQuem: `<p>Você traz na alma o dom da união e da sensibilidade. Sabe aquela capacidade de sentir o ambiente assim que entra na sala? Isso é a sua essência.</p><p>Sua natureza não busca o holofote solitário, mas sim a harmonia da convivência. Você veio para somar, para ser a "ponte". Para você, a vida só faz sentido quando compartilhada.</p>`, padrao: "Mediação", textoPadrao: `<p>O seu instinto natural é conciliar. Diante de um conflito, sua reação automática é tentar acalmar os ânimos. Você prefere engolir um sapo a criar uma guerra.</p><p>Seu olhar é atento aos detalhes e às entrelinhas. É comum que você atue nos bastidores para garantir que o ambiente permaneça tranquilo.</p>`, percepcao: "Acolhedor", textoPercepcao: `<p>Para quem te olha de fora, a imagem que fica é de acolhimento e gentileza. Você transmite uma aura de calma que faz as pessoas se sentirem à vontade.</p><p>Você é visto como o "porto seguro". O lado curioso é que muitos podem subestimar sua força ou achar que você é indeciso, sem perceber que sua "demora" é cautela.</p>` },
    3: { quem: "Comunicador", textoQuem: `<p>Você traz na alma o brilho da comunicação e da criatividade. Sabe aquela necessidade quase física de colocar para fora o que você sente? Isso é a sua essência.</p><p>O silêncio prolongado te sufoca; você veio para colorir a vida. Existe em você uma criança interior que nunca envelhece, buscando sempre o lado leve e alegre.</p>`, padrao: "Otimismo", textoPadrao: `<p>O seu instinto natural é a interação. Diante de qualquer situação, sua primeira reação é procurar alguém para comentar. Sua mente é um turbilhão de ideias.</p><p>É comum usar o humor como escudo. Esse fluxo criativo intenso às vezes te faz começar várias coisas e ter dificuldade de terminar.</p>`, percepcao: "Magnético", textoPercepcao: `<p>Para quem te olha de fora, a imagem que fica é de puro magnetismo. Você é visto como a "alma da festa", que ilumina o ambiente.</p><p>As pessoas sentem que você é acessível. O lado curioso é que muitos podem achar que sua vida é perfeita e sem problemas, pois você está sempre sorrindo.</p>` },
    4: { quem: "Construtor", textoQuem: `<p>Você traz na alma a marca da estabilidade e da estrutura. Sabe aquela necessidade profunda de sentir o chão firme sob os pés? Isso é a sua essência.</p><p>Você não veio para se aventurar no escuro; veio para construir, tijolo por tijolo. Existe em você uma lealdade inabalável e uma busca por ordem.</p>`, padrao: "Sistematização", textoPadrao: `<p>O seu instinto natural é a organização. Diante de uma tarefa, você não busca o atalho; você busca o caminho certo. Sua reação automática é planejar.</p><p>Você tem pouca paciência para preguiça. É comum que assuma as tarefas mais pesadas porque confia mais na sua disciplina do que na dos outros.</p>`, percepcao: "Confiável", textoPercepcao: `<p>Para quem te olha de fora, a imagem que fica é de solidez e confiança absoluta. Você é visto como a "rocha", aquela pessoa em quem se pode confiar.</p><p>As pessoas sentem que você cumpre o que promete. O lado curioso é que muitos podem te achar exigente demais ou "fechado".</p>` },
    5: { quem: "Livre", textoQuem: `<p>Você traz na alma a marca da liberdade e da transformation. Sabe aquela inquietação, aquela sensação de que o mundo é grande demais para ficar parado? Isso é a sua essência.</p><p>A rotina rígida te sufoca. Você veio para experimentar. Muitas vezes, você pode ter se sentido "instável", mas isso é apenas seu espírito aventureiro.</p>`, padrao: "Adaptação", textoPadrao: `<p>O seu instinto natural é a busca pela novidade. Diante do tédio, sua reação automática é mudar. Você tem um jogo de cintura invejável.</p><p>É comum que você seja atraído por riscos. Essa agilidade mental faz de você um camaleão, mas também pode te levar a largar projetos pela metade.</p>`, percepcao: "Versátil", textoPercepcao: `<p>Para quem te olha de fora, a imagem que fica é de magnetismo e ousadia. Você é visto como alguém vibrante e cheio de histórias.</p><p>Você transmite uma energia de vida. O lado curioso é que muitos podem te achar rebelde ou difícil de "segurar".</p>` },
    6: { quem: "Cuidador", textoQuem: `<p>Você traz na alma o dom do cuidado e da harmonia. Sabe aquela necessidade quase incontrolável de proteger quem você ama? Isso é a sua essência.</p><p>Você veio para criar laços e embelezar a vida. Existe em você um senso de responsabilidade afetiva muito grande, como se fosse sua missão "consertar" o que está quebrado.</p>`, padrao: "Proteção", textoPadrao: `<p>O seu instinto natural é o de acolher. Diante de um problema alheio, sua reação automática é estender a mão. Você é o "conselheiro oficial".</p><p>Tem um olhar perfeccionista para o ambiente. É comum que você se doe tanto que acaba esquecendo de si mesmo.</p>`, percepcao: "Zeloso", textoPercepcao: `<p>Para quem te olha de fora, a imagem que fica é de uma figura paternal ou maternal. Você é visto como o "pilar" que transmite sensação de lar.</p><p>As pessoas sentem que podem contar com você. O lado curioso é que alguns podem te achar um pouco controlador, reflexo do quanto você se importa.</p>` },
    7: { quem: "Analista", textoQuem: `<p>Você traz na alma a marca da sabedoria e da busca pela verdade. Sabe aquela sensação de que o mundo faz muito barulho e você precisa de silêncio? Isso é a sua essência.</p><p>Você não se contenta com o raso; precisa mergulhar fundo no "porquê" das coisas. Não tem paciência para futilidades.</p>`, padrao: "Introspecção", textoPadrao: `<p>O seu instinto natural é a observação. Diante de qualquer informação nova, sua reação automática é questionar. Você tem um "filtro de qualidade" rigoroso.</p><p>É muito comum que você se isole no seu próprio mundo para recarregar. Esse perfeccionismo faz com que você seja excelente.</p>`, percepcao: "Misterioso", textoPercepcao: `<p>Para quem te olha de fora, a imagem que fica é de mistério e inteligência refinada. Você é visto como um "livro fechado".</p><p>As pessoas sentem respeito. O lado curioso é que alguns podem te achar frio ou arrogante, sem perceber que é apenas proteção do seu mundo interior.</p>` },
    8: { quem: "Realizador", textoQuem: `<p>Você traz na alma a marca do poder e da realização material. Sabe aquela ambição natural de construir algo grande? Isso é a sua essência.</p><p>Você não veio para brincar; veio para gerenciar. Existe em você um senso de justiça forte. Sentir-se produtivo é fundamental para sua paz.</p>`, padrao: "Comando", textoPadrao: `<p>O seu instinto natural é a eficiência. Diante de um problema, você foca na solução prática. Sua reação automática é assumir o comando.</p><p>Você tem um "faro" para negócios. É comum que seja exigente, pois não tolera incompetência. Essa postura resolve questões complexas.</p>`, percepcao: "Autoridade", textoPercepcao: `<p>Para quem te olha de fora, a imagem que fica é de autoridade e solidez. Você é visto como alguém "poderoso" e bem-sucedido.</p><p>As pessoas enxergam em você um líder nato. O lado curioso é que muitos podem se sentir intimidados pela sua postura imponente.</p>` },
    9: { quem: "Humanitário", textoQuem: `<p>Você traz na alma a marca da compaixão e da sabedoria universal. Sabe aquela sensação de ser uma "alma antiga"? Isso é a sua essência.</p><p>O seu olhar é panorâmico. Existe em você um desejo genuíno de deixar o mundo melhor. Muitas vezes, você absorve a carga emocional do ambiente.</p>`, padrao: "Doação", textoPadrao: `<p>O seu instinto natural é a doação. Diante de um pedido de socorro, sua reação automática é estender a mão. Você tem dificuldade em dizer "não".</p><p>É comum que as pessoas te procurem. Esse comportamento altruísta é nobre, mas às vezes te envolve em dramas que não são seus.</p>`, percepcao: "Generoso", textoPercepcao: `<p>Para quem te olha de fora, a imagem que fica é de generosidade e magnetismo. Você é visto como alguém de coração gigante e sofisticado.</p><p>As pessoas sentem que você aceita as diferenças. O lado curioso é que você pode parecer "distante" na intimidade por se doar para tanta gente.</p>` },
    11: { quem: "Visionário", textoQuem: `<p>Você traz na alma a marca da inspiração. Sabe aquela sensação de ser uma "antena" humana? Isso é a sua essência.</p><p>Você veio para trazer luz e enxergar além. Existe em você um idealismo forte. Muitas vezes, essa sensibilidade te faz sentir "diferente" ou cobrado por uma missão.</p>`, padrao: "Intuição", textoPadrao: `<p>O seu instinto natural é guiar-se pelo "sexto sentido". Diante de uma decisão, sua reação vem de um aviso interno. Você funciona em alta voltagem.</p><p>É comum oscilar entre momentos de liderança inspiradora e tensão. Você lidera pelo exemplo e pela energia.</p>`, percepcao: "Inspirador", textoPercepcao: `<p>Para quem te olha de fora, a imagem que fica é de magnetismo e mistério. Você é visto como alguém "elétrico" e sábio.</p><p>O lado curioso é que, por essa intensidade, muitos podem te achar um pouco "aéreo" ou difícil de acompanhar.</p>` },
    22: { quem: "Mestre", textoQuem: `<p>Você traz na alma a marca do mestre construtor. Sabe aquela certeza de que tem capacidade para realizar o impossível? Isso é a sua essência.</p><p>Você une a visão do sonhador com a mão na massa. Veio para materializar ideias em grande escala que beneficiem a comunidade.</p>`, padrao: "Estratégia", textoPadrao: `<p>O seu instinto natural é estruturar. Diante de um projeto difícil, sua reação é criar um plano viável. Você tem uma capacidade de trabalho fora do comum.</p><p>É comum assumir responsabilidades gigantescas. Você vive de resultados práticos. Cuidado para não virar um "trator".</p>`, percepcao: "Poderoso", textoPercepcao: `<p>Para quem te olha de fora, a imagem que fica é de competência sobre-humana. Você é visto como uma potência que faz acontecer.</p><p>O lado curioso é que muitos esquecem que você também é humano e raramente te oferecem ajuda, achando que você já tem tudo sob controle.</p>` }
};

const DadosCores = {
    1: { hex: ["#FFD700", "#FFFF00", "#FFA500", "#CD7F32"], texto: "<p>As cores que melhor se harmonizam com as vibrações do seu Dia de Nascimento, são todas as tonalidades de dourado, amarelo, laranja, bronze e marrom dourado.</p>" },
    2: { hex: ["#90EE90", "#006400", "#FFFDD0", "#FFFFFF"], texto: "<p>As cores que melhor se harmonizam com as vibrações do seu Dia de Nascimento, são as tonalidades de verde, do mais claro ao mais escuro; creme e branco. Você deve evitar cores escuras, especialmente o preto, cores púrpuras e o vermelho escuro.</p>" },
    3: { hex: ["#E0B0FF", "#8A2BE2", "#800080", "#FFC0CB"], texto: "<p>As cores que melhor se harmonizam com as vibrações do seu Dia de Nascimento, são as tonalidades de malva, violeta, púrpura; quaisquer toques dessas cores sempre devem estar em ambientes, como quarto, local de trabalho etc. Todos os tons de azul, carmesim e rosa são favoráveis também como cores secundárias.</p>" },
    4: { hex: ["#0000FF", "#808080", "#4B0082", "#FFD700"], texto: "<p>As cores que melhor se harmonizam com as vibrações do seu Dia de Nascimento, são os tons de azul, cinza, púrpura e ouro.</p>" },
    5: { hex: ["#D3D3D3", "#FFFFFF", "#E0FFFF", "#F5F5DC"], texto: "<p>As cores que melhor se harmonizam com as vibrações do seu Dia de Nascimento, são todas as tonalidades de cinza claro, branco e cores brilhantes, mas sempre em tons claros.</p>" },
    6: { hex: ["#87CEEB", "#00008B", "#FFB6C1", "#FF69B4"], texto: "<p>As cores que melhor se harmonizam com as vibrações do seu Dia de Nascimento, são todas as tonalidades de azul, da mais clara a mais escura; também todas as tonalidades de rosa. Cores escuras são desfavoráveis e você deve evitar tanto quanto possível.</p>" },
    7: { hex: ["#32CD32", "#98FB98", "#FFFFFF", "#FFFF00"], texto: "<p>As cores que melhor se harmonizam com as vibrações do seu Dia de Nascimento, são todos os tons de verde, cores claras, branco, amarelo. Evite cores escuras.</p>" },
    8: { hex: ["#A9A9A9", "#000080", "#483D8B", "#2F4F4F"], texto: "<p>As cores que melhor se harmonizam com as vibrações do seu Dia de Nascimento, são todos os tons de cinza escuro, azul escuro e tonalidades de púrpura. Cores claras parecem deixar você deselegante.</p>" },
    9: { hex: ["#DC143C", "#FF0000", "#FF1493", "#FFC0CB"], texto: "<p>As cores que melhor se harmonizam com as vibrações do seu Dia de Nascimento, são todas as tonalidades de carmesim ou vermelho; também qualquer tom de rosa.</p>" }
};

const TextosAmor = {
    voce: {
        1: "Em um relacionamento, você naturalmente <strong>assume a dianteira</strong>. Não porque queira dominar, mas porque tem iniciativa, visão e impulso para resolver as coisas.<br><br>Você ama protegendo, decidindo, conduzindo. O desafio surge quando o outro não acompanha seu ritmo ou questiona suas decisões. Nessas horas, você pode se fechar emocionalmente ou reagir com rigidez.<br><br>Muitas vezes sente dificuldade em <strong>demonstrar fragilidade</strong>, como se isso fosse sinal de fraqueza. Seu aprendizado no amor é compreender que parceria não diminui sua força e que <strong>dividir o controle</strong> também é uma forma de amar.",

        2: "Você se relaciona <strong>sentindo profundamente</strong>. Capta o clima, as emoções e as necessidades do outro com facilidade. No amor, tende a ceder, adaptar-se e buscar harmonia, mesmo quando isso custa o silêncio sobre o que você sente.<br><br>Com o tempo, pode surgir a sensação de não ser visto ou valorizado. O grande desafio é perceber que <strong>amar não é se anular</strong> e que suas necessidades também importam.<br><br>Relações saudáveis não exigem que você desapareça para que o outro permaneça.",

        3: "Você vive o relacionamento com <strong>leveza, comunicação e presença</strong>. Encanta com palavras, gestos e bom humor. Gosta de trocar, conversar, rir e compartilhar momentos.<br><br>O desafio aparece quando a relação exige profundidade emocional, conversas difíceis ou enfrentamento de conflitos. Nessas situações, você tende a minimizar, evitar ou desviar o assunto.<br><br>Seu aprendizado é entender que <strong>maturidade emocional</strong> não rouba sua alegria, apenas dá mais consistência aos vínculos que você constrói.",

        4: "No amor, você é <strong>constante, leal e comprometido</strong>. Quando se envolve, é para construir algo sólido e duradouro. Demonstra afeto através de atitudes, responsabilidade e presença.<br><br>O desafio é que você sente muito, mas <strong>expressa pouco</strong>. Muitas vezes acredita que o outro deveria perceber seu esforço sem que você precise dizer. Quando isso não acontece, surge frustração e rigidez.<br><br>Seu aprendizado é compreender que sentimentos também precisam ser <strong>verbalizados</strong> para criar conexão emocional.",

        5: "Você se relaciona com <strong>intensidade, curiosidade e desejo de movimento</strong>. Precisa sentir que a relação está viva, em crescimento e cheia de estímulos. Relações muito previsíveis podem gerar inquietação.<br><br>O desafio é que, quando se sente limitado ou cobrado, você tende a se afastar ou mudar de direção. O outro pode sentir insegurança.<br><br>Seu aprendizado é entender que <strong>liberdade e compromisso</strong> não são opostos, desde que exista verdade e responsabilidade emocional.",

        6: "Você ama <strong>cuidando, protegendo e se envolvendo profundamente</strong>. Em um relacionamento, costuma assumir responsabilidades emocionais e criar vínculos fortes.<br><br>O desafio surge quando você começa a esperar que o outro retribua na mesma intensidade. Quando isso não acontece, pode surgir cobrança, frustração ou sensação de não ser reconhecido.<br><br>Seu aprendizado é compreender que amar não é controlar nem <strong>medir o amor do outro</strong> pela sua própria régua.",

        7: "Você é <strong>seletivo ao se relacionar</strong>. Não se entrega facilmente, mas quando ama, sente de forma profunda e verdadeira.<br><br>O desafio é que você vive muito no mundo interno. Analisa, reflete e sente em silêncio. Para o outro, isso pode parecer distância emocional.<br><br>Seu aprendizado é perceber que <strong>intimidade também exige compartilhamento</strong>, presença e expressão dos sentimentos, não apenas profundidade interior.",

        8: "Você se envolve com <strong>seriedade e foco em construção</strong>. Gosta de relações que tragam crescimento, segurança e objetivos em comum.<br><br>O desafio é que você tende a priorizar resultados, controle e estabilidade, deixando as demonstrações emocionais em segundo plano. O outro pode sentir falta de afeto explícito.<br><br>Seu aprendizado é lembrar que amor também é <strong>sensibilidade, vulnerabilidade e cuidado emocional</strong>, não apenas estrutura e força.",

        9: "Você ama de forma <strong>ampla, generosa e intensa</strong>. Costuma enxergar o melhor no outro e acredita que o amor pode transformar tudo.<br><br>O desafio é que você se doa além do limite, aceita mais do que deveria e demora a encerrar relações que já não fazem bem.<br><br>Seu aprendizado é entender que amar não é se sacrificar e que <strong>colocar limites</strong> também é um ato de amor próprio.",

        11: "Você busca <strong>conexões profundas e significativas</strong>. Relações superficiais não te satisfazem. Você sente tudo com intensidade e percebe o que muitas pessoas não veem.<br><br>O desafio é a idealização: criar expectativas elevadas e sofrer quando a realidade não corresponde. Oscila emocionalmente com facilidade.<br><br>Seu aprendizado é equilibrar sensibilidade com <strong>estabilidade emocional</strong> e presença no agora.",

        22: "Você encara o relacionamento como um <strong>projeto importante da vida</strong>. Quer construir algo sólido, duradouro e significativo.<br><br>O desafio é que você pode carregar peso demais para a relação, trazendo cobranças excessivas e pouca leveza. O amor pode virar obrigação.<br><br>Seu aprendizado é lembrar que vínculos também precisam de <strong>espontaneidade, afeto e prazer</strong> no presente, não apenas planos futuros."
    },
    ele: {
        1: "A pessoa que você está se relacionando é alguém que tende a <strong>assumir a liderança</strong> naturalmente. Costuma demonstrar amor através de atitudes, decisões e proteção. Prefere resolver do que falar, agir do que explicar.<br><br>Possui uma necessidade profunda de se sentir respeitada e admirada. Quando se sente contrariada ou desvalorizada, pode se fechar emocionalmente ou reagir com rigidez.<br><br>O desafio dessa pessoa no relacionamento é aprender a <strong>dividir o controle</strong> e permitir que a parceria seja um espaço de troca, não de disputa.",

        2: "A pessoa que você está se relacionando é <strong>extremamente sensível e perceptiva</strong>. Costuma sentir o ambiente, suas emoções e até aquilo que você não verbaliza. Tende a ceder, adaptar-se e buscar harmonia, mesmo quando isso significa silenciar o que sente.<br><br>Possui um grande coração, mas pode se magoar em silêncio. O desafio dessa pessoa é aprender a <strong>se posicionar emocionalmente</strong> sem medo de perder o vínculo.",

        3: "A pessoa que você está se relacionando é <strong>comunicativa, envolvente e expressiva</strong>. Costuma demonstrar amor com palavras, gestos, humor e presença. Tende a buscar leveza e troca constante no relacionamento.<br><br>Porém, pode evitar conflitos mais profundos ou conversas difíceis. O desafio dessa pessoa é compreender que <strong>maturidade emocional</strong> não diminui sua alegria, apenas fortalece a relação.",

        4: "A pessoa que você está se relacionando é <strong>leal, constante e comprometida</strong>. Costuma demonstrar amor através de responsabilidade, presença e estabilidade. Valoriza segurança e construção a longo prazo.<br><br>No entanto, tende a expressar pouco o que sente, acreditando que atitudes falam por si. O desafio dessa pessoa é aprender a <strong>verbalizar emoções</strong> para que o outro se sinta incluído afetivamente.",

        5: "A pessoa que você está se relacionando é <strong>inquieta, intensa e movida pela liberdade</strong>. Costuma amar com paixão, curiosidade e desejo de novidade. Precisa sentir movimento dentro da relação.<br><br>Pode se afastar quando se sente presa ou excessivamente cobrada. O desafio dessa pessoa é aprender que <strong>compromisso não precisa significar perda de liberdade</strong>, desde que exista verdade e espaço individual.",

        6: "A pessoa que você está se relacionando tende a <strong>amar cuidando e se envolvendo profundamente</strong>. Costuma assumir responsabilidades emocionais e proteger quem ama. Possui um forte senso de vínculo e pertencimento.<br><br>O desafio surge quando passa a esperar do outro a mesma intensidade de entrega, podendo gerar cobranças. Essa pessoa precisa aprender a <strong>amar sem controlar</strong> e sem medir o afeto recebido.",

        7: "A pessoa que você está se relacionando é <strong>reservada, profunda e seletiva</strong>. Costuma observar mais do que falar e sente intensamente no mundo interno. Pode parecer distante emocionalmente, mesmo quando está envolvida.<br><br>O desafio dessa pessoa é aprender a <strong>compartilhar sentimentos</strong> e confiar que a vulnerabilidade aproxima, em vez de afastar.",

        8: "A pessoa que você está se relacionando é focada em <strong>construção, segurança e resultados</strong>. Costuma demonstrar amor oferecendo estrutura, proteção e estabilidade. Leva a relação a sério e pensa no futuro.<br><br>O desafio é que pode priorizar controle e responsabilidades, deixando as demonstrações emocionais em segundo plano. Essa pessoa precisa aprender a <strong>expressar afeto</strong> de forma mais sensível e presente.",

        9: "A pessoa que você está se relacionando ama de forma <strong>ampla, generosa e intensa</strong>. Costuma enxergar o melhor no outro e acredita no amor como força transformadora. Pode se doar além do limite e ter dificuldade em encerrar relações que já não fazem bem.<br><br>O desafio dessa pessoa é aprender a <strong>colocar limites</strong> e entender que amor não é sacrifício constante.",

        11: "A pessoa que você está se relacionando é <strong>altamente sensível, intuitiva e emocionalmente intensa</strong>. Costuma buscar conexões profundas e significativas. Pode idealizar o relacionamento e sofrer quando a realidade não corresponde às expectativas.<br><br>O desafio dessa pessoa é encontrar <strong>equilíbrio emocional</strong> e aprender a viver o amor com mais aterramento e menos ansiedade.",

        22: "A pessoa que você está se relacionando tende a enxergar o relacionamento como um <strong>projeto de vida</strong>. Costuma ser responsável, comprometida e focada em construir algo duradouro. Pode trazer peso excessivo para a relação, esquecendo da leveza e do romance.<br><br>O desafio dessa pessoa é aprender a <strong>viver o amor no presente</strong>, sem transformar o vínculo apenas em obrigação."
    },
	
    desafio: {
        1: "O principal desafio entre vocês é a <strong>disputa de poder</strong>. Esta relação tende a atrair situações onde ambos querem decidir, conduzir ou provar força.<br><br>Se não houver consciência, surgem conflitos de ego, teimosia e dificuldade em ceder. Outro desafio é a <strong>impaciência</strong>: vocês querem resultados rápidos e podem se frustrar quando o outro não acompanha o ritmo.<br><br>O aprendizado desta união é entender que <strong>liderança compartilhada</strong> é diferente de competição, e que ceder não é perder espaço, é fortalecer o vínculo.",

        2: "O maior desafio entre você e essa pessoa é o <strong>silêncio emocional</strong>. Para evitar conflitos, um ou ambos podem engolir sentimentos, criando mágoas que se acumulam com o tempo.<br><br>Existe também o risco de <strong>dependência emocional</strong>, onde um passa a viver mais a vida do outro do que a própria. Esta relação pede maturidade, coragem para falar o que sente e limites claros.<br><br>Quando o diálogo não acontece, a relação enfraquece aos poucos, mesmo com a presença do amor.",

        3: "O desafio desta relação é não fugir da <strong>profundidade</strong>. Vocês podem se dar muito bem no dia a dia e manter a leveza, mas tendem a evitar conversas difíceis e responsabilidades emocionais.<br><br>Quando surgem problemas, há uma tendência a minimizar, adiar ou tratar tudo como brincadeira. O aprendizado é entender que <strong>maturidade emocional</strong> não destrói a alegria.<br><br>Enfrentar o que é sério impede que a relação se torne <strong>superficial e instável</strong>.",

        4: "O grande desafio entre vocês é o <strong>excesso de rigidez</strong>. A relação pode se tornar pesada, previsível ou baseada apenas em deveres e regras.<br><br>O silêncio emocional e a dificuldade em demonstrar sentimentos podem esfriar o vínculo. Esta união pede aprendizado na <strong>expressão emocional e flexibilidade</strong>.<br><br>Segurança é importante, mas quando tudo vira obrigação, o amor perde espaço. O <strong>afeto</strong> precisa ser cultivado conscientemente.",

        5: "O desafio central desta relação é a <strong>instabilidade</strong>. Existe um desejo latente de liberdade e novidade, mas isso pode gerar insegurança se não houver acordos claros.<br><br>Um pode sentir que o outro se afasta ou muda de direção com muita facilidade. O aprendizado desta união é <strong>construir confiança</strong> e estabelecer combinados sólidos.<br><br>Compreender que <strong>liberdade com responsabilidade</strong> é o que realmente sustenta este vínculo.",

        6: "O maior desafio entre vocês é o <strong>excesso de envolvimento emocional</strong>. O cuidado pode virar cobrança, o amor pode virar controle e a proteção pode acabar sufocando o parceiro.<br><br>Existe o risco de um assumir responsabilidades emocionais que não são suas. Esta relação pede um equilíbrio real entre <strong>amar e respeitar a individualidade</strong>.<br><br>Quando um carrega demais o outro, o vínculo se desgasta. O segredo é o <strong>apoio sem invasão</strong>.",

        7: "O desafio desta união é o <strong>distanciamento emocional</strong>. Vocês podem se conectar profundamente, mas de forma silenciosa e introspectiva.<br><br>A dificuldade em expressar sentimentos ou demonstrar vulnerabilidade pode criar uma sensação de <strong>solidão a dois</strong>. Esta união pede abertura emocional consciente.<br><br>Lembrem-se que <strong>profundidade sem troca</strong> gera afastamento, enquanto o compartilhamento gera conexão real.",

        8: "O principal desafio entre vocês é transformar o relacionamento apenas em um <strong>projeto de vida</strong>. Trabalho, metas e responsabilidades podem acabar ocupando o lugar do afeto.<br><br>Existe também o risco de <strong>disputa por autoridade</strong>. Esta relação pede aprendizado no equilíbrio entre força e sensibilidade.<br><br>Sem afeto, a relação se torna fria; sem parceria real, ela acaba virando uma <strong>competição de resultados</strong>.",

        9: "O grande desafio desta relação é o <strong>sacrifício excessivo</strong>. Um ou ambos podem se doar demais, aceitar situações que machucam e ter dificuldade em colocar limites claros.<br><br>Existe uma tendência a carregar dores que não pertencem à relação atual. Esta união pede a consciência de que <strong>amar não é salvar o outro</strong>.<br><br>Quando não há limites estabelecidos, o amor acaba se transformando em <strong>desgaste emocional</strong>."
    },
    forte: {
        1: "Quando eu olho para você e para a pessoa com quem você se relaciona, o que aparece é uma relação que veio para <strong>abrir caminhos</strong>. Juntos, vocês formam um casal <strong>forte, decidido e com muita iniciativa</strong>.<br><br>Esta união não nasceu para ser conduzida por terceiros nem para viver no piloto automático. Existe uma necessidade clara de <strong>construir algo próprio</strong>, com identidade e direção.<br><br>O desafio surge quando ambos querem liderar ao mesmo tempo. O crescimento acontece quando vocês entendem que não precisam competir, mas <strong>unir forças</strong> para caminhar na mesma direção.",

        2: "O que eu vejo entre vocês é uma relação que precisa de <strong>conexão emocional</strong> para funcionar bem. Existe <strong>sensibilidade, cuidado</strong> e uma forte necessidade de parceria real.<br><br>Vocês tendem a se perceber emocionalmente, mas também podem evitar conflitos para manter a harmonia. O problema é que o silêncio emocional cria distância.<br><br>Esta união amadurece quando vocês aprendem a <strong>falar sobre sentimentos</strong> antes que eles se transformem em mágoa. O amor cresce no <strong>acolhimento e no equilíbrio</strong> entre dar e receber.",

        3: "Entre você e a pessoa com quem se relaciona, existe uma energia <strong>leve, comunicativa e viva</strong>. Vocês se conectam pela conversa, pelo <strong>humor e pela troca constante</strong>. A relação tende a ser alegre e estimulante.<br><br>O desafio aparece quando sentimentos mais profundos são evitados. Esta união cresce quando vocês entendem que conversar não é apenas rir juntos, mas também falar sobre <strong>inseguranças e necessidades emocionais</strong>.<br><br>Quando isso acontece, a relação ganha <strong>profundidade sem perder a leveza</strong>.",

        4: "O que une vocês é uma energia de <strong>construção e compromisso</strong>. Esta relação tem potencial para ser <strong>sólida, duradoura e resistente</strong> às dificuldades da vida. Existe muita responsabilidade entre vocês.<br><br>O risco está em transformar o relacionamento em rotina ou silêncio emocional. Esta união amadurece quando vocês aprendem a <strong>equilibrar estabilidade com demonstração de afeto</strong>.<br><br>Segurança é importante, mas o amor precisa ser <strong>sentido e expressado</strong> para não esfriar.",

        5: "Vejo uma relação que <strong>precisa de movimento</strong> para se manter viva. Existe <strong>intensidade, curiosidade</strong> e um desejo mútuo de experimentar a vida. Vocês não funcionam bem em modelos engessados.<br><br>O desafio surge quando falta diálogo, gerando instabilidade. Esta união amadurece quando vocês entendem que liberdade não significa ausência de compromisso, mas sim <strong>escolha consciente</strong>.<br><br>Com <strong>confiança e espaço individual</strong> respeitado, a relação se torna inabalável.",

        6: "Existe entre vocês uma energia forte de <strong>vínculo, cuidado e envolvimento emocional</strong>. Esta relação tende a ser <strong>profunda e afetiva</strong>, focada no bem-estar mútuo.<br><br>O desafio aparece quando o cuidado se transforma em cobrança ou excesso de responsabilidade emocional. Esta união amadurece quando vocês aprendem a <strong>amar sem sufocar</strong> e a cuidar sem carregar o outro.<br><br>Quando equilibrada, é uma relação <strong>acolhedora e extremamente estável</strong>.",

        7: "O que existe entre vocês é uma <strong>conexão profunda</strong>, muitas vezes silenciosa. A relação acontece em níveis internos, mentais e espirituais. Vocês precisam de <strong>espaço e tempo</strong> para processar sentimentos.<br><br>O desafio é não transformar essa profundidade em distanciamento. Esta união amadurece quando vocês aprendem a <strong>compartilhar o que sentem</strong>, não apenas o que pensam.<br><br>A <strong>confiança e a presença emocional</strong> são o que realmente sustentam este vínculo.",

        8: "Vejo uma união voltada para o <strong>crescimento, segurança e realização</strong>. Existe força, ambição e um desejo real de <strong>construir algo concreto</strong> juntos.<br><br>O desafio é não transformar o relacionamento apenas em um projeto ou administração de vida. Esta união amadurece quando vocês aprendem a <strong>equilibrar objetivos com afeto</strong>.<br><br>O amor precisa ser <strong>vivido com sensibilidade</strong>, não apenas gerenciado com eficiência.",

        9: "Entre vocês existe uma energia de <strong>empatia, compreensão e amor amplo</strong>. A relação tende a ser generosa e cheia de significado para ambos.<br><br>O desafio surge quando um se sacrifica demais, esquecendo dos próprios limites. Esta união amadurece quando vocês entendem que amar não é salvar o outro, mas <strong>caminhar juntos com consciência</strong>.<br><br>O equilíbrio entre <strong>compaixão e amor-próprio</strong> torna esta relação transformadora."
    }
};

const TextosJornada = {
    ciclo: {
        titulo: "Ciclo de Vida",
        subtitulos: { 
            1: "Independência", 2: "Cooperação", 3: "Expressão", 
            4: "Organização", 5: "Liberdade", 6: "Responsabilidade", 
            7: "Sabedoria", 8: "Realização", 9: "Compaixão", 
            11: "Inspiração", 22: "Mestre Construtor" 
        },
        secoes: ["O Caminho desta Fase", "Foco Principal", "Desafio a Superar"],
        
// ESTRUTURA COMPLETA - TEXTOS COM QUEBRAS DE PARÁGRAFO INTERNAS
conteudos: {
    // --- PRIMEIRO CICLO (0 a ~28 anos) ---
    ciclo1: {
        1: [
            "Sabe aquela vontade de fazer as coisas do seu jeito e sentir que ninguém te entende? <br><br>Pois é, você veio ao mundo para aprender a ser o dono do seu próprio nariz desde cedo. É um tempo de 'peitar' os desafios e descobrir que tem uma força gigante aí dentro.",
            "O seu foco deve ser aprender a se virar sozinho e não esperar que os outros te deem o mapa. <br><br>Comece a dar os seus próprios passos, mesmo que erre. É nessa fase que você constrói a coragem que vai te sustentar na vida adulta.",
            "O seu maior inimigo aqui é o medo de desagradar os pais ou os amigos. <br><br>Se você se calar só para ser o 'bonzinho', vai chegar na maturidade sentindo que viveu a vida de outra pessoa. Aprenda a dizer 'eu quero assim' e aguente o tranco."
        ],
        2: [
            "Você nasceu com um coração que sente tudo em dobro e muita sensibilidade. <br><br>Nesta fase, sua vida será influenciada pela sua família. É um tempo de aprender que ninguém cresce sozinho, mas sem se anular no processo.",
            "O segredo aqui é aprender a arte de conviver e ouvir as pessoas. <br><br>Seja quem resolve as brigas sem precisar gritar. Use essa sua intuição para entender o que os outros sentem. É o momento de aprender a trabalhar em grupo.",
            "Cuidado para não virar um 'dependente' emocional de alguém. <br><br>O grande desafio é não fugir para um casamento só por medo de ficar sozinho. Se não aprender a ser feliz com você agora, passará a vida mendigando carinho."
        ],
        3: [
            "Esta é a fase da alegria, da farra e da comunicação solta! <br><br>Você tem um brilho que atrai as pessoas como um ímã. A vida quer que você se solte, faça muitos amigos e descubra o que te faz sorrir de verdade.",
            "Solte a sua criatividade de todas as formas que puder. <br><br>Seja escrevendo, cantando ou batendo um bom papo, mergulhe nisso. Essas habilidades de expressão serão o seu grande diferencial para abrir portas no futuro.",
            "O perigo é querer abraçar o mundo e não terminar nada do que começou. <br><br>Você pode acabar virando o 'festeiro' que não leva nada a sério. Divirta-se, mas coloque um pouco de ordem no dia para não terminar o ciclo sem rumo."
        ],
        4: [
            "Para você, a vida não vai ser só festa e brincadeira. <br><br>Desde cedo você sente o peso da responsabilidade e a necessidade de colocar ordem na bagunça. Talvez sua casa tenha sido rígida, mas isso te transformou em uma rocha.",
            "Aprenda a valorizar o trabalho bem feito e a organização pessoal. <br><br>Construa suas coisas tijolo por tijolo. Essa disciplina é o que vai garantir que, no futuro, você tenha uma vida financeira sólida e muita segurança.",
            "Não deixe o seu coração ficar duro demais por causa das regras. <br><br>O desafio é não virar uma pessoa 'quadrada'. Trabalhe duro, mas lembre-se de que a vida também precisa de riso e leveza para não virar um fardo pesado."
        ],
        5: [
            "Sua vida vai ser uma verdadeira montanha-russa de novidades constantes. <br><br>Um dia você quer uma coisa, no outro quer algo totalmente diferente. É um tempo de muita sede de liberdade e de não aguentar ficar parado no mesmo lugar.",
            "Aproveite esse movimento para aprender de tudo um pouco e viajar. <br><br>A sua maior lição é aprender a ter 'jogo de cintura' para se adaptar rápido. Isso vai te dar uma inteligência incrível para lidar com qualquer problema mais tarde.",
            "A impulsividade pode ser sua ruína se você não tomar cuidado. <br><br>Se sair chutando o balde por tédio, vai acabar sem nada de seu. O desafio é aproveitar a liberdade sem abandonar projetos importantes por puro capricho."
        ],
        6: [
            "Parece que você já nasceu sendo o 'porto seguro' de toda a sua família. <br><br>Desde cedo, as responsabilidades de casa pesam nos seus ombros. É um ciclo onde o amor e o dever caminham juntos para deixar tudo em harmonia.",
            "Aprenda a cuidar das pessoas com carinho, mas sem esquecer que você existe. <br><br>Ser alguém em quem os outros confiam é um dom. Essa base emocional vai te dar muita força para construir sua própria família e carreira no futuro.",
            "Cuidado para não virar o 'quebra-galho' oficial de todo mundo. <br><br>O risco é casar muito cedo só para cuidar de alguém ou fugir de casa. Aprenda a colocar limites: ajude, mas não deixe que os problemas alheios te sufoquem."
        ],
        7: [
            "Você é aquela pessoa que pensa muito e se sente um 'estranho no ninho'. <br><br>Enquanto os outros estão na agitação, você está tentando entender o porquê das coisas. É um tempo de muito estudo, silêncio e de olhar para dentro.",
            "Mergulhe nos livros e no conhecimento que ninguém pode te tirar. <br><br>Use esse seu jeito quieto para observar o mundo. Esse tempo de 'caverna' é fundamental para você se tornar um especialista brilhante e muito valorizado.",
            "Não deixe a solidão virar tristeza ou isolamento total das pessoas. <br><br>O desafio é não se fechar achando que ninguém te entende. Saia um pouco da sua cabeça e tente se conectar com os outros de forma simples e real."
        ],
        8: [
            "Você já nasceu com um olhar de quem quer vencer e ter sucesso. <br><br>Enquanto os outros pensam só no hoje, você já planeja como ter conforto. É um período de muita ambição e de entender como a vida prática funciona.",
            "Aprenda a liderar e a organizar as coisas com inteligência agora. <br><br>Não tenha vergonha de querer crescer. Se trabalhar com seriedade, vai construir uma autoridade que muitos levam a vida inteira para tentar conseguir.",
            "Cuidado para não virar uma pessoa fria ou mandona demais com os outros. <br><br>O sucesso material é bom, mas sem coração ele vira solidão. Equilibre sua vontade de vencer com bondade, senão você chegará ao topo sozinho."
        ],
        9: [
            "Este é um ciclo muito intenso e, às vezes, confuso emocionalmente. <br><br>Você sente as dores do mundo e quer ajudar todos, mas sente que muita coisa está mudando dentro de você. É um tempo de fazer uma verdadeira faxina na alma.",
            "Aprenda a ser generoso e a perdoar as falhas das pessoas e as suas. <br><br>O que você plantar de bem agora voltará como um sucesso gigantesco no próximo ciclo. Esteja pronto para deixar ir embora o que não te serve mais.",
            "Não tente segurar o que a vida está levando para longe de você. <br><br>O risco é ficar preso a mágoas passadas. Não tome decisões grandes, como casar, quando estiver emocionado. Respire fundo e espere a clareza voltar."
        ],
        11: [
            "Você vive com os nervos à flor da pele e capta tudo o que acontece no ar. <br><br>É uma fase de muita intuição e ideias que parecem vir de outro lugar. Você está aqui para inspirar as pessoas, mesmo que ainda não saiba como.",
            "Aprenda a confiar nos seus 'estalos' mentais e na sua intuição forte. <br><br>Busque conhecimentos que falem com a sua alma. Você enxerga o que os outros não veem, então use isso para criar algo que tenha um propósito de verdade.",
            "O excesso de sensibilidade pode te deixar muito ansioso ou estressado. <br><br>O desafio é não carregar o peso do mundo nas costas sozinho. Aprenda a relaxar e entenda que você é um canal de luz, não o dono de todas as soluções."
        ]
    },

    // --- SEGUNDO CICLO (Maturidade - ~28 a ~56 anos) ---
    ciclo2: {
        1: [
            "Fase de ambição e protagonismo absoluto: o recado é direto. <br><br>Ou você assume o comando da sua vida agora, ou alguém fará isso por você. É o momento de parar de pedir 'licença' e começar a dizer 'eu vou fazer'.",
            "Foque na sua independência e não dependa de decisões de terceiros. <br><br>Trate sua carreira como a base que vai sustentar sua paz lá na frente. É o tempo de liderar projetos e garantir que suas finanças estejam sob seu controle.",
            "Não perca tempo tentando agradar a todo mundo. <br><br>O risco é chegar aos 50 anos sem saber quem você é. Firme seus pés e não entre no próximo ciclo sem ter um rumo claro e um patrimônio seu."
        ],
        2: [
            "Fase de poder através das parcerias e da boa convivência. <br><br>Seu crescimento agora não vem da força, mas da inteligência em lidar com as pessoas. Você cresce sendo a ponte e o mediador que une interesses diferentes.",
            "Foco no tato social e na sua sensibilidade como ferramenta. <br><br>Em qualquer área, quem entende de gente é quem ganha o jogo. Seja impecável no trato; sua rede de contatos e a confiança que passa são seus maiores bens.",
            "Cultive a paciência, mas sem se deixar anular. <br><br>Aprenda a ouvir com calma, mas com autoridade silenciosa. O seu sucesso depende da solidez dos seus relacionamentos; caminhe bem acompanhado agora."
        ],
        3: [
            "Fase de brilho e expansão total da sua marca pessoal. <br><br>Sua criatividade e seu jeito único são as chaves que abrem portas difíceis. É o momento de colocar sua identidade em tudo e garantir que seja notado pelo seu valor.",
            "Foco na comunicação: use sua voz e ideias para vender seus projetos. <br><br>Seja na arte ou na liderança, coloque seu bloco na rua e atraia os olhares certos. A sorte sorri para quem se comunica com alegria e clareza hoje.",
            "Pare de jogar energia fora com amizades vazias. <br><br>O risco aqui é se perder na diversão e esquecer que o tempo de construir é agora. Use seu carisma para construir algo que traga retorno e respeito real."
        ],
        4: [
            "Fase de trabalho duro e construção de segurança total. <br><br>A vida te pede pés no chão e muita disciplina com a rotina. Entenda que o esforço de hoje determina se você terá uma maturidade tranquila ou com apertos.",
            "Foco em resultados sólidos e economia muito consciente. <br><br>Invista naquilo que é concreto e seguro. Nada de se aventurar em riscos agora; o foco é o alicerce, a casa própria e a estabilidade de uma vida organizada.",
            "Não fuja da rotina, ela é o seu caminho para a vitória. <br><br>Mesmo cansado, lembre-se: cada hora de trabalho é um tijolo na sua proteção. Seja o exemplo de seriedade e colherá uma paz financeira rara."
        ],
        5: [
            "Fase de novos horizontes e mudanças rápidas de direção. <br><br>A vida está te tirando da zona de conforto e te empurrando para o mundo. O sucesso mora longe do óbvio; não tenha medo de trocar o certo pelo duvidoso.",
            "Foco na adaptabilidade: esteja pronto para viajar e conhecer gente nova. <br><br>Explore novas formas de ganhar dinheiro e tecnologias. Sua mente deve estar aberta, pois é na movimentação constante que o seu progresso vai acontecer.",
            "Gerencie sua liberdade para não virar bagunça. <br><br>Com tantas mudanças, o teste será aproveitar as novidades sem deixar que a falta de foco destrua o que já conquistou. Mude, mas nunca perca o objetivo."
        ],
        6: [
            "Fase de união familiar e deveres afetivos no centro de tudo. <br><br>Este é o momento de plantar raízes profundas. Cuidar dos filhos ou construir um lar harmonioso dará estrutura e sentido para sua vida agora. O amor é sua base.",
            "Foco no seu papel de pilar dentro de casa e na comunidade. <br><br>Resolver os assuntos domésticos com equilíbrio te dará força para crescer no profissional. Quando o seu lar está em paz, o seu trabalho rende o dobro.",
            "Seja o suporte, mas não se deixe esgotar pelos outros. <br><br>O teste é ser o pilar da casa sem se anular como pessoa. Transforme essa responsabilidade em orgulho; sua família é o seu maior tesouro."
        ],
        7: [
            "Fase de especialização profunda e silêncio produtivo. <br><br>Seu crescimento acontece através do estudo e do aperfeiçoamento mental. Não é hora de grandes agitações; sua alma pede privacidade para você se tornar um mestre.",
            "Foco no conhecimento que te torna insubstituível no mercado. <br><br>Medite sobre seus planos e cuide da mente. Sua força vem da sabedoria que adquire enquanto os outros fazem barulho. Estude o que é difícil e complexo.",
            "Não se sinta culpado por querer ficar mais quieto. <br><br>Esse isolamento estratégico te dará a visão que ninguém mais tem. Torne-se uma autoridade no que faz; o que você aprender agora valerá ouro no futuro."
        ],
        8: [
            "Fase de poder, muito dinheiro e autoridade material. <br><br>Você entrou no ciclo onde o 'dinheiro chama dinheiro', mas deve ser um gestor impecável. É hora de liderar, empreender e mostrar que sabe como o sucesso funciona.",
            "Foco total na realização material e gestão de recursos. <br><br>Não tenha medo da ambição. Lucre com estratégia e ética; isso trará conforto para você e para os seus. Trate o dinheiro com respeito e ele se multiplicará.",
            "Conquiste o topo sem perder a sua humanidade. <br><br>O desafio é ser poderoso sem ser arrogante. Saiba que quanto mais justo for nos negócios, mais portas se abrirão. Seja o patrão do dinheiro, não o escravo."
        ],
        9: [
            "Fase de sucesso público e exemplo de sabedoria de vida. <br><br>O seu reconhecimento virá através do bem que você faz e da sua maturidade. As pessoas vão olhar para você como um guia. O sucesso aqui é fruto da generosidade.",
            "Foco no impacto social e no desapego do seu próprio ego. <br><br>Ajude as pessoas e ensine o que sabe. Quanto mais se dedicar a causas coletivas, mais o universo conspirará para que portas de sucesso pessoal se abram.",
            "Mantenha suas emoções sob controle absoluto. <br><br>Não se deixe levar por dramas ou mágoas antigas. O seu desafio é manter a calma de um mestre para inspirar os outros. Seja grande na alma agora."
        ],
        11: [
            "Fase de inspiração elevada e reconhecimento de alma. <br><br>Você é um farol que ilumina o caminho dos outros. Suas ideias são visionárias e podem inspirar muita gente. Use sua influência para ensinar o que é elevado.",
            "Foco em ser um mestre e compartilhar sua visão de mundo. <br><br>Mostre que é possível viver com propósito. Inspire quem te segue a buscar o melhor. Não tenha medo de falar para as multidões se a vida te chamar.",
            "Sustente sua grandeza com verdade e coerência. <br><br>Com a visibilidade, vem a responsabilidade de praticar o que você prega. Não se perca na vaidade; mantenha a humildade de quem serve a um propósito maior."
        ]
    },

    // --- TERCEIRO CICLO (Sabedoria - ~56 anos em diante) ---
    ciclo3: {
        1: [
            "Fase de soberania pessoal e independência total de tudo. <br><br>É o momento de ser o capitão orgulhoso da sua jornada. Você descobrirá que sua própria companhia é um banquete e que não deve satisfações a ninguém.",
            "Foco na sua autonomia: gerencie seus bens e tome decisões. <br><br>Não se encoste nos outros. Sua vitalidade depende da sua capacidade de continuar ativo, agindo com a segurança de quem já viveu e viu de tudo.",
            "Transforme a solidão em poder pessoal. <br><br>Se se sentir sozinho, entenda que é o espaço para ser livre de verdade. Mostre que a maturidade é o topo da montanha, onde a vista é só sua e o ar é puro."
        ],
        2: [
            "Fase de colheita afetiva e muita paz nas relações íntimas. <br><br>É o tempo do amor sincero. Tudo o que plantou de bondade volta agora como carinho. Viva cercado de pessoas que te amam pelo que você é de verdade.",
            "Foco no afeto e nos prazeres calmos do dia a dia. <br><br>Cultive amizades de alma e hobbies que tragam paz, como cuidar de plantas ou escrever memórias. Sua alma se nutre agora de trocas suaves e verdadeiras.",
            "Não se torne dependente emocionalmente. <br><br>Use seu jeito doce para manter a harmonia em casa, mas mantenha sua identidade. Seja o conselheiro amado, mas saiba que sua paz vem de dentro."
        ],
        3: [
            "Fase de alegria contagiante e expressão livre da alma. <br><br>A maturidade liberou sua vontade de se divertir e contar histórias. Você se torna uma fonte de inspiração para os jovens, mostrando que o espírito não envelhece.",
            "Foco na vida social ativa e na sua criatividade. <br><br>Não se isole! Converse, participe de grupos e compartilhe seu bom humor. Escrever ou simplesmente reunir amigos manterá sua mente afiada e seu coração jovem.",
            "Não gaste sabedoria com conversas vazias. <br><br>Escolha bem onde colocar sua energia. Use seu brilho para deixar um legado de lições alegres para quem está começando. Divirta-se, mas com propósito."
        ],
        4: [
            "Fase de utilidade prática e continuidade produtiva. <br><br>Parar de trabalhar não combina com você. Sua natureza pede para se sentir útil. Você continuará cuidando dos seus projetos com seriedade; o trabalho te mantém vivo.",
            "Foco na organização financeira e segurança do que construiu. <br><br>Use seu tempo para atividades que tragam resultados, como gerir bens ou instituições. A sensação de ter o controle das coisas dá saúde ao seu corpo.",
            "Equilibre o esforço com o descanso merecido. <br><br>Você precisa produzir para ser feliz, mas faça isso sem estresse. O trabalho agora deve ser uma escolha prazerosa para manter sua dignidade e segurança."
        ],
        5: [
            "Fase de renovação e novas aventuras tardias e ousadas. <br><br>Quem disse que a vida para? Este ciclo traz viagens e mudanças. Sua alma tem sede de aventura e quer quebrar o estereótipo da velhice parada. Não tenha medo.",
            "Foco na liberdade total de movimento e novas descobertas. <br><br>Faça o que não pôde fazer antes. Conheça novos lugares e mude sua rotina sempre que quiser. Sua felicidade depende da coragem de continuar sendo um viajante.",
            "Aprenda a fluir sem perder o seu centro. <br><br>Com tantas novidades, o risco é não ter um porto seguro emocional. Aproveite a liberdade para se renovar, mas sem esgotar sua energia física. Mova-se com sabedoria."
        ],
        6: [
            "Fase de harmonia total e proteção da sua família. <br><br>Você se torna o centro amado onde todos buscam paz. É o momento doce de viver o amor doméstico e garantir que sua linhagem cresça com os seus valores.",
            "Foco no conforto do lar e na união das gerações. <br><br>Sua missão é ser o pilar que une a todos. Embeleze sua casa e cuide dos seus com carinho. O amor de filhos e netos é o que dá sentido maior à sua existência.",
            "Não carregue os problemas alheios nas costas. <br><br>Como harmonizador, o risco é sofrer pelos filhos. Dê o conselho e o abraço, mas proteja sua tranquilidade. Seu lar deve ser lugar de paz, não de preocupação."
        ],
        7: [
            "Fase de retiro sábio e iluminação profunda da mente. <br><br>A vida te convida a um silêncio produtivo. É hora de mergulhar nos livros e meditar. Você descobrirá que a solidão é um encontro sagrado com sua sabedoria.",
            "Foco no autoconhecimento e na sua espiritualidade. <br><br>Priorize o estudo de temas profundos. Sua mente é um templo de conhecimento que serve de luz para outros buscadores que virão até você atrás de direção.",
            "Direcionamento Firme: não se torne uma pessoa fechada ou amarga. <br><br>O silêncio deve trazer clareza, não te afastar de quem te ama. Desfrute da introspecção, mas saiba compartilhar a luz que encontrou na quietude."
        ],
        8: [
            "Fase de autoridade executiva e gestão do seu legado. <br><br>Você usa a experiência de décadas para agir com precisão. É um ciclo de prosperidade onde pode ser um consultor de alto nível. Sua palavra agora vale ouro.",
            "Foco na gestão sucessória e na solidez dos bens. <br><br>Garanta que seus valores e patrimônio continuem crescendo. Ensine os novos a ganhar dinheiro com caráter. O sucesso te acompanha para garantir total independência.",
            "Equilibre o seu poder com generosidade. <br><br>Com tanta autoridade, o desafio é ser um líder justo até o fim. Use sua influência para o bem e seja lembrado como sinônimo de honra e sucesso prático."
        ],
        9: [
            "Fase de amor universal e entrega espiritual plena. <br><br>É o momento de concluir grandes lições com o coração leve. Você se sente chamado a ajudar a humanidade de forma desinteressada. É o topo da evolução da alma.",
            "Foco na doação de sabedoria e no valor do perdão. <br><br>Dedique tempo a causas maiores. O sentido da vida está em quanta luz você deixa no mundo através do seu amor incondicional por tudo o que existe hoje.",
            "Não se deixe abater por dores do passado. <br><br>Como é um ciclo de encerramentos, o risco é o cansaço. Mantenha a cabeça erguida e aceite o fechamento com a paz de quem amou e serviu com toda a alma."
        ],
        11: [
            "Fase de inspiração divina e escrita do seu legado. <br><br>Você é um canal de luz que inspira a todos sem esforço. Este ciclo favorece a produção intelectual e o ensino de grandes verdades que continuarão vivas.",
            "Foco na transmissão do saber para o futuro. <br><br>Registre seu conhecimento em livros ou orientações. Sua intuição é um radar infalível que ajuda a elevar a consciência de quem tem a sorte de te ouvir agora.",
            "Proteja seu sistema nervoso de estímulos. <br><br>O isolamento é necessário para ouvir sua voz interior, não se sinta culpado. Busque o equilíbrio entre as visões elevadas e o descanso que o corpo pede."
        ],
        22: [
            "Fase de alta produtividade e construção final de algo. <br><br>Você sente que ainda tem uma grande obra para entregar. Use sua energia para construir algo prático e duradouro, como uma fundação ou um grande negócio.",
            "Foco em projetos que tragam benefício para o coletivo. <br><br>Mantenha-se ocupado com o que exige habilidade. Transforme vigor em obras úteis; o movimento físico e mental garante que sua saúde permaneça forte e lúcida.",
            "Controle a ansiedade de fazer tudo sozinho. <br><br>O risco é o estresse por não conseguir 'desligar'. Encontre o equilíbrio entre construir e desfrutar do que edificou, deixando um legado de paz e força."			
    ]
},
        }
    },
    desafio: {
        titulo: "Desafio de Vida",
        subtitulos: { 
            0: "A Escolha Consciente", 1: "Superar a Insegurança", 2: "Controlar a Hipersensibilidade", 
            3: "Vencer a Dispersão", 4: "Eliminar a Procrastinação", 5: "Superar a Inconstância", 
            6: "Equilibrar o Perfeccionismo", 7: "Sair do Isolamento", 8: "Ajustar o Senso de Poder" 
        },
        secoes: ["Aprendizado", "Obstáculo", "Como Superar"],
        conteudos: {
            1: [
        "Sua alma escolheu este desafio para que você descubra o seu próprio poder de comando. <br><br>O aprendizado aqui é sobre se tornar o capitão do seu próprio barco, desenvolvendo uma autoconfiança que não depende de aplausos. Você está nesta vida para aprender que a sua iniciativa é o que move as montanhas e que ser independente é a sua maior vitória.",
        "Você vai sentir, muitas vezes, uma trava invisível na hora de começar algo novo ou de tomar uma decisão importante sozinho. <br><br>A tendência é se sentir isolado ou esperar que alguém venha te dar a mão e dizer o que fazer. Esse medo de 'dar errado' ou de ficar sozinho na sua decisão é o que te mantém parado na zona de conforto, impedindo que seu potencial brilhe.",
        "O segredo para quebrar essa corrente é entender que a coragem não é a ausência de medo, mas a ação apesar dele. <br><br>Não espere o plano perfeito ou a aprovação de ninguém. Quando a dúvida bater, respire fundo e dê o primeiro passo, por menor que seja. Para você, o sucesso não está no destino final, mas na sua coragem de dizer: 'eu vou e eu faço'. INICIE!"
    ],
    2: [
        "Você está aqui para aprender a equilibrar o seu mundo emocional e a arte de conviver sem se anular. <br><br>O grande aprendizado é descobrir que a sua sensibilidade é um dom para entender os outros, e não uma fraqueza. Você veio aprender a ser diplomático, a cooperar e a perdoar, construindo relacionamentos onde você é respeitado e ouvido.",
        "O seu maior desafio é a 'pele fina' demais e a dificuldade de dizer 'não'. <br><br>Qualquer palavra mal dita te fere profundamente e você acaba guardando mágoas que pesam como chumbo. Essa falta de autoconfiança te deixa em cima do muro, com medo de escolher um lado e acabar magoando alguém ou sendo rejeitado.",
        "Você precisa fortalecer o seu centro emocional e entender que perdoar é, antes de tudo, um presente para você mesmo ficar livre. <br><br>Não deixe que o medo da crítica paralise as suas escolhas. Aprenda a se posicionar com suavidade, mas com firmeza. Saia da dúvida e entenda que errar uma escolha é melhor do que não escolher nada. Tome as rédeas e DECIDA!"
    ],
    3: [
        "Sua missão neste desafio é aprender a colocar a sua verdade para fora de um jeito que inspire as pessoas. <br><br>O aprendizado é sobre comunicação com propósito. Você veio para esta vida para aprender a expressar seus sentimentos, talentos e ideias sem desperdiçar energia com futilidades ou silêncios que sufocam a alma.",
        "Você oscila entre falar demais sobre coisas sem importância ou se calar por medo de não ser interessante o suficiente. <br><br>O obstáculo é a dispersão: você começa mil conversas e projetos, mas não aprofunda em nenhum, o que te traz uma sensação de vazio. Existe um medo escondido de ser julgado, o que te faz agir de forma superficial às vezes.",
        "Para vencer, você precisa canalizar a sua alegria e sua voz para o que realmente importa. <br><br>Aprenda a ouvir a sua voz interna antes de falar para o mundo. Use a sua criatividade para construir pontes reais com as pessoas, focando na qualidade do que você diz e não na quantidade. Seja autêntico e focado. Melhore a sua COMUNICAÇÃO!"
    ],
    4: [
        "Você está aqui para aprender que a base de qualquer grande vitória é o trabalho bem feito e a organização. <br><br>O aprendizado é sobre dar forma aos seus sonhos através da disciplina. Você veio entender que a rotina não é uma prisão, mas o trilho que leva o trem ao seu destino. É sobre construir um legado sólido e seguro para você e sua família.",
        "A sua maior trava é a resistência em aceitar regras ou, no outro extremo, o excesso de rigidez que te faz viver apenas para o dever. <br><br>A desorganização mental ou física pode fazer com que você sinta que está sempre 'carregando o mundo nas costas' sem sair do lugar. Existe um peso aqui que pode te fazer querer desistir antes de ver os resultados.",
        "A solução é simples e prática: coloque ordem no seu caos. <br><br>Divida suas grandes metas em pequenas tarefas diárias e não pule etapas. Aprenda a amar o processo de construção, sabendo que cada tijolo colocado com atenção garante um futuro sem sustos. Não adie o que precisa ser feito hoje. ORGANIZE-SE E TRABALHE!"
    ],
    5: [
        "O seu aprendizado é sobre o verdadeiro significado da liberdade. <br><br>Você veio para esta vida para aprender a ser versátil, a abraçar as mudanças e a viver experiências novas sem se perder no caminho. É sobre descobrir que você pode ser livre e aventureiro, mas ainda assim ter um propósito e uma direção clara para onde está indo.",
        "O grande perigo aqui é a instabilidade e o medo de criar raízes. <br><br>Você pode sentir uma vontade louca de chutar o balde toda vez que algo vira rotina, fugindo para prazeres rápidos que dopam a sua alma, como o excesso de festas ou vícios. Esse desejo de 'liberdade a qualquer custo' acaba te deixando sem nada sólido nas mãos.",
        "Você precisa entender que a liberdade sem responsabilidade é apenas uma fuga. <br><br>Use a sua incrível capacidade de adaptação para crescer, não para fugir. Aprenda a selecionar as mudanças que realmente agregam valor à sua vida. Seja curioso, viaje e mude, mas mantenha o compromisso com os seus objetivos maiores. Seja VERSÁTIL, mas com pé no chão!"
    ],
    6: [
        "Você está aqui para aprender sobre o amor incondicional e o equilíbrio nas responsabilidades familiares. <br><br>O aprendizado é sobre cuidar sem sufocar e ajudar sem querer controlar. Você veio entender que a harmonia de um lar nasce do respeito pelas diferenças e da aceitação de que cada um tem o seu próprio caminho.",
        "A sua trava é a tendência de ser dominador e prepotente, achando que só o seu jeito é o certo. <br><br>Você cria padrões perfeitos na sua cabeça e sofre (e faz os outros sofrerem) quando eles não são seguidos. Esse excesso de cobrança gera conflitos onde deveria haver paz, e você acaba se sentindo sobrecarregado por tentar carregar a vida de todo mundo.",
        "O segredo da sua paz é soltar as rédeas. <br><br>Aprenda a amar as pessoas como elas são, com todos os defeitos delas. Pare de estabelecer regras para os sentimentos alheios. Quando você troca a cobrança pelo acolhimento, a harmonia que você tanto busca floresce naturalmente. Seja o porto seguro, não o fiscal da vida alheia. Doe AMOR!"
    ],
    7: [
        "Você veio para esta vida para aprender sobre a sabedoria que nasce da alma e o autoconhecimento profundo. <br><br>O aprendizado é sobre equilibrar a sua inteligência com a fé. Você está aqui para se tornar um mestre em entender os mistérios da vida, desenvolvendo uma mente analítica que sabe que nem tudo pode ser explicado apenas pela lógica.",
        "O seu maior inimigo é o orgulho intelectual e a arrogância de achar que sabe mais que os outros. <br><br>Isso te leva a um isolamento frio, onde você se afasta das pessoas por medo de ser incompreendido ou por vaidade. A falta de confiança em algo maior te deixa cético e solitário, criando um vazio que nenhum livro consegue preencher.",
        "Para vencer, você precisa baixar a guarda e abrir o coração. <br><br>Busque o conhecimento com modéstia e use a sua inteligência para servir, não para se esconder. Desenvolva a sua espiritualidade de forma prática. Lembre-se que a verdadeira sabedoria só chega para quem tem a humildade de ser um eterno aprendiz. Tenha FÉ e busque a educação da alma!"
    ],
    8: [
        "O seu aprendizado é sobre o poder de realização material e a justiça no mundo dos negócios. <br><br>Você veio aprender a lidar com o dinheiro, o sucesso e a autoridade sem se tornar escravo deles. É sobre descobrir que a prosperidade é uma ferramenta divina para transformar a realidade e deixar um legado de segurança e conforto para o mundo.",
        "A sua maior trava é a obsessão pelo ganho material ou o medo constante da escassez. <br><br>Isso pode te tornar uma pessoa fria, que mede o valor da vida apenas pelo saldo bancário. O obstáculo é a ganância ou a preocupação excessiva que te faz esquecer de viver o agora, transformando a sua vida em uma eterna corrida atrás de poder.",
        "Você precisa aprender a dominar o dinheiro, para que ele nunca seja o seu patrão. <br><br>Trabalhe com ética absoluta e entenda que quanto mais você ajuda o mundo a prosperar, mais a riqueza flui para você. Use a sua autoridade para ser justo e equilibrado. O sucesso real é aquele que traz paz para o travesseiro. Administre e controle o DINHEIRO com sabedoria!"
    ],
    0: [
        "Este é o desafio da consciência plena e da escolha consciente. <br><br>O seu aprendizado é sobre ser o seu próprio mestre. Você veio para esta vida com uma bagagem que te permite escolher qual área da vida você quer lapidar. É o aprendizado sobre o livre-arbítrio em seu estado mais puro e a responsabilidade sobre o próprio destino.",
        "O perigo aqui é a estagnação ou o excesso de caminhos. <br><br>Como você tem a liberdade de escolher, pode acabar não escolhendo nada e ficando parado vendo a vida passar. O obstáculo é a falta de autoanálise, que pode fazer com que você ignore os sinais e acabe enfrentando todos os desafios de uma vez só por pura falta de atenção.",
        "Use a sua intuição como uma bússola infalível. <br><br>Olhe para a sua vida hoje e sinta: onde está doendo? É na iniciativa? Na comunicação? No trabalho? O desafio zero exige que você seja honesto consigo mesmo e tome a frente. Não espere a vida te empurrar. Seja o seu maior incentivador e DESAFIE-SE a crescer todos os dias!<br><br><strong>Nota Karmica:</strong> O que você precisa entender: Além dos desafios, você pode carregar uma Dívida Cármica. Imagine isso como um ajuste de rota necessário.<br><br> É um compromisso que a sua alma assumiu de corrigir um erro do passado para que você possa, finalmente, caminhar sem pesos. Não é um castigo, é uma oportunidade de ouro de libertação.<br><br> A orientação do seu mentor: O meu conselho mais valioso é: foque inteiramente na SOLUÇÃO. Não gaste nem um minuto tentando entender a culpa ou o 'porquê' lá atrás.<br><br> O intuito da Numerologia Cabalística é te dar o mapa para a saída do labirinto. Quando você foca na solução, a dívida se apaga e a sua vida deslancha de forma extraordinária. Olhe para a frente!"
    ],
        }
    },

    momento: {
        titulo: "Momento Decisivo",
        subtitulos: { 
            1: "Realização Individual", 2: "Harmonia e Parceria", 3: "Brilho e Expressão", 
            4: "Estabilidade Prática", 5: "Mudança e Versatilidade", 6: "Responsabilidade e Lar", 
            7: "Refinamento Mental", 8: "Sucesso Material", 9: "Sabedoria Universal", 
            11: "Iluminação Espiritual", 22: "Grandiosidade Concreta" 
        },
        secoes: ["Energia do Momento", "Grande Oportunidade", "Ação"],
        
        
        conteudos: {
    momento1: {
        1: [
            "Você vive um ciclo focado na construção da sua força individual e na descoberta do seu 'Eu'. <br><br>Esta energia exige coragem para assumir o controle da própria vida, aprendendo a agir com independência e determinação desde cedo. Na juventude, isso se manifesta como um comportamento agitado e voluntarioso, onde a alma luta para usar suas ideias originais sem cair na armadilha do egoísmo ou da teimosia cega.",
            "A grande chance desta fase é o desenvolvimento de uma liderança natural e a capacidade de empreender antes mesmo da maturidade. <br><br>Este período oportuniza a criação de uma personalidade firme, capaz de se conduzir sem depender de muletas alheias. É a semente da autodeterminação sendo plantada: você está aprendendo a ser o capitão do seu próprio destino, transformando desafios em degraus para o sucesso profissional e pessoal.",
            "Assuma a responsabilidade de agir por conta própria e não tenha medo de caminhar sozinho se necessário. <br><br>As portas se abrirão através da sua iniciativa; por isso, cultive a coragem de colocar suas ideias em prática sem esperar aprovação constante. Seja firme, fuja da dominação e entenda que o seu progresso depende exclusivamente da sua disposição de liderar a si mesmo. Dê o primeiro passo agora!"
        ],
        2: [
            "Sua jornada nesta fase é regida pela sensibilidade e pela necessidade de aprender a arte da convivência. <br><br>Na juventude, essa energia traz um comportamento mais suscetível às influências externas, especialmente de figuras familiares femininas. É um período para desenvolver o tato e entender que a vida tem um ritmo próprio que não pode ser apressado, exigindo que você amadureça suas emoções com paciência e compreensão.",
            "A grande oportunidade aqui é o progresso através da diplomacia, da cooperação e do compartilhamento de ideais. <br><br>Este momento favorece parcerias e associações que serão fundamentais para a execução dos seus projetos futuros. O sucesso virá através de colaboradores e pessoas mais experientes, mostrando que saber ouvir e colaborar é, na verdade, uma das suas maiores fontes de poder.",
            "Atue com diplomacia e calma, respeitando o tempo natural de cada conquista sem forçar situações. <br><br>Não deixe que a sensibilidade se transforme em bloqueio; em vez disso, use-a para fortalecer seus laços e parcerias. Busque o apoio de mentores e aprenda que o progresso pessoal e profissional acontece de forma muito mais sólida quando você caminha acompanhado e em harmonia."
        ],
        3: [
            "Você está sob uma vibração de brilho, expansão social e intensa criatividade. <br><br>Na juventude, essa energia é descontraída e jovial, mas pode trazer o desafio da dispersão: com tanta imaginação e tantas oportunidades surgindo ao mesmo tempo, é fácil se perder. A agitação deste período, se não for bem canalizada, pode elevar a ansiedade e dificultar o foco necessário para a sua formação.",
            "A oportunidade de ouro é o desenvolvimento dos seus talentos criativos e a expansão da sua marca pessoal através das relações sociais. <br><br>Este é um portal que favorece a autoexpressão, as amizades sinceras e a fertilidade de ideias. Sua popularidade estará em alta, e a vida te convida a usar esse carisma para atrair as pessoas certas e vender suas ideias de forma única e encantadora.",
            "Comunique-se e brilhe socialmente, mas aprenda a selecionar as melhores oportunidades para não jogar energia fora. <br><br>Não deixe que o excesso de imaginação prejudique seus estudos ou seu trabalho; discipline sua mente para transformar criatividade em resultados concretos. Seja sociável, aproveite a popularidade, mas mantenha o foco naquilo que realmente vai construir o seu futuro."
        ],
        4: [
            "Este é o momento de colocar a mão na massa e construir o alicerce sólido sobre o qual toda a sua vida será erguida. <br><br>Na juventude, essa energia muitas vezes antecipa o trabalho, trazendo responsabilidades de gente grande ainda na infância ou adolescência. Embora exija disciplina e persistência, esse rigor é o que está fortalecendo sua personalidade e moldando um caráter resiliente e confiável.",
            "A grande chance desta fase é a construção de um patrimônio e de uma base profissional inabalável através do esforço efetivo. <br><br>Este ciclo oportuniza a ordenação das suas questões econômicas e o entendimento de que o progresso material é um sustento para o seu crescimento espiritual. É a fase ideal para aplicar preceitos corretos de organização que garantirão a sua segurança financeira definitiva.",
            "Trabalhe com método e rigor, valorizando a ordem e a disciplina em cada pequena tarefa do seu dia. <br><br>Não fuja das responsabilidades pesadas; encare-as como o fortalecimento do seu caráter. Economize com inteligência, invista na sua formação e tenha paciência para colher os frutos. O suor e a persistência de agora são os tijolos que garantem a mansão do seu futuro!"
        ],
        5: [
            "Sua vida entra em uma fase de movimentação constante, inovações e busca incessante por liberdade. <br><br>Na juventude, essa energia é rebelde e inquieta, fazendo com que você esteja sempre à frente dos outros da sua idade. A instabilidade emocional pode surgir, pois é difícil encontrar um ponto de equilíbrio quando tudo ao seu redor — e dentro de você — pede por mudanças e novas sensações.",
            "A grande oportunidade é expandir seus horizontes através de viagens, novos empreendimentos e uma versatilidade fora do comum. <br><br>Este ciclo te convoca a se livrar do que é obsoleto e a abraçar o novo de braços abertos. É o momento perfeito para testar caminhos diferentes, aprender com a velocidade das trocas e desenvolver um jogo de cintura que será seu diferencial por toda a vida.",
            "Adapte-se rápido às novidades e exercite sua liberdade com um profundo senso de responsabilidade. <br><br>Não tenha medo de mudar, mas evite que a impulsividade prejudique sua base financeira e emocional. Seja flexível, ouse trilhar caminhos desconhecidos e use essa inquietude para inovar em tudo o que fizer. O mundo pertence aos versáteis!"
        ],
        6: [
            "Este é o ciclo do ajuste afetivo, onde o progresso depende diretamente da harmonia que você constrói em seu lar e em seus relacionamentos. <br><br>Na juventude, isso pode trazer responsabilidades familiares prematuras, onde você se vê cuidando dos outros para obter reconhecimento ou por pura necessidade. É uma fase que pede para deixar o ego um pouco de lado em nome do bem-estar coletivo.",
            "A oportunidade real reside nas atividades voltadas ao cuidado humano: saúde, educação, beleza e ética. <br><br>Este momento favorece o início de relacionamentos sólidos e a construção de um porto seguro emocional. O sentido aqui é aprender que liderar também é servir, aconselhar e nutrir, criando um ambiente onde todos ao seu redor se sintam seguros e amados sob a sua proteção.",
            "Nutra quem você ama com zelo, mas aprenda a dosar o quanto você se doa para os outros e o quanto reserva para si. <br><br>Não deixe que a dedicação excessiva se torne um fardo; busque o equilíbrio entre as demandas da família e os seus próprios sonhos. Relacione-se com afeto, resolva as brigas com diálogo e faça da harmonia a sua principal estratégia de sucesso e segurança."
        ],
        7: [
            "Você vive um convite ao retiro sagrado e ao aperfeiçoamento da mente. <br><br>Na juventude, essa energia pede introspecção e certa reclusão, onde o desejo de estudar e se aprimorar é muito mais forte do que a vontade de badalação social. Pode ser um período solitário, mas essa quietude é o substrato rico onde você está refinando as habilidades mais preciosas da sua alma.",
            "A grande chance desta fase é o salto intelectual e espiritual através da busca pelo sentido mais profundo da vida. <br><br>Este cenário é perfeito para se especializar em áreas científicas, filosóficas ou culturais, tornando-se uma autoridade no que faz. O sentido aqui é o refinamento moral e técnico: você está se preparando no silêncio para brilhar com sabedoria no futuro.",
            "Busque o silêncio e a verdade, dedicando-se ao estudo e à pesquisa de temas que realmente toquem o seu espírito. <br><br>Não tenha medo da sua própria companhia; use esse isolamento estratégico para se tornar um mestre em sua área. Aproveite as oportunidades de aperfeiçoamento que surgirem e entenda que o seu valor agora cresce de dentro para fora."
        ],
        8: [
            "Você entrou na vibração do poder real e da realização no mundo dos negócios. <br><br>Na juventude, isso se manifesta como uma ambição precoce e o desejo de alcançar a independência financeira ainda muito cedo. É uma fase motivada por grandes aspirações, onde seu carisma estará em evidência para atrair parcerias e recursos que impulsionem seu progresso material.",
            "A oportunidade de ouro é assumir cargos de liderança, administrar recursos e multiplicar riquezas com foco na justiça. <br><br>Este ciclo oportuniza o desenvolvimento humano através do progresso financeiro e material, ensinando você a equalizar o ganho pessoal com o bem social. O sentido aqui é mostrar que você tem o talento necessário para gerir o mundo material com maestria e ética.",
            "Gerencie com estratégia e ética, pautando cada decisão no senso de justiça e na eficiência administrativa. <br><br>Use o seu carisma para atrair bons colaboradores e mobilize todos os seus recursos internos para prosperar. Não se deixe levar pelo egocentrismo do poder; em vez disso, use o sucesso material como uma ferramenta de progresso espiritual e social."
        ],
        9: [
            "Sua jornada agora é sobre a promoção do bem coletivo e o exercício do desapego sagrado. <br><br>Na juventude, isso pode trazer dificuldades emocionais, pois você se sente 'fora da caixa' e seus ideais elevados muitas vezes não são compreendidos pelos outros. O sentimento de não pertencimento é o seu mestre agora, te convidando a amadurecer a consciência além do óbvio.",
            "A grande oportunidade é expandir sua inteligência e seu coração através da compaixão e da fraternidade universal. <br><br>Este ciclo favorece viagens, o contato com novas culturas e a prática da solidariedade em larga escala. O sentido aqui é fortalecer sua personalidade para os grandes embates da vida, aprendendo que o verdadeiro sucesso vem de quanto você consegue servir à humanidade.",
            "Doe-se para causas maiores e perdoe o passado, soltando os laços que já não contribuem para o seu crescimento. <br><br>Trabalhe pelo bem de todos, seja no campo intelectual, social ou espiritual, e não tema a solidão: ela é o espaço necessário para sua reflexão e amadurecimento. Aprenda a lição avançada que este momento propõe e prepare-se para ser um farol para o mundo."
        ],
        11: [
            "Você está sob uma voltagem espiritual altíssima, recebendo inspirações que estão à frente do seu tempo. <br><br>Na juventude, essa energia pode gerar tensão e ansiedade, pois seus ideais são distintos do comum e você pode se sentir deslocado. O aprendizado aqui é manter o equilíbrio emocional enquanto sua consciência pede por uma conduta impecável e ética em todas as relações.",
            "A oportunidade real é obter reconhecimento e prestígio através da sua visão de mundo iluminada. <br><br>Este ciclo favorece os estudos profundos, a expansão dos horizontes e o desenvolvimento da espiritualidade através da intuição. O sentido desta fase é te mostrar que você é um canal de ideias inovadoras que podem promover o bem coletivo se você agir com fé e razão.",
            "Siga sua fé e seus palpites, agindo sempre com o máximo de ética e transparência em suas atividades. <br><br>Não tente contrariar seus ideais apenas para se encaixar no grupo; honre a sua diferença. Mantenha o equilíbrio emocional, busque a inspiração no silêncio e aja pelo senso da razão, sabendo que sua integridade é o que garantirá o seu sucesso e prestígio profissional."
        ],
        22: [
            "Você vive o momento mais poderoso da escala numerológica, onde suas ambições ganham um alcance mundial. <br><br>Na juventude, o despertar de sonhos tão gigantescos pode gerar um amadurecimento forçado e muita ansiedade. A energia aqui alarga todas as fronteiras, desafiando você a transformar idealismo em realidade concreta, mesmo que sinta que o poder de realização ainda está sendo lapidado.",
            "A grande chance é realizar obras de grande escala que impactem a política, a economia ou a cultura de forma global. <br><br>Este ciclo oportuniza uma expansão de consciência sem precedentes, onde o interesse pelos problemas do mundo se torna a sua maior motivação. O sentido aqui é a construção de um legado master que quebra limitações pessoais em nome do progresso da humanidade.",
            "Materialize o bem comum agora, agindo com equilíbrio emocional e um profundo senso de razão. <br><br>Use sua criatividade e visão privilegiada para construir estruturas que durem e que beneficiem a todos. Siga suas intuições éticas, não se perca na imensidão dos planos e coloque sua força de vontade a serviço de projetos grandiosos. O mundo espera pela sua capacidade de realizar o impossível!"
        ]
    },
            momento2: {
                // Cole aqui os textos específicos para o 2º Momento
                1: [
            "Este é o ciclo da afirmação do seu poder pessoal e da conquista do seu espaço no topo. <br><br>A energia aqui exige uma dose saudável de 'agressividade' — não contra os outros, mas a favor do seu sucesso. Você sentirá uma urgência em realizar e uma independência que não permite mais ser coadjuvante. É a hora de mostrar ao mundo quem é que manda na sua trajetória profissional.",
            "As portas se abrirão para papéis de liderança onde suas realizações ficarão em evidência para o público. <br><br>Surgirão promoções ou convites para novos empreendimentos que exigirão que você confie 100% na sua iniciativa. O sentido desta fase é a consolidação da sua autoridade: você está sendo chamado para ser o mestre da sua própria independência e evolução espiritual.",
            "Tome decisões firmes a favor do seu progresso e não tenha medo de empreender. <br><br>Lembre-se que, neste período, o seu crescimento depende exclusivamente da sua disposição em agir sozinho quando necessário. Desenvolva seus talentos com foco total no sucesso e lidere com a convicção de quem sabe exatamente onde quer chegar. Vá e vença!"
        ],
        2: [
            "Você entrou em uma fase onde o seu progresso profissional e pessoal depende da sua habilidade em ser o 'cimento' que une as pessoas. <br><br>A energia pede diplomacia, colaboração e uma paciência de mestre. O sucesso não virá através do embate, mas sim da sua capacidade de promover a harmonia e esperar o ritmo natural das colheitas, sem tentar forçar os ponteiros do relógio.",
            "A grande oportunidade reside nas associações estratégicas e no trabalho de parceria. <br><br>As realizações mais lucrativas e satisfatórias virão através das contribuições que você faz em conjunto com os outros. O sentido desta fase é te ensinar que a diplomacia é uma forma silenciosa de poder: quando todos ganham sob a sua mediação, você se torna indispensável e respeitado.",
            "Atue com diplomacia e paciência, deixando a competição de lado para focar na cooperação. <br><br>Tome decisões que favoreçam o grupo e aprenda a esperar pelos créditos baseados na sua utilidade para o time. O seu sucesso agora está na rede que você constrói; seja o parceiro que todos desejam ter e veja a carreira se consolidar através da união."
        ],
        3: [
            "Sua carreira agora entra sob os holofotes da criatividade, da expansão social e do carisma. <br><br>A energia pede que você use sua autoexpressão e jovialidade para abrir caminhos. É um período onde a popularidade será sua aliada, e o sucesso dependerá diretamente de como você se relaciona e influencia as pessoas ao seu redor de forma leve e inspiradora.",
            "As oportunidades de ouro surgirão através das expressões artísticas, da comunicação e das diversões. <br><br>Você tem chances reais de exercer liderança em equipes criativas ou departamentos onde a imagem e a fala são fundamentais. O sentido aqui é transformar seu jeito único de ser em um ativo profissional valioso, atraindo sucesso através da sua rede de influências.",
            "Mantenha a concentração e o foco nos seus objetivos, mesmo no meio da agitação social. <br><br>Use sua esperteza para perceber as chances que surgem nos encontros informais e brilhe socialmente com propósito. Comunique suas ideias com entusiasmo, cultive novas amizades e romances, e deixe que a sua criatividade seja o motor da sua consolidação profissional."
        ],
        4: [
            "Este é o período de fincar os pés no chão e construir o patrimônio que garantirá o seu futuro e o da sua família. <br><br>A energia pede trabalho efetivo, disciplina e uma persistência incansável. Não é hora de devaneios; é hora de aplicar preceitos corretos na direção do progresso material, entendendo que a ordem econômica é o sustentáculo para a sua evolução espiritual.",
            "A oportunidade real reside na concretização de bens e na ordenação definitiva da sua vida financeira. <br><br>Se você trabalhar de forma organizada, este ciclo trará o crescimento material que você sempre buscou. O sentido aqui é a segurança: você está sendo testado na sua capacidade de ser constante e produzir resultados sólidos que nada poderá abalar.",
            "Trabalhe com método, disciplina e força de vontade inabalável em direção aos seus objetivos. <br><br>Busque a excelência nos detalhes e não fuja da rotina produtiva; ela é o seu caminho para a vitória. Persista, economize com sabedoria e construa o seu alicerce de agora com a certeza de que a estabilidade será o seu prêmio por todo o esforço dedicado."
        ],
        5: [
            "A vibração agora é de liberdade, inovação e capacidade de funcionar confortavelmente em ambientes que mudam o tempo todo. <br><br>A energia pede versatilidade e flexibilidade diante das oscilações da vida. Você sentirá um desejo de se aventurar por novos empreendimentos e viagens, testando sua coragem para se livrar do que já está obsoleto e não serve mais.",
            "As atividades ligadas ao público e que permitem movimentação geográfica serão as mais bem-sucedidas. <br><br>Surgirão mudanças inesperadas que, se aproveitadas com rapidez, trarão um salto no seu progresso pessoal e profissional. O sentido desta fase é a expansão através do novo: você está aprendendo a surfar na onda das mudanças sem perder o equilíbrio.",
            "Adapte-se rápido às novidades e use sua liberdade com total responsabilidade. <br><br>Não use o desejo de mudança como fuga, mas como estratégia para inovar em sua carreira. Ouse arriscar quando a intuição mandar e aproveite a dose de sorte que este ciclo traz para quem tem coragem de se aventurar por novos e modernos horizontes."
        ],
        6: [
            "Este é o ciclo onde o bem-estar humano e a harmonia familiar ditam o ritmo do seu sucesso profissional. <br><br>A energia pede que você aceite responsabilidades crescentes no lar e na comunidade, agindo com diplomacia e afeto. Você descobrirá que, quando o seu ambiente familiar está em paz, a sua carreira decola com uma facilidade surpreendente.",
            "As oportunidades de alavancar a carreira surgirão dentro do seu grupo social ou profissional através do serviço e do aconselhamento. <br><br>Carreiras ligadas à saúde, educação, beleza ou nutrição estarão em alta. O sentido desta fase é o equilíbrio: você está aprendendo que o fator humano e a ambientação feliz são os pilares que dão sentido a qualquer conquista material.",
            "Nutra quem você ama com zelo e busque a harmonia em todos os seus cenários de convivência. <br><br>Ao tomar decisões de carreira, considere sempre a qualidade do ambiente e o impacto nas pessoas ao seu redor. Seja o pilar de sustentação e liderança para os seus, e veja a prosperidade chegar como um reflexo natural da sua dedicação e ética afetiva."
        ],
        7: [
            "Você entrou em uma fase de refinamento intelectual e moral, onde o conhecimento técnico e a busca pelo sentido da vida são prioridades. <br><br>A energia pede introspecção e estudo profundo, mas cuidado para não se isolar a ponto de prejudicar sua carreira. O sucesso agora depende da sua capacidade de ser um especialista, unindo sua inteligência aos assuntos espirituais ou tecnológicos.",
            "A oportunidade real reside em setores que exigem aperfeiçoamento técnico, científico ou intelectual de alto nível. <br><br>Há uma chance clara de evolução financeira se você se tornar uma autoridade no que faz. O sentido desta fase é a especialização: você está sendo convidado a refinar as habilidades mais preciosas da sua personalidade para atingir um novo patamar de excelência.",
            "Busque o silêncio e a verdade, estabelecendo limites claros entre seus estudos pessoais e suas obrigações profissionais. <br><br>Invista no aperfeiçoamento técnico e metafísico, mas mantenha os pés na prática do mercado. Use sua mente analítica para impulsionar sua carreira com sabedoria, tornando-se o mestre que o mundo respeita e procura por sua competência única."
        ],
        8: [
            "Esta é a vibração do poder administrativo, da liderança organizacional e da concretização dos planos que você desenhou na juventude. <br><br>A energia pede amadurecimento emocional e uma razão afiada para tomar decisões equilibradas. É o tempo de assumir o controle total, multiplicar riquezas e promover a justiça através da sua autoridade e do seu carisma.",
            "As portas se abrirão para cargos de alta liderança, política ou gestão de grandes recursos financeiros. <br><br>O sucesso dependerá da sua capacidade de equilibrar suas ambições com uma ética inquestionável. O sentido desta fase é a realização master: você está mostrando que tem o estofo necessário para gerir o mundo material e contribuir para o progresso de todos.",
            "Gerencie com estratégia e ética, assumindo as responsabilidades de comando que a vida te oferece. <br><br>Mantenha o equilíbrio entre a busca pelo lucro e o compromisso social. Mobilize seus colaboradores, concretize seus planos ambiciosos e lidere com a certeza de que a prosperidade real é aquela que gera valor para você e para a sociedade ao seu redor."
        ],
        9: [
            "Sua carreira agora é impulsionada por uma visão universal e pelo desejo de trabalhar em prol do desenvolvimento humano. <br><br>A energia pede desprendimento, tolerância e compaixão. Pode haver uma carga emocional maior nos seus planos, mas se você amadurecer suas reações, este se tornará o período mais gratificante da sua vida, onde o sucesso vem através do bem coletivo.",
            "As oportunidades surgirão em atividades que beneficiem o ser humano em larga escala, seja no voluntariado, na política ou em lideranças sociais. <br><br>Este ciclo favorece viagens e contatos com novas culturas, expandindo sua consciência. O sentido desta fase é a evolução espiritual através do trabalho: você está aprendendo que o verdadeiro prestígio nasce da sua alma generosa.",
            "Pratique o desapego e perdoe o passado, focando sua liderança em atividades humanitárias ou de grande impacto social. <br><br>Assuma decisões maduras que levem em conta o bem de todos e use sua visão ampla de mundo para alavancar sua carreira. Trabalhe com fraternidade e veja o sucesso e a fama chegarem como um reflexo da luz que você emana."
        ],
        11: [
            "Você vive sob uma influência de alta espiritualidade e inspirações que vêm diretamente do seu 'eu superior'. <br><br>A energia pede que você siga sua intuição para além dos limites do senso comum, mantendo uma ética absoluta em suas relações profissionais. É uma fase de prestígio elevado, onde sua visão diferenciada será a chave para assumir grandes responsabilidades.",
            "Surgirão oportunidades tanto esperadas para elevar seu patamar profissional de forma corajosa, seja na política, na academia ou em grandes organizações. <br><br>O reconhecimento público está à vista, mas exige que você mantenha o equilíbrio emocional diante das cobranças da consciência. O sentido aqui é a iluminação: você está sendo chamado para ser um farol de integridade no mercado.",
            "Siga sua fé e seus palpites com coragem, tomando decisões firmes que promovam o bem comum. <br><br>Não tenha medo de assumir a liderança de empreendimentos complexos; sua intuição te guiará onde a lógica falha. Aja pelo senso da razão inspirado pela ética, e você alcançará um nível de prestígio e realização que poucos conseguem atingir."
        ],
        22: [
            "Este é o momento mais poderoso de todos, onde as fronteiras geográficas, políticas e sociais se alargam para você. <br><br>A energia pede uma criatividade gigante e o idealismo necessário para realizar obras de alcance mundial. Você sentirá que pode tudo, mas essa força requer uma dose imensa de ética e equilíbrio emocional para não extrapolar no poder.",
            "Surgirão chances profissionais ou de estudos no exterior, em patamares que talvez estivessem além dos seus sonhos mais ousados. <br><br>Este ciclo favorece grandes realizações administrativas e empresariais voltadas para o bem comum. O sentido desta fase é a expansão da consciência global: você está aqui para construir o que é duradouro para a humanidade.",
            "Materialize o bem comum com coragem e mantenha-se firme na ética absoluta em todas as suas realizações. <br><br>Use sua visão ampla para enxergar além do óbvio e tome as decisões grandiosas que a vida te apresenta sem hesitar. O momento exige grandeza de espírito e uma força de vontade mestre para transformar sonhos mundiais em realidade concreta. Mãos à obra!"
        ]    
	},
            momento3: {
                
                1: [
            "Você chegou a um ponto de soberania absoluta sobre a sua própria trajetória. <br><br>A energia agora exige que você refine sua independência e use sua força de vontade para consolidar o sucesso de forma rápida e incisiva. Existe um grau de urgência e uma sensação de independência que te permite, finalmente, assumir o papel de líder supremo da sua jornada pessoal e profissional.",
            "As portas se abrem para o empreendedorismo de alto nível e para promoções que colocam você em evidência máxima diante do público. <br><br>Suas realizações agora são o espelho da sua iniciativa; é o momento em que o mundo reconhece que você não depende de ninguém para brilhar. O sentido desta fase é a consagração da sua autonomia e a evolução espiritual através do autogoverno.",
            "Tome decisões firmes a favor do que a vida te oferece e não hesite em iniciar novos empreendimentos que peçam o seu toque pessoal. <br><br>Use sua agressividade natural de forma estratégica para conquistar espaço e não espere por aprovações externas. O seu sucesso agora depende exclusivamente da sua coragem em ser original e independente. Avance com determinação!"
        ],
        2: [
            "Este é o momento de colher os frutos da sua sabedoria emocional e da sua rede de contatos. <br><br>A energia pede diplomacia refinada e a capacidade de ser o elo que mantém grandes projetos unidos. O sucesso não vem do esforço solitário, mas da sua habilidade em colaborar e promover a harmonia em ambientes de alta produtividade, onde cada peça deve se encaixar com perfeição.",
            "A grande oportunidade reside na consolidação de associações poderosas e parcerias de longo prazo. <br><br>Nesta fase estável da vida, suas realizações dependerão da sua paciência para esperar o ritmo certo das negociações, garantindo créditos baseados na sua contribuição intelectual e diplomática. O sentido aqui é o poder da união estratégica sobre a competição estéril.",
            "Atue com diplomacia e paciência, priorizando sempre a colaboração para o progresso de todos os envolvidos. <br><br>Fuja da competição direta, pois ela será o seu maior entrave; em vez disso, use sua sensibilidade para desatar nós e unir interesses. Tome decisões que tragam paz ao ambiente e veja sua carreira se consolidar através do respeito mútuo."
        ],
        3: [
            "Você vive a fase de expansão máxima da sua marca pessoal e do seu magnetismo social. <br><br>A energia pede que você use seus talentos criativos e sua comunicação para inspirar e liderar. É um período de popularidade consolidada, onde a vida é vivida de forma descontraída e jovial, atraindo amizades e oportunidades que surgem através do prazer de conviver.",
            "As oportunidades de ouro aparecem no campo da liderança de equipes criativas, nas comunicações e nas artes. <br><br>O seu sucesso depende da sua influência social e da 'esperteza' para perceber como as chances surgem em meio à sua rede de contatos. O sentido desta fase é mostrar que a sua criatividade é a chave para a realização de grandes objetivos profissionais.",
            "Mantenha a concentração e o foco nos seus objetivos, mesmo diante de uma vida social agitada e cheia de convites. <br><br>Comunique-se com brilho e use sua autoexpressão original para liderar departamentos ou empresas. Não disperse sua energia; direcione seu carisma para onde ele possa gerar valor real e transformar o seu meio social."
        ],
        4: [
            "Este é o momento de blindar o seu patrimônio e garantir que o seu alicerce seja inabalável para as próximas gerações. <br><br>A energia pede trabalho efetivo, disciplina rigorosa e uma persistência que não aceita atalhos. É a fase de concretizar resultados financeiros e profissionais, aplicando preceitos de ordem que sirvam de sustentáculo para a sua paz espiritual.",
            "As oportunidades de crescimento vêm através da sua aplicação técnica e da persistência no trabalho metódico. <br><br>Este ciclo favorece o progresso material sólido se você mantiver a organização acima de tudo. O sentido desta fase é a construção do seu legado: você está consolidando a obra de uma vida inteira através do suor e da seriedade.",
            "Trabalhe com método e rigor, mantendo a disciplina como o seu maior valor no dia a dia. <br><br>Não se assuste com eventuais limitações; encare-as como sinais para organizar ainda mais o que já foi construído. Persista em seus objetivos de longo prazo e use sua força de vontade para obter os resultados positivos que a sua dedicação merece."
        ],
        5: [
            "A vibração agora é de renovação e maestria na arte de mudar sem perder a direção. <br><br>A energia pede versatilidade e a habilidade de funcionar com conforto em ambientes mutantes e inovadores. É o momento de se livrar de velhos padrões que já não servem mais e abraçar a liberdade de experimentar novos empreendimentos e viagens.",
            "As atividades ligadas ao público e à movimentação constante serão as suas maiores fontes de progresso. <br><br>Nesta fase estável, a liberdade deve ser usada como ferramenta de expansão, não como fuga de responsabilidades. O sentido aqui é a modernização da sua carreira: você está sendo convidado a se aventurar pelo novo com a sorte ao seu lado.",
            "Adapte-se rápido às novidades e tome decisões de risco com a coragem de quem já conhece o jogo da vida. <br><br>Seja versátil e flexível diante das oscilações, mantendo o esforço constante nos seus objetivos. Aproveite as viagens e as mudanças inesperadas para oxigenar sua carreira e expandir sua influência pessoal para novos territórios."
        ],
        6: [
            "Este é o ciclo da maturidade afetiva, onde o sucesso profissional é impulsionado pela qualidade do seu ambiente familiar. <br><br>A energia pede que você aceite responsabilidades crescentes no cuidado com o próximo, agindo com ética e beleza. O cenário familiar terá precedência nas suas escolhas, garantindo que o seu progresso material seja um reflexo da harmonia doméstica.",
            "As oportunidades de alavancar a carreira surgirão dentro do seu círculo de afinidade, onde o fator humano pesa mais que os números. <br><br>Você será chamado para liderar, aconselhar e nutrir o bem-estar social através da sua profissão. O sentido desta fase é o serviço: você está consolidando sua posição no mundo através do conforto e da segurança que proporciona aos outros.",
            "Nutra quem você ama com zelo e avalie cada oportunidade profissional pela qualidade do ambiente humano que ela oferece. <br><br>Mantenha-se dedicado ao serviço e à diplomacia, pois o seu sucesso agora depende da efetividade de uma ambientação feliz para todos. Seja o pilar de equilíbrio e colha a segurança material que vem da sua generosidade."
        ],
        7: [
            "Você entrou na fase do refinamento intelectual e da busca pela excelência técnica. <br><br>A energia pede introspecção e estudo profundo sobre as filosofias e ciências que regem a vida. É o momento de aperfeiçoar suas habilidades mais preciosas e buscar o sentido metafísico da sua trajetória, unindo sabedoria interior com progresso profissional.",
            "A oportunidade real reside em setores que exigem alta especialização técnica, tecnológica ou intelectual. <br><br>Há uma possibilidade clara de evolução financeira se você souber separar o seu tempo de estudo pessoal das suas obrigações práticas. O sentido desta fase é o mestrado da vida: você está refinando o seu caráter para se tornar uma autoridade inquestionável.",
            "Busque o silêncio e a verdade, estabelecendo limites claros entre seus interesses esotéricos e sua carreira profissional. <br><br>Invista no seu aperfeiçoamento constante e use sua inteligência analítica para impulsionar sua carreira. Não se isole totalmente; use o seu conhecimento diferenciado para se destacar como alguém que possui respostas que outros não têm."
        ],
        8: [
            "Esta é a vibração da grande liderança e da promoção da justiça social através da prosperidade. <br><br>A energia pede amadurecimento emocional e decisões equilibradas para gerir grandes recursos e responsabilidades. É a fase de concretizar os planos ambiciosos da juventude, multiplicando riquezas e liderando organizações com mãos de mestre.",
            "As portas se abrem para atividades administrativas, políticas e sociais de alto impacto. <br><br>O seu carisma atrai colaboradores poderosos, e o sucesso dependerá da sua ética inabalável. O sentido aqui é a equalização: você está sendo chamado para mostrar que o progresso financeiro e o progresso espiritual podem e devem caminhar juntos.",
            "Gerencie com estratégia e ética, assumindo o papel de liderança que a vida te impõe com maturidade. <br><br>Tome decisões que levem em conta a contribuição para o progresso de todos ao seu redor. Mantenha o equilíbrio entre a sua ambição e a justiça, e veja o seu poder se consolidar como uma força de transformação real no mundo."
        ],
        9: [
            "Sua carreira e vida agora se voltam para o impacto humanitário e para a visão universal de mundo. <br><br>A energia pede compaixão, fraternidade e o exercício da tolerância absoluta. É um momento de desapego do que é pequeno para focar no que é eterno, trabalhando para o bem da humanidade em níveis intelectuais, científicos ou espirituais.",
            "As oportunidades surgirão em atividades que promovam o desenvolvimento humano e a libertação de laços obsoletos. <br><br>Você tem a chance de liderar movimentos sociais, políticos ou de voluntariado com uma sabedoria profunda. O sentido desta fase é a colheita espiritual: você está consolidando seu progresso através da paz, do perdão e do serviço ao coletivo.",
            "Doe-se e perdoe o passado, assumindo uma liderança madura que inspire as pessoas através do seu exemplo de altruísmo. <br><br>Assuma a responsabilidade de ser um cidadão do mundo e use sua visão universal para alavancar sua carreira. Trabalhe com paciência e compaixão, e veja a evolução espiritual coroar todas as suas conquistas materiais."
        ],
        11: [
            "Você vive sob uma influência de alta voltagem espiritual e reconhecimento nacional ou internacional. <br><br>A energia pede que você siga sua intuição e suas inspirações elevadas para expandir horizontes. É uma fase de prestígio profissional, onde sua conduta ética será cobrada pela sua própria consciência, exigindo que você seja um exemplo de integridade.",
            "Surgirão chances de se elevar no patamar profissional através de atividades que promovam o bem comum. <br><br>Favorece a liderança em grandes empresas, na política ou na academia, com o reconhecimento público batendo à sua porta. O sentido desta fase é a iluminação prática: você está sendo chamado para agir pelo senso da razão guiado pela fé.",
            "Siga sua fé e seus palpites com coragem, tomando a decisão firme de subir o seu nível profissional agora. <br><br>Não tema as grandes responsabilidades; sua intuição te dará as respostas que a lógica comum não alcança. Seja ético, mantenha o equilíbrio emocional e use o seu prestígio para transformar a realidade da sua organização e da sociedade."
        ],
        22: [
            "Este é o momento mais poderoso da escala numerológica, onde suas fronteiras geográficas e mentais simplesmente desaparecem. <br><br>A energia pede uma criatividade gigante e o idealismo necessário para realizar obras de alcance mundial. É a fase do mestre construtor, onde o anseio por progresso se une a uma expansão de consciência sem precedentes.",
            "Surgirão oportunidades profissionais ou de estudo no exterior, em níveis muito além das suas expectativas iniciais. <br><br>Favorece grandes realizações administrativas e políticas voltadas para o bem comum da humanidade. O sentido desta fase é a construção do impossível: você está aqui para materializar sonhos globais com as mãos de quem conhece o segredo do sucesso.",
            "Materialize o bem comum agora com coragem e mantenha-se firme na ética, pois o seu poder de realização é imenso. <br><br>Tome decisões grandiosas sem medo e use sua visão ampla para enxergar oportunidades além do senso comum. Não se perca na vaidade do poder; coloque sua força de vontade a serviço de projetos que deixem uma marca positiva no planeta."
    ]    
	    },
            momento4: {
                // Cole aqui os textos específicos para o 4º Momento
                1: [
            "Você entra em uma fase onde o ímpeto de realizar e a sua força de vontade continuam vibrando alto, desafiando qualquer ideia de aposentadoria convencional. <br><br>Diferente do que o senso comum espera para esta etapa, o número 1 mostra que seu desejo de empreender e liderar não vai diminuir; pelo contrário, novos desafios surgirão para marcar sua trajetória com originalidade e independência até o fim.",
            "Este é o momento de colher os frutos da sua própria individualidade, assumindo cargos de alta responsabilidade ou liderando projetos independentes que refletem quem você realmente é. <br><br>Sua habilidade para conduzir e dirigir processos estará no ápice, permitindo que você deixe uma marca inconfundível de liderança e originalidade na sociedade ou no seu meio profissional.",
            "Tome a decisão importante que você vem adiando, pois o que for definido agora perdurará por toda a sua jornada final. <br><br>Não tente reduzir o ritmo se o seu coração pede movimento; assuma seu papel de comando com orgulho e use sua experiência para guiar novos caminhos. O seu sucesso final depende da sua coragem de continuar sendo o capitão da sua própria história!"
        ],
        2: [
            "Sua jornada agora flui para uma fase de profunda paz, equilíbrio e harmonia em todas as áreas. <br><br>A energia pede que você reduza a velocidade e aprecie o ritmo natural das coisas, cultivando o tato e a diplomacia que acumulou ao longo dos anos. É um tempo de suavidade, onde a sua presença tranquila se torna um porto seguro para todos ao seu redor.",
            "A grande oportunidade desta fase é se dedicar ao que possui valor emocional verdadeiro, seja cuidando de algo precioso para você ou colaborando em projetos sociais. <br><br>A vida te convida a uma atuação mais humanizada e atenciosa, onde o seu papel de mediador e conselheiro ganha um destaque especial. O sentido aqui é a evolução espiritual através da colaboração e do apoio mútuo.",
            "Atue com diplomacia e calma, aceitando que um ritmo desacelerado pode ser, na verdade, muito mais produtivo e gratificante. <br><br>Não confunda tranquilidade com acomodação; use este período para dar novos impulsos ao seu progresso pessoal de forma suave. Cultive suas relações com carinho e permita que a sua sensibilidade guie suas ações em prol do bem-estar coletivo."
        ],
        3: [
            "Você vive uma fase de leveza e alegria, onde a criatividade e a vida social ocupam o centro do palco. <br><br>A energia agora é de despreocupação com as obrigações pesadas do passado, permitindo que você desfrute da liberdade e do conforto que conquistou. É um período vibrante e ativo, que mantém o seu espírito jovem e conectado com as pessoas.",
            "Surgirão oportunidades fascinantes para empreender em áreas ligadas à comunicação e à expressão dos seus talentos mais genuínos. <br><br>O seu carisma natural e a sua popularidade facilitam a realização de atividades prazerosas, como viagens e eventos sociais. O sentido desta fase é celebrar a vida através da arte, da conversa e do compartilhamento de momentos felizes.",
            "Comunique-se e brilhe socialmente, permitindo que a sua criatividade seja o motor das suas atividades diárias. <br><br>Aproveite a liberdade para viajar e explorar novos interesses que tragam diversão e conforto. Não tenha medo de ser jovial; use a sua autoexpressão para inspirar os outros e viva este ciclo com a alegria de quem sabe que o melhor da vida é o agora."
        ],
        4: [
            "Este é o ciclo da consolidação definitiva, onde o trabalho continua sendo a sua fonte de satisfação e segurança. <br><br>A energia pede que você mantenha a disciplina e o foco na construção de uma base ainda mais sólida, adiando qualquer ideia de parar totalmente. Para você, a atividade é o que traz sentido e vitalidade, garantindo que o seu sustento material seja um reflexo do seu progresso espiritual.",
            "A oportunidade real é consolidar firmemente as bases do seu conforto e segurança material para esta fase final da vida. <br><br>Você terá a chance de realizar projetos concretos que exigem paciência e um olhar atento aos detalhes. O sentido aqui é a autorrealização através do trabalho prazeroso e útil, deixando um legado de ordem e estabilidade para os que virão depois.",
            "Trabalhe com método e rigor, buscando prazer em cada tarefa executada e mantendo a disciplina como sua bússola. <br><br>Use sua força de vontade para obter resultados positivos e não se canse de construir; a sua segurança financeira depende da sua persistência. Encare o trabalho como uma missão de vida e colha a paz de ter um futuro totalmente protegido sob seu controle."
        ],
        5: [
            "Prepare-se para uma fase agitada e cheia de variedades, onde a palavra 'parar' simplesmente não faz parte do seu vocabulário. <br><br>A energia traz mudanças constantes e novas sensações, exigindo que você use toda a experiência acumulada para lidar com o inesperado. Se você construiu uma base sólida anteriormente, este será um período de liberdade despreocupada e muita inovação.",
            "A grande oportunidade desta fase é realizar uma mudança radical de estilo de vida, abandonando o convencional em busca de algo alternativo e flexível. <br><br>Sua coragem estará em alta para explorar novos empreendimentos e viagens que tragam um ar de renovação constante. O sentido aqui é a versatilidade: você está aprendendo a ser livre e independente até o último dia.",
            "Adapte-se rápido às novidades e não tenha medo de reinventar a sua trajetória de forma ousada. <br><br>Exercite sua liberdade com responsabilidade, buscando novas aventuras que mantenham a sua mente ativa e curiosa. Seja flexível diante das oscilações e use sua coragem para desbravar caminhos que tragam frescor e dinamismo para a sua fase final."
        ],
        6: [
            "Este é o ciclo da plenitude afetiva, onde as relações familiares e as amizades sinceras são os seus maiores tesouros. <br><br>A energia traz alegrias e recompensas pelo trabalho que você desenvolveu ao longo da vida em prol do bem-estar dos outros. É o momento de colher o amor e o reconhecimento, transformando a sua experiência em nutrição para o seu círculo social.",
            "Você terá chances preciosas de compartilhar o que a vida tem de melhor, contribuindo para o progresso humano através do voluntariado ou de terapias de bem-estar. <br><br>O sentido desta fase é a doação e a harmonia; o foco no ser humano e no meio ambiente trará um profundo sentimento de utilidade e paz. Sua casa e sua comunidade se tornam o palco da sua maior realização.",
            "Nutra quem você ama com zelo e use a sua sabedoria para aconselhar e ajudar todos ao seu redor. <br><br>Dedique-se a atividades que visem a saúde e o conforto do próximo, agindo com ética e beleza. O seu sucesso agora é medido pela felicidade que você ajuda a criar; seja o pilar de harmonia da sua família e viva as alegrias de um lar feliz."
        ],
        7: [
            "Você vive o convite para a quietude salutar e para o aprimoramento final do seu autoconhecimento. <br><br>A energia pede estudo, meditação e uma busca profunda pelas verdades espirituais e morais. É um período de solitude, onde o silêncio deixa de ser ausência e passa a ser o preenchimento da alma com a sabedoria que só o tempo e a introspecção concedem.",
            "A grande oportunidade é se envolver em ocupações que proporcionem o aprimoramento do seu conhecimento para ajudar os outros a crescerem também. <br><br>Este cenário favorece o aperfeiçoamento profissional e espiritual de alto nível, permitindo que você se torne um mestre consultado por sua visão profunda. O sentido aqui é a luz intelectual e ética que você emana no silêncio.",
            "Busque o silêncio e a verdade, dedicando-se aos estudos que refinam as habilidades mais preciosas da sua alma. <br><br>Não tema o isolamento; use-o para encontrar o sentido último da vida e para contribuir com o desenvolvimento intelectual dos outros. Sua quietude hoje é o substrato rico que alimenta a sua evolução espiritual definitiva."
        ],
        8: [
            "Este é o ciclo do status consolidado e da autoridade exercida com maestria na esfera social ou política. <br><br>A energia favorece que você se mantenha em uma posição de destaque e poder, continuando na ativa com novos projetos ambiciosos até o fim. Diferente de muitos, você sente que o seu papel de comando é o que te dá energia e propósito para viver.",
            "Surgirão oportunidades para assumir posições importantes em organizações corporativas ou cargos de influência na sociedade. <br><br>Sua disposição para empreender e gerir recursos estará em alta, sustentando uma atmosfera de prestígio e reconhecimento. O sentido desta fase é a realização material com carisma, gerando prosperidade e justiça para o coletivo.",
            "Gerencie com estratégia e ética, assumindo com coragem o lugar de autoridade que a vida te reserva. <br><br>Mantenha-se ativo em novos projetos e use o seu status para multiplicar riquezas e oportunidades para o desenvolvimento humano. O seu poder agora deve ser uma ferramenta de progresso para todos, consolidando o seu nome na história."
        ],
        9: [
            "Sua jornada agora é guiada pela compaixão, pela fraternidade e pelo desejo de deixar um mundo melhor. <br><br>A energia pede desapego e foco em resultados que beneficiem a humanidade como um todo, aflorando uma sensibilidade emocional profunda. É o tempo da caridade e da espiritualidade prática, onde você enxerga a dor do outro como se fosse sua.",
            "Você terá oportunidades fascinantes em atividades filantrópicas ou voluntárias, dedicando-se aos que mais necessitam da sua colaboração. <br><br>O sentido desta fase é a sabedoria universal e a paz que vem do serviço desinteressado. Suas atitudes altruístas serão o seu maior investimento, trazendo uma fama e um reconhecimento que nascem da pureza do seu coração.",
            "Doe-se e perdoe o passado, praticando o desprendimento de bens e mágoas para alcançar a paz definitiva. <br><br>Trabalhe pelo bem da humanidade com foco na solidariedade e não perca uma única chance de exercer a compaixão. O seu sucesso agora é medido pelo amor que você espalha e pela evolução espiritual que você alcança através do serviço sincero."
        ],
        11: [
            "Você vive o auge de uma carreira brilhante, marcada pela inspiração e por um reconhecimento público de grande alcance. <br><br>A energia pede que você siga as intuições do seu eu superior para realizar atividades que promovam o bem comum. É um período de grande satisfação espiritual, onde a sua fé e a sua visão iluminada guiam cada passo do seu sucesso final.",
            "A grande oportunidade é se envolver mais com a sociedade, atuando na política, em atividades acadêmicas ou comunitárias com prestígio. <br><br>A vida te convida a usar o seu brilho para inspirar a coletividade, expandindo horizontes através da espiritualidade. O sentido desta fase é a iluminação prática: você é o mestre que une o céu e a terra em suas ações profissionais.",
            "Siga sua fé e seus palpites, tomando decisões corajosas que elevem o seu patamar profissional e social. <br><br>Mantenha o equilíbrio emocional e aja sempre pela ética, dedicando seus talentos ao serviço da humanidade. O seu prestígio é uma ferramenta de luz; use-a para guiar os outros e sinta a profunda alegria de cumprir a sua missão divina."
        ],
        22: [
            "Este é o momento mais poderoso de todos, onde sua capacidade de construir o impossível atinge o nível máximo de realização. <br><br>A energia é tão forte que parar de trabalhar pode ser uma autocondenação à frustração; você nasceu para estar ativo, estimulando o progresso coletivo e realizando obras que desafiam as fronteiras convencionais.",
            "Grandes realizações de alcance mundial estarão à sua vista até os últimos dias da sua jornada. <br><br>Você tem o potencial de materializar projetos gigantescos que beneficiem a humanidade, seja através de empresas, política ou voluntariado. O sentido aqui é o legado eterno: você é o mestre construtor que molda o futuro com as mãos da sabedoria.",
            "Materialize o bem comum agora com coragem e não aceite o modo 'aposentado' se o seu espírito pede construção. <br><br>Use sua visão ampla para além do senso comum e tome decisões que impactem gerações. Mantenha-se firme na ética, execute seus planos com razão e sinta a glória de ver o seu enorme potencial transformar a realidade do mundo até o fim."
            ]
            } // fecha momento4
        } // fecha conteudos
    } // fecha momento
}; // fecha TextosJornada

/* ==========================================================================
   5. NUMEROLOGIA DA CASA (NOVA ESTRATÉGIA DE UX)
   ========================================================================== */

const TextosCasa = {
    // 1. Diagnóstico das Casas (1-9)
    analises: {
        1: {
            titulo: "A Casa do Individualismo e da Iniciativa",
            texto: `<p>Sua casa representa a energia da independência total, mas cuidado: ela costuma ser um lugar onde o "eu" é tão forte que o "nós" acaba sufocado. É aquela sensação de que você está sempre em uma arena, pronto para a próxima batalha, mas sem ninguém ao lado para dividir o peso.</p>
            <h4>A armadilha do "Eu Faço Sozinho"</h4><p>Sabe aquela sensação de que, se você não fizer, ninguém faz? A casa 1 alimenta esse orgulho. Ela dificulta muito o pedido de ajuda. No dia a dia, isso se traduz em um cansaço extremo, porque você sente que carrega a responsabilidade de tudo nas costas, transformando o lar em um escritório de comando e não em um lugar de descanso.</p>
            <h4>O clima de tensão constante</h4><p>Como a energia é de início e ação, a casa nunca relaxa. É comum que os moradores fiquem impacientes uns com os outros. Sabe aquelas brigas bobas por querer que as coisas sejam do seu jeito e agora? É a casa soprando no seu ouvido que a sua vontade é a única que conta.</p>
            <h4>Dificuldade em criar raízes afetivas</h4><p>Se você mora com mais pessoas, pode sentir que cada um vive em sua própria ilha. A casa 1 atrapalha a intimidade profunda porque estimula demais a individualidade. Se você não cuidar, ela se torna apenas um lugar onde pessoas moram juntas, mas não compartilham a vida.</p>
            <h4>O motor que nunca desliga</h4><p>Energeticamente, é uma casa que te deixa ligado no 220v. Isso é ótimo para prosperar, mas péssimo para a saúde mental. A dificuldade de pegar no sono ou de realmente "desligar" do trabalho é um sintoma claro de que a casa está te cobrando produtividade o tempo todo.</p>`
        },
        4: {
            titulo: "A Casa da Estabilidade, do Trabalho e da Estrutura",
            texto: `<p>Sua casa representa a estrutura e a segurança, mas ela pode se tornar uma prisão de regras. Ela costuma ter uma energia pesada, onde o dever sempre vem antes do prazer. Sabe aquela sensação de que sempre tem algo para consertar, uma conta para organizar ou uma faxina pendente? É a casa 4 te transformando em um escravo da rotina.</p>
            <h4>A vida que vira uma lista de tarefas</h4><p>A casa 4 drena a sua alegria e a sua espontaneidade. Você acorda pensando no que "tem que fazer" e deita pensando no que não deu tempo. Atrapalha muito a criatividade e a leveza; a vida parece que perde a cor porque tudo é resolvido com lógica e esforço bruto.</p>
            <h4>O peso da manutenção interminável</h4><p>Sabe aquela infiltração que volta, a lâmpada que queima ou a sensação de que a casa "pede" reparo o tempo todo? Essa vibração é muito ligada à matéria. Ela dificulta o seu lazer, porque você se sente culpado se sentar no sofá enquanto houver uma louça na pia ou um armário desorganizado.</p>
            <h4>A rigidez nos relacionamentos</h4><p>Nesse endereço, a conversa costuma ser sobre obrigações e problemas práticos. Dificulta muito o romance e a brincadeira. O clima fica sério demais, e as pessoas tendem a se cobrar o tempo todo, criando uma atmosfera onde o erro não é permitido e a crítica é constante.</p>
            <h4>O bloqueio da expansão</h4><p>A casa 4 é ótima para manter o que você tem, mas péssima para quem quer dar um salto e crescer rápido. Ela é lenta. Se você quer inovação e rapidez, esse endereço vai te segurar no tradicional, no "sempre foi assim", dificultando qualquer mudança mais ousada na sua vida.</p>`
        },
        7: {
            titulo: "A Casa da Concentração, da Introspecção e da Sabedoria",
            texto: `<p>Sua casa funciona como um santuário de autoconhecimento, mas o preço disso é o distanciamento da vida real. Ela costuma ser silenciosa demais, fria e introspectiva. Sabe aquela sensação de que, mesmo com gente em casa, você se sente profundamente sozinho ou incompreendido? É o 7 te puxando para dentro de uma bolha.</p>
            <h4>O perigo da melancolia</h4><p>A energia dessa casa favorece muito o pensamento, mas também o excesso de análise. Isso atrapalha sua felicidade imediata. Você começa a questionar tudo e pode cair em um estado de tristeza ou desânimo, onde nada no mundo exterior parece ter graça ou importância.</p>
            <h4>A casa que "espanta" as pessoas</h4><p>Já reparou que as visitas raramente aparecem ou que o clima fica estranho quando alguém chega? A casa 7 cria uma barreira invisível. Ela dificulta a vida social e o networking. Se você precisa de contatos e parcerias para crescer, esse endereço vai ser um obstáculo silencioso.</p>
            <h4>O dinheiro que perde o sentido</h4><p>Energeticamente, a casa 7 foca no espírito e na mente. Ela dificulta muito a prosperidade material. Sabe aquela sensação de que o dinheiro é algo "sujo" ou que você não tem ânimo para lutar por conquistas financeiras? É o ambiente te desconectando das necessidades do mundo físico.</p>
            <h4>Dificuldade de comunicação direta</h4><p>As pessoas nessa casa tendem a se fechar em seus próprios estudos ou pensamentos. Atrapalha a clareza nas relações; o que deveria ser dito fica guardado, e o que é dito costuma ser intelectualizado demais, sem calor humano. O lar se torna uma biblioteca fria e não um ninho quente.</p>`
        },
        9: {
            titulo: "A Casa do Pronto-Socorro",
            texto: `<p>Sua casa por ser a de número 9 é a casa "pronto-socorro". Ela costuma ter a porta sempre aberta para o drama alheio. Sabe aquela sensação de que você nunca tem paz porque sempre tem um parente, um amigo ou até um vizinho pedindo um favor ou contando uma tragédia? É o 9 te transformando no assistente social do bairro.</p>
            <h4>O dreno da sua energia vital</h4><p>Como a casa é um polo de doação, ela atrai pessoas sugadoras. Você sente que, ao final do dia, está exausto porque "ouviu" demais e "resolveu" demais os problemas dos outros. Atrapalha seu autocuidado; você cuida do mundo, mas ninguém cuida de você dentro desse lar.</p>
            <h4>O cemitério da prosperidade financeira</h4><p>Se você quer construir riqueza, saia da casa 9. Ela não ajuda de forma alguma quem quer acumular. A energia aqui é de "doação" e "fim de ciclo". O dinheiro que entra parece que "vaza" para ajudar alguém ou para cobrir urgências de outras pessoas. É uma casa de passagem, não de acúmulo.</p>
            <h4>A falta de privacidade absoluta</h4><p>Nesse endereço, a sua vida vira patrimônio público. As pessoas se sentem no direito de dar palpites ou de entrar sem avisar. Dificulta muito a sua intimidade e os seus projetos pessoais, porque o foco está sempre no coletivo e nas necessidades alheias.</p>
            <h4>O peso emocional dos fins de ciclo</h4><p>A casa 9 é o número da limpeza final. Isso significa que coisas e pessoas saem da sua vida o tempo todo. É uma casa onde os encerramentos são frequentes e, muitas vezes, dolorosos. Se você não gosta de perdas ou de mudanças drásticas, essa energia vai te causar muita ansiedade e sofrimento.</p>`
        },
        2: {
            titulo: "A Casa da Sensibilidade e da Harmonia",
            texto: `<p>Sua casa representa a energia da união e do cuidado compartilhado. Ela costuma ser um lugar com uma atmosfera suave, onde as paredes parecem abraçar quem entra. Sabe aquela sensação de que o diálogo flui sem esforço e que estar junto é a melhor parte do dia? É a vibração do 2 criando um campo de harmonia no seu cotidiano.</p>
            <h4>O Prazer da Companhia e do Afeto</h4><p>Neste endereço, a vida a dois ou as amizades ganham uma força especial. A casa favorece muito o carinho e a vontade de dividir as coisas. É o lugar perfeito para quem quer cultivar relacionamentos profundos, onde a parceria é o alicerce de tudo.</p>
            <h4>Um Refúgio de Paz e Descanso</h4><p>Diferente de casas mais agitadas, aqui o silêncio é confortável. O ambiente te convida a desacelerar e a valorizar os pequenos gestos. É uma casa que "pede" por flores, músicas suaves e momentos de relaxamento. Ela cura o estresse da rua só de você passar pela porta.</p>
            <h4>A Facilidade em Ouvir e Compreender</h4><p>A energia do 2 deixa as pessoas mais receptivas. Sabe aquela facilidade em entender o que o outro está sentindo antes mesmo dele falar? Morar aqui aguça a sua empatia, tornando a convivência muito mais leve e livre de confrontos desnecessários.</p>
            <h4>A Magia dos Detalhes Acolhedores</h4><p>É uma casa que se torna linda através dos detalhes: uma manta no sofá, uma luz indireta, um café servido com calma. Tudo nela remete ao cuidado. É o lugar onde as pessoas entram e não têm vontade de ir embora, porque se sentem verdadeiramente bem-vindas.</p>
            <p><strong>Atenção:</strong> Como o ambiente é muito sensível e voltado para o outro, os moradores podem acabar caindo na indecisão ou na passividade. Cuidado para não anular suas vontades próprias apenas para manter a paz ou para agradar o parceiro. Trabalhe sua autoconfiança e aproveite a doçura dessa casa.</p>
            <p><strong>Nota do Numerólogo:</strong> Eu amo a energia desta casa. Ela é um bálsamo para o coração e eu sempre aconselho as pessoas que buscam paz e união a ficarem sob esta regência.</p>`
        },
        6: {
            titulo: "A Casa da Família, do Amor e do Acolhimento",
            texto: `<p>Sua casa representa a energia da harmonia familiar e da responsabilidade afetiva. Ela costuma ser o "ninho" oficial da família, onde o bem-estar de todos é a prioridade. Sabe aquela sensação de segurança e de que nada no mundo é mais importante do que o seu lar estar em ordem? É o 6 transformando sua casa em um santuário de amor.</p>
            <h4>O Fortalecimento dos Laços Familiares</h4><p>Esta casa é um ímã para a família. É o lugar dos almoços de domingo, das risadas na cozinha e do cuidado mútuo. Morar aqui faz com que os moradores se sintam protegidos e valorizados. É o endereço ideal para criar filhos e construir memórias que duram a vida toda.</p>
            <h4>O Dom de Transformar o Espaço em Lar</h4><p>Quem mora na casa 6 sente um prazer natural em decorar e cuidar de cada canto. A casa costuma ser linda, organizada e cheia de vida. Existe um senso estético muito forte aqui, onde a beleza visual serve para alimentar a paz da alma.</p>
            <h4>A Satisfação em Cuidar e Proteger</h4><p>A energia do 6 desperta o que há de melhor no ser humano: a vontade de servir e ajudar. Morar aqui te deixa mais atento às necessidades de quem você ama, criando uma rede de apoio emocional que sustenta todos nos momentos difíceis.</p>
            <h4>O Equilíbrio e a Estabilidade de Vida</h4><p>É uma casa que traz uma sensação de "eixo". Você se sente mais equilibrado e com os pés no chão. É um ambiente que favorece a fidelidade, o compromisso e a construção de uma vida sólida, pautada em valores éticos e muito amor.</p>
            <p><strong>Atenção:</strong> A casa de número 6 deixa você e os moradores muito sensíveis e, às vezes, um pouco ciumentos ou controladores um com o outro. O excesso de preocupação pode virar cobrança. Trabalhe essa questão, evite o perfeccionismo e aproveite os benefícios imensos dessa energia.</p>
            <p><strong>Nota do Numerólogo:</strong> Esta é uma das vibrações mais belas que existem para um lar. Eu sempre aconselho as pessoas a buscarem essa regência quando querem estabilidade emocional e um lugar que realmente possa ser chamado de porto seguro.</p>`
        },
        3: {
            titulo: "A Casa da Expressão, da Alegria e da Vida Social",
            texto: `<p>Sua casa representa a energia da expansão e da expressão. Ela costuma ser um lugar onde as ideias borbulham e o silêncio é quase inexistente. Se você trabalha com público, redes sociais ou criação, essa casa é um imã de audiência. Sabe aquela sensação de que a sua mente não para e que você sempre tem algo novo para postar ou falar? É a vibração do 3 te colocando no centro do palco.</p>
            <h4>O Impulso para o seu Negócio</h4><p>Você vai sentir uma facilidade incrível para fazer networking e vender suas ideias. É a casa ideal para quem precisa de carisma e visibilidade. O ambiente te deixa mais leve, bem-humorado e articulado, o que é excelente para fechar parcerias e atrair movimento para o seu digital.</p>
            <h4>Onde ela atrapalha o seu dia</h4><p>Sabe aquela sensação de começar mil coisas e não terminar nenhuma porque se distraiu com uma notificação? A casa 3 dificulta muito o foco. Ela espalha a sua energia. Atrapalha a sua disciplina e pode transformar o seu dia em um eterno "falar, falar e não realizar". Se você não se cuidar, a casa vira uma bagunça física e mental, e o seu dinheiro some em gastos impulsivos com prazeres imediatos.</p>
            <p><strong>Atenção:</strong> A casa 3 é barulhenta e dispersa. Se você não tiver uma agenda rígida, ela vai roubar sua produtividade. Trabalhe a sua concentração e aproveite o brilho que essa energia dá para a sua imagem.</p>`
        },
        5: {
            titulo: "A Casa do Movimento, da Mudança e da Liberdade",
            texto: `<p>Sua casa representa a energia da liberdade e da mudança rápida. Ela costuma ser um lugar elétrico, onde nada fica parado por muito tempo. Se você vive de vendas, lançamentos ou precisa estar sempre se reinventando no mercado, esse endereço é o seu combustível. Sabe aquela sensação de que o mundo é pequeno e que você precisa de movimento constante para se sentir vivo? É o 5 agitando a sua rotina.</p>
            <h4>O Impulso para o seu Negócio</h4><p>Esta casa atrai oportunidades inesperadas. Ela é excelente para quem trabalha com vendas rápidas e precisa de adaptabilidade. Você vai se sentir mais ousado para arriscar e inovar. O magnetismo aqui é forte para atrair gente nova e situações que te tiram da zona de conforto, o que é vital para quem empreende no digital.</p>
            <h4>Onde ela atrapalha o seu dia</h4><p>Sabe aquela ansiedade que bate no peito e você não sabe de onde vem? É a falta de raízes da casa 5. Ela dificulta muito a criação de uma rotina sólida. Atrapalha o seu descanso porque você sente que está sempre perdendo alguma coisa se ficar parado. Dificulta a fidelidade aos seus próprios planos de longo prazo, te fazendo mudar de rota toda hora e gerando um cansaço mental por excesso de estímulos.</p>
            <p><strong>Atenção:</strong> A casa 5 é instável. Se você não tiver um "ponto de equilíbrio" interno, ela vai te deixar exausto e sem rumo. Trabalhe a sua disciplina e aproveite a velocidade incrível que essa energia traz para os seus negócios.</p>`
        },
        8: {
            titulo: "A Casa do Poder Material, da Justiça e da Realização",
            texto: `<p>Sua casa representa a energia da eficiência e da prosperidade material. Ela costuma ter uma aura de autoridade e seriedade, como se fosse o centro de comando de uma grande empresa. Se você é um líder, investidor ou CEO que precisa de foco total em resultados, essa casa é o seu trono. Sabe aquela sensação de que o tempo é dinheiro e que você nasceu para o sucesso? É o 8 comandando cada segundo do seu dia.</p>
            <h4>O Impulso para o seu Negócio</h4><p>Este endereço é um acelerador de riqueza. Ele te deixa mais prático, frio para negociar e extremamente focado em metas. A casa 8 exige que você seja organizado e profissional. Morar aqui ajuda a construir autoridade e a ser respeitado no seu nicho. É o lugar perfeito para quem quer subir de nível financeiro e estruturar um império.</p>
            <h4>Onde ela atrapalha o seu dia</h4><p>Sabe aquela sensação de que você nunca é "apenas você", mas sempre o seu cargo ou o seu negócio? A casa 8 dificulta muito a leveza e o afeto. Atrapalha o seu relaxamento porque você tende a ver tudo como uma transação ou uma meta a bater. O clima dentro de casa pode ficar pesado, com discussões voltadas apenas para dinheiro ou poder, dificultando a conexão emocional com quem mora com você.</p>
            <p><strong>Atenção:</strong> A casa 8 é exigente e fria. Se você não cuidar do seu coração, ela vai te transformar em um robô focado apenas em produção. Trabalhe a sua empatia, aprenda a desligar o "modo empresário" e aproveite o imenso poder de materialização que essa casa oferece.</p>`
        }
    },

    // 2. Cartões de Opções
    opcoes: {
        empresarios: {
            titulo: "EMPRESÁRIOS E INFLUENCIADORES",
            subtitulo: "As melhores frequências de casas pra vocês.",
            intro: `<p>Escolher o número da sua casa é como escolher o terreno onde você vai plantar o seu futuro. Quando harmonizamos um endereço, conseguimos "puxar" exatamente a vibração que falta para o seu negócio decolar. Para quem empreende e fez da própria casa o seu centro de comando, existem três regências que são verdadeiros divisores de águas. Se você trabalha em casa, preste atenção nestas três opções:</p>`,
            casas: [
                { num: 3, nome: "Casa 3 – A casa da comunicação e da criatividade", desc: "<p>Essa casa potencializa sua comunicação, aumenta sua capacidade de se expressar e influencia diretamente nas vendas.<br><br> A Casa 3 estimula novas ideias, criatividade constante e mais disposição para criar, divulgar e se conectar com pessoas.<br><br> É ideal para quem trabalha com comunicação, marketing, conteúdo, ensino ou vendas.</p>" },
                { num: 5, nome: "Casa 5 – A casa do fluxo constante", desc: "<p>Essa casa ativa movimento, dinamismo e oportunidades contínuas. A energia da Casa 5 te mantém em estado de ação, como se estivesse sempre “ligado no 220v”.<br><br> Favorece fluxo de pessoas, vendas recorrentes, mudanças rápidas e crescimento por meio do movimento.<br><br> É indicada para quem precisa de ritmo, liberdade e circulação constante de energia e dinheiro.</p>" },
                { num: 8, nome: "Casa 8 – Poder, estabilidade e materialização", desc: "<p>A Casa 8 é a união das forças do 3 e do 5: comunicação, movimento, fluxo e vendas constantes, com foco em resultados e dinheiro rápido.<br><br> É um número poderoso para quem busca crescimento financeiro, autoridade e estabilidade material.<br><br>⚠ <strong>Orientação importante: </strong>Ao escolher a Casa 8, é essencial agir com justiça, honestidade e disciplina. Mantenha uma rotina organizada e equilíbrio emocional.<br><br> Quando mal utilizada, a energia do 8 pode se voltar contra você, trazendo quedas em vez de crescimento. Este número exige responsabilidade, maturidade e consciência.</p>" }
            ]
        },
        familia: {
            titulo: "A MELHOR FREQUÊNCIA PARA A FAMÍLIA",
            subtitulo: "As melhores casas para a prosperidade familiar",
            intro: `<p>Se você busca um lugar onde o sucesso nasce da harmonia e onde a riqueza é medida pela qualidade dos laços que você constrói, as Casas 2 e 6 são os seus endereços ideais. Diferente das casas de movimento acelerado, aqui a prosperidade chega de mansinho, através da união.</p>`,
            casas: [
                { num: 2, nome: "Casa 2 – O lar da união e da prosperidade", desc: "<p><strong>A Força da União:</strong> Este lar ativa a união entre os membros da família, fortalece decisões tomadas em parceria e estimula a cooperação, o diálogo e o equilíbrio emocional. <strong><br><br>O Ambiente:</strong> É uma vibração que favorece acordos, convivência harmoniosa e crescimento construído em conjunto.</p>" },
                { num: 6, nome: "Casa 6 – O lar onde a família é a prioridade", desc: "<p><strong>Este lar vibra no cuidado, na proteção e no forte senso de pertencimento.</strong> A Casa 6 fortalece os laços entre todos que convivem nesse lar, criando um ambiente vivo, acolhedor e afetivo.<br><br> <strong>É uma casa marcada por calor humano,</strong> a prosperidade se manifesta de forma contínua, ligada à harmonia, ao apoio mútuo e à segurança emocional.</p>" }
            ]
        }
    },

    // 3. Escolhas de Harmonização — Microcopy Premium
escolhas: {
    2: "Você escolheu a Casa 2: o lar que ativa união, harmonia e decisões em parceria.",
    3: "Você escolheu a Casa 3: o lar que ativa criatividade, comunicação e visibilidade social.",
    5: "Você escolheu a Casa 5: o lar que ativa movimento, fluxo, oportunidades e liberdade.",
    6: "Você escolheu a Casa 6: o lar que ativa união, prosperidade familiar e bem-estar.",
    8: "Você escolheu a Casa 8: o lar que ativa prosperidade, poder material e crescimento."
},


    // 4. Técnicas Finais
    tecnicas: [
        {
            titulo: "Primeira Técnica: O uso das letras",
            desc: "Caso você more em um apartamento ou condomínio onde não é permitido alterar ou remover o número original da porta, você pode usar o poder das letras para atingir a soma desejada. Basta fixar uma das letras ao lado do número atual.",
            instrucao: "Basta fixar uma das letras (pode ser um adesivo discreto da mesma cor da porta) ao lado do número atual, assim como no exemplo:"
        },
        {
            titulo: "Segunda Técnica: O número direto na porta",
            desc: "Coloque apenas o número escolhido diretamente na porta de entrada da sua casa. Se você entra pela sala ou pela cozinha, é lá que o número deve estar. Não se preocupe com a numeração que está no muro da rua.",
            instrucao: "Coloque o algarismo de forma visível assim como no exemplo:"
        }
    ]
};

const TitulosAmor = {
    1: "Liderança & Iniciativa",
    2: "Parceria & Acolhimento",
    3: "Comunicação & Alegria",
    4: "Segurança & Construção",
    5: "Liberdade & Aventura",
    6: "Afeto & Harmonia Familiar",
    7: "Conexão de Almas",
    8: "Prosperidade & Poder",
    9: "Amor Universal & Entrega"
};

/* --- ADICIONE ISTO AO FINAL DO SEU DADOS.JS --- */

const DadosCristais = {
    1: { nome: "Granada ou Rubi", desc: "Pedras que ativam a liderança, a coragem e a iniciativa.", uso: "Use no bolso esquerdo ou na mesa de trabalho para ter mais atitude." },
    2: { nome: "Quartzo Rosa ou Pedra da Lua", desc: "Cristais que promovem a paz, a intuição e a harmonia nos relacionamentos.", uso: "Tenha próximo à cama ou use como pingente para acalmar as emoções." },
    3: { nome: "Citrino ou Amazonita", desc: "Pedras da comunicação, da alegria e da criatividade.", uso: "Excelente para usar em reuniões sociais ou quando precisar falar em público." },
    4: { nome: "Quartzo Verde ou Ônix", desc: "Cristais de estrutura, saúde e segurança material.", uso: "Mantenha junto aos seus documentos ou na mesa onde paga as contas." },
    5: { nome: "Água Marinha ou Turquesa", desc: "Pedras da liberdade, da mudança e da proteção em viagens.", uso: "Ideal para levar na mala ou usar quando sentir a rotina pesada demais." },
    6: { nome: "Quartzo Rosa ou Turmalina Rosa", desc: "Cristais do amor incondicional, da família e da cura emocional.", uso: "Deixe na sala de estar para harmonizar o ambiente familiar." },
    7: { nome: "Ametista ou Lápis-Lazúli", desc: "Pedras da espiritualidade, da intuição e da sabedoria mental.", uso: "Perfeito para momentos de estudo, meditação ou antes de dormir." },
    8: { nome: "Pirita ou Olho de Tigre", desc: "Os cristais da prosperidade, do poder pessoal e do dinheiro.", uso: "Coloque sobre sua carteira ou na mesa do escritório para atrair negócios." },
    9: { nome: "Quartzo Branco ou Selenita", desc: "Pedras de purificação, altruísmo e conexão universal.", uso: "Use para limpar a energia da casa ou quando precisar perdoar alguém." }
};

const DadosErvas = {
    1: { nome: "Arruda ou Guiné", desc: "Ervas de força que quebram a inércia e limpam energias densas.", uso: "Banho do pescoço para baixo na segunda-feira para abrir caminhos." },
    2: { nome: "Camomila ou Melissa", desc: "Ervas calmantes que trazem acolhimento e paz de espírito.", uso: "Chá antes de dormir ou banho morno quando estiver muito ansioso." },
    3: { nome: "Laranja ou Alecrim", desc: "Ervas solares que trazem alegria, ânimo e criatividade.", uso: "Ferva a casca da laranja e use o vapor para perfumar a casa pela manhã." },
    4: { nome: "Hortelã ou Manjericão", desc: "Ervas que organizam a mente e trazem foco e prosperidade.", uso: "Tenha um vaso fresco na cozinha ou no local de trabalho." },
    5: { nome: "Eucalipto ou Sálvia", desc: "Ervas que movimentam a energia e trazem renovação.", uso: "Defumação ou banho para limpar pensamentos repetitivos." },
    6: { nome: "Rosas Brancas ou Jasmim", desc: "Ervas do amor puro e da harmonia nos relacionamentos.", uso: "Banho de pétalas na sexta-feira para atrair amor e carinho." },
    7: { nome: "Lavanda ou Violeta", desc: "Ervas que elevam a vibração e conectam com a espiritualidade.", uso: "Óleo essencial no travesseiro ou banho para clareza mental." },
    8: { nome: "Louro ou Canela", desc: "As grandes ervas da atração financeira e do sucesso material.", uso: "Carregue uma folha de louro na carteira ou use canela em pó no café." },
    9: { nome: "Boldo ou Sândalo", desc: "Ervas de limpeza espiritual profunda e conexão com o divino.", uso: "Banho de boldo (cabeça aos pés) quando sentir a energia muito pesada." }
};

/* ============================================================
   DADOS DA FERRAMENTA: HORAS IGUAIS E SINAIS ESPIRITUAIS
   ============================================================ */

const DadosHoras = {
    iguais: {
        "00:00": {
            titulo: "Recomeço e Potencial Absoluto",
            intro: "O 00:00 representa o ponto zero da existência, onde nada ainda se manifestou, mas tudo é possível. É o instante em que o ciclo anterior se encerra por completo e um novo campo de possibilidades se abre. Quando essa hora aparece, ela indica que sua vida está em um momento fértil para reinícios conscientes, não impulsivos.",
            
            tituloSignificado: "O Vazio Criador",
            significado: "Essa hora fala do vazio que não é ausência, mas potência. É o silêncio antes da criação. O universo está sinalizando que antigas histórias, padrões e decisões já cumpriram seu papel. O 00:00 surge quando sua consciência está pronta para reescrever algo importante, desde que você não leve para o novo ciclo as mesmas crenças e comportamentos do passado.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 00:00 pede pausa, não pressa. Antes de agir, observe. Reflita sobre o que precisa ser encerrado definitivamente em você: pensamentos, atitudes, vínculos ou escolhas que já não fazem sentido. Essa hora orienta você a limpar intenções, alinhar mente e emoção e só então decidir. O recomeço verdadeiro acontece quando você muda o ponto de partida interno, não apenas o cenário externo. Práticas como silêncio, oração, escrita consciente ou definição clara de intenções potencializam essa energia.",
            
            versiculo: "“Eis que faço novas todas as coisas.” (Apocalipse 21:5)<br><br>Esse versículo reforça que o novo só se manifesta quando você permite que o velho seja transformado. Não é apagar o passado, é ressignificá-lo para não repeti-lo.",
            
            topicos: [
                "<strong>Reinício:</strong> comece de dentro para fora; decisões externas sem mudança interna tendem a repetir ciclos.",
                "<strong>Potencial:</strong> tudo está disponível, mas exige consciência; escolha com intenção, não por impulso.",
                "<strong>Consciência:</strong> observe seus padrões antes de agir; o 00:00 pede lucidez emocional.",
                "<strong>Novo ciclo:</strong> encerre o que ficou pendente; ciclos abertos drenam energia do futuro.",
                "<strong>Criação:</strong> direcione pensamentos e palavras; nesse momento, eles têm mais força do que você imagina."
            ],
            
            mensagemFinal: "O 00:00 não aparece para quem precisa correr, mas para quem precisa recomeçar do jeito certo."
        },

        "01:01": {
            titulo: "Identidade e Autoria da Própria Vida",
            intro: "O 01:01 surge quando a vida chama você a assumir o protagonismo da sua história. Essa hora indica que chegou o momento de se reconhecer como autor das próprias escolhas e parar de viver em função da expectativa dos outros. Ela aparece quando sua alma pede posicionamento, coragem e afirmação do seu “eu”.",
            
            tituloSignificado: "O Despertar do Eu Interior",
            significado: "O 01:01 representa o nascimento da consciência individual. É o número da identidade, da liderança interna e da autonomia emocional. Quando essa hora se repete, o universo está sinalizando que você precisa se escutar mais do que escuta o mundo externo. É um chamado para sair da dependência emocional, mental ou espiritual.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 01:01 pede decisão. Observe onde você tem adiado escolhas por medo de errar ou de desagradar. Essa hora orienta você a assumir responsabilidade pela própria vida, mesmo que isso gere desconforto inicial. Fortaleça sua autoconfiança, valide seus sentimentos e aprenda a dizer “sim” para si antes de dizer “sim” para os outros.",
            
            versiculo: "“Escolhei hoje a quem servireis.” (Josué 24:15)<br><br>Esse versículo reforça que não escolher também é uma escolha — e geralmente não é a sua.",
            
            topicos: [
                "<strong>Identidade:</strong> reconheça quem você é sem se justificar o tempo todo.",
                "<strong>Autonomia:</strong> confie mais nas suas decisões, mesmo que não sejam perfeitas.",
                "<strong>Coragem:</strong> agir com medo ainda é agir.",
                "<strong>Liderança pessoal:</strong> conduza sua vida, não espere ser conduzido.",
                "<strong>Autorresponsabilidade:</strong> pare de terceirizar o que só você pode resolver."
            ],
            
            mensagemFinal: "O 01:01 aparece quando você precisa se escolher."
        },

        "02:02": {
            titulo: "Relações, Espelhos e Equilíbrio Emocional",
            intro: "O 02:02 fala sobre vínculos, parcerias e relações afetivas. Essa hora surge quando algo nos seus relacionamentos pede ajuste, conversa ou cura. Ela indica que nenhuma relação prospera sem equilíbrio emocional e troca justa.",
            
            tituloSignificado: "A Lei do Espelho",
            significado: "O 02:02 representa o outro como espelho. Tudo o que incomoda, dói ou encanta no outro revela algo que precisa ser compreendido em você. Essa hora surge quando há desequilíbrio entre dar e receber, ou quando você está se anulando ou exigindo demais.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 02:02 orienta você a observar como está se relacionando: você fala o que sente ou engole emoções para manter a paz? Você se adapta demais ou fecha o coração? Essa hora pede diálogo honesto, escuta ativa e maturidade emocional. Relações não se sustentam no silêncio.",
            
            versiculo: "“Melhor serem dois do que um.” (Eclesiastes 4:9)<br><br>Mas dois só são melhores quando caminham em equilíbrio.",
            
            topicos: [
                "<strong>Parceria:</strong> relações precisam ser construídas, não idealizadas.",
                "<strong>Equilíbrio:</strong> amar não é se anular nem dominar.",
                "<strong>Empatia:</strong> escute para compreender, não para reagir.",
                "<strong>Limites:</strong> dizer não também é um ato de amor.",
                "<strong>Harmonia:</strong> paz verdadeira nasce da verdade, não do silêncio."
            ],
            
            mensagemFinal: "O 02:02 surge quando o amor pede maturidade emocional."
        },

        "03:03": {
            titulo: "Comunicação da Alma e Verdade Emocional",
            intro: "O 03:03 é a hora da expressão. Ela aparece quando sentimentos precisam ser ditos, quando a alma pede voz e quando calar já está custando caro emocionalmente. Essa hora indica que algo precisa ser comunicado para que a energia volte a fluir.",
            
            tituloSignificado: "A Voz Interior que Quer Ser Ouvida",
            significado: "O 03:03 representa a expressão da verdade interna. Emoções reprimidas se transformam em ansiedade, bloqueios e conflitos. Quando essa hora se repete, o universo está pedindo que você fale, escreva, expresse e libere.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 03:03 orienta você a se comunicar com mais verdade e menos medo. Fale o que sente, mas com consciência. Use a palavra como cura, não como ataque. Essa hora favorece conversas importantes, processos criativos e liberação emocional.",
            
            versiculo: "“A boca fala do que o coração está cheio.” (Lucas 6:45)",
            
            topicos: [
                "<strong>Expressão:</strong> sentimentos não expressos se transformam em bloqueios.",
                "<strong>Comunicação:</strong> fale com clareza e intenção.",
                "<strong>Criatividade:</strong> canalize emoções em algo construtivo.",
                "<strong>Verdade:</strong> seja honesto consigo antes de ser com o outro.",
                "<strong>Liberação emocional:</strong> escrever e falar curam mais do que você imagina."
            ],
            
            mensagemFinal: "O 03:03 aparece quando sua alma precisa ser ouvida."
        },

        "04:04": {
            titulo: "Estrutura, Base e Sustentação da Vida",
            intro: "O 04:04 surge quando a vida pede organização, estabilidade e responsabilidade. Essa hora indica que algo precisa ser estruturado com mais consciência, seja no campo material, emocional ou mental. Ela aparece quando não basta mais improvisar; é necessário criar bases sólidas para o que se deseja construir.",
            
            tituloSignificado: "A Base Invisível do Futuro",
            significado: "O 04:04 representa tudo aquilo que sustenta sua vida, mesmo que não seja visível. Há um chamado para fortalecer alicerces, corrigir falhas e assumir compromissos que foram adiados. Essa hora mostra que crescimento sem estrutura gera queda, e sonhos sem disciplina se perdem no caminho.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 04:04 orienta você a organizar sua rotina, seus pensamentos e suas responsabilidades. Observe onde existe desordem, procrastinação ou negligência consigo mesmo. Essa hora pede disciplina emocional, constância e paciência. Não é momento de atalhos, mas de construir passo a passo aquilo que você quer sustentar no longo prazo.",
            
            versiculo: "“Com sabedoria se constrói a casa, e com entendimento ela se firma.” (Provérbios 24:3)",
            
            topicos: [
                "<strong>Estrutura:</strong> fortaleça suas bases antes de expandir.",
                "<strong>Disciplina:</strong> pequenas ações diárias constroem grandes resultados.",
                "<strong>Responsabilidade:</strong> assuma o que você adiou resolver.",
                "<strong>Estabilidade:</strong> segurança vem da constância, não da pressa.",
                "<strong>Organização:</strong> ordem externa reflete clareza interna."
            ],
            
            mensagemFinal: "O 04:04 aparece quando sua vida pede base, não pressa."
        },

        "05:05": {
            titulo: "Mudança, Movimento e Libertação Consciente",
            intro: "O 05:05 surge quando transformações estão em curso e resistir só gera desgaste. Essa hora indica que a vida está se movimentando e convidando você a se adaptar, evoluir e sair de padrões que já não acompanham seu crescimento.",
            
            tituloSignificado: "A Lei do Movimento",
            significado: "O 05:05 representa mudança inevitável. Tudo que está estagnado tende a se romper para que o novo encontre espaço. Essa hora aparece quando a alma pede liberdade, mas também responsabilidade. Mudança sem consciência vira caos; mudança com consciência vira evolução.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 05:05 orienta você a flexibilizar, mas sem perder o centro. Observe onde você está resistindo por medo ou apego. Aceite o novo, mas evite impulsividade. Essa hora pede escolhas conscientes, abertura para aprender e coragem para sair do que já não faz sentido, mesmo que seja confortável.",
            
            versiculo: "“Tudo tem o seu tempo determinado.” (Eclesiastes 3:1)",
            
            topicos: [
                "<strong>Mudança:</strong> resistir dói mais do que transformar.",
                "<strong>Liberdade:</strong> ser livre é escolher com consciência.",
                "<strong>Adaptação:</strong> quem não se adapta, sofre.",
                "<strong>Movimento:</strong> a vida flui quando você flui com ela.",
                "<strong>Desapego:</strong> o novo só entra quando o velho sai."
            ],
            
            mensagemFinal: "O 05:05 aparece quando mudar é inevitável — e necessário."
        },
        "06:06": {
            titulo: "Amor, Cuidado e Responsabilidade Emocional",
            intro: "O 06:06 surge quando questões emocionais, familiares ou afetivas precisam de atenção. Essa hora indica que o amor está pedindo equilíbrio, maturidade e consciência. Ela aparece quando você está cuidando demais dos outros ou esquecendo de si.",
            
            tituloSignificado: "O Amor em Equilíbrio",
            significado: "O 06:06 representa o amor responsável, aquele que cuida sem controlar e se doa sem se anular. Essa hora revela desequilíbrios emocionais, excesso de culpa, cobrança ou necessidade de agradar. Amar não é carregar o outro, é caminhar junto.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 06:06 orienta você a observar como está se relacionando consigo e com os outros. Você está assumindo responsabilidades que não são suas? Está se anulando para manter vínculos? Essa hora pede amor com limites, cuidado consciente e maturidade emocional. Cuidar de si também é um ato de amor.",
            
            versiculo: "“Amarás o teu próximo como a ti mesmo.” (Mateus 22:39)",
            
            topicos: [
                "<strong>Amor:</strong> amar não é se sacrificar constantemente.",
                "<strong>Cuidado:</strong> proteja sem controlar.",
                "<strong>Limites:</strong> dizer não também é amor.",
                "<strong>Responsabilidade emocional:</strong> cada um é responsável por si.",
                "<strong>Equilíbrio:</strong> relações saudáveis não sufocam."
            ],
            
            mensagemFinal: "O 06:06 aparece quando o amor precisa de equilíbrio, não de sacrifício."
        },

        "07:07": {
            titulo: "Busca Interior e Conexão Espiritual",
            intro: "O 07:07 surge quando a vida pede silêncio, introspecção e reconexão com sua essência. Essa hora indica que respostas externas já não são suficientes e que o verdadeiro direcionamento precisa ser encontrado dentro de você. Ela aparece em momentos de questionamento profundo e necessidade de sentido.",
            
            tituloSignificado: "A Sabedoria do Silêncio",
            significado: "O 07:07 representa a busca pelo conhecimento interior e espiritual. É a hora do recolhimento consciente, da reflexão e do contato com a própria verdade. Quando essa hora se repete, o universo está mostrando que você precisa desacelerar para ouvir sua intuição e compreender sinais que passam despercebidos no ruído do dia a dia.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 07:07 orienta você a se afastar temporariamente do excesso de estímulos externos. Busque momentos de silêncio, oração, meditação ou reflexão profunda. Observe seus pensamentos e emoções sem julgamento. Essa hora pede confiança na intuição e discernimento para não se perder em dúvidas ou isolamento excessivo.",
            
            versiculo: "“Aquietai-vos e sabei que eu sou Deus.” (Salmos 46:10)",
            
            topicos: [
                "<strong>Introspecção:</strong> o silêncio também é resposta.",
                "<strong>Espiritualidade:</strong> conecte-se com algo maior que o imediato.",
                "<strong>Intuição:</strong> confie nos sinais internos.",
                "<strong>Sabedoria:</strong> conhecimento sem reflexão não se transforma em verdade.",
                "<strong>Autoconhecimento:</strong> entender a si mesmo é o maior aprendizado."
            ],
            
            mensagemFinal: "O 07:07 aparece quando sua alma pede silêncio para compreender."
        },

        "08:08": {
            titulo: "Poder Pessoal e Realização Material",
            intro: "O 08:08 surge quando questões ligadas a trabalho, dinheiro, poder e realização entram em evidência. Essa hora indica que você está sendo chamado a reconhecer sua força pessoal e a lidar com a matéria de forma consciente, ética e equilibrada.",
            
            tituloSignificado: "A Lei da Causa e Efeito",
            significado: "O 08:08 representa o retorno das ações. Tudo o que você construiu, positiva ou negativamente, começa a se manifestar. Essa hora revela responsabilidade, merecimento e colheita. O poder aqui não é dominação, mas consciência do próprio valor e capacidade de realização.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 08:08 orienta você a assumir o controle da sua vida material com maturidade. Observe sua relação com dinheiro, sucesso e autoridade. Essa hora pede equilíbrio entre ambição e ética, entre controle e sensibilidade. Use seu poder para construir, não para dominar.",
            
            versiculo: "“O que o homem semear, isso também colherá.” (Gálatas 6:7)",
            
            topicos: [
                "<strong>Poder pessoal:</strong> reconheça seu valor sem arrogância.",
                "<strong>Prosperidade:</strong> dinheiro é ferramenta, não finalidade.",
                "<strong>Responsabilidade:</strong> toda escolha gera consequência.",
                "<strong>Equilíbrio:</strong> sucesso sem consciência gera vazio.",
                "<strong>Realização:</strong> construa algo que tenha sentido."
            ],
            
            mensagemFinal: "O 08:08 aparece quando você precisa usar seu poder com consciência."
        },

        "09:09": {
            titulo: "Encerramento, Perdão e Desapego",
            intro: "O 09:09 surge quando ciclos precisam ser encerrados. Essa hora indica finalizações inevitáveis, despedidas e libertações necessárias para que uma nova etapa possa começar. Ela aparece quando insistir no passado já está impedindo o futuro.",
            
            tituloSignificado: "A Conclusão do Aprendizado",
            significado: "O 09:09 representa o fim de um ciclo evolutivo. Nada aqui termina por acaso; tudo encerra quando a lição foi aprendida. Essa hora fala de perdão, aceitação e liberação emocional. Segurar o que já cumpriu seu papel gera dor e estagnação.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 09:09 orienta você a soltar com consciência. Reflita sobre o que precisa ser encerrado: relações, hábitos, culpas ou histórias que já não fazem sentido. Essa hora pede desapego, compaixão e confiança no fluxo da vida. Encerrar também é um ato de amor.",
            
            versiculo: "“Há tempo de nascer e tempo de morrer.” (Eclesiastes 3:2)",
            
            topicos: [
                "<strong>Encerramento:</strong> todo fim prepara um novo começo.",
                "<strong>Desapego:</strong> soltar não é perder, é libertar.",
                "<strong>Perdão:</strong> libere o outro e a si mesmo.",
                "<strong>Conclusão:</strong> finalize o que ficou aberto.",
                "<strong>Transição:</strong> confie no que está por vir."
            ],
            
            mensagemFinal: "O 09:09 aparece quando segurar dói mais do que soltar."
        },

        "10:10": {
            titulo: "Movimento Consciente e Novo Impulso de Vida",
            intro: "O 10:10 surge quando a vida volta a se mover depois de um período de estagnação ou dúvida. Essa hora indica que um novo impulso está disponível, mas agora com mais consciência do que no passado. Ela aparece quando você já aprendeu algo importante e está pronto para avançar com mais maturidade.",
            
            tituloSignificado: "O Início com Experiência",
            significado: "O 10:10 representa o recomeço após o aprendizado. Diferente do 01, aqui você não parte do zero, mas da experiência adquirida. Essa hora revela que você tem mais clareza, mais força interna e mais discernimento para agir de forma diferente do que agiu antes.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 10:10 orienta você a agir, mas com estratégia. Observe as oportunidades que surgem e confie no que você já aprendeu com erros passados. Essa hora pede atitude, mas não impulsividade. Avance com consciência, sabendo onde quer chegar e por que está escolhendo esse caminho.",
            
            versiculo: "“O coração do homem pode fazer planos, mas a resposta certa vem do Senhor.” (Provérbios 16:1)",
            
            topicos: [
                "<strong>Movimento:</strong> sair da estagnação exige decisão.",
                "<strong>Experiência:</strong> use o passado como aprendizado, não como peso.",
                "<strong>Direção:</strong> avance sabendo onde quer chegar.",
                "<strong>Confiança:</strong> você está mais preparado do que imagina.",
                "<strong>Ação consciente:</strong> agir com clareza evita retrabalho emocional."
            ],
            
            mensagemFinal: "O 10:10 aparece quando é hora de avançar com mais consciência do que antes."
        },
        "11:11": {
            titulo: "Alinhamento Espiritual e Consciência Elevada",
            intro: "O 11:11 surge quando há um forte alinhamento entre pensamento, emoção e propósito. Essa hora indica que sua consciência está mais sensível aos sinais do universo e que aquilo que você pensa tende a se manifestar com mais rapidez.",
            
            tituloSignificado: "O Portal da Consciência",
            significado: "O 11:11 representa um portal energético. Pensamentos, intenções e emoções estão amplificados. Essa hora aparece quando você está mais conectado com seu propósito espiritual e quando a vida pede responsabilidade sobre o que você vibra, deseja e acredita.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 11:11 orienta você a observar seus pensamentos com atenção. Evite alimentar medos, dúvidas ou crenças limitantes. Direcione sua mente para aquilo que deseja construir. Essa hora favorece orações, visualizações, afirmações conscientes e decisões alinhadas com sua verdade interior.",
            
            versiculo: "“Tudo é possível ao que crê.” (Marcos 9:23)",
            
            topicos: [
                "<strong>Alinhamento:</strong> mente, emoção e ação precisam caminhar juntas.",
                "<strong>Consciência:</strong> pensamentos criam realidades.",
                "<strong>Intenção:</strong> escolha com clareza o que deseja manifestar.",
                "<strong>Espiritualidade:</strong> confie nos sinais e na sua intuição.",
                "<strong>Propósito:</strong> alinhe suas escolhas com sua verdade."
            ],
            
            mensagemFinal: "O 11:11 aparece quando seus pensamentos estão criando o próximo capítulo da sua vida."
        },

        "12:12": {
            titulo: "Ajuste de Rota e Equilíbrio Interior",
            intro: "O 12:12 surge quando a vida pede realinhamento. Essa hora indica que você pode estar caminhando, mas não exatamente na direção que sua alma deseja. Ela aparece para convidar à reflexão, ao ajuste e à correção de excessos ou desequilíbrios.",
            
            tituloSignificado: "O Chamado ao Equilíbrio",
            significado: "O 12:12 representa a necessidade de harmonizar razão e emoção, ação e pausa, dar e receber. Não é uma hora de ruptura, mas de ajuste fino. Pequenas correções agora evitam grandes conflitos no futuro.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 12:12 orienta você a revisar escolhas, atitudes e prioridades. Observe onde há exagero, desgaste ou desconexão. Essa hora pede equilíbrio emocional, paciência e consciência. Ajustar não é retroceder, é alinhar-se com o que realmente faz sentido.",
            
            versiculo: "“Há caminho que parece direito ao homem, mas o fim dele conduz à morte.” (Provérbios 14:12)",
            
            topicos: [
                "<strong>Equilíbrio:</strong> excesso também desequilibra.",
                "<strong>Ajuste:</strong> pequenas mudanças geram grandes resultados.",
                "<strong>Consciência:</strong> revise antes de insistir.",
                "<strong>Harmonia:</strong> alinhe razão e emoção.",
                "<strong>Direção:</strong> caminhe com mais presença."
            ],
            
            mensagemFinal: "O 12:12 aparece para ajustar sua rota antes que o cansaço fale mais alto."
        },

        "13:13": {
            titulo: "Transformação, Quebra de Padrões e Renascimento",
            intro: "O 13:13 surge quando a vida pede transformação profunda. Essa hora indica que algo precisa morrer simbolicamente para que algo novo possa nascer. Ela aparece em momentos de desconforto, crise ou instabilidade, não como punição, mas como convite à renovação.",
            
            tituloSignificado: "A Morte do Velho Eu",
            significado: "O 13:13 representa a quebra de padrões antigos, crenças limitantes e comportamentos repetitivos. Essa hora mostra que insistir no que já não funciona gera sofrimento. A transformação aqui não é suave, mas necessária. É o fim de uma versão sua que já cumpriu seu papel.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 13:13 orienta você a não resistir às mudanças que se impõem. Observe o que está ruindo e pergunte-se o que isso está tentando ensinar. Essa hora pede desapego consciente, aceitação e coragem para reconstruir de forma mais alinhada com quem você se tornou. Transformação não é perda, é evolução.",
            
            versiculo: "“Se o grão de trigo não cair na terra e não morrer, ficará só.” (João 12:24)",
            
            topicos: [
                "<strong>Transformação:</strong> mudanças profundas geram crescimento real.",
                "<strong>Desapego:</strong> soltar o velho abre espaço para o novo.",
                "<strong>Ruptura:</strong> nem todo rompimento é fracasso.",
                "<strong>Renascimento:</strong> uma nova versão sua está emergindo.",
                "<strong>Consciência:</strong> entenda a dor como professora, não como inimiga."
            ],
            
            mensagemFinal: "O 13:13 aparece quando resistir dói mais do que mudar."
        },

        "14:14": {
            titulo: "Moderação, Ajuste Emocional e Disciplina Interior",
            intro: "O 14:14 surge quando excessos precisam ser corrigidos. Essa hora indica que algo saiu do eixo — emoções, hábitos, desejos ou comportamentos — e pede equilíbrio consciente. Ela aparece quando a instabilidade começa a gerar desgaste interno.",
            
            tituloSignificado: "A Lei do Equilíbrio Dinâmico",
            significado: "O 14:14 representa a necessidade de moderação. Nem repressão, nem exagero. Essa hora mostra que a falta de limites internos leva à dispersão, enquanto o excesso de controle leva à rigidez. O aprendizado aqui é encontrar o meio-termo.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 14:14 orienta você a observar seus hábitos e reações emocionais. Onde você está exagerando? Onde está se permitindo demais? Essa hora pede disciplina emocional, autocontrole e escolhas mais conscientes. Equilíbrio é prática diária, não teoria.",
            
            versiculo: "“Tudo me é permitido, mas nem tudo convém.” (1 Coríntios 6:12)",
            
            topicos: [
                "<strong>Equilíbrio:</strong> extremos geram instabilidade.",
                "<strong>Moderação:</strong> escolha o meio-termo com consciência.",
                "<strong>Disciplina emocional:</strong> reações também são escolhas.",
                "<strong>Autocontrole:</strong> liberdade sem limite vira desordem.",
                "<strong>Ajuste:</strong> pequenas correções evitam grandes conflitos."
            ],
            
            mensagemFinal: "O 14:14 aparece quando o equilíbrio precisa ser aprendido na prática."
        },

        "15:15": {
            titulo: "Desejo, Magnetismo e Responsabilidade Afetiva",
            intro: "O 15:15 surge quando desejos, afetos e escolhas emocionais ganham força. Essa hora indica magnetismo pessoal elevado, atração e intensidade emocional. Ela aparece quando você está atraindo experiências que refletem seus desejos mais profundos — conscientes ou não.",
            
            tituloSignificado: "O Poder da Atração Emocional",
            significado: "O 15:15 representa sedução, prazer e vínculo emocional. Mas também revela desafios ligados à dependência, manipulação ou escolhas baseadas apenas na emoção. Essa hora mostra que desejar sem consciência pode gerar apego e sofrimento.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 15:15 orienta você a observar seus desejos com maturidade. Pergunte-se se o que você quer realmente te faz bem ou apenas preenche um vazio momentâneo. Essa hora pede responsabilidade afetiva, clareza emocional e escolhas que não comprometam sua paz interior.",
            
            versiculo: "“Tudo é lícito, mas nem tudo edifica.” (1 Coríntios 10:23)",
            
            topicos: [
                "<strong>Desejo:</strong> nem tudo que atrai convém.",
                "<strong>Magnetismo:</strong> você atrai o que vibra emocionalmente.",
                "<strong>Responsabilidade afetiva:</strong> escolha sem ferir a si mesmo.",
                "<strong>Consciência emocional:</strong> intensidade pede maturidade.",
                "<strong>Autovalor:</strong> escolhas conscientes protegem sua energia."
            ],
            
            mensagemFinal: "O 15:15 aparece quando seus desejos pedem consciência, não impulso."
        },
        "16:16": {
            titulo: "Queda do Ego e Reconstrução da Consciência",
            intro: "O 16:16 surge quando estruturas internas construídas sobre orgulho, controle ou ilusões começam a ruir. Essa hora indica que algo que você acreditava ser sólido precisa ser revisto. Ela aparece para quebrar falsas seguranças e conduzir a uma reconstrução mais verdadeira.",
            
            tituloSignificado: "A Verdade que Liberta",
            significado: "O 16:16 representa a queda do ego inflado e das máscaras emocionais. Essa hora revela que aquilo que não é autêntico não se sustenta. A desconstrução pode ser dolorosa, mas é necessária para que uma nova consciência se estabeleça com mais humildade e verdade.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 16:16 orienta você a abandonar o controle excessivo e aceitar os aprendizados que chegam através de rupturas. Observe onde o orgulho impede o crescimento. Essa hora pede humildade, introspecção e disposição para aprender com os erros. Reconstruir com verdade é mais importante do que manter aparências.",
            
            versiculo: "“Deus resiste aos soberbos, mas dá graça aos humildes.” (Tiago 4:6)",
            
            topicos: [
                "<strong>Ego:</strong> orgulho excessivo bloqueia o crescimento.",
                "<strong>Humildade:</strong> reconhecer falhas fortalece.",
                "<strong>Desconstrução:</strong> o que cai abre espaço para o novo.",
                "<strong>Verdade:</strong> seja fiel a si mesmo.",
                "<strong>Consciência:</strong> aprendizados vêm disfarçados de crise."
            ],
            
            mensagemFinal: "O 16:16 aparece quando o ego precisa ceder para a verdade surgir."
        },

        "17:17": {
            titulo: "Fé, Esperança e Direção Espiritual",
            intro: "O 17:17 surge quando a vida pede confiança no caminho, mesmo sem garantias visíveis. Essa hora indica proteção espiritual e sinaliza que você está sendo guiado, ainda que não compreenda totalmente o processo.",
            
            tituloSignificado: "A Luz no Caminho",
            significado: "O 17:17 representa esperança, fé e inspiração. Essa hora aparece quando você precisa acreditar mais do que controlar. Ela mostra que nem tudo depende do esforço humano; há movimentos maiores acontecendo a seu favor.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 17:17 orienta você a fortalecer sua fé e confiar no processo da vida. Evite alimentar dúvidas excessivas e pensamentos pessimistas. Essa hora favorece práticas espirituais, gratidão e entrega consciente. Confiança também é uma forma de ação.",
            
            versiculo: "“O Senhor é a minha luz e a minha salvação; de quem terei medo?” (Salmos 27:1)",
            
            topicos: [
                "<strong>Fé:</strong> confiar também é agir.",
                "<strong>Esperança:</strong> mantenha o coração aberto ao futuro.",
                "<strong>Proteção:</strong> você não está sozinho.",
                "<strong>Confiança:</strong> solte o controle excessivo.",
                "<strong>Espiritualidade:</strong> fortaleça sua conexão interior."
            ],
            
            mensagemFinal: "O 17:17 aparece quando a fé precisa falar mais alto que o medo."
        },

        "18:18": {
            titulo: "Emoções Profundas e Cura Interior",
            intro: "O 18:18 surge quando emoções reprimidas vêm à tona. Essa hora indica sensibilidade elevada, empatia e necessidade de cura emocional. Ela aparece quando o emocional começa a influenciar decisões de forma intensa.",
            
            tituloSignificado: "O Chamado da Sensibilidade",
            significado: "O 18:18 representa emoções profundas, memórias afetivas e conexões inconscientes. Essa hora mostra que o emocional precisa ser acolhido, não ignorado. Sensibilidade sem consciência pode gerar confusão; com consciência, gera cura.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 18:18 orienta você a cuidar do seu campo emocional. Observe suas reações, acolha sentimentos antigos e evite decisões tomadas apenas pelo impulso emocional. Essa hora favorece terapias, conversas profundas e práticas de autocuidado emocional.",
            
            versiculo: "“O Senhor está perto dos que têm o coração quebrantado.” (Salmos 34:18)",
            
            topicos: [
                "<strong>Emoções:</strong> acolha sem se perder nelas.",
                "<strong>Sensibilidade:</strong> sentir não é fraqueza.",
                "<strong>Cura:</strong> emoções reconhecidas se transformam.",
                "<strong>Empatia:</strong> cuide do outro sem se esquecer de si.",
                "<strong>Equilíbrio emocional:</strong> consciência antes da reação."
            ],
            
            mensagemFinal: "O 18:18 aparece quando suas emoções pedem cuidado, não repressão."
        },

        "19:19": {
            titulo: "Autonomia, Identidade e Responsabilidade Pessoal",
            intro: "O 19:19 surge quando a vida pede independência emocional e maturidade. Essa hora indica que você está sendo chamado a caminhar com as próprias pernas, sem depender excessivamente do apoio, validação ou aprovação dos outros. Ela aparece quando a responsabilidade pela própria vida precisa ser assumida por completo.",
            
            tituloSignificado: "O Eu Integrado",
            significado: "O 19:19 representa a união entre identidade e consciência. É a hora de compreender que força verdadeira não vem do isolamento, mas da autonomia equilibrada. Essa hora mostra que você já tem recursos internos suficientes para seguir adiante, desde que confie mais em si.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 19:19 orienta você a observar onde ainda terceiriza decisões ou responsabilidades. Essa hora pede autoconfiança, clareza de propósito e firmeza emocional. Assumir sua vida não significa endurecer, mas amadurecer. Quanto mais você se posiciona, menos conflitos internos surgem.",
            
            versiculo: "“Cada um levará o seu próprio fardo.” (Gálatas 6:5)",
            
            topicos: [
                "<strong>Autonomia:</strong> caminhe com suas próprias escolhas.",
                "<strong>Responsabilidade:</strong> assuma consequências sem culpa.",
                "<strong>Identidade:</strong> seja fiel a quem você é.",
                "<strong>Maturidade emocional:</strong> depender menos gera mais liberdade.",
                "<strong>Autoconfiança:</strong> você já é capaz."
            ],
            
            mensagemFinal: "O 19:19 aparece quando você precisa confiar mais em si do que nos outros."
        },

        "20:20": {
            titulo: "Avaliação, Consciência e Julgamento Interior",
            intro: "O 20:20 surge quando a vida pede revisão. Essa hora indica que atitudes, decisões e comportamentos estão sendo avaliados, não como punição, mas como aprendizado. Ela aparece para despertar consciência sobre o que foi feito e o que precisa ser ajustado.",
            
            tituloSignificado: "O Chamado à Consciência",
            significado: "O 20:20 representa despertar, julgamento interno e responsabilidade moral. Essa hora mostra que não é possível avançar sem revisar o passado recente. É o momento de reconhecer erros, acertos e intenções, sem culpa excessiva, mas com honestidade.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 20:20 orienta você a fazer uma análise sincera da sua trajetória recente. Observe escolhas, atitudes e consequências. Essa hora pede humildade para reconhecer falhas e sabedoria para corrigir rotas. Avaliar não é se condenar, é se alinhar.",
            
            versiculo: "“Examinai tudo e retende o bem.” (1 Tessalonicenses 5:21)",
            
            topicos: [
                "<strong>Avaliação:</strong> revise antes de insistir.",
                "<strong>Consciência:</strong> aprenda com suas escolhas.",
                "<strong>Responsabilidade:</strong> reconheça seus erros sem se punir.",
                "<strong>Ajuste:</strong> correções evitam repetições.",
                "<strong>Lucidez:</strong> enxergar a verdade liberta."
            ],
            
            mensagemFinal: "O 20:20 aparece quando é hora de ajustar antes de seguir."
        },
        "21:21": {
            titulo: "Expansão, Realização e Consciência Coletiva",
            intro: "O 21:21 surge quando um ciclo de crescimento se aproxima da realização. Essa hora indica expansão, reconhecimento e integração com o mundo ao redor. Ela aparece quando seus esforços começam a gerar frutos visíveis.",
            
            tituloSignificado: "A Consciência da Totalidade",
            significado: "O 21:21 representa maturidade, conclusão e expansão da consciência. Essa hora mostra que você não cresce apenas para si, mas para contribuir com algo maior. É a integração entre quem você é e o impacto que gera no mundo.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 21:21 orienta você a reconhecer suas conquistas sem arrogância. Compartilhe o que aprendeu, expanda sua visão e mantenha os pés no chão. Essa hora pede gratidão, responsabilidade e consciência coletiva. Crescer também é servir.",
            
            versiculo: "“Dai graças em todas as circunstâncias.” (1 Tessalonicenses 5:18)",
            
            topicos: [
                "<strong>Expansão:</strong> cresça com consciência.",
                "<strong>Realização:</strong> reconheça suas conquistas.",
                "<strong>Gratidão:</strong> valorize o caminho percorrido.",
                "<strong>Consciência coletiva:</strong> seu crescimento impacta outros.",
                "<strong>Maturidade:</strong> sucesso também exige responsabilidade."
            ],
            
            mensagemFinal: "O 21:21 aparece quando você está pronto para expandir com consciência."
        },

        "22:22": {
            titulo: "Construção do Destino e Materialização Consciente",
            intro: "O 22:22 surge quando a vida pede comprometimento real com aquilo que você deseja construir. Essa hora indica que sonhos precisam sair do campo da intenção e entrar no campo da ação estruturada. Ela aparece quando existe grande potencial, mas também grande responsabilidade.",
            
            tituloSignificado: "O Arquiteto da Própria Vida",
            significado: "O 22:22 representa o poder de materialização em larga escala. É a energia do construtor, daquele que transforma visão em realidade. Essa hora revela que você tem capacidade de criar algo duradouro, mas somente se houver disciplina, ética e propósito. Sonhos sem estrutura não se sustentam.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 22:22 orienta você a assumir compromissos de longo prazo. Observe se suas ações estão alinhadas com o futuro que deseja viver. Essa hora pede planejamento, responsabilidade e maturidade emocional. Construir algo grande exige constância, paciência e coerência entre pensamento, palavra e ação.",
            
            versiculo: "“Todo aquele que ouve estas minhas palavras e as pratica será comparado a um homem prudente que edificou a sua casa sobre a rocha.” (Mateus 7:24)",
            
            topicos: [
                "<strong>Construção:</strong> grandes projetos exigem bases sólidas.",
                "<strong>Responsabilidade:</strong> potencial sem compromisso se perde.",
                "<strong>Materialização:</strong> agir é tão importante quanto sonhar.",
                "<strong>Disciplina:</strong> constância cria resultados duradouros.",
                "<strong>Propósito:</strong> construa algo que tenha sentido para sua alma."
            ],
            
            mensagemFinal: "O 22:22 aparece quando você está pronto para construir algo que deixe marca."
        },

        "23:23": {
            titulo: "Fechamento de Ciclo e Preparação para o Novo",
            intro: "O 23:23 surge quando um grande ciclo está se encerrando. Essa hora indica conclusão, recolhimento e preparação interna para um novo começo. Ela aparece quando a alma pede descanso, reflexão e integração de tudo o que foi vivido.",
            
            tituloSignificado: "A Síntese da Experiência",
            significado: "O 23:23 representa a integração entre experiência, aprendizado e consciência. É o momento de reunir tudo o que foi vivido ao longo do ciclo e transformá-lo em sabedoria. Essa hora mostra que não é mais tempo de agir, mas de compreender.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 23:23 orienta você a desacelerar. Reflita sobre sua trajetória, reconheça aprendizados e aceite encerramentos. Essa hora pede silêncio, introspecção e confiança no novo ciclo que se aproxima. Dormir em paz com a própria consciência é parte do processo evolutivo.",
            
            versiculo: "“Tudo fez Deus formoso no seu devido tempo.” (Eclesiastes 3:11)",
            
            topicos: [
                "<strong>Encerramento:</strong> finalize ciclos com consciência.",
                "<strong>Integração:</strong> transforme experiências em sabedoria.",
                "<strong>Descanso:</strong> respeite o tempo de pausa.",
                "<strong>Reflexão:</strong> compreenda antes de recomeçar.",
                "<strong>Preparação:</strong> o novo nasce no silêncio."
            ],
            
            mensagemFinal: "O 23:23 aparece quando a alma precisa integrar antes de recomeçar."
        }
    }, // FIM DO BLOCO "IGUAIS"
    espelhadas: {
        "12:21": {
            titulo: "Inversão de Prioridades e Ajuste de Caminho",
            intro: "O 12:21 surge quando você está fazendo muito esforço, mas talvez não na direção certa. Essa hora indica que algo está invertido: você pode estar cuidando demais do externo e negligenciando o interno, ou priorizando o outro e esquecendo de si.",
            
            tituloSignificado: "O Chamado à Revisão Consciente",
            significado: "O 12:21 representa desequilíbrio entre razão e emoção. Ele mostra que existe boa intenção, mas falta alinhamento. A vida sinaliza que não adianta avançar sem revisar escolhas, hábitos e prioridades. Fazer mais não significa fazer melhor.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 12:21 pede pausa estratégica. Reavalie decisões recentes e observe se você está tentando compensar algo com excesso de esforço. Essa hora orienta você a reorganizar prioridades, equilibrar responsabilidades e corrigir pequenos desvios antes que se tornem grandes desgastes.",
            
            versiculo: "“Há caminho que parece direito ao homem, mas o fim dele conduz à morte.” (Provérbios 14:12)",
            
            topicos: [
                "<strong>Prioridades:</strong> nem tudo que ocupa tempo merece energia.",
                "<strong>Equilíbrio:</strong> ajuste antes que o cansaço vire frustração.",
                "<strong>Consciência:</strong> fazer com sentido vale mais que fazer muito.",
                "<strong>Revisão:</strong> pequenas correções evitam grandes perdas.",
                "<strong>Direção:</strong> alinhe intenção e ação."
            ],
            
            mensagemFinal: "O 12:21 aparece quando insistir do mesmo jeito já não resolve."
        },

        "13:31": {
            titulo: "Quebra de Padrões Emocionais e Consciência nas Escolhas",
            intro: "O 13:31 surge quando você está repetindo comportamentos que já trouxeram dor ou frustração. Essa hora indica que algo precisa ser feito de forma diferente, especialmente nas decisões emocionais e afetivas.",
            
            tituloSignificado: "O Espelho do Comportamento Repetido",
            significado: "O 13:31 representa padrões inconscientes. A vida está mostrando que o problema não está apenas na situação, mas na forma como você reage a ela. Enquanto a consciência não muda, a história se repete com nomes diferentes.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 13:31 orienta você a observar suas reações automáticas. Pergunte-se: “Por que sempre escolho assim?” Essa hora pede maturidade emocional, autorresponsabilidade e coragem para quebrar ciclos, mesmo que isso gere desconforto temporário.",
            
            versiculo: "“Não vos conformeis com este mundo, mas transformai-vos pela renovação da vossa mente.” (Romanos 12:2)",
            
            topicos: [
                "<strong>Padrões:</strong> o que se repete pede consciência.",
                "<strong>Escolhas:</strong> mudar atitude muda o resultado.",
                "<strong>Autoconhecimento:</strong> observe suas reações.",
                "<strong>Transformação:</strong> dor recorrente indica lição não aprendida.",
                "<strong>Responsabilidade emocional:</strong> você pode escolher diferente."
            ],
            
            mensagemFinal: "O 13:31 aparece quando a vida pede maturidade emocional."
        },

        "14:41": {
            titulo: "Desorganização Interna e Necessidade de Reestruturação",
            intro: "O 14:41 surge quando a vida mostra que algo está fora de ordem. Essa hora indica que você pode estar tentando avançar sem estrutura emocional suficiente ou lidando com muitas demandas ao mesmo tempo, sem base sólida. Ela aparece quando a instabilidade começa a cobrar seu preço.",
            
            tituloSignificado: "O Espelho do Desequilíbrio",
            significado: "O 14:41 representa conflito entre liberdade e responsabilidade. Existe vontade de mudar, avançar ou romper limites, mas sem organização interna isso gera ansiedade, impulsividade ou decisões precipitadas. Essa hora revela que o problema não é o desejo de mudança, mas a falta de base para sustentá-la.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 14:41 orienta você a desacelerar e reorganizar. Observe sua rotina, seus compromissos e principalmente seu estado emocional. Essa hora pede disciplina interna, criação de limites e estrutura emocional antes de qualquer grande movimento. Organizar-se é um ato de amor-próprio.",
            
            versiculo: "“Deus não é Deus de confusão, mas de paz.” (1 Coríntios 14:33)",
            
            topicos: [
                "<strong>Organização:</strong> ordem externa reflete equilíbrio interno.",
                "<strong>Disciplina:</strong> liberdade sem estrutura gera caos.",
                "<strong>Consciência:</strong> observe antes de reagir.",
                "<strong>Estabilidade:</strong> crie base antes de mudar.",
                "<strong>Responsabilidade emocional:</strong> assuma o que precisa ser organizado."
            ],
            
            mensagemFinal: "O 14:41 aparece quando a vida pede organização antes de ação."
        },

        "15:51": {
            titulo: "Atração Emocional e Testes de Consciência Afetiva",
            intro: "O 15:51 surge quando desejos, vínculos e emoções estão sendo testados. Essa hora indica situações de forte atração emocional ou afetiva, mas que exigem atenção e maturidade. Ela aparece quando escolhas feitas apenas pelo impulso podem gerar consequências emocionais.",
            
            tituloSignificado: "O Espelho do Desejo",
            significado: "O 15:51 representa magnetismo emocional, sedução e intensidade. Mas também revela risco de dependência afetiva, idealização excessiva ou escolhas que não respeitam seus limites internos. Essa hora mostra que nem tudo que atrai é saudável — e discernimento é essencial.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 15:51 orienta você a observar seus desejos com lucidez. Pergunte-se se essa atração vem de plenitude ou de carência. Essa hora pede responsabilidade afetiva, respeito por si mesmo e escolhas conscientes. Emoção sem consciência prende; emoção com consciência liberta.",
            
            versiculo: "“Sobre tudo o que se deve guardar, guarda o teu coração.” (Provérbios 4:23)",
            
            topicos: [
                "<strong>Desejo:</strong> atração não é garantia de bem-estar.",
                "<strong>Consciência afetiva:</strong> escolha o que respeita sua paz.",
                "<strong>Magnetismo:</strong> você atrai aquilo que vibra.",
                "<strong>Limites emocionais:</strong> amar não é se perder.",
                "<strong>Autovalor:</strong> escolhas conscientes protegem sua energia."
            ],
            
            mensagemFinal: "O 15:51 aparece quando o coração precisa de consciência, não impulso."
        },

        "21:12": {
            titulo: "Expansão Externa e Negligência Interior",
            intro: "O 21:12 surge quando você está expandindo, produzindo ou se dedicando muito ao mundo externo, mas deixando o interno em segundo plano. Essa hora indica crescimento, sim, mas com desgaste emocional oculto. Ela aparece quando o sucesso externo começa a cobrar um preço interno.",
            
            tituloSignificado: "O Espelho do Desalinhamento",
            significado: "O 21:12 representa desequilíbrio entre o que você mostra ao mundo e o que sente por dentro. Há reconhecimento, avanço ou exposição, mas falta integração emocional. Essa hora revela que crescer sem cuidar do emocional gera vazio, e que realização sem presença perde o sentido.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 21:12 orienta você a desacelerar internamente, mesmo que externamente esteja em movimento. Reflita se suas conquistas estão alinhadas com sua verdade emocional. Essa hora pede integração: sucesso com consciência, expansão com equilíbrio, crescimento sem autoabandono.",
            
            versiculo: "“Pois que aproveita ao homem ganhar o mundo inteiro e perder a sua alma?” (Marcos 8:36)",
            
            topicos: [
                "<strong>Expansão:</strong> crescer não pode custar sua paz.",
                "<strong>Integração:</strong> alinhe sucesso externo e bem-estar interno.",
                "<strong>Consciência emocional:</strong> observe o que você sente, não só o que faz.",
                "<strong>Presença:</strong> esteja inteiro onde estiver.",
                "<strong>Equilíbrio:</strong> realização sem sentido gera vazio."
            ],
            
            mensagemFinal: "O 21:12 aparece quando crescer sem se cuidar começa a doer."
        },

        "23:32": {
            titulo: "Cansaço da Alma e Necessidade de Recolhimento",
            intro: "O 23:32 surge quando sua energia emocional e mental está próxima do limite. Essa hora indica exaustão interna, mesmo que você continue funcionando externamente. Ela aparece como um alerta: algo precisa parar para que você não se perca.",
            
            tituloSignificado: "O Espelho do Excesso",
            significado: "O 23:32 representa acúmulo: de responsabilidades, emoções não expressas e cobranças internas. Essa hora revela que você está carregando mais do que deveria, muitas vezes tentando dar conta de tudo sozinho. O corpo segue, mas a alma pede descanso.",
            
            tituloOrientacao: "Como agir diante dessa mensagem",
            orientacao: "O 23:32 orienta você a se recolher conscientemente. Reduza estímulos, respeite limites e permita-se descansar sem culpa. Essa hora pede silêncio, introspecção e cuidado profundo consigo. Ignorar esse chamado pode levar a esgotamento emocional.",
            
            versiculo: "“Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.” (Mateus 11:28)",
            
            topicos: [
                "<strong>Descanso:</strong> parar também é produtividade.",
                "<strong>Limites:</strong> você não precisa dar conta de tudo.",
                "<strong>Recolhimento:</strong> silêncio cura.",
                "<strong>Autocuidado:</strong> respeite seus sinais internos.",
                "<strong>Encerramento:</strong> finalize o dia com consciência."
            ],
            
            mensagemFinal: "O 23:32 aparece quando a alma pede descanso antes de adoecer."
        }
    },
    desafio7Dias: [
        { dia: 1, tema: "Recomeço com Esperança", exercicio: "Às 11:11, faça uma oração de gratidão confiando no novo ciclo que Deus inicia." },
        { dia: 2, tema: "Alinhamento e Direção", exercicio: "Às 14:14, pause por 1 minuto e peça que sua vontade se alinhe à vontade de Deus." },
        { dia: 3, tema: "Propósito e Constância", exercicio: "Ao ver 15:15, declare que sua motivação vem do alto e nada será em vão." },
        { dia: 4, tema: "Sabedoria e Consciência", exercicio: "Ao ver 16:16, peça discernimento e luz divina para suas decisões mentais." },
        { dia: 5, tema: "Cura e Soltura", exercicio: "Ao ver 17:17, diga: 'Senhor, eu solto e descanso em Ti'. Entregue o que você não controla." },
        { dia: 6, tema: "Gratidão e Renovação", exercicio: "Ao ver 18:18, pare e agradeça em voz alta por 3 vitórias da sua semana." },
        { dia: 7, tema: "Intimidade com Deus", exercicio: "Ao ver 22:22, reconheça a soberania divina e sinta Sua presença de paz." }
    ]
};