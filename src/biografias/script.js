document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Menu Mobile (Hambúrguer)
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');

    if (mobileMenuToggle && mobileNavMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('active');
            // Altera o ícone de hambúrguer para X e vice-versa
            mobileMenuToggle.querySelector('i').classList.toggle('fa-bars');
            mobileMenuToggle.querySelector('i').classList.toggle('fa-times');
        });
    }

    // 2. Lógica para rolagem da página para a âncora (se houver)
    // Isso é útil quando a página é carregada de um link tipo 'index.html#adrielle'
    const hash = window.location.hash; // Obtém a âncora da URL (ex: #adrielle)

    if (hash) {
        // Remove o '#' para obter o ID do elemento
        const targetElementId = hash.substring(1); 
        const targetElement = document.getElementById(targetElementId);

        if (targetElement) {
            // Usa setTimeout para garantir que o layout da página já esteja renderizado
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Rola suavemente
                    block: 'start' // Alinha o topo do elemento com o topo da área visível
                });
            }, 100); // Pequeno atraso para garantir que a página carregou
        }
    }

    // 3. Lógica do News Ticker (já existia, mantido)
    const newsTicker = document.querySelector('.news-ticker');
    const newsItemWrapper = document.querySelector('.news-item-wrapper');

    if (newsTicker && newsItemWrapper) {
        // Duplica o conteúdo para garantir a rolagem contínua
        newsItemWrapper.innerHTML += newsItemWrapper.innerHTML;
    }
});