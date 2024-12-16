import { Tragamonedas } from "./Tragamonedas";
import { cargarInstrucciones } from "./InstruccionesJuego";

export class TragaFrutas extends Tragamonedas {
    constructor() {
        const instrucciones = cargarInstrucciones()["Tragamonedas Frutas"];
        super("Tragamonedas Frutas", 10, "Frutas", instrucciones);
    }

    protected girar(): string[] {
        const simbolos = ["fruta", "campana", "estrella", "diamante", "limon", "7"];
        const resultado = [
            simbolos[Math.floor(Math.random() * simbolos.length)],
            simbolos[Math.floor(Math.random() * simbolos.length)],
            simbolos[Math.floor(Math.random() * simbolos.length)],
        ];
        return resultado;
    }

    jugar(montoApuesta: number): void {

        console.log("¡Las frutas giran! Buena suerte.");

        // Simular los giros del tragamonedas
        const resultado: string[] = this.girar();
        console.log(`Resultados: ${resultado.join(" | ")}`);

        // Comprobar si el jugador gana
        if (this.esGanador(resultado)) {
            console.log("¡Felicidades! Todos los símbolos coinciden. Has ganado.");
            console.log(`Ganaste $${montoApuesta * 2} !`);
        } else {
            console.log("Lo sentimos, no ganaste esta vez. ¡Sigue intentando!");
        }
    }

    protected esGanador(resultado: string[]): boolean {
        return resultado.every((simbolo) => simbolo === resultado[0]);
    }
}
