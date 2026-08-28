// Seleciona os elementos da página
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

// Carrega dados do localStorage (ou inicia com valores padrão)
let count = parseInt(localStorage.getItem('vidros_like_count')) || 0;
let isLiked = localStorage.getItem('vidros_is_liked') === 'true';

// Atualiza a interface ao carregar a página
likeCount.textContent = count;
if (isLiked) {
    likeBtn.classList.add('liked');
}

// Lógica de clique no botão
likeBtn.addEventListener('click', () => {
    if (!isLiked) {
        // Se ainda não curtiu: incrementa
        count++;
        isLiked = true;
        likeBtn.classList.add('liked');
    } else {
        // Se já curtiu: remove o curtida
        count--;
        isLiked = false;
        likeBtn.classList.remove('liked');
    }

    // Atualiza a tela
    likeCount.textContent = count;

    // Salva a informação no navegador
    localStorage.setItem('vidros_like_count', count);
    localStorage.setItem('vidros_is_liked', isLiked);
});