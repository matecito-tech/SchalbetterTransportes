document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementos que ya tenían la clase (timeline)
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // Selectores de contenido con delay escalonado POR GRUPO
    const revealGroups = [
        '.container-text h2',
        '.container-text p',
        '.text-format',
        '.hero-description',
        '.service-card',
        '.capacity-card',
        '.info-item',
        '.careers-content h3',
        '.careers-content ul',
        '.careers-image',
        '.footer-text',
    ];

    revealGroups.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, i) => {
            if (!el.classList.contains('scroll-reveal') && !el.classList.contains('fade-in-up')) {
                el.classList.add('scroll-reveal');
                // Delay escalonado dentro del mismo grupo (máx 200ms)
                el.style.transitionDelay = `${Math.min(i * 80, 200)}ms`;
                observer.observe(el);
            }
        });
    });
});
