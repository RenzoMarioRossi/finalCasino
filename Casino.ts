import { Juego } from "./Juego";
import { BlackJack } from "./BlackJack";
import { Ruleta } from "./Ruleta";
import { TragaDiamantes } from "./TragaDiamantes";
import { TragaFrutas } from "./TragaFrutas";

import * as fs from "fs";
import * as readline from "readline";

export class Casino {
    private juegosDisponibles: Juego[] = [];
    private rl: readline.Interface; // Almacena la instancia de readline

    constructor(rl: readline.Interface) {
        this.rl = rl;
    }

    agregarJuego(juego: Juego): void {
        this.juegosDisponibles.push(juego);
    }

    mostrarJuegosDisponibles(): void {
        console.log("Juegos disponibles en el casino:");
        this.juegosDisponibles.forEach((juego) => {
            console.log(`- ${juego.getNombre()}`);
            console.log(juego.getInstrucciones());
        });
    }

    seleccionarYJugar(nombreJuego: string, montoApuesta: number): void {
        const juego = this.juegosDisponibles.find(
            (j) => j.getNombre().toLowerCase() === nombreJuego.toLowerCase()
        );
        if (juego) {
            juego.jugar(montoApuesta);
        } else {
            console.log("El juego seleccionado no está disponible en el casino.");
        }
    }

    cargarInstruccionesDesdeTxt(juego: Juego, rutaArchivo: string): void {
        try {
            const instrucciones = fs.readFileSync(rutaArchivo, "utf-8");
            juego.setInstrucciones(instrucciones);
        } catch (error) {
            console.error(
                `Error al leer el archivo de instrucciones para ${juego.getNombre()}:`,
                error
            );
        }
    }
}
