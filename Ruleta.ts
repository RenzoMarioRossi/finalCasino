import { Juego } from "./Juego";
import { cargarInstrucciones } from "./InstruccionesJuego";
import * as readline from 'readline';

export class Ruleta extends Juego {
    private rl: readline.Interface;
    private mostrarMenuCallback: Function; // Variable para almacenar la función mostrarMenu

    constructor(rl: readline.Interface, mostrarMenu: Function) {
        const instrucciones = cargarInstrucciones()["Ruleta"];
        super("Ruleta", 50, instrucciones);
        this.rl = rl;
        this.mostrarMenuCallback = mostrarMenu; // El mostrarMenu de main ya configurado
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
                        this.solicitarContinuar();
                        return;
                    }
                    this.ejecutarRuleta({ tipo: "numero", valor: numeroApuesta }, montoApuesta);
                });
            } else if (tipo.toLowerCase() === "c") {
                this.rl.question("Elige un color (rojo/negro): ", (color) => {
                    if (color.toLowerCase() !== "rojo" && color.toLowerCase() !== "negro") {
                        console.log("Color inválido. Por favor, elige entre 'rojo' o 'negro'.");
                        this.solicitarContinuar();
                        return;
                    }
                    this.ejecutarRuleta({ tipo: "color", valor: color.toLowerCase() }, montoApuesta);
                });
            } else {
                console.log("Opción inválida. Por favor, elige 'n' para número o 'c' para color.");
                this.solicitarContinuar();
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
            this.solicitarContinuar()
        } else if (apuesta.tipo === "numero" && apuesta.valor === resultado) {
            console.log("¡Felicidades! Tu número coincide. Ganaste.");
            console.log(`Ganaste $${montoApuesta * 10}!`);
            this.solicitarContinuar()
        } else if (apuesta.tipo === "color" && apuesta.valor === color) {
            console.log("¡Felicidades! Tu color coincide. Ganaste.");
            console.log(`Ganaste $${montoApuesta * 2}!`);
            this.solicitarContinuar()
        } else {
            console.log("Lo sentimos, no ganaste esta vez. ¡Sigue intentando!");
            this.solicitarContinuar()
        }

        this.solicitarContinuar()
    }

    private solicitarContinuar(): void {
        // para ver si quiere seguir jugando
        this.rl.question("\n¿Quieres seguir jugando? (s para sí, n para no): ", (respuesta) => {
            if (respuesta.toLowerCase() === "s") {
                console.log("\nSelecciona otro juego o realiza otra apuesta.");
                this.mostrarMenuCallback(); // Llamamos a mostrarMenu para regresar al menú principal
            } else if (respuesta.toLowerCase() === "n") {
                console.log("Gracias por jugar. ¡Hasta pronto!");
                this.rl.close(); // Cerrar si el jugador decide salir
            } else {
                console.log("Opción inválida. Por favor, responde 's' para sí o 'n' para no.");
                this.solicitarContinuar();
            }
        });
    }

    // Método para determinar el color basado en el número
    private determinarColor(numero: number): string {
        // Definir los números rojos y negros
        const rojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        const negros = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

        if (rojos.includes(numero)) return "rojo";
        if (negros.includes(numero)) return "negro";
        return "verde"; // El 0 es verde
    }
}
