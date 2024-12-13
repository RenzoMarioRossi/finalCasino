import { Tragamonedas } from "./Tragamonedas";
export class TragaFrutas extends Tragamonedas {
    constructor() {
        super("Tragamonedas Frutas", 10, "Frutas");
    }

    jugar(montoApuesta: number): void {
        super.jugar(montoApuesta);
        console.log("¡Las frutas giran! Buena suerte.");
    }
}
