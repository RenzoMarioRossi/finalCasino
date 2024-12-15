import { Juego } from "./Juego";
import { cargarInstrucciones } from "./InstruccionesJuego";

export class Ruleta extends Juego {
    constructor() {
        const instrucciones = cargarInstrucciones()["Ruleta"];
        super("Ruleta", 50, instrucciones);  // Pasa las instrucciones al constructor base
    }

    jugar(montoApuesta: number): void {
        if (montoApuesta < this.getValorMinimoApuesta()) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }
        console.log(`Jugando a la Ruleta. Apuesta: $${montoApuesta}`);
    }
}
