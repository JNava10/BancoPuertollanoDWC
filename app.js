let nombreInput = document.getElementById('nombre');
let apellido1Input = document.getElementById('apellido1');
let apellido2Input =document.getElementById('apellido2');
let nacionalidadInput = document.getElementById('nacionalidad');
let modificarInput = document.getElementById('modificar');
let mensajeOcultoInput = document.getElementById('mensajeOculto');

var persona =

document.addEventListener("DOMContentLoaded", function() {// Inicia la función al abrir el html. Modificiación de la función cargarDatos()
    if (persona == null){
        persona = new Persona('Leon','Scott','Kennedy', 'Estadounidense', 500, "ES21 1465 0100 72 2030876293")  
    } 
    nombreInput.value = persona.nombre
    apellido1Input.value = persona.apellido1
    apellido2Input.value = persona.apellido2
    nacionalidadInput.value = persona.nacionalidad

}); 

function navegar(){
    var str = JSON.stringify(persona);
    localStorage.setItem(str)
    window.location.href='infoCuenta.html'
}

function cargarCabecera(dest){
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>'
}

function validarCampos() {
    if (!campoEsValido(nombreInput.value, /A-Z[a-z]{3,20}/)) {
        mensajeOcultoInput.innerHTML += "Nombre no valido<br>";
    } else if (!campoEsValido(apellido1Input.value, /A-Z[a-z]{2,19}/)) {
        mensajeOcultoInput.innerHTML += "Primer apellido no valido<br>";
    } else if (!campoEsValido(apellido2Input.value, /A-Z[a-z]{2,19}/)) {
        mensajeOcultoInput.innerHTML += "Segundo apellido no valido<br>";
    } else if (!campoEsValido(nacionalidadErrorCampo.value, /[a-z]{3,15}/)) {
        mensajeOcultoInput.innerHTML += "Nacionalidad no valida";
    }
}

function campoEsValido(valor, regexp) {
    return regexp.test(valor);
}

modificarInput.addEventListener('click', function(){

    if (mensajeOcultoInput.innerHTML === ""){ // Si está vacío, significa que las validaciones han sido correctas

        persona.nombre = nombreInput.value
        persona.apellido1 = apellido1Input.value
        persona.apellido2 = apellido2Input.value
        persona.nacionalidad = nacionalidadInput.value
        mensajeOcultoInput.style.color = 'green'
        mensajeOcultoInput.innerHTML = "Guardado los datos correctamente"

        navegar()
    }
})

// Datos de la cuenta de la segunda pantalla 
var cuenta = localStorage.getItem("cuenta")
var cu = JSON.parse(cuenta)


