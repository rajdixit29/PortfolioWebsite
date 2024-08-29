// Parallax Effect
document.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('[data-speed]');
    
    parallaxElements.forEach(function(element) {
        const speed = element.getAttribute('data-speed');
        const yPos = window.scrollY * speed;
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Scroll-triggered animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

