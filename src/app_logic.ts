import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';


// console.log(yarg)
const { b: base, l: limit, s: showTable } = yarg;

let outputMessage: string = "";
// const base = yarg.b;
const header = `
==========================
        Tabla del ${base}
==========================\n
`

// for (let i = 1; i <= limit; i++) {
//     outputMessage += `${base} x ${i} = ${base * i}\n`;
// }

const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, header + outputMessage);

if (showTable ) {
    console.log(header + outputMessage);
}

console.log(`Tabla del ${base} creada en el archivo tabla-${base}.txt`);

// console.log(header + outputMessage);
