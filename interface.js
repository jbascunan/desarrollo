"use strict";
var persona = {
    nombre: "jose",
    apellido: "bascunan"
};
persona.nombre = "puka";
persona.apellido = "";
function enviar(xmen) {
    console.log(xmen.nombre);
}
enviar(persona);
