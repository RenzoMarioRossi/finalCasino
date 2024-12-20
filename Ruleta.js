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
exports.Ruleta = void 0;
var Juego_1 = require("./Juego");
var InstruccionesJuego_1 = require("./InstruccionesJuego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(rl, mostrarMenu) {
        var _this = this;
        var instrucciones = (0, InstruccionesJuego_1.cargarInstrucciones)()["Ruleta"];
        _this = _super.call(this, "Ruleta", 50, instrucciones) || this;
        _this.rl = rl;
        _this.mostrarMenuCallback = mostrarMenu; // El mostrarMenu de main ya configurado
        return _this;
    }
    Ruleta.prototype.jugar = function (montoApuesta) {
        var _this = this;
        if (montoApuesta < this.getValorMinimoApuesta()) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }
        console.log("Jugando a la Ruleta. Apuesta: $".concat(montoApuesta));
        console.log("Bienvenido a la Ruleta. Puedes apostar por un número (0-36) o por un color (rojo/negro).");
        // Preguntar al usuario por el tipo de apuesta
        this.rl.question("¿Quieres apostar por un número (n) o un color (c)? ", function (tipo) {
            if (tipo.toLowerCase() === "n") {
                _this.rl.question("Ingresa un número entre 0 y 36: ", function (numero) {
                    var numeroApuesta = parseInt(numero, 10);
                    if (isNaN(numeroApuesta) || numeroApuesta < 0 || numeroApuesta > 36) {
                        console.log("Número inválido. Por favor, elige un número entre 0 y 36.");
                        _this.solicitarContinuar();
                        return;
                    }
                    _this.ejecutarRuleta({ tipo: "numero", valor: numeroApuesta }, montoApuesta);
                });
            }
            else if (tipo.toLowerCase() === "c") {
                _this.rl.question("Elige un color (rojo/negro): ", function (color) {
                    if (color.toLowerCase() !== "rojo" && color.toLowerCase() !== "negro") {
                        console.log("Color inválido. Por favor, elige entre 'rojo' o 'negro'.");
                        _this.solicitarContinuar();
                        return;
                    }
                    _this.ejecutarRuleta({ tipo: "color", valor: color.toLowerCase() }, montoApuesta);
                });
            }
            else {
                console.log("Opción inválida. Por favor, elige 'n' para número o 'c' para color.");
                _this.solicitarContinuar();
            }
        });
    };
    Ruleta.prototype.ejecutarRuleta = function (apuesta, montoApuesta) {
        console.log("Apuesta: ".concat(apuesta.tipo === "numero" ? "N\u00FAmero ".concat(apuesta.valor) : apuesta.valor));
        console.log("Girando la ruleta...");
        // Generar un número aleatorio entre 0 y 36
        var resultado = Math.floor(Math.random() * 37);
        var color = this.determinarColor(resultado);
        console.log("Resultado de la ruleta: N\u00FAmero ".concat(resultado, " (").concat(color, ")"));
        // Determinar el ganador
        if (resultado === 0) {
            console.log("El número es 0. ¡El casino gana!");
            this.solicitarContinuar();
        }
        else if (apuesta.tipo === "numero" && apuesta.valor === resultado) {
            console.log("¡Felicidades! Tu número coincide. Ganaste.");
            console.log("Ganaste $".concat(montoApuesta * 10, "!"));
            this.solicitarContinuar();
        }
        else if (apuesta.tipo === "color" && apuesta.valor === color) {
            console.log("¡Felicidades! Tu color coincide. Ganaste.");
            console.log("Ganaste $".concat(montoApuesta * 2, "!"));
            this.solicitarContinuar();
        }
        else {
            console.log("Lo sentimos, no ganaste esta vez. ¡Sigue intentando!");
            this.solicitarContinuar();
        }
        this.solicitarContinuar();
    };
    Ruleta.prototype.solicitarContinuar = function () {
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
    // Método para determinar el color basado en el número
    Ruleta.prototype.determinarColor = function (numero) {
        // Definir los números rojos y negros
        var rojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        var negros = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
        if (rojos.includes(numero))
            return "rojo";
        if (negros.includes(numero))
            return "negro";
        return "verde"; // El 0 es verde
    };
    return Ruleta;
}(Juego_1.Juego));
exports.Ruleta = Ruleta;
