export interface InstruccionesJuego {
        leerInstrucciones(): string;
    }


    import * as fs from 'fs';

///URLS///
const url_instrucciones = './instrucciones/instrucciones.txt';



//////////////////LEER ARCHIVO TXT COMO BASE DE DATOS Y CONVERTIRLO EN JASON////////////////////////
export function leerTXT(ruta:string):any []{
try{
    const archivoTexto = fs.readFileSync(ruta, 'utf8');
    const lineas = archivoTexto.trim().split('\n');
    if(ruta.includes("tragamonedas")){
        return lineas.map(linea => {
            const [linea1, linea2, linea3, linea4] = linea.split(',');
            return {
                linea1: linea1.trim(),
                linea2: linea2.trim(),
                linea3: linea3.trim(),
                linea4: linea4.trim(),
            };
        });
    }
    else if(ruta.includes("ruleta")){
        return lineas.map(linea => {
            const [linea1, linea2, linea3, linea4] = linea.split(',');
            return {
                linea1: linea1.trim(),
                linea2: linea2.trim(),
                linea3: linea3.trim(),
                linea4: linea4.trim(),
            };
        });  
    }
    else if(ruta.includes("blackjack")){
        return lineas.map(linea => {
            const [linea1, linea2, linea3, linea4] = linea.split(',');
            return {
                linea1: linea1.trim(),
                linea2: linea2.trim(),
                linea3: linea3.trim(),
                linea4: linea4.trim(),
            };
        });
    }
    else{
        console.log("No se encuentra la base de datos");
        return [];
    }
}catch(error){
    console.log(error + "Error");
    return [];
}
    return [];
}

//test de codigo

let tragamonedas = leerTXT(url_instrucciones);
console.table(tragamonedas);



let ruleta = leerTXT(url_instrucciones);
console.log(ruleta);
let blackjack = leerTXT(url_instrucciones);
console.log(blackjack);
