import { Juego } from "./Juego";
import { InstruccionesJuego } from "./InstruccionesJuego";
export class Ruleta extends Juego implements InstruccionesJuego {
    constructor() {
        super("Ruleta", 50);
    }

    jugar(montoApuesta: number): void {
        if (montoApuesta < this.valorMinimoApuesta) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }
        console.log(`Jugando a la Ruleta. Apuesta: $${montoApuesta}`);
    }

    leerInstrucciones(): string {
        return `Instrucciones de la Ruleta: Apuesta mínima $${this.valorMinimoApuesta}.`;
    }
}
