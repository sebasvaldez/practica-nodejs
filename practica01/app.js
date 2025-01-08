const fs= require("fs");


//leer con fileSystem
const poema= fs.readFileSync('poema.txt', 'utf-8')

//modificar parte del texto con fileSystem
const poemaModified= poema.replace(/node.js/ig, 'NodeJS')


//Crea una copia del archivo
fs.writeFileSync('poema-modified.txt', poemaModified)
