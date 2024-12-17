"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var fs = require("fs");
var Casino = /** @class */ (function () {
    function Casino(rl) {
        this.juegosDisponibles = [];
        this.rl = rl;
    }
    Casino.prototype.agregarJuego = function (juego) {
        this.juegosDisponibles.push(juego);
    };
    Casino.prototype.mostrarJuegosDisponibles = function () {
        console.log("Juegos disponibles en el casino:");
        this.juegosDisponibles.forEach(function (juego) {
            console.log("- ".concat(juego.getNombre()));
            console.log(juego.getInstrucciones());
        });
    };
    Casino.prototype.seleccionarYJugar = function (nombreJuego, montoApuesta) {
        var juego = this.juegosDisponibles.find(function (j) { return j.getNombre().toLowerCase() === nombreJuego.toLowerCase(); });
        if (juego) {
            juego.jugar(montoApuesta);
        }
        else {
            console.log("El juego seleccionado no está disponible en el casino.");
        }
    };
    Casino.prototype.cargarInstruccionesDesdeTxt = function (juego, rutaArchivo) {
        try {
            var instrucciones = fs.readFileSync(rutaArchivo, "utf-8");
            juego.setInstrucciones(instrucciones);
        }
        catch (error) {
            console.error("Error al leer el archivo de instrucciones para ".concat(juego.getNombre(), ":"), error);
        }
    };
    return Casino;
}());
exports.Casino = Casino;
