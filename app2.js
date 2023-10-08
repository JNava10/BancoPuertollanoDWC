let retirarInput = document.getElementById('retirar')
let ingresarInput = document.getElementBytId('ingresar')
let retirarBoton = document.getElementById('retirarBoton')
let ingresarBoton = document.getElementById('ingresarBoton')
let mensajeOcultoInput = document.getElementById('mensajeOculto')

// Script de la pantalla Información Cuenta
let ibanInput = document.getElementById('iban')
let saldoInput = document.getElementById('saldo')

// Datos de la persona en la nueva pantalla
var persona = localStorage.getItem("persona")
var str = JSON.parse(persona)

class Cuenta {

    constructor (iban, saldo, tarjetas){
        this.iban = iban
        this.saldo = saldo
        this.tarjetas = tarjetas || [] // Lo inicializa como un array vacío de tarjetas
    }

    retirarSaldo(cant){
        var result = true
        if (cant < this.saldo){
            this.saldo -= cant
        } else {
            result = false
        }
        return result
    }

    ingresarSaldo(cant){
        var result = true
        if (cant > 0){
            this.saldo += cant
        } else {
            result = false
        }
        return result
    }

    aniadirTarjeta(tarj){
        this.tarjetas.push(tarj)
    }
}

var cuenta 

document.addEventListener("DOMContentLoaded", function() {// Inicia la función al abrir el html. Modificiación de la función cargarDatos()
    if (cuenta == null){
        cuenta = new Cuenta(500, "ES21 1465 0100 72 2030876293")
    } 

    ibanInput.value = cuenta.iban
    saldoInput.value = cuenta.saldo
}); 

function navegar(){
    var cu = JSON.stringify(persona);
    localStorage.setItem(cu)
    window.location.href='tarjetas.html'
}

var cantRegex = /^[0-9]+$/ // Valida que los campos sean números

retirarBoton.addEventListener('click', function(){
    if (cantRegex.test(retirarInput.value) == true){
        if (cuenta.retirarSaldo(retirarInput.value) == true){
            cuenta.retirarSaldo(retirarInput.value)
            mensajeOcultoInput.style = 'green'
            mensajeOcultoInput.innerHTML = "Saldo retirado correctamente: "+retirarInput
            saldoInput.value = cuenta.saldo;
        } else {
            mensajeOcultoInput.style = 'red'
            mensajeOcultoInput.innerHTML = "Operación incorrecta - saldo no retirado"
        }
    } else {
        mensajeOcultoInput.style = 'red'
            mensajeOcultoInput.innerHTML = "Operación incorrecta - saldo no retirado"
    }

    if (ingresarInput.value != null){
        ingresarInput.value = null
    }
})

ingresarBoton.addEventListener('click', function(){ 
    if (cantRegex.test(retirarInput.value) == true){
        if (cuenta.ingresarSaldo(ingresarInput.value) == true){
            cuenta.ingresarSaldo(ingresarInput.value)
            mensajeOcultoInput.style = 'green'
            mensajeOcultoInput.innerHTML = "Saldo ingresado correctamente: "+ingresarInput
            saldoInput.value = cuenta.saldo;
        } else {
            mensajeOcultoInput.style = 'red'
            mensajeOcultoInput.innerHTML = "Operación incorrecta - saldo no ingresado"
        }
    } else {
        mensajeOcultoInput.style = 'red'
            mensajeOcultoInput.innerHTML = "Operación incorrecta - saldo no ingresado"
    }

    if (retirarInput.value != null){
        retirarInput.value = null
    }
})

