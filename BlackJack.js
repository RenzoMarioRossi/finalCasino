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
    function BlackJack() {
        var instrucciones = (0, InstruccionesJuego_1.cargarInstrucciones)()["BlackJack"];
        return _super.call(this, "BlackJack", 100, instrucciones) || this;
    }
    BlackJack.prototype.jugar = function (montoApuesta) {
        if (montoApuesta < this.getValorMinimoApuesta()) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }
        console.log("Jugando a BlackJack. Apuesta: $".concat(montoApuesta));
    };
    return BlackJack;
}(Juego_1.Juego));
exports.BlackJack = BlackJack;
