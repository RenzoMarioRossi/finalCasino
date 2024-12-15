import { Juego } from "./Juego";
import { cargarInstrucciones } from "./InstruccionesJuego";

export class BlackJack extends Juego {

    constructor() {
        const instrucciones = cargarInstrucciones()["BlackJack"];
        super("BlackJack", 100, instrucciones);
    }

    jugar(montoApuesta: number): void {
        if (montoApuesta < this.getValorMinimoApuesta()) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }
        console.log(`Jugando a BlackJack. Apuesta: $${montoApuesta}`);
    }

}