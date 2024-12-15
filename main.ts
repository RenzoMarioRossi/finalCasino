import * as readline from 'readline';
import { Casino } from './Casino';
import { TragaFrutas } from './TragaFrutas';
import { TragaDiamantes } from './TragaDiamantes';
import { Ruleta } from './Ruleta';
import { BlackJack } from './BlackJack';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Crear el casino y agregar juegos
const casino = new Casino();
casino.agregarJuego(new TragaFrutas());
casino.agregarJuego(new TragaDiamantes());
casino.agregarJuego(new Ruleta());
casino.agregarJuego(new BlackJack());

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
                mostrarMenu();  // Volver al menú principal
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

// Función para seleccionar juego y realizar apuesta
const seleccionarJuegoYRealizarApuesta = () => {
    rl.question("Ingrese el nombre del juego: ", (nombreJuego) => {
        rl.question("Ingrese el monto de la apuesta: $", (montoApuestaStr) => {
            const montoApuesta = parseFloat(montoApuestaStr);
            if (isNaN(montoApuesta) || montoApuesta <= 0) {
                console.log("Monto de apuesta no válido. Intente nuevamente.");
                seleccionarJuegoYRealizarApuesta();
            } else {
                casino.seleccionarYJugar(nombreJuego, montoApuesta);
                mostrarMenu();  // Volver al menú principal
            }
        });
    });
};

// Iniciar el menú
mostrarMenu();
