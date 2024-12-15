"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var BlackJack_1 = require("./BlackJack");
var Ruleta_1 = require("./Ruleta");
var TragaDiamantes_1 = require("./TragaDiamantes");
var TragaFrutas_1 = require("./TragaFrutas");
var fs = require("fs");
var Casino = /** @class */ (function () {
    function Casino() {
        this.juegosDisponibles = [];
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
var casino = new Casino();
casino.agregarJuego(new TragaFrutas_1.TragaFrutas());
casino.agregarJuego(new TragaDiamantes_1.TragaDiamantes());
casino.agregarJuego(new Ruleta_1.Ruleta());
casino.agregarJuego(new BlackJack_1.BlackJack());
// Mostrar juegos disponibles con sus instrucciones
casino.mostrarJuegosDisponibles();
// Ejemplo de juego
casino.seleccionarYJugar("BlackJack", 150);
