"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlackJack_1 = require("./BlackJack");
var Ruleta_1 = require("./Ruleta");
var TragaDiamantes_1 = require("./TragaDiamantes");
var TragaFrutas_1 = require("./TragaFrutas");
/*
class Casino {
    private juegosDisponibles: Juego[] = [];

    agregarJuego(juego: Juego): void {
        this.juegosDisponibles.push(juego);
    }

    seleccionarYJugar(nombreJuego: string, montoApuesta: number): void {
        const juegoActual = this.juegosDisponibles.find(j => j["nombre"] === nombreJuego);
        if (juegoActual) {
            juegoActual.jugar(montoApuesta);
        } else {
            console.log("El juego seleccionado no está disponible en el casino.");
        }
    }
}


// Ejemplo de uso
const casino = new Casino();
casino.agregarJuego(new TragaFrutas());
casino.agregarJuego(new TragaDiamantes());
casino.agregarJuego(new Ruleta());
casino.agregarJuego(new BlackJack());

casino.seleccionarYJugar("Tragamonedas Frutas", 15);
casino.seleccionarYJugar("BlackJack", 200);

*/
var Casino = /** @class */ (function () {
    function Casino() {
        this.juegosDisponibles = [];
    }
    Casino.prototype.agregarJuego = function (juego) {
        this.juegosDisponibles.push(juego);
    };
    Casino.prototype.seleccionarYJugar = function (nombreJuego, montoApuesta) {
        var juego = this.juegosDisponibles.find(function (j) { return j["nombre"] === nombreJuego; });
        if (juego) {
            juego.jugar(montoApuesta);
        }
        else {
            console.log("El juego seleccionado no está disponible en el casino.");
        }
    };
    Casino.prototype.iniciarJuegoConsola = function () {
        var _this = this;
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log("Bienvenido al casino. Seleccione un juego:");
        this.juegosDisponibles.forEach(function (juego, index) {
            console.log("".concat(index + 1, ". ").concat(juego["nombre"]));
        });
        rl.question("Ingrese el número del juego que desea jugar: ", function (respuestaJuego) {
            var indexJuego = parseInt(respuestaJuego) - 1;
            if (indexJuego < 0 || indexJuego >= _this.juegosDisponibles.length) {
                console.log("Opción inválida. Saliendo...");
                rl.close();
                return;
            }
            var juegoSeleccionado = _this.juegosDisponibles[indexJuego];
            rl.question("Ingrese el monto de su apuesta para ".concat(juegoSeleccionado["nombre"], ": "), function (respuestaMonto) {
                var montoApuesta = parseFloat(respuestaMonto);
                if (isNaN(montoApuesta) || montoApuesta <= 0) {
                    console.log("Monto inválido. Saliendo...");
                }
                else {
                    juegoSeleccionado.jugar(montoApuesta);
                }
                rl.close();
            });
        });
    };
    return Casino;
}());
// Ejemplo de uso
var casino = new Casino();
casino.agregarJuego(new TragaFrutas_1.TragaFrutas());
casino.agregarJuego(new TragaDiamantes_1.TragaDiamantes());
casino.agregarJuego(new Ruleta_1.Ruleta());
casino.agregarJuego(new BlackJack_1.BlackJack());
casino.iniciarJuegoConsola();
