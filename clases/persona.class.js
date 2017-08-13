"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    ;
    Persona.prototype.imprimir = function () {
        console.log(this.nombre + " - " + this.apellido);
    };
    ;
    return Persona;
}());
exports.Persona = Persona;
