// const {getTitle, getAuthor} =require('./functions')
// const {curso}=require('./objects')

//forma de importar con ECMASCRIPT 6
// import { getTitle, getAuthor } from "./functions.js";
// import { curso } from "./objects.js";

// const { nombre, author } = curso;

// console.log(getTitle());

// console.log(getAuthor(author));

import { config } from "dotenv";
import  env from "env-var";

config()

const PORT = env.get('PORT').required().asPortNumber()



console.log(PORT)


const M = 2701;

function compute(n) {
    let s = ""; // Inicializamos una cadena vacía
    for (let i = 1; i <= n; i++) {
        s += n; // Concatenamos el número `n` como cadena, `n` veces
    }
    // Convertimos `s` a número y calculamos el residuo con `M`
    return BigInt(s) % BigInt(M);
}

// Lista de valores para `n`
const valores = [1, 2, 5, 10, 20, 371844285230994047];

valores.forEach((n) => {
    console.log(`${n}: ${compute(n)}`);
});


console.log(process.env.PORT)

console.log("Voy en el minuto 1:28hs")
console.log(compute(20))
