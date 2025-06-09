document.addEventListener('DOMContentLoaded', () => {
    const imageCarousel = document.getElementById('imageCarousel');
    const mainContent = document.querySelector('.main-content');
    const textSection = document.getElementById('textSection');
    const imageItems = document.querySelectorAll('.image-carousel .image-item');
    const biographySection = document.getElementById('biographySection');
    const backButton = document.getElementById('backButton');
    const bioTitle = document.getElementById('bioTitle');
    const bioSubtitle = document.getElementById('bioSubtitle');
    const bioText = document.getElementById('bioText');

    let hoverTimeout;

    imageCarousel.addEventListener('mouseenter', () => {
        if (!biographySection.classList.contains('active')) {
            clearTimeout(hoverTimeout);
            imageCarousel.classList.add('expanded');
            mainContent.classList.add('text-hidden');
        }
    });

    imageCarousel.addEventListener('mouseleave', () => {
        if (!biographySection.classList.contains('active')) {
            hoverTimeout = setTimeout(() => {
                imageCarousel.classList.remove('expanded');
                mainContent.classList.remove('text-hidden');
            }, 300);
        }
    });

    imageItems.forEach((item) => {
        item.addEventListener('click', () => {
            mainContent.classList.add('biography-active');
            imageCarousel.classList.add('biography-mode');
            biographySection.classList.add('active');
            imageItems.forEach(img => img.classList.remove('selected'));
            item.classList.add('selected');
            
            bioTitle.textContent = item.dataset.name + ':';
            bioSubtitle.textContent = item.dataset.title;
            bioText.innerHTML = `<p>${item.dataset.bio}</p>`;
        });
    });

    backButton.addEventListener('click', () => {
        mainContent.classList.remove('biography-active');
        imageCarousel.classList.remove('biography-mode');
        biographySection.classList.remove('active');
        
        imageItems.forEach(img => img.classList.remove('selected'));
        mainContent.classList.remove('text-hidden');
        imageCarousel.classList.remove('expanded');
    });

    const newsTicker = document.querySelector('.news-ticker');
    const newsItemWrapper = document.querySelector('.news-item-wrapper');

    if (newsTicker && newsItemWrapper) {
        newsItemWrapper.innerHTML += newsItemWrapper.innerHTML;
    }
    
    imageCarousel.addEventListener('click', (e) => {
        if (imageCarousel.classList.contains('expanded') && e.target === imageCarousel) {
            imageCarousel.classList.remove('expanded');
            mainContent.classList.remove('text-hidden');
        }
    });

    // Fechar com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageCarousel.classList.contains('expanded')) {
            imageCarousel.classList.remove('expanded');
            mainContent.classList.remove('text-hidden');
        }
    });

    document.querySelectorAll('.image-item').forEach(function(item) {
    item.addEventListener('click', function() {
        const bioId = item.getAttribute('data-id');
        // Redireciona para a página de biografias, já na âncora da pessoa
        window.location.href = '/src/biografias/index.html#' + bioId;
    });
    });
});