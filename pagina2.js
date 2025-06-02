
// Modal para abrir e fechar ao clicar nas imagens
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const closeBtn = document.querySelector('.close');

const images = document.querySelectorAll('.gg img');

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "flex"; // Mostra o modal

    // Pega as infos do elemento pai da imagem clicada
    const parent = img.closest('.gg');
    const title = parent.querySelector('h1').innerText;
    const desc = parent.querySelector('p').innerText;
    const src = img.src;

    modalImg.src = src;
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = "none"; // Esconde o modal
});

// Fecha o modal clicando fora do conteúdo
window.addEventListener('click', e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
