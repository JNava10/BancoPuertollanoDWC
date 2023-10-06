let tabla = document.getElementById('tabla');
let personaAlmacenada = localStorage.getItem('persona');
let numeroTarjetaInput = document.getElementById("numTarjeta");
let guardarBoton = document.getElementById("guardar");
let cvvInput = document.getElementById("cvv");
let activaCheckbox = document.getElementById("activa");
let persona = JSON.parse(personaAlmacenada);
let datosPorDefecto = [
    new Tarjeta('ES21 1465 0100 2030876293', '1234 12345 123456', true),
    new Tarjeta('ES21 1465 0100 2030876293', '1233 12345 123456', false)
];

guardarBoton.onclick = function () {
    let tarjeta = new Tarjeta(numeroTarjetaInput.value, cvvInput.value, activaCheckbox.value);
    crearNuevaTarjeta(tarjeta);
}

function crearNuevaTarjeta(tarjeta) {
    tabla.innerHTML += `<tr><td>${tarjeta.numero}</td><td>${tarjeta.cvv}</td> <td>${tarjeta.activa}</td></tr>`;
}
