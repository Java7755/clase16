//traerme express, lo tengo que requerir de la siguiente manera como un modulo nativo.
const express = require('express');


//crear una instancia de express
const app = express();

//crear una ruta por GET
app.get('/', (req,res)=>{
    res.send('Hola Javi en express');
});

//para luego levantar el servidor
app.listen(3001, ()=>{
    console.log('servidor escuchando en puerto 3001');
});
