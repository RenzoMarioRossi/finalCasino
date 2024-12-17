"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackJack = void 0;
var Juego_1 = require("./Juego");
var InstruccionesJuego_1 = require("./InstruccionesJuego");
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack(rl, mostrarMenu) {
        var _this = this;
        var instrucciones = (0, InstruccionesJuego_1.cargarInstrucciones)()["BlackJack"];
        _this = _super.call(this, "BlackJack", 100, instrucciones) || this;
        _this.rl = rl;
        _this.mostrarMenuCallback = mostrarMenu; // El mostrarMenu de main ya configurado
        return _this;
    }
    BlackJack.prototype.jugar = function (montoApuesta) {
        if (montoApuesta < this.getValorMinimoApuesta()) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }
        console.log("Jugando a BlackJack. Apuesta: $".concat(montoApuesta));
        var mazo = this.crearMazo();
        this.mezclarMazo(mazo);
        var manoJugador = [];
        var manoCrupier = [];
        // El jugador comienza con dos cartas
        manoJugador.push(mazo.pop(), mazo.pop());
        // El crupier también comienza con dos cartas (pero solo muestra una)
        manoCrupier.push(mazo.pop(), mazo.pop());
        console.log("Tus cartas iniciales: ".concat(this.mostrarMano(manoJugador)));
        console.log("Carta visible del crupier: ".concat(this.mostrarCarta(manoCrupier[0])));
        this.turnoJugador(mazo, manoJugador, manoCrupier, montoApuesta);
    };
    BlackJack.prototype.turnoJugador = function (mazo, manoJugador, manoCrupier, montoApuesta) {
        var _this = this;
        var puntajeJugador = this.calcularPuntaje(manoJugador);
        console.log("Tu puntaje actual: ".concat(puntajeJugador));
        if (puntajeJugador > 21) {
            console.log("¡Te pasaste de 21! Has perdido.");
            this.solicitarContinuar();
            return;
        }
        this.rl.question("¿Quieres pedir una carta (p) o plantarte (x)? ", function (opcion) {
            if (opcion.toLowerCase() === "p") {
                manoJugador.push(mazo.pop());
                console.log("Nueva carta: ".concat(_this.mostrarCarta(manoJugador[manoJugador.length - 1])));
                _this.turnoJugador(mazo, manoJugador, manoCrupier, montoApuesta);
            }
            else if (opcion.toLowerCase() === "x") {
                console.log("Te has plantado.");
                _this.turnoCrupier(mazo, manoJugador, manoCrupier, montoApuesta);
            }
            else {
                console.log("Opción no válida. Intenta nuevamente.");
                _this.turnoJugador(mazo, manoJugador, manoCrupier, montoApuesta);
            }
        });
    };
    BlackJack.prototype.turnoCrupier = function (mazo, manoJugador, manoCrupier, montoApuesta) {
        console.log("Cartas del crupier: ".concat(this.mostrarMano(manoCrupier)));
        while (this.calcularPuntaje(manoCrupier) < 17) {
            var nuevaCarta = mazo.pop();
            manoCrupier.push(nuevaCarta);
            console.log("El crupier toma una carta: ".concat(this.mostrarCarta(nuevaCarta)));
        }
        var puntajeJugador = this.calcularPuntaje(manoJugador);
        var puntajeCrupier = this.calcularPuntaje(manoCrupier);
        console.log("Tu puntaje: ".concat(puntajeJugador));
        console.log("Puntaje del crupier: ".concat(puntajeCrupier));
        if (puntajeCrupier > 21 || puntajeJugador > puntajeCrupier) {
            console.log("\u00A1Ganaste! Has ganado $".concat(montoApuesta * 2, "."));
            this.solicitarContinuar();
        }
        else if (puntajeJugador === puntajeCrupier) {
            console.log("Empate. Recuperas tu apuesta.");
            this.solicitarContinuar();
        }
        else {
            console.log("El crupier gana. Has perdido.");
            this.solicitarContinuar();
        }
        this.solicitarContinuar();
    };
    BlackJack.prototype.crearMazo = function () {
        var valores = [
            { valor: 1, nombre: "A" },
            { valor: 2, nombre: "2" },
            { valor: 3, nombre: "3" },
            { valor: 4, nombre: "4" },
            { valor: 5, nombre: "5" },
            { valor: 6, nombre: "6" },
            { valor: 7, nombre: "7" },
            { valor: 8, nombre: "8" },
            { valor: 9, nombre: "9" },
            { valor: 10, nombre: "10" },
            { valor: 10, nombre: "J" },
            { valor: 10, nombre: "Q" },
            { valor: 10, nombre: "K" },
        ];
        var palos = ["♥", "♦", "♠", "♣"];
        var mazo = [];
        for (var _i = 0, valores_1 = valores; _i < valores_1.length; _i++) {
            var valor = valores_1[_i];
            for (var _a = 0, palos_1 = palos; _a < palos_1.length; _a++) {
                var palo = palos_1[_a];
                mazo.push({ valor: valor.valor, nombre: "".concat(valor.nombre).concat(palo) });
            }
        }
        return mazo;
    };
    BlackJack.prototype.mezclarMazo = function (mazo) {
        var _a;
        for (var i = mazo.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [mazo[j], mazo[i]], mazo[i] = _a[0], mazo[j] = _a[1];
        }
    };
    // Resolucion de problema de doble puntaje de las ases
    BlackJack.prototype.calcularPuntaje = function (mano) {
        var puntaje = 0;
        var ases = 0;
        for (var _i = 0, mano_1 = mano; _i < mano_1.length; _i++) {
            var carta = mano_1[_i];
            puntaje += carta.valor;
            if (carta.nombre.startsWith("A"))
                ases++;
        }
        while (puntaje > 21 && ases > 0) {
            puntaje -= 10;
            ases--;
        }
        return puntaje;
    };
    BlackJack.prototype.mostrarCarta = function (carta) {
        return carta.nombre;
    };
    BlackJack.prototype.mostrarMano = function (mano) {
        return mano.map(this.mostrarCarta).join(", ");
    };
    BlackJack.prototype.solicitarContinuar = function () {
        var _this = this;
        // para ver si quiere seguir jugando
        this.rl.question("\n¿Quieres seguir jugando? (s para sí, n para no): ", function (respuesta) {
            if (respuesta.toLowerCase() === "s") {
                console.log("\nSelecciona otro juego o realiza otra apuesta.");
                _this.mostrarMenuCallback(); // Llamamos a mostrarMenu para regresar al menú principal
            }
            else if (respuesta.toLowerCase() === "n") {
                console.log("Gracias por jugar. ¡Hasta pronto!");
                _this.rl.close(); // Cerrar si el jugador decide salir
            }
            else {
                console.log("Opción inválida. Por favor, responde 's' para sí o 'n' para no.");
                _this.solicitarContinuar();
            }
        });
    };
    return BlackJack;
}(Juego_1.Juego));
exports.BlackJack = BlackJack;
