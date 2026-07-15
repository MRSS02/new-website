document.addEventListener('DOMContentLoaded', () => {
  // Offset (espaço) para deixar entre o topo da tela e a seção
  const OFFSET = 90;
  
  // 1. Seleciona todos os links que devem acionar a rolagem
  const navLinks = document.querySelectorAll('.nav-link');

  // 2. A função que realiza a rolagem suave
  const smoothScroll = (event, target) => {
      // Impede o comportamento padrão do link (o "salto" imediato)
      event.preventDefault();

      // Rola a janela até a posição do elemento alvo, descontando o offset
      window.scrollTo({
          top: target.offsetTop - OFFSET,
          behavior: 'smooth', // A mágica da animação suave!
      });

      // Opcional: Atualiza a URL na barra de endereço sem recarregar a página
      history.replaceState(null, '', `#${target.id}`);
  };

  // 3. Adiciona o "ouvinte" de clique para cada link
  navLinks.forEach(link => {
      // Pega o destino do link (ex: '#contato')
      const hash = link.hash;

      // Se o link tiver um destino, continua
      if (hash) {
          const targetSection = document.querySelector(hash);
          
          // Se a seção de destino realmente existir na página...
          if (targetSection) {
              // ...adiciona o evento de clique que chama nossa função de rolagem
              link.addEventListener('click', (event) => {
                  smoothScroll(event, targetSection);
              });
          }
      }
  });
});

function aparecerBarra() {
	let scrollPosition = window.scrollY;
	let navbar = document.getElementById("navbar-header");
	let about = document.getElementById("o_evento");
	let bgNavbar = document.getElementById("bg-navbar");
	let logo = document.getElementById("nav-logo");

	if (about === null) {
		bgNavbar.classList.add("navbar-scrolled");
		navbar.classList.add("navbar-scrolled");
		logo.classList.remove("hidden");
		logo.classList.add("not-hidden");
		bgNavbar.classList.add("navbar-color");
		navbar.classList.add("navbar-color");
		return; 
	}

    // Dinamicamente altera o background do cabeçalho quando há scroll;
    let threshold0 = 0;
	let threshold1 = 20;

    if (scrollPosition > threshold0) {
		bgNavbar.classList.add("navbar-scrolled");
		navbar.classList.add("navbar-scrolled");
		logo.classList.remove("hidden");
		logo.classList.add("not-hidden"); 
		if (scrollPosition > threshold1) {
			bgNavbar.classList.add("navbar-color");
			navbar.classList.add("navbar-color");
		} else {
			bgNavbar.classList.remove("navbar-color");
			navbar.classList.remove("navbar-color");
		}
    } else {
		bgNavbar.classList.remove("navbar-color");
		bgNavbar.classList.remove("navbar-scrolled");
		navbar.classList.remove("navbar-color");
		navbar.classList.remove("navbar-scrolled");
		logo.classList.remove("not-hidden");
		logo.classList.add("hidden"); 
    }
}

document.addEventListener("DOMContentLoaded", () => {
	aparecerBarra();
});

document.addEventListener("scroll", () => {
	aparecerBarra();
});

