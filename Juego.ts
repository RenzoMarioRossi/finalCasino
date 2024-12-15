import * as fs from "fs";

export abstract class Juego {
    private nombre: string;
    private valorMinimoApuesta: number;
    private instrucciones: string;


    constructor(nombre: string, valorMinimoApuesta: number, instrucciones: string) {
        this.nombre = nombre;
        this.valorMinimoApuesta = valorMinimoApuesta;
        this.instrucciones = instrucciones;
    }

    //getters & setters
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getValorMinimoApuesta(): number {
        return this.valorMinimoApuesta;
    }

    public setValorMinimoApuesta(valorMinimoApuesta: number) {
        this.valorMinimoApuesta = valorMinimoApuesta;
    }

    public getInstrucciones(): string {
        return this.instrucciones;
    }

    public setInstrucciones(instrucciones: string) {
        this.instrucciones = instrucciones;
    }


    //jugar

    abstract jugar(montoApuesta: number): void;

    mostrarInstrucciones(): void {
        console.log(`Instrucciones para ${this.nombre}: ${this.instrucciones}`);
    }
}