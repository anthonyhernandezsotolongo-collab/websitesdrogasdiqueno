// Alternar menú hamburguesa
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// Redirección al hacer clic
document.querySelectorAll('.caratula').forEach(caratula => {
    caratula.addEventListener('click', () => {
        const link = caratula.getAttribute('data-link');
        window.location.href = link;
    });
});

// Animación de rotación automática
function animarCaratulas() {
    document.querySelectorAll('.caratula').forEach((caratula, index) => {
        caratula.style.animation = `rotar 5s infinite alternate ${index}s`;
    });
}

animarCaratulas();

// Definición de animación en CSS dinámicamente
const estilo = document.createElement('style');
estilo.innerHTML = `
@keyframes rotar {
  from { transform: rotate(0deg) translateY(0); }
  to { transform: rotate(10deg) translateY(-10px); }
}
`;
document.head.appendChild(estilo);