
const fileSystem = require('fs');
const colors = require('colors');

const crearTablas = async ( base = 5, listar,hasta) => {
    
     try {
         let salida, alarchivo = '';
         for (let i = 1; i <= hasta; i++) {

             salida += ` ${base} ${ 'x'.red } ${i} ${'='.red} ${base * i}\n`;
             alarchivo += ` ${base} 'x' ${i} '=' ${base * i}\n`;  // esto esta duplicado porque aparecia otros caracteres que se refieren a colores en el txt.
         }
         fileSystem.writeFileSync(`./salidas/tabla_${base}.txt`, alarchivo);

         if (listar){
             console.log(salida.blue);
         }
             return (base);

     } catch (error) {
            throw err;
     }
        
}

module.exports={
   crearTablas
}