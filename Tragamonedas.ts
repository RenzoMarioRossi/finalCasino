import { Juego } from "./Juego";
import { InstruccionesJuego } from "./InstruccionesJuego";
export class Tragamonedas extends Juego implements InstruccionesJuego {

    private tematica: string;

    constructor(nombre: string, valorMinimoApuesta: number, tematica: string) {
        super(nombre, valorMinimoApuesta);
        this.tematica = tematica;
    }

    jugar(montoApuesta: number): void {
        if (montoApuesta < this.valorMinimoApuesta) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }
        console.log(`Jugando en ${this.nombre} con temática ${this.tematica}. Apuesta: $${montoApuesta}`);
    }

    leerInstrucciones(): string {
        return `Instrucciones de ${this.nombre}: Apuesta mínima $${this.valorMinimoApuesta}.`; 
    }
}
