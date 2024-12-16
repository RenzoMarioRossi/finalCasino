import { Juego } from "./Juego";
import { BlackJack } from "./BlackJack";
import { Ruleta } from "./Ruleta";
import { TragaDiamantes } from "./TragaDiamantes";
import { TragaFrutas } from "./TragaFrutas";
import { InstruccionesJuego } from "./InstruccionesJuego";
import * as fs from 'fs';

import * as rl from 'readline';


export class Casino {
    private juegosDisponibles: Juego[] = [];

    agregarJuego(juego: Juego): void {
        this.juegosDisponibles.push(juego);
    }

    mostrarJuegosDisponibles(): void {
        console.log("Juegos disponibles en el casino:");
        this.juegosDisponibles.forEach(juego => {
            console.log(`- ${juego.getNombre()}`);
            console.log(juego.getInstrucciones());
        });
    }

    seleccionarYJugar(nombreJuego: string, montoApuesta: number): void {
        const juego = this.juegosDisponibles.find(j => j.getNombre().toLowerCase() === nombreJuego.toLowerCase());
        if (juego) {
            juego.jugar(montoApuesta);
            console.log(juego)
        } else {
            console.log("El juego seleccionado no está disponible en el casino.");
        }
    }

    cargarInstruccionesDesdeTxt(juego: Juego, rutaArchivo: string): void {
        try {
            const instrucciones = fs.readFileSync(rutaArchivo, "utf-8");
            juego.setInstrucciones(instrucciones);
        } catch (error) {
            console.error(`Error al leer el archivo de instrucciones para ${juego.getNombre()}:`, error);
        }
    }
}

const casino = new Casino();
casino.agregarJuego(new TragaFrutas());
casino.agregarJuego(new TragaDiamantes());
casino.agregarJuego(new Ruleta(rl));
casino.agregarJuego(new BlackJack());

// Mostrar juegos disponibles con sus instrucciones
casino.mostrarJuegosDisponibles();

// Ejemplo de juego
casino.seleccionarYJugar("BlackJack", 150);
