const menu = document.getElementById('menu');
const nav = document.querySelector('nav');

function menuVisibility () {
    if (window.innerWidth <= 450) {
        menu.classList.remove('hidden');
        nav.classList.add('hidden');
    } else {
        menu.classList.add('hidden');
        nav.classList.remove('hidden');
    }
}

window.addEventListener('resize', menuVisibility);

menu.addEventListener('click', () => {
    nav.classList.toggle('hidden');
})