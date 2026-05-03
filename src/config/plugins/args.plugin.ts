import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'list',
        type: 'number',
        default: 10,
        describe: 'Limit of the multiplication table'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show the multiplication table in console'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name'
    })    
    .check((argv, options) => {
        // console.log({argv, options});

        if (argv.b < 1) throw 'Error: The base must be a positive number';

        // throw Error('Error en la validación de argumentos');
        return true;
    })
    .parseSync();