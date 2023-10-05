let idInput = document.getElementById('idPersona');
let nombreInput = document.getElementById('nombre');
let apellido1Input = document.getElementById('apellido1');
let apellido2Input =document.getElementById('apellido2');
let nacionalidadInput = document.getElementById('nacionalidad');
const mensajeOcultoInput = document.getElementById('mensajeOculto');

function cargarDatos(){
    let menu = document.getElementById('menu').innerHTML;

    idInput.value = persona.id;
    nombreInput.value = persona.nombre;
    apellido1Input.value = persona.apellido1;
    apellido2Input.value = persona.apellido2;
    nacionalidadInput.value = persona.nacionalidad;
}

function cargarCabecera(dest){
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>'
}

function validarCampos() {
    if (!campoEsValido(nombreInput.value, /A-Z[a-z]{3,20}/)) {
        mensajeOcultoInput.value += "Nombre no valido";
    } else if (!campoEsValido(apellido1Input.value, /A-Z[a-z]{2,19}/)) {
        mensajeOcultoInput.value += "Primer apellido no valido";
    } else if (!campoEsValido(apellido2Input.value, /A-Z[a-z]{2,19}/)) {
        mensajeOcultoInput.value += "Segundo apellido no valido";
    } else if (!campoEsValido(nacionalidadErrorCampo.value, /[a-z]{3,15}/)) {
        mensajeOcultoInput.value += "Nacionalidad no valida";
    }
}

function campoEsValido(valor, regexp) {
    return regexp.test(valor);
}
