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

/*
Queda por implementar:
- Que se ingrese o se retire el saldo cuando se pulsen los botones y mostrar el mensaje
*/


