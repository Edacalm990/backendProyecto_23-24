const express = require('express');
const userSchema = require('../models/user');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const { validarCorreoElectronico,catchAsync,response, gestionErrores, ClienError } = require('../utils/indexUtils')

// crear usuario
const postCrearUsuario = async (req, res) => {
    const email = req.body.email;
    if (!validarCorreoElectronico(email)) throw new ClienError("El email no es correcto", 400);
    //TODO terminar validacion datos
    // Crear un nuevo usuario utilizando el modelo de Mongoose
    const newUser = new userSchema(req.body)
    // Guardar el usuario en la base de datos
    const savedUser = await newUser.save();
    // Enviar el usuario guardado como respuesta
    response(res,200,savedUser)
}

module.exports={
//gestiono los errores con catchAsync
postCrearUsuario:catchAsync(postCrearUsuario)
}