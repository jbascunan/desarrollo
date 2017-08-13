"use strict";
var persona = {
    nombre: "juan",
    apellido: "perez"
};
persona.nombre = "puka";
persona.apellido = "";
function enviar(xmen) {
    console.log(xmen.nombre);
}
enviar(persona);
