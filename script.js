const langBtn = document.getElementById('lang-switch');
let currentLang = 'en';

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    if (currentLang === 'ar') {
        document.body.classList.add('rtl');
        langBtn.textContent = 'English';
    } else {
        document.body.classList.remove('rtl');
        langBtn.textContent = 'العربية';
    }
});

// Reveal animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.m-card, .section-label, .pill').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});