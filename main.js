"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Casino_1 = require("./Casino");
var TragaFrutas_1 = require("./TragaFrutas");
var TragaDiamantes_1 = require("./TragaDiamantes");
var Ruleta_1 = require("./Ruleta");
var BlackJack_1 = require("./BlackJack");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Mostrar el menú principal
var mostrarMenu = function () {
    console.log("\nBienvenido al Casino!");
    console.log("1. Mostrar juegos disponibles");
    console.log("2. Seleccionar juego y hacer apuesta");
    console.log("3. Salir");
    rl.question("Seleccione una opción: ", function (opcion) {
        switch (opcion) {
            case "1":
                casino.mostrarJuegosDisponibles();
                mostrarMenu();
                break;
            case "2":
                seleccionarJuegoYRealizarApuesta();
                break;
            case "3":
                rl.close();
                console.log("¡Gracias por jugar! Hasta pronto.");
                break;
            default:
                console.log("Opción no válida. Intente nuevamente.");
                mostrarMenu();
                break;
        }
    });
};
// Función para seleccionar juego (por indice enumerado) y realizar apuesta
var seleccionarJuegoYRealizarApuesta = function () {
    casino.mostrarJuegosEnumerados(); // Mostrar juegos enumerados
    rl.question("Seleccione el número del juego: ", function (indiceStr) {
        var indice = parseInt(indiceStr);
        if (isNaN(indice) || indice <= 0 || indice > casino.obtenerCantidadJuegos()) {
            console.log("Número de juego no válido. Intente nuevamente.");
            seleccionarJuegoYRealizarApuesta();
        }
        else {
            rl.question("Ingrese el monto de la apuesta: $", function (montoApuestaStr) {
                var montoApuesta = parseFloat(montoApuestaStr);
                if (isNaN(montoApuesta) || montoApuesta <= 0) {
                    console.log("Monto de apuesta no válido. Intente nuevamente.");
                    seleccionarJuegoYRealizarApuesta();
                }
                else {
                    casino.jugarJuegoPorIndice(indice, montoApuesta); // Nuevo método en Casino
                    rl.question("¿Desea seguir jugando? (s/n): ", function (respuesta) {
                        if (respuesta.toLowerCase() === "s") {
                            mostrarMenu();
                        }
                        else {
                            rl.close();
                            console.log("¡Gracias por jugar! Hasta pronto.");
                        }
                    });
                }
            });
        }
    });
};
// Crear el casino y pasar la instancia de readline
var casino = new Casino_1.Casino(rl); // Apsar readline a Casino
casino.agregarJuego(new TragaFrutas_1.TragaFrutas());
casino.agregarJuego(new TragaDiamantes_1.TragaDiamantes());
casino.agregarJuego(new Ruleta_1.Ruleta(rl, mostrarMenu)); // Pasar readline a Ruleta
casino.agregarJuego(new BlackJack_1.BlackJack(rl)); //pasar readline a BlackJack
// Iniciar el menú
mostrarMenu();
