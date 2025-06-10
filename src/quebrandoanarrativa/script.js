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

    // 2. Lógica do News Ticker (já existia, mantido)
    const newsTicker = document.querySelector('.news-ticker');
    const newsItemWrapper = document.querySelector('.news-item-wrapper');

    if (newsTicker && newsItemWrapper) {
        // Duplica o conteúdo para garantir a rolagem contínua
        newsItemWrapper.innerHTML += newsItemWrapper.innerHTML;
    }
});