import { Juego } from "./Juego";
import { cargarInstrucciones } from "./InstruccionesJuego";
import * as readline from 'readline';

interface Carta {
    valor: number;
    nombre: string;
}

export class BlackJack extends Juego {
    private rl: readline.Interface;

    constructor(rl: readline.Interface) {
        const instrucciones = cargarInstrucciones()["BlackJack"];
        super("BlackJack", 100, instrucciones);
        this.rl = rl;
    }

    jugar(montoApuesta: number): void {
        if (montoApuesta < this.getValorMinimoApuesta()) {
            console.log("La apuesta es menor al valor mínimo permitido.");
            return;
        }

        console.log(`Jugando a BlackJack. Apuesta: $${montoApuesta}`);

        const mazo = this.crearMazo();
        this.mezclarMazo(mazo);

        const manoJugador: Carta[] = [];
        const manoCrupier: Carta[] = [];

        // El jugador comienza con dos cartas
        manoJugador.push(mazo.pop()!, mazo.pop()!);
        // El crupier también comienza con dos cartas (pero solo muestra una)
        manoCrupier.push(mazo.pop()!, mazo.pop()!);

        console.log(`Tus cartas iniciales: ${this.mostrarMano(manoJugador)}`);
        console.log(`Carta visible del crupier: ${this.mostrarCarta(manoCrupier[0])}`);

        this.turnoJugador(mazo, manoJugador, manoCrupier, montoApuesta);
    }

    private turnoJugador(mazo: Carta[], manoJugador: Carta[], manoCrupier: Carta[], montoApuesta: number): void {
        const puntajeJugador = this.calcularPuntaje(manoJugador);
        console.log(`Tu puntaje actual: ${puntajeJugador}`);
        
        if (puntajeJugador > 21) {
            console.log("¡Te pasaste de 21! Has perdido.");
            return;
        }

        this.rl.question("¿Quieres pedir una carta (p) o plantarte (x)? ", (opcion) => {
            if (opcion.toLowerCase() === "p") {
                manoJugador.push(mazo.pop()!);
                console.log(`Nueva carta: ${this.mostrarCarta(manoJugador[manoJugador.length - 1])}`);
                this.turnoJugador(mazo, manoJugador, manoCrupier, montoApuesta);
            } else if (opcion.toLowerCase() === "x") {
                console.log("Te has plantado.");
                this.turnoCrupier(mazo, manoJugador, manoCrupier, montoApuesta);
            } else {
                console.log("Opción no válida. Intenta nuevamente.");
                this.turnoJugador(mazo, manoJugador, manoCrupier, montoApuesta);
            }
        });
    }

    private turnoCrupier(mazo: Carta[], manoJugador: Carta[], manoCrupier: Carta[], montoApuesta: number): void {
        console.log(`Cartas del crupier: ${this.mostrarMano(manoCrupier)}`);

        while (this.calcularPuntaje(manoCrupier) < 17) {
            const nuevaCarta = mazo.pop()!;
            manoCrupier.push(nuevaCarta);
            console.log(`El crupier toma una carta: ${this.mostrarCarta(nuevaCarta)}`);
        }

        const puntajeJugador = this.calcularPuntaje(manoJugador);
        const puntajeCrupier = this.calcularPuntaje(manoCrupier);

        console.log(`Tu puntaje: ${puntajeJugador}`);
        console.log(`Puntaje del crupier: ${puntajeCrupier}`);

        if (puntajeCrupier > 21 || puntajeJugador > puntajeCrupier) {
            console.log(`¡Ganaste! Has ganado $${montoApuesta * 2}.`);
        } else if (puntajeJugador === puntajeCrupier) {
            console.log("Empate. Recuperas tu apuesta.");
        } else {
            console.log("El crupier gana. Has perdido.");
        }
    }

    private crearMazo(): Carta[] {
        const valores = [
            { valor: 1, nombre: "A" },
            { valor: 2, nombre: "2" },
            { valor: 3, nombre: "3" },
            { valor: 4, nombre: "4" },
            { valor: 5, nombre: "5" },
            { valor: 6, nombre: "6" },
            { valor: 7, nombre: "7" },
            { valor: 8, nombre: "8" },
            { valor: 9, nombre: "9" },
            { valor: 10, nombre: "10" },
            { valor: 10, nombre: "J" },
            { valor: 10, nombre: "Q" },
            { valor: 10, nombre: "K" },
        ];

        const palos = ["♥", "♦", "♠", "♣"];
        const mazo: Carta[] = [];

        for (const valor of valores) {
            for (const palo of palos) {
                mazo.push({ valor: valor.valor, nombre: `${valor.nombre}${palo}` });
            }
        }

        return mazo;
    }

    private mezclarMazo(mazo: Carta[]): void {
        for (let i = mazo.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
        }
    }

    private calcularPuntaje(mano: Carta[]): number {
        let puntaje = 0;
        let ases = 0;

        for (const carta of mano) {
            puntaje += carta.valor;
            if (carta.nombre.startsWith("A")) ases++;
        }

        while (puntaje > 21 && ases > 0) {
            puntaje -= 10;
            ases--;
        }

        return puntaje;
    }

    private mostrarCarta(carta: Carta): string {
        return carta.nombre;
    }

    private mostrarMano(mano: Carta[]): string {
        return mano.map(this.mostrarCarta).join(", ");
    }
}
