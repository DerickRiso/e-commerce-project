// Mostra e oculta sidabar da biblioteca
const button = document.getElementById('close-open');
const sidebar = document.getElementById('sidebar');

button.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
})