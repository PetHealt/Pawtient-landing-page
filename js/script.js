function togglePricing() {
    const isAnnual = document.getElementById('pricing-toggle').checked;
    const amounts = document.querySelectorAll('.price-amount');
    const periods = document.querySelectorAll('.price-period');
    const labelMensual = document.getElementById('label-mensual');
    const labelAnual = document.getElementById('label-anual');

    if (isAnnual) {
        labelMensual.classList.remove('active');
        labelAnual.classList.add('active');
        amounts.forEach(el => el.innerText = el.getAttribute('data-annual'));
        periods.forEach(el => el.innerText = 'año');
    } else {
        labelMensual.classList.add('active');
        labelAnual.classList.remove('active');
        amounts.forEach(el => el.innerText = el.getAttribute('data-monthly'));
        periods.forEach(el => el.innerText = 'mes');
    }
}
function togglePricing() {
    const isAnnual = document.getElementById('pricing-toggle').checked;
    const amounts = document.querySelectorAll('.price-amount');
    const periods = document.querySelectorAll('.price-period');
    const labelMensual = document.getElementById('label-mensual');
    const labelAnual = document.getElementById('label-anual');

    if (isAnnual) {
        labelMensual.classList.remove('active');
        labelAnual.classList.add('active');
        amounts.forEach(el => el.innerText = el.getAttribute('data-annual'));
        periods.forEach(el => el.innerText = 'año');
    } else {
        labelMensual.classList.add('active');
        labelAnual.classList.remove('active');
        amounts.forEach(el => el.innerText = el.getAttribute('data-monthly'));
        periods.forEach(el => el.innerText = 'mes');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});


const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        htmlElement.removeAttribute('data-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});


const langToggleBtn = document.getElementById('lang-toggle');
const elementsToTranslate = document.querySelectorAll('.lang-text');
let currentLang = 'es';

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';

    langToggleBtn.innerText = currentLang === 'es' ? 'EN' : 'ES';

    elementsToTranslate.forEach(element => {
        if (currentLang === 'en') {
            element.innerHTML = element.getAttribute('data-en');
        } else {
            element.innerHTML = element.getAttribute('data-es');
        }
    });
});