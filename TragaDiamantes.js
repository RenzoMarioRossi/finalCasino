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
    TragaDiamantes.prototype.jugar = function (montoApuesta) {
        _super.prototype.jugar.call(this, montoApuesta);
        console.log("¡Lluvia de diamantes! Buena suerte.");
    };
    return TragaDiamantes;
}(Tragamonedas_1.Tragamonedas));
exports.TragaDiamantes = TragaDiamantes;
