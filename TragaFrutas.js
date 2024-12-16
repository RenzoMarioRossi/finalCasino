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
exports.TragaFrutas = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var InstruccionesJuego_1 = require("./InstruccionesJuego");
var TragaFrutas = /** @class */ (function (_super) {
    __extends(TragaFrutas, _super);
    function TragaFrutas() {
        var instrucciones = (0, InstruccionesJuego_1.cargarInstrucciones)()["Tragamonedas Frutas"];
        return _super.call(this, "Tragamonedas Frutas", 10, "Frutas", instrucciones) || this;
    }
    TragaFrutas.prototype.girar = function () {
        var simbolos = ["fruta", "campana", "estrella", "diamante", "limon", "7"];
        var resultado = [
            simbolos[Math.floor(Math.random() * simbolos.length)],
            simbolos[Math.floor(Math.random() * simbolos.length)],
            simbolos[Math.floor(Math.random() * simbolos.length)],
        ];
        return resultado;
    };
    TragaFrutas.prototype.jugar = function (montoApuesta) {
        console.log("¡Las frutas giran! Buena suerte.");
        // Simular los giros del tragamonedas
        var resultado = this.girar();
        console.log("Resultados: ".concat(resultado.join(" | ")));
        // Comprobar si el jugador gana
        if (this.esGanador(resultado)) {
            console.log("¡Felicidades! Todos los símbolos coinciden. Has ganado.");
            console.log("Ganaste $".concat(montoApuesta * 2, " !"));
        }
        else {
            console.log("Lo sentimos, no ganaste esta vez. ¡Sigue intentando!");
        }
    };
    TragaFrutas.prototype.esGanador = function (resultado) {
        return resultado.every(function (simbolo) { return simbolo === resultado[0]; });
    };
    return TragaFrutas;
}(Tragamonedas_1.Tragamonedas));
exports.TragaFrutas = TragaFrutas;
