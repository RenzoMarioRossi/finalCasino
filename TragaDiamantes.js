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
exports.TragaDiamantes = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var InstruccionesJuego_1 = require("./InstruccionesJuego");
var TragaDiamantes = /** @class */ (function (_super) {
    __extends(TragaDiamantes, _super);
    function TragaDiamantes() {
        var instrucciones = (0, InstruccionesJuego_1.cargarInstrucciones)()["Tragamonedas Diamantes"];
        return _super.call(this, "Tragamonedas Diamantes", 20, "Diamantes", instrucciones) || this;
    }
    TragaDiamantes.prototype.girar = function () {
        var simbolos = ["fruta", "campana", "estrella", "diamante", "limon", "7"];
        var resultado = [
            simbolos[Math.floor(Math.random() * simbolos.length)],
            simbolos[Math.floor(Math.random() * simbolos.length)],
            simbolos[Math.floor(Math.random() * simbolos.length)],
        ];
        return resultado;
    };
    TragaDiamantes.prototype.jugar = function (montoApuesta) {
        console.log("¡Lluvia de diamantes! Buena suerte.");
        // Simular los giros del tragamonedas
        var resultado = this.girar();
        console.log("Resultados: ".concat(resultado.join(" | ")));
        // Comprobar si el jugador gana
        if ((resultado[0] == "diamante") && (resultado[1] == "diamante") && (resultado[2] == "diamante")) {
            console.log("Eres la envidia de Leiva Joyas. Los diamantes coinciden, FELICIDADES!!");
            console.log("Ganaste $".concat(montoApuesta * 5, " !"));
        }
        else if (this.esGanador(resultado)) {
            console.log("¡Felicidades! Todos los símbolos coinciden. Has ganado.");
            console.log("Ganaste $".concat(montoApuesta * 2, " !"));
        }
        else if ((resultado[0] === resultado[1]) || (resultado[1] === resultado[2]) || (resultado[0] === resultado[2])) {
            console.log("Dos simbolos coinciden, has salvado la apuesta!");
            console.log("Ganaste $".concat(montoApuesta, " !"));
        }
        else {
            console.log("Lo sentimos, no ganaste esta vez. ¡Sigue intentando!");
        }
    };
    TragaDiamantes.prototype.esGanador = function (resultado) {
        return resultado.every(function (simbolo) { return simbolo === resultado[0]; });
    };
    return TragaDiamantes;
}(Tragamonedas_1.Tragamonedas));
exports.TragaDiamantes = TragaDiamantes;
