// variables
const btnEnviar = document.querySelector('#enviar');

// variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners();
function eventListeners() {
    // cuando arranca la app
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}

// funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('curso-not-allowed', 'opacity-50')
}

// validar el formulario
function validarFormulario(e) {
    if (e.target.value.length > 0) {
        console.log("hay algo");
    } else {
        e.target.classList.add('border', 'border-red-500');
    }
}