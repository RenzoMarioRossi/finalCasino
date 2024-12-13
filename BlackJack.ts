import { Juego } from "./Juego";
import { InstruccionesJuego } from "./InstruccionesJuego";
export class BlackJack extends Juego implements InstruccionesJuego {
    constructor() {
        super("BlackJack", 100);
    }

    jugar(montoApuesta: number): void {
        if (montoApuesta < this.valorMinimoApuesta) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }
        console.log(`Jugando a BlackJack. Apuesta: $${montoApuesta}`);
    }

    leerInstrucciones(): string {
        return `Instrucciones de BlackJack: Apuesta mínima $${this.valorMinimoApuesta}.`;
    }
}
