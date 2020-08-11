//require´s
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(`==================================`.red);
    console.log(`========Tabla del ${base} ========`.yellow);
    console.log(`==================================`.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`.green)
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor "${ base }" no es un numero`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        /* const data = new Uint8Array(Buffer.from('Hola mundillo')); */
        fs.writeFile(`tablas/tabla del ${base} al ${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla del ${base} hasta el ${limite}.txt`)

        });

    });

}


module.exports = {
    crearArchivo,
    listarTabla
};