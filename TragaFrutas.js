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
    TragaFrutas.prototype.jugar = function (montoApuesta) {
        _super.prototype.jugar.call(this, montoApuesta);
        console.log("¡Las frutas giran! Buena suerte.");
    };
    return TragaFrutas;
}(Tragamonedas_1.Tragamonedas));
exports.TragaFrutas = TragaFrutas;
