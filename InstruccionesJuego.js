"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leerTXT = leerTXT;
var fs = require("fs");
///URLS///
var url_instrucciones = './instrucciones/instrucciones.txt';
//////////////////LEER ARCHIVO TXT COMO BASE DE DATOS Y CONVERTIRLO EN JASON////////////////////////
function leerTXT(ruta) {
    try {
        var archivoTexto = fs.readFileSync(ruta, 'utf8');
        var lineas = archivoTexto.trim().split('\n');
        if (ruta.includes("tragamonedas")) {
            return lineas.map(function (linea) {
                var _a = linea.split(','), linea1 = _a[0], linea2 = _a[1], linea3 = _a[2], linea4 = _a[3];
                return {
                    linea1: linea1.trim(),
                    linea2: linea2.trim(),
                    linea3: linea3.trim(),
                    linea4: linea4.trim(),
                };
            });
        }
        else if (ruta.includes("ruleta")) {
            return lineas.map(function (linea) {
                var _a = linea.split(','), linea1 = _a[0], linea2 = _a[1], linea3 = _a[2], linea4 = _a[3];
                return {
                    linea1: linea1.trim(),
                    linea2: linea2.trim(),
                    linea3: linea3.trim(),
                    linea4: linea4.trim(),
                };
            });
        }
        else if (ruta.includes("blackjack")) {
            return lineas.map(function (linea) {
                var _a = linea.split(','), linea1 = _a[0], linea2 = _a[1], linea3 = _a[2], linea4 = _a[3];
                return {
                    linea1: linea1.trim(),
                    linea2: linea2.trim(),
                    linea3: linea3.trim(),
                    linea4: linea4.trim(),
                };
            });
        }
        else {
            console.log("No se encuentra la base de datos");
            return [];
        }
    }
    catch (error) {
        console.log(error + "Error");
        return [];
    }
    return [];
}
//test de codigo
var tragamonedas = leerTXT(url_instrucciones);
console.table(tragamonedas);
var ruleta = leerTXT(url_instrucciones);
console.log(ruleta);
var blackjack = leerTXT(url_instrucciones);
console.log(blackjack);
