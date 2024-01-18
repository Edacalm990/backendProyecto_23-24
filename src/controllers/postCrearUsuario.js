const express = require('express');
const userSchema = require('../models/user');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const { validarCorreoElectronico,catchAsync,response } = require('../utils/indexUtils')

// crear usuario
const postCrearUsuario = async (req, res) => {
        // TODO CAMBIAR ESTA PORQUERIA POR UN CONROL DE ERRORES DECENTE
        const email = req.body.email;
        if (!validarCorreoElectronico(email)) {
            return res.status(400).send({ message: 'El correo electrónico proporcionado no es válido.' });
        }
        // Crear un nuevo usuario utilizando el modelo de Mongoose
        const newUser = new userSchema(req.body);
        // Guardar el usuario en la base de datos
        const savedUser = await newUser.save();
        console.log( typeof newUser)
        // Enviar el usuario guardado como respuesta
        response(res,200,savedUser)
}

module.exports={
    //gestiono los errores con catchAsync
    postCrearUsuario:catchAsync(postCrearUsuario)
}
