let tabla = document.getElementById('tab');
let guardarBoton = document.getElementById("guardar");
let personaAlmacenada = localStorage.getItem('persona');
let datosPersona = JSON.parse(personaAlmacenada);
let numeroTarjetaInput = document.getElementById("tarjeta");
let cvvInput = document.getElementById("cvv");
let activaCheckbox = document.getElementById("activa");
let errorParrafo = document.getElementById("error");
let itemCuenta = localStorage.getItem("cuenta");
let cuenta = JSON.parse(itemCuenta);


let datosPorDefecto = [
    new Tarjeta('1234 12345 123456', '123', true),
    new Tarjeta('1234 12345 12345', '123', false)
];

onload = function () {
    for (let i = 0; i < datosPorDefecto.length; i++) {
        crearNuevaTarjeta(datosPorDefecto[i], cuenta)
    }

    numeroTarjetaInput.value = "1234 12345 123456";
    cvvInput.value = "123";
}

guardarBoton.onclick = function () {
    console.log("a")
    let mensajeError = "";
    let numeroEsValido = campoEsValido(numeroTarjetaInput.value, /\d+/);
    let cvvValido = campoEsValido(cvvInput.value, /\d{3}$/);

    if (numeroEsValido === -1) {
        mensajeError += "No se ha introducido el numero de la tarjeta.\n";
    } else if (numeroEsValido === 0) {
        mensajeError += "No se ha introducido un formato valido de la tarjeta.\n";
    }

    if (cvvValido === -1) {
        mensajeError += "No se ha introducido el cvv de la tarjeta.\n";
    } else if (cvvValido === 0) {
        mensajeError += "No se ha introducido un formato valido del CVV.\n";
    }

    if (mensajeError === "") {
        let tarjeta = new Tarjeta(
            numeroTarjetaInput.value,
            cvvInput.value,
            activaCheckbox.checked
        );

        crearNuevaTarjeta(tarjeta, cuenta);
    } else {
        errorParrafo.innerText = mensajeError;
    }
}

function crearNuevaTarjeta(tarjeta, cuenta) {
    let estado;

    if (tarjeta.activa) {
        estado = 'Si';
    } else {
        estado = 'No'
    }

    cuenta.tarjetas += tarjeta;
    console.log(cuenta)
    tabla.innerHTML += `<tr><td>${cuenta.iban}</td><td>${tarjeta.numero}</td> <td>${estado}</td></tr>`;
}

/**
 * @param valor {String}
 * @param regexp {RegExp}
 * @returns {int} 1 es valido, 0 es invalido, -1 esta vacio.
 */
function campoEsValido(valor, regexp) {
    let codigo = 1

    if (!valor) {
        codigo = -1
    } else if (!regexp.test(valor)) {
        codigo = 0;
    }

    return codigo;
}
