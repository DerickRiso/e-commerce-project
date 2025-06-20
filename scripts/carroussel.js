const carrossel = document.querySelector('.destaques')
const img = document.querySelectorAll('.destaques img')
const left = document.getElementById('left');
const right = document.getElementById('right');
const totalImages = img.length;
let index = 0;
let interval;

// Faz o efeito do carrossel
function carrosselEffect() {
    if(index > img.length - 1) {
        index = 0;
    }
    if(index < 0) {
        index = img.length - 1;
    }

    carrossel.style.transform = `translateX(${-index * 600}px)`;
}

// Começa o autoroll do carrossel
function startInterval() {
    interval = setInterval(() => {
        index++;
        carrosselEffect();
    }, 4000);
}

startInterval();

// Reseta o autoroll quando o usuário clica para avançar ou voltar
function resetInterval() {
    clearInterval(interval);
    startInterval();
}

right.addEventListener('click', () => {
    index++;
    carrosselEffect();
    resetInterval();
})

left.addEventListener('click', () => {
    index--;
    carrosselEffect();
    resetInterval();
})


