import { Juego } from "./Juego";
import { cargarInstrucciones } from "./InstruccionesJuego";
import * as readline from 'readline';


export class Ruleta extends Juego {
    private rl: readline.Interface;

    constructor(rl: readline.Interface) {
        const instrucciones = cargarInstrucciones()["Ruleta"];
        super("Ruleta", 50, instrucciones); 
        this.rl = rl;
    }

    jugar(montoApuesta: number): void {
        if (montoApuesta < this.getValorMinimoApuesta()) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }
        console.log(`Jugando a la Ruleta. Apuesta: $${montoApuesta}`);
        

        console.log("Bienvenido a la Ruleta. Puedes apostar por un número (0-36) o por un color (rojo/negro).");

        // Preguntar al usuario por el tipo de apuesta
        this.rl.question("¿Quieres apostar por un número (n) o un color (c)? ", (tipo) => {
            if (tipo.toLowerCase() === "n") {
                this.rl.question("Ingresa un número entre 0 y 36: ", (numero) => {
                    const numeroApuesta = parseInt(numero, 10);
                    if (isNaN(numeroApuesta) || numeroApuesta < 0 || numeroApuesta > 36) {
                        console.log("Número inválido. Por favor, elige un número entre 0 y 36.");
                        this.rl.close();
                        return;
                    }
                    this.ejecutarRuleta({ tipo: "numero", valor: numeroApuesta }, montoApuesta);
                    this.rl.close();
                });
            } else if (tipo.toLowerCase() === "c") {
                this.rl.question("Elige un color (rojo/negro): ", (color) => {
                    if (color.toLowerCase() !== "rojo" && color.toLowerCase() !== "negro") {
                        console.log("Color inválido. Por favor, elige entre 'rojo' o 'negro'.");
                        this.rl.close();
                        return;
                    }
                    this.ejecutarRuleta({ tipo: "color", valor: color.toLowerCase() }, montoApuesta);
                    this.rl.close();
                });
            } else {
                console.log("Opción inválida. Por favor, elige 'n' para número o 'c' para color.");
                this.rl.close();
            }
        });
    }

    private ejecutarRuleta(apuesta: { tipo: string; valor: number | string }, montoApuesta: number): void {
        console.log(`Apuesta: ${apuesta.tipo === "numero" ? `Número ${apuesta.valor}` : apuesta.valor}`);
        console.log("Girando la ruleta...");

        // Generar un número aleatorio entre 0 y 36
        const resultado = Math.floor(Math.random() * 37);
        const color = this.determinarColor(resultado);

        console.log(`Resultado de la ruleta: Número ${resultado} (${color})`);

        // Determinar el ganador
        if (resultado === 0) {
            console.log("El número es 0. ¡El casino gana!");
        } else if (apuesta.tipo === "numero" && apuesta.valor === resultado) {
            console.log("¡Felicidades! Tu número coincide. Ganaste.");
            console.log(`Ganaste $${montoApuesta * 10}!`);
        } else if (apuesta.tipo === "color" && apuesta.valor === color) {
            console.log("¡Felicidades! Tu color coincide. Ganaste.");
            console.log(`Ganaste $${montoApuesta * 2}!`);
        } else {
            console.log("Lo sentimos, no ganaste esta vez. ¡Sigue intentando!");
        }
    }

    // Método auxiliar para determinar el color basado en el número
    private determinarColor(numero: number): string {
        // Definir los números rojos y negros
        const rojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        const negros = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

        if (rojos.includes(numero)) return "rojo";
        if (negros.includes(numero)) return "negro";
        return "verde"; // El 0 es verde
    }
}
