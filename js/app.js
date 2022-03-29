// variables
const btnEnviar = document.querySelector('#enviar');

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}

// funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('curso-not-allowed', 'opacity-50')
}