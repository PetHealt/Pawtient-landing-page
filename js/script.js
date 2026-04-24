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
// Funcionalidad para el switch de precios que ya tenías
function togglePricing() {
    // ... (Mantén el código que ya tenías aquí adentro) ...
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

// ==========================================
// 2. LÓGICA DEL TRADUCTOR (IDIOMA)
// ==========================================
const langToggleBtn = document.getElementById('lang-toggle');
const elementsToTranslate = document.querySelectorAll('.lang-text');
let currentLang = 'es'; // Empieza en español

langToggleBtn.addEventListener('click', () => {
    // Alternar idioma
    currentLang = currentLang === 'es' ? 'en' : 'es';

    // Cambiar el texto del botón principal
    langToggleBtn.innerText = currentLang === 'es' ? 'EN' : 'ES';

    // Recorrer todos los elementos y cambiarles el texto (usando innerHTML)
    elementsToTranslate.forEach(element => {
        if (currentLang === 'en') {
            element.innerHTML = element.getAttribute('data-en');
        } else {
            element.innerHTML = element.getAttribute('data-es');
        }
    });
});