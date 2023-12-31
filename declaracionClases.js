class Tarjeta {
    constructor(numero, cvv, activa) {
        this.numero = numero;
        this.cvv = cvv;
        this.activa = activa;
    }
}

class Persona {

    constructor(nombre, apellido1, apellido2, nacionalidad) {
      this.nombre = nombre;
      this.apellido1 = apellido1;
      this.apellido2 = apellido2;
      this.nacionalidad = nacionalidad;
    }
  }

  class Cuenta {

    constructor (iban, saldo, tarjetas){
        this.iban = iban
        this.saldo = saldo
        this.tarjetas = tarjetas || [] // Lo inicializa como un array vacío de tarjetas
    }

    retirarSaldo(cant){
        var result = true
        var cantidad = parseFloat(cant)
        if (cantidad < this.saldo && cantidad > 0){
            this.saldo -= cantidad
        } else {
            result = false
        }
        return result
    }

    ingresarSaldo(cant){
        var result = true
        var cantidad = parseFloat(cant)
        if (cantidad > 0){
            this.saldo += cantidad
        } else {
            result = false
        }
        return result
    }

    aniadirTarjeta(tarj){
        this.tarjetas.push(tarj)
    }
}  