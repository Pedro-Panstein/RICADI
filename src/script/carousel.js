export function initCarousel() {
  const carousel = document.getElementById("carousel");
  const primary = document.getElementById("primary");
  const secondCarousel = document.getElementById("secondCarousel");
  const carouselButtom = document.getElementById("carouselButtom");
  const buttom3 = document.getElementById("buttom3");
  const buttom2 = document.getElementById("buttom2");
  const arrow1 = document.getElementById("arrow1");
  const arrow2 = document.getElementById("arrow2");
  const arrow3 = document.getElementById("arrow3");
  const arrow4 = document.getElementById("arrow4");

  // Função para ajustar a visibilidade dos carrosséis com base na largura da tela
  function handleResize() {
    const mediaQuery = window.matchMedia("(min-width: 1394px)");

    if (mediaQuery.matches) {
      console.log("oi");
      // Quando a tela for menor que 1394px, esconda o carrossel e mostre os 3 primeiros itens
      carousel.style.display = "none"; // Esconde o carrossel
      secondCarousel.style.display = "none"; // Exibe o segundo carrossel
      // Exibe o botão de navegação quando a tela for maior que 1394px
      carouselButtom.style.display = "flex"; // Exibe os pontos de navegação
      arrow1.style.display = "flex";
      arrow2.style.display = "flex";
      primary.style.height = "600px";
    } else {
      // Se a largura for maior que 1394px, exibe o carrossel e esconde o segundo carrossel
      carousel.style.display = "flex";
      secondCarousel.style.display = "none";
      // Esconde o botão de navegação quando a tela for menor que 1394px
      carouselButtom.style.display = "none"; // Esconde os pontos de navegação
      arrow1.style.display = "none";
      arrow2.style.display = "none";
      primary.style.height = "100%";
      primary.style.display = "flex";
    }
  }

  function firstCarouselFunction() {
    primary.style.display = "flex";
    secondCarousel.style.display = "none";
  }

  function secondCarouselFunction() {
    primary.style.display = "none";
    secondCarousel.style.display = "flex";
  }

  arrow1.addEventListener("click", secondCarouselFunction);
  arrow2.addEventListener("click", secondCarouselFunction);
  arrow3.addEventListener("click", firstCarouselFunction);
  arrow4.addEventListener("click", firstCarouselFunction);

  buttom3.addEventListener("click", firstCarouselFunction);

  buttom2.addEventListener("click", secondCarouselFunction);

  // Adiciona o evento de redimensionamento da janela
  window.addEventListener("resize", handleResize);

  // Chama a função uma vez para garantir que o layout seja configurado corretamente no início
  handleResize();
}
