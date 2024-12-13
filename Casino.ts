import { Juego } from "./Juego";
import { BlackJack } from "./BlackJack";
import { Ruleta } from "./Ruleta";
import { TragaDiamantes } from "./TragaDiamantes";
import { TragaFrutas } from "./TragaFrutas";

import * as rls from 'readline';

/*
class Casino {
    private juegosDisponibles: Juego[] = [];

    agregarJuego(juego: Juego): void {
        this.juegosDisponibles.push(juego);
    }

    seleccionarYJugar(nombreJuego: string, montoApuesta: number): void {
        const juegoActual = this.juegosDisponibles.find(j => j["nombre"] === nombreJuego);
        if (juegoActual) {
            juegoActual.jugar(montoApuesta);
        } else {
            console.log("El juego seleccionado no está disponible en el casino.");
        }
    }
}


// Ejemplo de uso
const casino = new Casino();
casino.agregarJuego(new TragaFrutas());
casino.agregarJuego(new TragaDiamantes());
casino.agregarJuego(new Ruleta());
casino.agregarJuego(new BlackJack());

casino.seleccionarYJugar("Tragamonedas Frutas", 15);
casino.seleccionarYJugar("BlackJack", 200);

*/

class Casino {
    private juegosDisponibles: Juego[] = [];

    agregarJuego(juego: Juego): void {
        this.juegosDisponibles.push(juego);
    }

    seleccionarYJugar(nombreJuego: string, montoApuesta: number): void {
        const juego = this.juegosDisponibles.find(j => j["nombre"] === nombreJuego);
        if (juego) {
            juego.jugar(montoApuesta);
        } else {
            console.log("El juego seleccionado no está disponible en el casino.");
        }
    }

    iniciarJuegoConsola(): void {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log("Bienvenido al casino. Seleccione un juego:");
        this.juegosDisponibles.forEach((juego, index) => {
            console.log(`${index + 1}. ${juego["nombre"]}`);
        });

        rl.question("Ingrese el número del juego que desea jugar: ", (respuestaJuego: string) => {
            const indexJuego = parseInt(respuestaJuego) - 1;
            if (indexJuego < 0 || indexJuego >= this.juegosDisponibles.length) {
                console.log("Opción inválida. Saliendo...");
                rl.close();
                return;
            }

            const juegoSeleccionado = this.juegosDisponibles[indexJuego];
            rl.question(`Ingrese el monto de su apuesta para ${juegoSeleccionado["nombre"]}: `, (respuestaMonto: string) => {
                const montoApuesta = parseFloat(respuestaMonto);
                if (isNaN(montoApuesta) || montoApuesta <= 0) {
                    console.log("Monto inválido. Saliendo...");
                } else {
                    juegoSeleccionado.jugar(montoApuesta);
                }
                rl.close();
            });
        });
    }
}

// Ejemplo de uso
const casino = new Casino();
casino.agregarJuego(new TragaFrutas());
casino.agregarJuego(new TragaDiamantes());
casino.agregarJuego(new Ruleta());
casino.agregarJuego(new BlackJack());

casino.iniciarJuegoConsola();