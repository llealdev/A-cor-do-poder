document.addEventListener('DOMContentLoaded', () => {
    const imageCarousel = document.getElementById('imageCarousel');
    const mainContent = document.querySelector('.main-content');
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    const imageItems = document.querySelectorAll('.image-carousel .image-item'); // Seleciona todas as imagens

    let hoverTimeout;

    // Lógica para o menu mobile
    mobileMenuToggle.addEventListener('click', () => {
        mobileNavMenu.classList.toggle('active');
        mobileMenuToggle.querySelector('i').classList.toggle('fa-bars');
        mobileMenuToggle.querySelector('i').classList.toggle('fa-times'); // Muda para X
    });

    // Lógica para o carrossel expandir/contrair (apenas em telas maiores)
    // Este comportamento de hover ainda é relevante para a interação visual do carrossel no index.html
    imageCarousel.addEventListener('mouseenter', () => {
        if (window.innerWidth > 992) { // Condição para telas maiores
            clearTimeout(hoverTimeout);
            imageCarousel.classList.add('expanded');
            mainContent.classList.add('text-hidden'); // Esconde o texto principal
        }
    });

    imageCarousel.addEventListener('mouseleave', () => {
        if (window.innerWidth > 992) { // Condição para telas maiores
            hoverTimeout = setTimeout(() => {
                imageCarousel.classList.remove('expanded');
                mainContent.classList.remove('text-hidden'); // Mostra o texto principal
            }, 300);
        }
    });

    // --- MUDANÇA AQUI: Lógica de clique nas imagens para SEMPRE redirecionar ---
    imageItems.forEach((item) => {
        item.addEventListener('click', () => {
            const bioId = item.getAttribute('data-id');
            // Redireciona para a página de biografias, com a âncora da pessoa
            window.location.href = 'biografias/index.html#' + bioId;
        });
    });
    // --- FIM DA MUDANÇA ---

    // Lógica do news ticker
    const newsTicker = document.querySelector('.news-ticker');
    const newsItemWrapper = document.querySelector('.news-item-wrapper');

    if (newsTicker && newsItemWrapper) {
        // Duplica o conteúdo para garantir a rolagem contínua
        newsItemWrapper.innerHTML += newsItemWrapper.innerHTML;
    }
    
    // Fechar o carrossel expandido ao clicar fora dele (apenas em telas maiores)
    imageCarousel.addEventListener('click', (e) => {
        if (imageCarousel.classList.contains('expanded') && e.target === imageCarousel && window.innerWidth > 992) {
            imageCarousel.classList.remove('expanded');
            mainContent.classList.remove('text-hidden');
        }
    });

    // Fechar com tecla ESC (apenas quando o carrossel estiver expandido em telas maiores)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageCarousel.classList.contains('expanded') && window.innerWidth > 992) {
            imageCarousel.classList.remove('expanded');
            mainContent.classList.remove('text-hidden');
        }
    });
});