"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego(nombre, valorMinimoApuesta, instrucciones) {
        this.nombre = nombre;
        this.valorMinimoApuesta = valorMinimoApuesta;
        this.instrucciones = instrucciones;
    }
    //getters & setters
    Juego.prototype.getNombre = function () {
        return this.nombre;
    };
    Juego.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Juego.prototype.getValorMinimoApuesta = function () {
        return this.valorMinimoApuesta;
    };
    Juego.prototype.setValorMinimoApuesta = function (valorMinimoApuesta) {
        this.valorMinimoApuesta = valorMinimoApuesta;
    };
    Juego.prototype.getInstrucciones = function () {
        return this.instrucciones;
    };
    Juego.prototype.setInstrucciones = function (instrucciones) {
        this.instrucciones = instrucciones;
    };
    Juego.prototype.mostrarInstrucciones = function () {
        console.log("Instrucciones para ".concat(this.nombre, ": ").concat(this.instrucciones));
    };
    return Juego;
}());
exports.Juego = Juego;
