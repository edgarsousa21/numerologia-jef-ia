/* ============================================================
   CALCULOS.JS - LÓGICA DE NEGÓCIO E MATEMÁTICA
   ============================================================ */

const TabelaSorte = {
    1: [2, 4, 9], 2: [1, 2, 3, 4, 5, 6, 7, 8, 9], 3: [2, 3, 6, 8, 9],
    4: [1, 2, 6, 7], 5: [2, 5, 6, 7, 9], 6: [2, 3, 4, 5, 6, 9],
    7: [2, 4, 5, 7], 8: [2, 3, 9], 9: [1, 2, 3, 5, 6, 8, 9]
};

const TabelaLetrasCasa = {
    1: ['A', 'I', 'J', 'Q', 'Y'], 2: ['B', 'K', 'R'], 3: ['C', 'G', 'L', 'S'],
    4: ['D', 'M', 'T'], 5: ['E', 'H', 'N'], 6: ['U', 'V', 'W', 'X'],
    7: ['O', 'Z'], 8: ['F', 'P'], 9: []
};

const ValorLetra = {
    'A':1, 'I':1, 'J':1, 'Q':1, 'Y':1, 'B':2, 'K':2, 'R':2,
    'C':3, 'G':3, 'L':3, 'S':3, 'D':4, 'M':4, 'T':4, 'E':5, 'H':5, 'N':5,
    'U':6, 'V':6, 'W':6, 'X':6, 'O':7, 'Z':7, 'F':8, 'P':8
};

// Dias favoráveis baseados no Mês (Tabela otimizada)
const TabelaFavoraveis = {
    1: { 1:[1,5], 2:[1,6], 3:[3,6], 4:[1,5], 5:[5,6], 6:[5,6], 7:[1,7], 8:[1,3], 9:[6,9], 10:[1,5], 11:[1,6], 12:[6,9], 13:[1,5], 14:[5,6], 15:[5,6], 16:[1,5], 17:[1,3], 18:[5,6], 19:[1,5], 20:[1,6], 21:[3,6], 22:[1,5], 23:[5,6], 24:[5,6], 25:[1,5], 26:[2,3], 27:[6,9], 28:[2,7], 29:[5,7], 30:[2,3], 31:[2,7] },
    2: { 1:[2,7], 2:[2,7], 3:[3,6], 4:[2,7], 5:[5,6], 6:[3,6], 7:[2,7], 8:[2,3], 9:[3,6], 10:[2,7], 11:[5,7], 12:[5,6], 13:[2,7], 14:[5,6], 15:[3,6], 16:[2,5], 17:[2,3], 18:[3,6], 19:[2,7], 20:[2,7], 21:[3,6], 22:[2,7], 23:[5,6], 24:[5,6], 25:[2,7], 26:[2,3], 27:[6,9], 28:[2,7], 29:[6,7] },
    3: { 1:[1,7], 2:[2,7], 3:[3,6], 4:[1,7], 5:[5,7], 6:[3,6], 7:[2,7], 8:[3,6], 9:[6,9], 10:[1,7], 11:[1,7], 12:[6,7], 13:[1,5], 14:[5,7], 15:[3,6], 16:[1,2], 17:[3,6], 18:[3,6], 19:[1,7], 20:[2,7], 21:[3,6], 22:[1,7], 23:[6,7], 24:[3,6], 25:[2,7], 26:[1,3], 27:[1,9], 28:[5,9], 29:[1,7], 30:[3,9], 31:[1,7] },
    4: { 1:[1,7], 2:[1,7], 3:[3,9], 4:[1,7], 5:[5,7], 6:[3,6], 7:[5,7], 8:[1,3], 9:[3,9], 10:[1,7], 11:[1,7], 12:[1,9], 13:[1,7], 14:[5,7], 15:[3,6], 16:[1,2], 17:[1,3], 18:[1,3], 19:[1,7], 20:[2,7], 21:[1,3], 22:[1,7], 23:[5,7], 24:[3,5], 25:[5,7], 26:[2,3], 27:[3,6], 28:[2,7], 29:[1,7], 30:[3,6] },
    5: { 1:[1,2], 2:[2,7], 3:[3,6], 4:[1,7], 5:[5,6], 6:[5,6], 7:[2,7], 8:[2,5], 9:[5,9], 10:[1,5], 11:[1,7], 12:[2,6], 13:[1,7], 14:[5,6], 15:[5,6], 16:[2,5], 17:[2,3], 18:[5,6], 19:[1,2], 20:[2,7], 21:[3,6], 22:[1,7], 23:[5,6], 24:[5,6], 25:[2,7], 26:[2,5], 27:[5,9], 28:[2,7], 29:[5,7], 30:[5,6], 31:[1,7] },
    6: { 1:[1,5], 2:[2,7], 3:[5,6], 4:[1,5], 5:[5,6], 6:[5,6], 7:[2,7], 8:[3,7], 9:[5,9], 10:[1,5], 11:[5,7], 12:[5,6], 13:[1,5], 14:[5,6], 15:[5,6], 16:[2,5], 17:[2,5], 18:[5,6], 19:[1,5], 20:[2,7], 21:[5,6], 22:[1,5], 23:[5,6], 24:[5,6], 25:[2,7], 26:[2,5], 27:[5,6], 28:[2,7], 29:[1,7], 30:[2,3] },
    7: { 1:[1,2], 2:[2,7], 3:[2,3], 4:[1,7], 5:[5,7], 6:[2,6], 7:[2,7], 8:[2,3], 9:[2,3], 10:[1,2], 11:[1,7], 12:[2,6], 13:[1,2], 14:[5,7], 15:[6,7], 16:[1,2], 17:[2,3], 18:[2,3], 19:[1,2], 20:[2,7], 21:[3,6], 22:[1,2], 23:[5,7], 24:[6,7], 25:[2,7], 26:[2,3], 27:[1,9], 28:[2,7], 29:[1,7], 30:[3,6], 31:[1,7] },
    8: { 1:[1,2], 2:[1,5], 3:[3,6], 4:[1,2], 5:[1,5], 6:[3,6], 7:[2,7], 8:[2,3], 9:[3,6], 10:[1,2], 11:[1,7], 12:[1,6], 13:[1,2], 14:[1,5], 15:[1,6], 16:[1,2], 17:[1,3], 18:[1,3], 19:[1,2], 20:[2,7], 21:[3,6], 22:[1,2], 23:[1,5], 24:[3,6], 25:[2,7], 26:[2,3], 27:[3,6], 28:[2,5], 29:[1,5], 30:[3,6], 31:[1,5] },
    9: { 1:[1,5], 2:[2,5], 3:[3,6], 4:[1,5], 5:[5,6], 6:[5,6], 7:[2,5], 8:[2,3], 9:[3,6], 10:[1,2], 11:[1,5], 12:[3,6], 13:[1,5], 14:[5,6], 15:[5,6], 16:[2,5], 17:[2,3], 18:[3,6], 19:[1,5], 20:[2,7], 21:[3,6], 22:[1,7], 23:[5,6], 24:[3,6], 25:[2,7], 26:[3,6], 27:[6,9], 28:[2,7], 29:[1,7], 30:[3,6] },
    10: { 1:[2,7], 2:[2,7], 3:[3,6], 4:[1,7], 5:[5,6], 6:[3,6], 7:[2,7], 8:[3,6], 9:[3,6], 10:[1,5], 11:[1,6], 12:[2,6], 13:[1,7], 14:[5,6], 15:[3,6], 16:[1,2], 17:[3,6], 18:[3,6], 19:[2,7], 20:[2,7], 21:[3,6], 22:[1,7], 23:[5,6], 24:[3,6], 25:[2,7], 26:[3,6], 27:[6,9], 28:[2,7], 29:[1,7], 30:[3,6], 31:[1,7] },
    11: { 1:[1,7], 2:[1,7], 3:[3,9], 4:[1,7], 5:[5,7], 6:[3,5], 7:[1,7], 8:[3,9], 9:[3,9], 10:[2,7], 11:[1,7], 12:[1,9], 13:[1,7], 14:[5,7], 15:[3,5], 16:[1,5], 17:[3,9], 18:[3,9], 19:[1,7], 20:[2,7], 21:[3,9], 22:[1,7], 23:[5,7], 24:[3,5], 25:[1,7], 26:[3,9], 27:[3,9], 28:[2,7], 29:[1,7], 30:[3,6] },
    12: { 1:[1,7], 2:[2,7], 3:[3,6], 4:[1,7], 5:[3,6], 6:[3,6], 7:[2,7], 8:[2,3], 9:[3,9], 10:[1,7], 11:[1,7], 12:[6,9], 13:[1,3], 14:[5,6], 15:[3,6], 16:[1,2], 17:[2,3], 18:[3,6], 19:[1,7], 20:[2,7], 21:[3,6], 22:[1,7], 23:[5,6], 24:[3,6], 25:[3,7], 26:[3,6], 27:[6,9], 28:[5,6], 29:[1,6], 30:[3,6], 31:[1,3] }
};

const Logic = {
    // 1. UTILITÁRIOS MATEMÁTICOS BÁSICOS
    somarDigitos: (n) => String(n).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0),

    /**
     * Redução Teosófica (1-9, com opção de mestres 11/22)
     * Para Ano Pessoal: use { allow11: false, allow22: false } (padrão)
     * Para Destino: use { allow11: true, allow22: true }
     */
    reduzir: (n, regras = { allow11: false, allow22: false }) => {
        if (n === 0) return 0;
        let v = Math.abs(parseInt(n));
        // Para Desafios, 11 e 22 DEVEM ser reduzidos a 2 e 4 
        // Para Ciclos e Momentos, 11 e 22 NÃO são reduzidos
        while (v > 9) {
            if (regras.allow11 && v === 11) return 11;
            if (regras.allow22 && v === 22) return 22;
            v = String(v).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
        }
        return v;
    },

    formatDate: (d) => d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }),

    // 2. FUNÇÕES DE DATA E TEMPO
    diasParaAniversario: (mesNasc, diaNasc) => {
        const hoje = new Date();
        let niver = new Date(hoje.getFullYear(), mesNasc - 1, diaNasc);
        if (hoje > niver) niver.setFullYear(hoje.getFullYear() + 1);
        return Math.ceil((niver - hoje) / (1000 * 60 * 60 * 24));
    },

    mesesParaFimCiclo: (mesNasc, diaNasc) => {
        const hoje = new Date();
        let niver = new Date(hoje.getFullYear(), mesNasc - 1, diaNasc);
        if (hoje > niver) niver.setFullYear(hoje.getFullYear() + 1);
        let diffMeses = (niver.getFullYear() - hoje.getFullYear()) * 12 + (niver.getMonth() - hoje.getMonth());
        return diffMeses <= 0 ? 12 : diffMeses;
    },

    proximoNumeroCiclo: (atual) => {
        let prox = parseInt(atual) + 1;
        if (prox > 9) return 1; 
        return prox;
    },

    diasRestantesNoMes: () => {
        const agora = new Date();
        const ultimoDia = new Date(agora.getFullYear(), agora.getMonth() + 1, 0).getDate();
        return ultimoDia - agora.getDate();
    },

    tempoRestanteDia: () => {
        const agora = new Date();
        const fim = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate(), 23, 59, 59);
        const diff = fim - agora;
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        return { h, m };
    },

    // 3. FUNÇÕES DE CÁLCULO ESPECÍFICAS
    calcularDestino: (d, m, a) => {
        const soma = Logic.somarDigitos(d) + Logic.somarDigitos(m) + Logic.somarDigitos(a);
        return Logic.reduzir(soma, { allow11: true, allow22: true });
    },

    calcularDestinoAmor: (val) => {
        if(!val) return 0;
        let stringLimpa = String(val).replace(/\D/g, ''); 
        let soma = stringLimpa.split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
        return Logic.reduzir(soma, { allow11: false, allow22: false });
    },

    calcularCores: (dia) => Logic.reduzir(dia),

    calcularCiclosVida: (anoNasc, destino) => {
        const duracaoC1 = 37 - destino; // REGRA: 37 menos o destino
        const fimC1 = anoNasc + duracaoC1;
        const fimC2 = fimC1 + 27; // Ciclo 2 tem duração fixa de 27 anos
        return [
            { inicio: anoNasc, fim: fimC1 },
            { inicio: fimC1, fim: fimC2 },
            { inicio: fimC2, fim: 9999 }
        ];
    },

    // Desafios: Agora recebe anoNasc e fimC1 para ter datas reais e evitar NaN
    calcularDesafios: (dia, mes, ano, anoNasc, fimC1) => {
        // Redução total para desafios (11/22 viram 2/4) 
        const rD = Logic.reduzir(dia, { allow11: false, allow22: false });
        const rM = Logic.reduzir(mes, { allow11: false, allow22: false });
        const rA = Logic.reduzir(Logic.somarDigitos(ano), { allow11: false, allow22: false });

        const d1 = Math.abs(rM - rD); // 1º Desafio: Mês - Dia
        const d2 = Math.abs(rD - rA); // 2º Desafio: Dia - Ano
        const dM = Math.abs(d1 - d2); // Desafio Principal: D1 - D2
        
        return [
            { num: d1, inicio: anoNasc, fim: fimC1 },
            { num: d2, inicio: fimC1, fim: fimC1 + 27 },
            { num: dM, inicio: anoNasc, fim: 9999 }
        ];
    },

    // Momentos: Corrigido o início de m1 para anoNasc
    calcularMomentos: (dia, mes, ano, anoNasc, fimC1) => {
        // Redução teosófica para componentes mantendo 11 e 22
        const rD = Logic.reduzir(dia, { allow11: true, allow22: true });
        const rM = (mes === 11) ? 11 : Logic.reduzir(mes, { allow11: true, allow22: true });
        const rA = Logic.reduzir(Logic.somarDigitos(ano), { allow11: true, allow22: true });

        const m1 = Logic.reduzir(dia + mes, { allow11: true, allow22: true }); // M1: Dia + Mês
        const m2 = Logic.reduzir(dia + ano, { allow11: true, allow22: true }); // M2: Dia + Ano
        const m3 = Logic.reduzir(m1 + m2, { allow11: true, allow22: true });   // M3: M1 + M2
        const m4 = Logic.reduzir(mes + ano, { allow11: true, allow22: true }); // M4: Mês + Ano
        
        return [
            { num: m1, inicio: anoNasc, fim: fimC1 },
            { num: m2, inicio: fimC1, fim: fimC1 + 9 }, // Duração: 9 anos
            { num: m3, inicio: fimC1 + 9, fim: fimC1 + 18 }, // Duração: 9 anos
            { num: m4, inicio: fimC1 + 18, fim: 9999 }
        ];
    },

    calcularFavoraveis: (dia, mes) => {
        let base = (TabelaFavoraveis[mes] && TabelaFavoraveis[mes][dia]) ? TabelaFavoraveis[mes][dia] : [1, 2];
        const n1 = base[0], n2 = base[1];
        let seq = [n1, n2];
        let curr = n2 * 2;
        while(curr <= 31) {
            seq.push(curr);
            curr += n1;
            if(curr <= 31) seq.push(curr);
            curr += n2;
        }
        return [...new Set(seq)].sort((a, b) => a - b).filter(n => n <= 31);
    },

    // 4. LÓGICA DA CASA
    calcularCasa: (numero, letra) => {
        let somaNum = Logic.somarDigitos(String(numero).replace(/\D/g, ''));
        if (letra && ValorLetra[letra.toUpperCase()]) {
            somaNum += ValorLetra[letra.toUpperCase()];
        }
        return Logic.reduzir(somaNum, { allow11: false, allow22: false });
    },

    calcularHarmonizacao: (atual, desejado) => {
        for (let i = 1; i <= 8; i++) {
            let teste = Logic.reduzir(atual + i, { allow11: false, allow22: false });
            if (teste === parseInt(desejado)) {
                return {
                    valorNecessario: i,
                    letras: TabelaLetrasCasa[i]
                };
            }
        }
        return null;
    },

    // 5. GERENTE GERAL (Cálculo Principal) - VERSÃO 100% ALINHADA AO PDF
    calcular: (dtStr) => {
        if (!dtStr) return null;
        const [anoNasc, mesNasc, diaNasc] = dtStr.split('-').map(Number);
        const hoje = new Date();
        
        let anoInteresse = hoje.getFullYear();
        if (hoje < new Date(anoInteresse, mesNasc - 1, diaNasc)) anoInteresse--;

        // 1. Calcula o Destino (Base para a duração dos ciclos)
        const destino = Logic.calcularDestino(diaNasc, mesNasc, anoNasc);
        
        // 2. Calcula as datas dos Ciclos (Regra dos 37 anos)
        const datasCiclos = Logic.calcularCiclosVida(anoNasc, destino);

        // 3. Define as Vibrações da Jornada (Regras de Ouro do PDF)
        const jornadaFinal = datasCiclos.map((c, i) => {
            let vibra = 0;
            if (i === 0) {
                // 1º Ciclo (Mês): Novembro (11) NÃO se reduz 
                vibra = (mesNasc === 11) ? 11 : Logic.reduzir(mesNasc);
            } 
            else if (i === 1) {
                // 2º Ciclo (Dia): Mantém 11 e 22
                vibra = Logic.reduzir(diaNasc, { allow11: true, allow22: true });
            } 
            else {
                // 3º Ciclo (Ano): Mantém 11 e 22
                vibra = Logic.reduzir(Logic.somarDigitos(anoNasc), { allow11: true, allow22: true });
            }
            return { ...c, num: vibra };
        });

        const diaReduzido = Logic.reduzir(diaNasc);
        const anoPessoal = Logic.reduzir(diaNasc + mesNasc + Logic.somarDigitos(anoInteresse), { allow11: false, allow22: false });

        return {
            ano: anoPessoal,
            mes: Logic.reduzir((hoje.getMonth() + 1) + anoPessoal, { allow11: true }),
            dia: Logic.reduzir(Logic.reduzir((hoje.getMonth() + 1) + anoPessoal, { allow11: true }) + Logic.somarDigitos(hoje.getDate()), { allow11: true, allow22: true }),
            destino,
            identidade: destino,
            jornadaVida: {
                ciclosVida: jornadaFinal,
                // Passa os parâmetros necessários para cálculos internos reais
                desafios: Logic.calcularDesafios(diaNasc, mesNasc, anoNasc, anoNasc, jornadaFinal[0].fim),
                momentos: Logic.calcularMomentos(diaNasc, mesNasc, anoNasc, anoNasc, jornadaFinal[0].fim)
            },
            extras: {
                numerosSorte: TabelaSorte[diaReduzido] || [],
                diasFavoraveis: Logic.calcularFavoraveis(diaNasc, mesNasc)
            }
        };
    }
};