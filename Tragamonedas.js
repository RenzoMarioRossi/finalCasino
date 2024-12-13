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
exports.Tragamonedas = void 0;
var Juego_1 = require("./Juego");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(nombre, valorMinimoApuesta, tematica) {
        var _this = _super.call(this, nombre, valorMinimoApuesta) || this;
        _this.tematica = tematica;
        return _this;
    }
    Tragamonedas.prototype.jugar = function (montoApuesta) {
        if (montoApuesta < this.valorMinimoApuesta) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }
        console.log("Jugando en ".concat(this.nombre, " con tem\u00E1tica ").concat(this.tematica, ". Apuesta: $").concat(montoApuesta));
    };
    Tragamonedas.prototype.leerInstrucciones = function () {
        return "Instrucciones de ".concat(this.nombre, ": Apuesta m\u00EDnima $").concat(this.valorMinimoApuesta, ".");
    };
    return Tragamonedas;
}(Juego_1.Juego));
exports.Tragamonedas = Tragamonedas;
