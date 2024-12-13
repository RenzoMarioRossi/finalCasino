import { Tragamonedas } from "./Tragamonedas";
export class TragaDiamantes extends Tragamonedas {
    constructor() {
        super("Tragamonedas Diamantes", 20, "Diamantes");
    }

    jugar(montoApuesta: number): void {
        super.jugar(montoApuesta);
        console.log("¡Lluvia de diamantes! Buena suerte.");
    }
}
