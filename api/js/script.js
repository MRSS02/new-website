document.getElementById("navbar").addEventListener("click", function (e) {
    const menuabrir = document.getElementById("menu-abrir-button");
    const menufechar = document.getElementById("menu-fechar-button");
    const navmenu = document.getElementById("nav-menu");
    const navbar = document.getElementById("navbar");
    const navout = document.getElementById("navout");

    if (!document.body.classList.contains("mobile-menu-show")) {
        if (e.target.id == menuabrir.id) {
            document.body.classList.add("mobile-menu-show");
        }
    } else {
        if (e.target.id == menufechar.id) {
            document.body.classList.remove("mobile-menu-show");
        }
        if (
            e.target.id == navout.id ||
            e.target.classList.contains("nav-link") ||
            e.target.classList.contains("nav-logo") ||
            e.target.tagName === "IMG"
        ) {
            document.body.classList.remove("mobile-menu-show");
        }
    }
});

//Função do Botão flutuante!

document.addEventListener('DOMContentLoaded', function() {
	
    // --- Seu código de clique (não muda) ---
    const popoutButtons = document.querySelectorAll('.popout .btn');
    popoutButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const popoutContainer = this.closest('.popout');
            const panel = popoutContainer.querySelector('.panel');
            this.classList.toggle('active');
            panel.classList.toggle('active');
        });
    });

    const popoutPanels = document.querySelectorAll('.popout .panel');
    popoutPanels.forEach(panel => {
        panel.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });

    document.addEventListener('click', function() {
        const activePanels = document.querySelectorAll('.popout .panel.active');
        const activeButtons = document.querySelectorAll('.popout .btn.active');
        activePanels.forEach(panel => panel.classList.remove('active'));
        activeButtons.forEach(button => button.classList.remove('active'));
    });

    // Lógica do botão de fechar (X) do painel
    const closeBtns = document.querySelectorAll('.panel-close');
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const panel = closeBtn.closest('.panel');
            if (panel) {
                panel.classList.remove('active');
                // Também remove o estado ativo do botão principal, se necessário
                const btn = panel.parentElement.querySelector('.btn');
                if (btn) btn.classList.remove('active');
            }
        });
    });
    // --- Fim do código de clique ---


    // --- INÍCIO DA LÓGICA RESPONSIVA E DO OBSERVER ---

    const sectionHome = document.querySelector('.banner-section');
    const allPopouts = document.querySelectorAll('.popout');
    const animationDelay = 300;
    
    // Variável para guardar nosso observer, para que possamos ativá-lo e desativá-lo.
    let intersectionObserver = null;

    // Função que CRIA e ATIVA a animação de scroll
    function setupObserver() {
        // Se o observer já existe, não faz nada.
        if (intersectionObserver) return;

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    allPopouts.forEach(popout => {
                        popout.classList.add('popout-hidden');
                        setTimeout(() => {
                            popout.classList.add('popout-repositioned');
                            popout.classList.remove('popout-hidden');
                            // Mostra assinatura-botao
                            const assinatura = popout.querySelector('.assinatura-botao');
                            if (assinatura) assinatura.classList.remove('hide');
                        }, animationDelay);
                    });
                } else {
                    allPopouts.forEach(popout => {
                        popout.classList.add('popout-hidden');
                        setTimeout(() => {
                            popout.classList.remove('popout-repositioned');
                            popout.classList.remove('popout-hidden');
                            // Esconde assinatura-botao
                            const assinatura = popout.querySelector('.assinatura-botao');
                            if (assinatura) assinatura.classList.add('hide');
                        }, animationDelay);
                    });
                }
            });
        };

        intersectionObserver = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.35
        });

        if (sectionHome) intersectionObserver.observe(sectionHome);
    }

    // Função que DESATIVA a animação de scroll e limpa os estilos
    function disableObserver() {
        // Se o observer existe, desconecta ele.
        if (intersectionObserver) {
            intersectionObserver.disconnect();
            intersectionObserver = null;
            
            // Importante: Reseta a aparência dos popouts para o padrão
            allPopouts.forEach(popout => {
                popout.classList.remove('popout-repositioned', 'popout-hidden');
            });
            console.log("Animação de scroll DESATIVADA para telas pequenas.");
        }
    }

    // --- O Gerenciador de Tamanho de Tela ---

    // 1. Cria a "regra" de mídia para botão do SoTM: telas com largura máxima de 1240px
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    // 2. Cria a função que será executada quando o tamanho da tela mudar
    function handleScreenChange(event) {
        if (event.matches) {
            // A tela é PEQUENA (<= 1290px)
            disableObserver();
        } else {
            // A tela é GRANDE (> 1290px)
            setupObserver();
        }
    }

    // 3. Adiciona um "ouvinte" que chama a função handleScreenChange sempre que a condição mudar
    mediaQuery.addEventListener('change', handleScreenChange);

    // 4. Executa a função UMA VEZ no carregamento da página para definir o estado inicial correto
    handleScreenChange(mediaQuery);

});


//Clipes para os botões da tabela
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-button");
    const panes = document.querySelectorAll(".tab-pane");

    // Configuração dos botões da programação
    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            // Remove a classe 'active' de todas as abas e conteúdos
            tabs.forEach((t) => t.classList.remove("active"));
            panes.forEach((pane) => pane.classList.remove("active"));

            // Adiciona a classe 'active' na aba e no conteúdo correspondente
            this.classList.add("active");
            const targetPane = document.querySelector(`#${this.dataset.tab}`);
            if (targetPane) {
                targetPane.classList.add("active");
            }
        });
    });

    // Ativa a primeira aba e conteúdo ao carregar a página
    if (tabs.length > 0 && panes.length > 0) {
        tabs[0].classList.add("active");
        panes[0].classList.add("active");
    }
});

/*Bio Palestrantes*/

document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            const targetCollapseId = this.getAttribute('href');
            const targetCollapse = document.querySelector(targetCollapseId);

            if (targetCollapse) {
                // Alterna a classe 'show'
                targetCollapse.classList.toggle('show');

                // Altera o texto do botão e adiciona a classe 'active'
                if (targetCollapse.classList.contains('show')) {
                    this.textContent = 'Recolher biografia';
                    this.classList.add('active');
                } else {
                    this.textContent = 'Expandir biografia';
                    this.classList.remove('active');
                }
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const closeBtn = document.querySelector('.lightbox-close');
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');

        let currentIndex;
        let imagesInCurrentTab = [];

        // Função para abrir o lightbox
        const openLightbox = (event) => {
            const clickedImg = event.target.closest('img');
            if (!clickedImg) return; // Se o clique não foi em uma imagem, sai

            const activeGallery = document.querySelector('.tab-pane.active .image-gallery');
            imagesInCurrentTab = Array.from(activeGallery.querySelectorAll('img'));
            currentIndex = imagesInCurrentTab.findIndex(img => img === clickedImg);

            if (currentIndex > -1) {
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Impede o scroll da página ao fundo
                showImage(currentIndex);
            }
        };

        // Função para exibir a imagem correta e controlar as setas
        const showImage = (index) => {
            if (index < 0 || index >= imagesInCurrentTab.length) {
                return; // Índice inválido
            }
            lightboxImg.src = imagesInCurrentTab[index].src;
            lightboxImg.alt = imagesInCurrentTab[index].alt;
            currentIndex = index;

            // Esconde ou mostra as setas de navegação
            prevBtn.style.display = (index === 0) ? 'none' : 'block';
            nextBtn.style.display = (index === imagesInCurrentTab.length - 1) ? 'none' : 'block';
        };

        // Funções para navegar
        const showNext = () => showImage(currentIndex + 1);
        const showPrev = () => showImage(currentIndex - 1);

        // Função para fechar o lightbox
        const closeLightbox = () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaura o scroll da página
        };

        // Adiciona o evento de clique nas galerias
        document.querySelectorAll('.image-gallery').forEach(gallery => {
            gallery.addEventListener('click', openLightbox);
        });

        // Eventos dos botões do lightbox
        closeBtn.addEventListener('click', closeLightbox);
        prevBtn.addEventListener('click', showPrev);
        nextBtn.addEventListener('click', showNext);

        // Fecha ao clicar fora da imagem
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        // Eventos do teclado
        document.addEventListener('keydown', (event) => {
            if (lightbox.style.display === 'flex') {
                if (event.key === 'ArrowRight') showNext();
                else if (event.key === 'ArrowLeft') showPrev();
                else if (event.key === 'Escape') closeLightbox();
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Offset para ajustar a "linha de ativação" da seção
    const OFFSET = 90;

    // 1. Seleciona todos os elementos necessários
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));

    // 2. Função que atualiza o CSS, adicionando/removendo a classe 'active'
    const setActive = (hash) => {
        navLinks.forEach(link => {
            // A classe 'active' é aplicada apenas ao link cujo hash corresponde ao da seção visível
            link.classList.toggle('active', link.hash === hash);
        });
    };

    // 3. Adiciona um evento de clique simples para feedback imediato
    navLinks.forEach(link => {
        // Ao clicar, apenas chama a função para ativar o link imediatamente
        // O navegador cuidará da rolagem padrão, pois não usamos event.preventDefault()
        link.addEventListener('click', () => {
            setActive(link.hash);
        });
    });


    // 4. Cria o observador que "vigia" as seções
    if (sections.length) {
        const observer = new IntersectionObserver(entries => {
            // Filtra as entradas para pegar apenas a que está mais no topo e visível
            const visibleSection = entries.find(entry => entry.isIntersecting);

            if (visibleSection) {
                // Ativa o link correspondente à seção que se tornou visível
                setActive(`#${visibleSection.target.id}`);
            }
        }, {
            root: null, // Observa em relação à viewport do navegador
            rootMargin: `-${OFFSET}px 0px -50% 0px`, // Ajusta a área de detecção
            threshold: 0, // Ativa assim que qualquer parte do elemento se torna visível
        });

        // Pede ao observador para vigiar cada uma das seções
        sections.forEach(section => observer.observe(section));
    }

});


function aplicarExpandirTextoTodos(limite = 40) {
  const textos = document.querySelectorAll('.texto');

  textos.forEach((textoEl) => {
    const btn = textoEl.nextElementSibling;

    const textoCompleto = textoEl.dataset.full || textoEl.textContent;

    if (!textoCompleto) return;

    if (textoCompleto.length <= limite) {
      textoEl.textContent = textoCompleto;
      if (btn) btn.style.display = 'none';
      return;
    }

    const textoCurto = textoCompleto.slice(0, limite) + '...';
    let expandido = false;

    textoEl.textContent = textoCurto;

    if (btn) {
      btn.style.display = 'inline';

      btn.addEventListener('click', () => {
        expandido = !expandido;

        textoEl.textContent = expandido
          ? textoCompleto
          : textoCurto;

        btn.textContent = expandido
          ? 'Recolher'
          : 'Expandir';
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  aplicarExpandirTextoTodos(120);
});

