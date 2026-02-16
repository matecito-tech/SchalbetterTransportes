document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Timeline Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.fade-in-up');
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
