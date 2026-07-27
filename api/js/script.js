let translated = 0;

document.getElementById("navbar").addEventListener("click", function (e) {
    const menuabrir = document.getElementById("menu-abrir-button");
    const menufechar = document.getElementById("menu-fechar-button");
    const navmenu = document.getElementById("nav-menu-2");
    const navbar = document.getElementById("navbar");
    const navout = document.getElementById("navout");

    if (!document.body.classList.contains("mobile-menu-show")) {
        if (e.target.id == menuabrir.id) {
            document.body.classList.add("mobile-menu-show");
			document.body.style.overflowY = "hidden";
			document.body.setAttribute("data-lenis-prevent", "true");
        }
    } else {
        if (e.target.id == menufechar.id) {
            document.body.classList.remove("mobile-menu-show");
			document.body.style.overflowY = "";
			document.body.removeAttribute("data-lenis-prevent");
        }
        if (
            e.target.id == navout.id ||
            e.target.classList.contains("nav-link") ||
            e.target.classList.contains("nav-logo") ||
            e.target.tagName === "IMG"
        ) {
            document.body.classList.remove("mobile-menu-show");
			document.body.style.overflowY = "";
			document.body.removeAttribute("data-lenis-prevent");
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

    /* const sectionHome = document.querySelector('.banner-section');
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
    } */

    // --- O Gerenciador de Tamanho de Tela ---

    // 1. Cria a "regra" de mídia para botão do SoTM: telas com largura máxima de 1240px
    /* const mediaQuery = window.matchMedia('(max-width: 1024px)');

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
    handleScreenChange(mediaQuery); */

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

//Script da Galeria 

document.addEventListener("DOMContentLoaded", function () {
	

    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return; 
        const lightboxImg = document.getElementById('lightbox-img');
        const closeBtn = document.querySelector('.lightbox-close');
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');

        let currentIndex;
        let imagesInCurrentTab = [];

		// Função para exibir a imagem correta e controlar as setas
        const showImage = (index) => {
            if (index < 0 || index >= imagesInCurrentTab.length) {
                return; // Índice inválido
            }
            lightboxImg.src = imagesInCurrentTab[index].src;
			let indexLastDot = lightboxImg.src.lastIndexOf("."); // index of last dot in image name
			//console.log(lightboxImg.src.substring(0, indexLastDot) + "_big" + lightboxImg.src.substring(indexLastDot));
			lightboxImg.src = lightboxImg.src.substring(0, indexLastDot) + "_big" + lightboxImg.src.substring(indexLastDot);
            lightboxImg.alt = imagesInCurrentTab[index].alt;
            currentIndex = index;
			
			//Exibe a Lightbox
			setTimeout(() => {
				lightbox.style.display = 'flex';
				/* document.getElementById("galeria").style.overflowY = 'hidden'; */ // Impede o scroll da página ao fundo
			}, 120);
			

            // Esconde ou mostra as setas de navegação
            prevBtn.style.display = (index === 0) ? 'none' : 'block';
            nextBtn.style.display = (index === imagesInCurrentTab.length - 1) ? 'none' : 'block';
        };

        // Função para abrir o lightbox
        const openLightbox = (event) => {
			
			document.body.style.overflowY = "hidden";
			document.body.setAttribute("data-lenis-prevent", "true");
            const clickedImg = event.target.closest('img');
            if (!clickedImg) return; // Se o clique não foi em uma imagem, sai

            const activeGallery = document.querySelector('.tab-pane.active .image-gallery');
			if (!activeGallery) return;
            imagesInCurrentTab = Array.from(activeGallery.querySelectorAll('img'));
            currentIndex = imagesInCurrentTab.findIndex(img => img === clickedImg);

            if (currentIndex > -1) {
                showImage(currentIndex);
            }
        };


        // Funções para navegar
        const showNext = () => showImage(currentIndex + 1);
        const showPrev = () => showImage(currentIndex - 1);

        // Função para fechar o lightbox
        const closeLightbox = () => {
			document.body.style.overflowY = "auto";
			document.body.removeAttribute("data-lenis-prevent");
            lightbox.style.display = 'none';
            /* document.getElementById("galeria").style.overflowY = 'auto'; */ // Restaura o scroll da página
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
		
		//função de zoom
		function zoomLightboxImage(event) { 
			if (event.target !== lightbox) {
                if (lightboxImg.classList.contains("zoom")) {
					lightbox.classList.remove("zoom");
					lightboxImg.classList.remove("zoom");
					closeBtn.classList.remove("zoom");
					prevBtn.classList.remove("zoom");
					nextBtn.classList.remove("zoom");
				} else {
					
					lightbox.classList.add("zoom");
					lightboxImg.classList.add("zoom");
					closeBtn.classList.add("zoom");
					prevBtn.classList.add("zoom");
					nextBtn.classList.add("zoom");
				}
            }
		}
		//Duplo clique desktop
		lightbox.addEventListener('dblclick', (event) => {
            zoomLightboxImage(event);
        });
		
		// Duplo clique mobile
		
		
		//checar se está em mobile
		window.mobileCheck = function() {
			let check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
			if (navigator?.userAgentData?.mobile) check = true;
			console.log(check);
			return check;
		};
		
		if (window.mobileCheck()) {
			
			/* Based on ethanny2 solution: https://gist.github.com/ethanny2/44d5ad69970596e96e0b48139b89154b */
			function detectDoubleTap(doubleTapMs) {
			  let timeout, lastTap = 0
			  return function detectDoubleTap(event) {
				const currentTime = new Date().getTime()
				const tapLength = currentTime - lastTap
				if (0 < tapLength && tapLength < doubleTapMs) {
				  event.preventDefault()
				  const doubleTap = new CustomEvent("doubletap", {
					bubbles: true,
					detail: event
				  })
				  event.target.dispatchEvent(doubleTap)
				} else {
				  timeout = setTimeout(() => clearTimeout(timeout), doubleTapMs)
				}
				lastTap = currentTime
			  }
			}

			// initialize the new event
			document.addEventListener('pointerup', detectDoubleTap(500));

			// put the addEventListener on some tag
			lightbox.addEventListener('doubletap', (event) => {
				zoomLightboxImage(event);
				zoomLightboxImage(event);
			})
		}

		// Scroll
		document.addEventListener('scroll', (event) => {
			if (lightbox.style.display === 'flex') {
				event.preventDefault();
				translated += 1;
				if (lightboxImg.classList.contains("zoom")) {
					console.log(translated);
					lightboxImg.style.transform = `translate(${translated}, 0)`;
				}
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
    
});

// SAcript de acionar botão

document.addEventListener('DOMContentLoaded', () => {
    // Offset para ajustar a "linha de ativação" da seção
    const OFFSETTOP = 84;
	const OFFSETBOTTOM = window.innerHeight - OFFSETTOP;

    // 1. Seleciona todos os elementos necessários
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));

    // 2. Função que atualiza o CSS, adicionando/removendo a classe 'active'
    const setActive = (hash) => {
        navLinks.forEach(link => {
            // A classe 'active' é aplicada apenas ao link cujo hash corresponde ao da seção visível
			if (!link.hash) {
				link.classList.remove('active');
				return;
			}
            if (link.hash == hash) link.classList.add('active');
			else link.classList.remove('active');
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
    /*if (sections.length) {
        const observer = new IntersectionObserver(entries => {
            // Filtra as entradas para pegar apenas a que está mais no topo e visível
            const visibleSection = entries.find(entry => entry.isIntersecting);

            if (visibleSection) {
                // Ativa o link correspondente à seção que se tornou visível
                setActive(`#${visibleSection.target.id}`);
            }
        }, {
            root: null, // Observa em relação à viewport do navegador
            rootMargin: `0px 0px 0px 0px`, // Ajusta a área de detecção
            threshold: `${OFFSETTOP}px 0px ${OFFSETBOTTOM}px 0px`, // Ativa assim que qualquer parte do elemento se torna visível
        });

        // Pede ao observador para vigiar cada uma das seções
        sections.forEach(section => observer.observe(section));
    } */

});
