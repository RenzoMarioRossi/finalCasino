import * as fs from "fs";
let url_instrucciones = './instrucciones/instrucciones.txt'
export interface InstruccionesJuego {
    leerInstrucciones(): string;
}

export const cargarInstrucciones = (): Record<string, string> => {
    const contenido = fs.readFileSync("./instrucciones/instrucciones.txt", "utf-8");
    const lineas = contenido.split("\n");
    const instrucciones: Record<string, string> = {};

    lineas.forEach((linea) => {
        const [nombreJuego, textoInstrucciones] = linea.split(": ");
        if (nombreJuego && textoInstrucciones) {
            instrucciones[nombreJuego.trim()] = textoInstrucciones.trim();
        }
    });

    console.log(instrucciones)

    return instrucciones;
};

//console.log(instrucciones)
console.log(".")
console.log(cargarInstrucciones)

