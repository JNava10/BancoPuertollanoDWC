let nombreInput = document.getElementById('nombre');
let apellido1Input = document.getElementById('apellido1');
let apellido2Input =document.getElementById('apellido2');
let nacionalidadInput = document.getElementById('nacionalidad');
const modificarInput = document.getElementById('modificar');
const mensajeOcultoInput = document.getElementById('mensajeOculto');

class Persona {

  constructor(nombre, apellido1, apellido2, nacionalidad) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.nacionalidad = nacionalidad;
  }
}

var persona =

document.addEventListener("DOMContentLoaded", function() {// Inicia la función al abrir el html. Modificiación de la función cargarDatos()
    if (persona == null){
        persona = new Persona('Leon','Scott','Kennedy', 'Estadounidense' )  
    } else {
        nombreInput.value = persona.nombre
        apellido1Input.value = persona.apellido1
        apellido2Input.value = persona.apellido2
        nacionalidadInput.value = persona.nacionalidad
    }
}); 

function navegar(){
    var co = JSON.stringify(persona);
    localStorage.setItem("persona",co)
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

    if (mensajeOcultoInput.innerHTML === ""){

        persona = Persona(nombreInput.value, apellido1Input.value, apellido2Input.value, nacionalidadInput.value)
        mensajeOcultoInput.style.color = 'green'
        mensajeOcultoInput.innerHTML = "Guardado los datos correctamente"

        navegar()
    }
})


