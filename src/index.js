//usamos express como freamwork
const express=require('express');
const mongoose=require("mongoose")
const bodyParser = require('body-parser')
// create application/x-www-form-urlencoded parser

// usamos dtenv para las variables de entorno 
require('dotenv').config()

const app=express();

// le asignamos una constante a las rutas de usuario
const userRoutes=require("./routes/indexRoutes")

// donde escucha el servidor 
app.listen(process.env.PORT, ()=>console.log(process.env.PORT));

//le ponemos un "prefijo" a las rutas
app.use('/api',userRoutes)

mongoose.connect(process.env.URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});