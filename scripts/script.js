const button = document.getElementById('close-open');
const sidebar = document.getElementById('sidebar');
const destaques = document.getElementById('destaques');

button.addEventListener('click', () => {
    sidebar.classList.toggle('hidden')
})

// setInterval(() => {
//    let i = 1;
//    destaques.src = `./assets/images/destaque${i}.jpg`;
//    i++;
// }, 3000)

