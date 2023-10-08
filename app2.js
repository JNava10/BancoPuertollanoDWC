let retirarInput = document.getElementById('retirar')
let ingresarInput = document.getElementById('ingresar')
let retirarBoton = document.getElementById('retirarBoton')
let ingresarBoton = document.getElementById('ingresarBoton')
let mensajeOcultoInput = document.getElementById('mensajeOculto')
let ibanInput = document.getElementById('iban')
let saldoInput = document.getElementById('saldo')

// Datos de la persona en la nueva pantalla
var personaSt = localStorage.getItem("persona")
var per = JSON.parse(personaSt)

var cuenta 

document.addEventListener("DOMContentLoaded", function() {// Inicia la función al abrir el html. Modificiación de la función cargarDatos()
    
    cuentaSt = localStorage.getItem("cuenta")
    var cu = JSON.parse(cuentaSt)

    if (cuentaSt == null){
        cuenta = new Cuenta(per, "ES21 1465 0100 72 2030876293", 500)
    } else {
        cuenta = cu
    }

    ibanInput.value = cuenta.iban
    saldoInput.value = cuenta.saldo
}); 

function navegar(){
    var cu = JSON.stringify(cuenta);
    localStorage.setItem("cuenta", cu)
}

var cantRegex = /^[0-9]+$/ // Valida que los campos sean números

retirarBoton.addEventListener('click', function(){
    if (cantRegex.test(retirarInput.value) && cuenta.retirarSaldo(retirarInput.value) == true) {
        cuenta.retirarSaldo(retirarInput.value)
        mensajeOcultoInput.style.color = 'green'
        mensajeOcultoInput.innerHTML = "Saldo retirado correctamente: " + retirarInput.value;
        saldoInput.value = cuenta.saldo;
    } else {
        mensajeOcultoInput.style.color = 'red'; 
        mensajeOcultoInput.innerHTML = "Operación incorrecta - saldo no retirado";
    }

    navegar()
    ingresarInput.value = ""; 
})

ingresarBoton.addEventListener('click', function(){ 
    if (cantRegex.test(ingresarInput.value) && cuenta.ingresarSaldo(ingresarInput.value) == true){
        cuenta.ingresarSaldo(ingresarInput.value)
        mensajeOcultoInput.style.color = 'green'
        mensajeOcultoInput.innerHTML = "Saldo ingresado correctamente: " + ingresarInput.value;
        saldoInput.value = cuenta.saldo;
    } else {
        mensajeOcultoInput.style.color = 'red'; 
        mensajeOcultoInput.innerHTML = "Operación incorrecta - saldo no ingresado";
    }

    navegar()
    retirarInput.value = ""; 
})

