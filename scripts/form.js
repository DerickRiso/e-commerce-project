const submit = document.getElementById('submit-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Verificação se campos estão preenchidos
submit.addEventListener('click', () => { 
    if(nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
        alert('Preencha os campos para enviar o formulário!');
    }
})


