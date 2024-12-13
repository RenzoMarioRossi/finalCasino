export abstract class Juego {
    protected nombre: string;
    protected valorMinimoApuesta: number;

    constructor(nombre: string, valorMinimoApuesta: number) {
        this.nombre = nombre;
        this.valorMinimoApuesta = valorMinimoApuesta;
    }

    abstract jugar(montoApuesta: number): void;
}
