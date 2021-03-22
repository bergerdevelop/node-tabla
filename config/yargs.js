

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base numerica de la tabla de multiplicar'
    })
    .check((argv, option) => {
        if (isNaN(argv.base)) {
            throw ' La base debe ser numerica'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe:'Permite listar la tabla generada'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default:'10',
        describe: 'Permite definir hasta donde va la tabla'
    })

    .argv;


    module.exports =argv;