

const{crearTablas} =require('./helpers/multiplicar');
const argv  = require('./config/yargs');


console.clear;

crearTablas(argv.b, argv.l,argv.h).
then( nombreArchivo => console.log (nombreArchivo,`tabla del ${argv.b} creada`.green)).
catch( err => console.log(err));
