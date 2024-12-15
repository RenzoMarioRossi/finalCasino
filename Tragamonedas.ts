import { Juego } from "./Juego";
import { cargarInstrucciones } from "./InstruccionesJuego";

export class Tragamonedas extends Juego {
    private tematica: string;

    constructor(nombre: string, valorMinimoApuesta: number, tematica: string, instrucciones: string) {
        super(nombre, valorMinimoApuesta, instrucciones);
        this.tematica = tematica;
    }

    jugar(montoApuesta: number): void {
        if (montoApuesta < this.getValorMinimoApuesta()) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }
        console.log(`Jugando en ${this.getNombre()} con temática ${this.tematica}. Apuesta: $${montoApuesta}`);
    }
}