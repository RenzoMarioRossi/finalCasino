import { Tragamonedas } from "./Tragamonedas";
import { cargarInstrucciones } from "./InstruccionesJuego";

export class TragaDiamantes extends Tragamonedas {
    constructor() {
        const instrucciones = cargarInstrucciones()["Tragamonedas Diamantes"];
        super("Tragamonedas Diamantes", 20, "Diamantes", instrucciones);
    }

    jugar(montoApuesta: number): void {
        super.jugar(montoApuesta);
        console.log("¡Lluvia de diamantes! Buena suerte.");
    }
}
