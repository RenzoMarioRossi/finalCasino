import * as readline from "readline";
import { Casino } from "./Casino";
import { TragaFrutas } from "./TragaFrutas";
import { TragaDiamantes } from "./TragaDiamantes";
import { Ruleta } from "./Ruleta";
import { BlackJack } from "./BlackJack";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



// Mostrar el menú principal
const mostrarMenu = () => {
    console.log("\nBienvenido al Casino!");
    console.log("1. Mostrar juegos disponibles");
    console.log("2. Seleccionar juego y hacer apuesta");
    console.log("3. Salir");
    rl.question("Seleccione una opción: ", (opcion) => {
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
const seleccionarJuegoYRealizarApuesta = () => {
    casino.mostrarJuegosEnumerados(); // Mostrar juegos enumerados
    rl.question("Seleccione el número del juego: ", (indiceStr) => {
        const indice = parseInt(indiceStr);
        if (isNaN(indice) || indice <= 0 || indice > casino.obtenerCantidadJuegos()) {
            console.log("Número de juego no válido. Intente nuevamente.");
            seleccionarJuegoYRealizarApuesta();
        } else {
            rl.question("Ingrese el monto de la apuesta: $", (montoApuestaStr) => {
                const montoApuesta = parseFloat(montoApuestaStr);
                if (isNaN(montoApuesta) || montoApuesta <= 0) {
                    console.log("Monto de apuesta no válido. Intente nuevamente.");
                    seleccionarJuegoYRealizarApuesta();
                } else {
                    casino.jugarJuegoPorIndice(indice , montoApuesta); // Nuevo método en Casino
                    rl.question("¿Desea seguir jugando? (s/n): ", (respuesta) => {
                        if (respuesta.toLowerCase() === "s") {
                            mostrarMenu();
                        } else {
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
const casino = new Casino(rl); // Apsar readline a Casino
casino.agregarJuego(new TragaFrutas());
casino.agregarJuego(new TragaDiamantes());
casino.agregarJuego(new Ruleta(rl, mostrarMenu)); // Pasar readline a Ruleta
casino.agregarJuego(new BlackJack(rl)); //pasar readline a BlackJack

// Iniciar el menú
mostrarMenu();
