"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargarInstrucciones = void 0;
var fs = require("fs");
var url_instrucciones = './instrucciones/instrucciones.txt';
var cargarInstrucciones = function () {
    var contenido = fs.readFileSync("./instrucciones/instrucciones.txt", "utf-8");
    var lineas = contenido.split("\n");
    var instrucciones = {};
    lineas.forEach(function (linea) {
        var _a = linea.split(": "), nombreJuego = _a[0], textoInstrucciones = _a[1];
        if (nombreJuego && textoInstrucciones) {
            instrucciones[nombreJuego.trim()] = textoInstrucciones.trim();
        }
    });
    //console.log(instrucciones)
    return instrucciones;
};
exports.cargarInstrucciones = cargarInstrucciones;
/*console.log(instrucciones)
console.log(".")
console.log(cargarInstrucciones)

*/ 
