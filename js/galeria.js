//Script da Galeria 

document.addEventListener("DOMContentLoaded", function () {

	let translated = 0;
    let preventDoubleEvent = false;
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
            unZoomLightboxImage();
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
            console.log(event);
			if (event.target != lightbox) {
                if (lightboxImg.classList.contains("zoom")) {
					lightbox.classList.remove("zoom");
					lightboxImg.classList.remove("zoom");
					closeBtn.classList.remove("zoom");
					prevBtn.classList.remove("zoom");
					nextBtn.classList.remove("zoom");
					translated = 0;
					lightboxImg.style.transform = "";
				} else {
					lightbox.classList.add("zoom");
					lightboxImg.classList.add("zoom");
					closeBtn.classList.add("zoom");
					prevBtn.classList.add("zoom");
					nextBtn.classList.add("zoom");
				}
            }
		}

        //remover o zoom
        function unZoomLightboxImage() { 
            lightbox.classList.remove("zoom");
			lightboxImg.classList.remove("zoom");
			closeBtn.classList.remove("zoom");
			prevBtn.classList.remove("zoom");
			nextBtn.classList.remove("zoom");
			translated = 0;
			lightboxImg.style.transform = "";
        }
		
		//checar se está em mobile
		window.mobileCheck = () => {
			let check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera); //long function to check if on mobile (including Tablet)
			if (navigator?.userAgentData?.mobile) check = true;
			console.log(check);
			return check;
		};

        //Duplo clique desktop
		lightbox.addEventListener('dblclick', (event) => {
            if (!window.mobileCheck()) zoomLightboxImage(event);
        });
		
		// Duplo clique mobile
		
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
				if (!preventDoubleEvent) zoomLightboxImage(event);
                preventDoubleEvent = !preventDoubleEvent;
			})
			
			let touchStartX;
			//listener swipe start
			lightboxImg.addEventListener('touchstart', (event) => {
                preventDoubleEvent = false;
				touchStartX = event.changedTouches[0].clientX;
				console.log(event.changedTouches);
			}, { passive: true });

			//listener swipe end
			lightboxImg.addEventListener('touchend', (event) => {
				if (lightboxImg.classList.contains("zoom")) {
					let touchEndX = event.changedTouches[0].clientX;
					console.log(event.changedTouches);
					handleSwipeGesture(touchEndX);
				}
			}, { passive: true });

			function handleSwipeGesture(touchEndX) {
				if (lightboxImg.classList.contains("zoom")) {
					let distX = touchEndX - touchStartX;
					translated = (translated + distX);
                    let imageWidth = lightboxImg.scrollWidth;
                    let aspect = window.screen.width / window.screen.height
                    console.log(aspect);
                    if (aspect > 1.77) {
                        translated = 0;
                    } else if (aspect > 1.6) {
                        if (translated > imageWidth / 12) translated = imageWidth / 12;
                        else if (translated < -imageWidth / 12) translated = -imageWidth / 12;
                    } else if (aspect > 1.48) {
                        if (translated > imageWidth / 10) translated = imageWidth / 10;
                        else if (translated < -imageWidth / 10) translated = -imageWidth / 10;
                    } else if (aspect > 1.4) {
                        if (translated > imageWidth / 9) translated = imageWidth / 9;
                        else if (translated < -imageWidth / 9) translated = -imageWidth / 9;
                    } else if (aspect > 1.34) {
                        if (translated > imageWidth / 8) translated = imageWidth / 8;
                        else if (translated < -imageWidth / 8) translated = -imageWidth / 8;
                    } else if (aspect > 1.2) {
                        if (translated > imageWidth / 6) translated = imageWidth / 6;
                        else if (translated < -imageWidth / 6) translated = -imageWidth / 6;
                    } else if (aspect > 1) {
                        if (translated > imageWidth / 5) translated = imageWidth / 5;
                        else if (translated < -imageWidth / 5) translated = -imageWidth / 5;
                    } else if (aspect > 0.9) {
                        if (translated > imageWidth / 4) translated = imageWidth / 4;
                        else if (translated < -imageWidth / 4) translated = -imageWidth / 4;
                    } else if (aspect > 0.8) {
                        if (translated > imageWidth / 3.5) translated = imageWidth / 3.5;
                        else if (translated < -imageWidth / 3.5) translated = -imageWidth / 3.5;
                    } else if (aspect > 0.68) {
                        if (translated > imageWidth / 3.2) translated = imageWidth / 3.2;
                        else if (translated < -imageWidth / 3.2) translated = -imageWidth / 3.2;
                    } else if (aspect > 0.58) {
                        if (translated > imageWidth / 2.6) translated = imageWidth / 2.6;
                        else if (translated < -imageWidth / 2.6) translated = -imageWidth / 2.6;
                    } else if (aspect > 0.52) {
                        if (translated > imageWidth / 2.5) translated = imageWidth / 2.5;
                        else if (translated < -imageWidth / 2.5) translated = -imageWidth / 2.5;
                    } else if (aspect > 0.5) {
                        if (translated > imageWidth / 2.4) translated = imageWidth / 2.4;
                        else if (translated < -imageWidth / 2.4) translated = -imageWidth / 2.4;
                    } else if (aspect > 0.48) {
                        if (translated > imageWidth / 2.35) translated = imageWidth / 2.35;
                        else if (translated < -imageWidth / 2.35) translated = -imageWidth / 2.35;
                    } else {
                        if (translated > imageWidth / 2.28) translated = imageWidth / 2.28;
                        else if (translated < -imageWidth / 2.28) translated = -imageWidth / 2.28;
                    }
					lightboxImg.style.transform = `translateX(${translated}px)`;
				}
			}
		}

		// Scroll para zoom
		document.addEventListener('wheel', (event) => {
			if (lightbox.style.display === 'flex') {
				event.preventDefault();
				if (lightboxImg.classList.contains("zoom")) {
					if (event.deltaY > 0) {
						translated -= 20;
					} else if (event.deltaY < 0) {
						translated += 20;	
					} else if (event.deltaX > 0) {
						translated -= 20;
					} else if (event.deltaX < 0) {
						translated += 20;
					}
                    let imageWidth = lightboxImg.scrollWidth;
                    let aspect = window.screen.width / window.screen.height
                    console.log(aspect);
                    if (aspect > 1.77) {
                        translated = 0;
                    } else if (aspect > 1.6) {
                        if (translated > imageWidth / 12) translated = imageWidth / 12;
                        else if (translated < -imageWidth / 12) translated = -imageWidth / 12;
                    } else if (aspect > 1.48) {
                        if (translated > imageWidth / 10) translated = imageWidth / 10;
                        else if (translated < -imageWidth / 10) translated = -imageWidth / 10;
                    } else if (aspect > 1.4) {
                        if (translated > imageWidth / 9) translated = imageWidth / 9;
                        else if (translated < -imageWidth / 9) translated = -imageWidth / 9;
                    } else if (aspect > 1.34) {
                        if (translated > imageWidth / 8) translated = imageWidth / 8;
                        else if (translated < -imageWidth / 8) translated = -imageWidth / 8;
                    } else if (aspect > 1.2) {
                        if (translated > imageWidth / 6) translated = imageWidth / 6;
                        else if (translated < -imageWidth / 6) translated = -imageWidth / 6;
                    } else if (aspect > 1) {
                        if (translated > imageWidth / 5) translated = imageWidth / 5;
                        else if (translated < -imageWidth / 5) translated = -imageWidth / 5;
                    } else if (aspect > 0.9) {
                        if (translated > imageWidth / 4) translated = imageWidth / 4;
                        else if (translated < -imageWidth / 4) translated = -imageWidth / 4;
                    } else if (aspect > 0.8) {
                        if (translated > imageWidth / 3.5) translated = imageWidth / 3.5;
                        else if (translated < -imageWidth / 3.5) translated = -imageWidth / 3.5;
                    } else if (aspect > 0.68) {
                        if (translated > imageWidth / 3.2) translated = imageWidth / 3.2;
                        else if (translated < -imageWidth / 3.2) translated = -imageWidth / 3.2;
                    } else if (aspect > 0.58) {
                        if (translated > imageWidth / 2.6) translated = imageWidth / 2.6;
                        else if (translated < -imageWidth / 2.6) translated = -imageWidth / 2.6;
                    } else if (aspect > 0.52) {
                        if (translated > imageWidth / 2.5) translated = imageWidth / 2.5;
                        else if (translated < -imageWidth / 2.5) translated = -imageWidth / 2.5;
                    } else if (aspect > 0.5) {
                        if (translated > imageWidth / 2.4) translated = imageWidth / 2.4;
                        else if (translated < -imageWidth / 2.4) translated = -imageWidth / 2.4;
                    } else if (aspect > 0.48) {
                        if (translated > imageWidth / 2.35) translated = imageWidth / 2.35;
                        else if (translated < -imageWidth / 2.35) translated = -imageWidth / 2.35;
                    } else {
                        if (translated > imageWidth / 2.28) translated = imageWidth / 2.28;
                        else if (translated < -imageWidth / 2.28) translated = -imageWidth / 2.28;
                    }

					lightboxImg.style.transform = `translateX(${translated}px)`;
				} else {
					translated = 0;
					lightboxImg.style.transform = "";
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

