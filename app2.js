"use strict";
function activar(quien, objeto, opcional) {
    if (objeto === void 0) { objeto = "valor defecto"; }
    var nombre = "juan";
    var apellido = "perez";
    var edad = 25;
    var mensaje;
    var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
    if (opcional) {
        mensaje = "Hola, " + quien + " " + objeto + " " + opcional;
    }
    else {
        mensaje = "Hola, " + quien + " " + objeto;
    }
    console.log(texto);
    console.log(mensaje);
}
var mensaje = "hola";
var OPCIONES = "todas";
if (true) {
    var mensaje_1 = "adios2";
    var OPCIONES_1 = "nada";
}
var spider = {
    nombre: "nada",
    rut: 22121
};
spider = {
    nombre: "asd",
    rut: 2212
};
activar("kreator", "na");
//funcion flecha
var mifuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
var mifuncion2 = function (a, b) {
    return a + b;
};
var hulk = {
    nombre: "Hulk",
    smash: function () {
        console.log(this.nombre + " smash2...");
    }
};
hulk.smash();
console.log(mifuncion("Normal"));
console.log(miFuncionF("Flecha"));
