const express = require('express');
const userSchema = require('../models/user');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const { validarCorreoElectronico } = require('../functions/controlErrores');



const router = express.Router()

// crear usuario
router.post('/crearusuario', urlencodedParser, async (req, res) => {
    try {
        // TODO CAMBIAR ESTA PORQUERIA POR UN CONROL DE ERRORES DECENTE
        const email = req.body.email;
        if (!validarCorreoElectronico(email)) {
            return res.status(400).send({message:'El correo electrónico proporcionado no es válido.'});
        }
        // Crear un nuevo usuario utilizando el modelo de Mongoose
        const newUser = new userSchema(req.body);
        // Guardar el usuario en la base de datos
        const savedUser = await newUser.save();
        // Enviar el usuario guardado como respuesta
        res.send(savedUser);
    } catch (error) {
        // Manejar errores aquí
        console.error(error);
        res.status(500).send({message:'Error al crear el usuario'});
    }
})

module.exports = router