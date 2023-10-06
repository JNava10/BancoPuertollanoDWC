let tabla = document.getElementById('tab');
let personaAlmacenada = localStorage.getItem('persona');
let guardarBoton = document.getElementById("guardar");
let datosPersona = JSON.parse(personaAlmacenada);
let numeroTarjetaInput = document.getElementById("tarjeta");
let cvvInput = document.getElementById("cvv");
let activaCheckbox = document.getElementById("activa");
let errorParrafo = document.getElementById("error");
let datosPorDefecto = [
    new Tarjeta('ES21 1465 0100 2030876293', '1234 12345 123456', true),
    new Tarjeta('ES21 1465 0100 2030876293', '1233 12345 123456', false)
];

onload = function () {
    for (let i = 0; i < datosPorDefecto.length; i++) {
        crearNuevaTarjeta(datosPorDefecto[i])
    }

    numeroTarjetaInput.value = "ES21 1465 0100 2030876293";
    cvvInput.value = "1233 12345 123456";
}

guardarBoton.onclick = function () {
    let mensajeError = "";
    let numeroEsValido = campoEsValido(numeroTarjetaInput.value, /ES\d{2} \d{4} \d{4} \d{10}$/);
    let cvvValido = campoEsValido(cvvInput.value, /\d{4} \d{5} \d{6}$/);

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

        crearNuevaTarjeta(tarjeta);
    } else {
        errorParrafo.innerText = mensajeError;
    }
}

function crearNuevaTarjeta(tarjeta) {
    let estado;

    if (tarjeta.activa) {
        estado = 'Si';
    } else {
        estado = 'No'
    }

    tabla.innerHTML += `<tr><td>${datosPersona}</td><td>${tarjeta.numero}</td> <td>${estado}</td></tr>`;
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
