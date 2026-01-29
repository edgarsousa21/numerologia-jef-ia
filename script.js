document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMAÇÃO NO SCROLL (Intersection Observer)
    const observerOptions = {
        threshold: 0.1, // Dispara quando 10% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach(el => observer.observe(el));


    // 2. FAQ ACCORDION (Lógica "App-like")
    const faqHeaders = document.querySelectorAll('.accordion-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');

            // Fecha todos os outros (comportamento exclusivo)
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.style.maxHeight = null;
            });

            // Se não estava ativo, abre este
            if (!isActive) {
                header.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });


    // 3. FORMULÁRIO DE AMOSTRA GRATUITA
    /* --- NOVO SCRIPT PARA A LANDING PAGE (script.js) --- */

const form = document.getElementById('freeReadForm');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const nasc = document.getElementById('nascimento').value; // Formato DD/MM/AAAA
        
        // Validação Simples
        if(nasc.length < 10) {
            alert("Por favor, preencha a data completa.");
            return;
        }

        // 1. Converter Data de DD/MM/AAAA para YYYY-MM-DD (Padrão do App)
        const partes = nasc.split('/');
        const dataIso = `${partes[2]}-${partes[1]}-${partes[0]}`; // 2026-05-12

        // 2. Feedback Visual no Botão
        const btn = form.querySelector('button');
        btn.innerText = "Iniciando Análise...";
        btn.style.opacity = "0.8";

        // 3. REDIRECIONAMENTO COM DADOS NA URL
        // Enviamos 'nome' e 'nasc' como parâmetros para a página do app
        setTimeout(() => {
            // Certifique-se que o nome do seu arquivo do projeto antigo é 'app.html'
            window.location.href = `app.html?nome=${encodeURIComponent(nome)}&nasc=${dataIso}`;
        }, 500);
    });
}

// Mantenha o restante do código (máscara de data, animações de scroll, FAQ, etc.)

    // 4. MÁSCARA DATA DE NASCIMENTO (UX)
    const inputNasc = document.getElementById('nascimento');
    if (inputNasc) {
        inputNasc.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '');
            if (v.length > 8) v = v.substring(0, 8);
            if (v.length > 4) v = v.replace(/^(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
            else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
            e.target.value = v;
        });
    }

    // 5. SMOOTH SCROLL PARA BOTÕES INTERNOS
    document.querySelector('.js-scroll-to-form').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('amostra').scrollIntoView({ behavior: 'smooth' });
    });
});