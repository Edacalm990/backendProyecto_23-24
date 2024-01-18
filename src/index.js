//usamos express como freamwork
const express=require('express');
const mongoose=require("mongoose")

// usamos dtenv para las variables de entorno 
require('dotenv').config()

const app=express();

// le asignamos una constante a las rutas de usuario
const userRoutes=require("./routes/user")

// donde escucha el servidor 
app.listen(process.env.PORT, ()=>console.log(process.env.URI));

/*El middleware app.use(express.json()) se utiliza en las aplicaciones 
Express para analizar y manejar datos JSON enviados en el cuerpo de la solicitud. 
Cuando utilizas este middleware, Express analizará automáticamente los datos JSON 
y los almacenará en el objeto req.body, que luego se puede acceder en tus manejadores de rutas.
*/
app.use(express.json())

//le ponemos un "prefijo" a las rutas
app.use('/api',userRoutes)


//routes example
app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});