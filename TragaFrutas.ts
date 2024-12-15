import { Tragamonedas } from "./Tragamonedas";
import { cargarInstrucciones } from "./InstruccionesJuego";

export class TragaFrutas extends Tragamonedas {
    constructor() {
        const instrucciones = cargarInstrucciones()["Tragamonedas Frutas"];
        super("Tragamonedas Frutas", 10, "Frutas", instrucciones);
    }

    jugar(montoApuesta: number): void {
        super.jugar(montoApuesta);
        console.log("¡Las frutas giran! Buena suerte.");
    }
}
