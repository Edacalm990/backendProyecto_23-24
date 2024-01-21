const userSchema = require('../models/user');
const { esPassSegura, validName, validEmail, catchAsync, response, gestionErrores, ClientError, generarHashpass } = require('../utils/indexUtils')

// crear usuario
const postCrearUsuario = async (req, res) => {
    // doble comprobación, primero por seguridad en el frontend nos aseguraremos que los datos enviados sean correctos,
    // y aquí (backend) volveremos ha hacer una doble comprobación para evitar injección de código
    if (!validEmail(req.body.email) ||
        !validName(req.body.name) ||
        !esPassSegura(req.body.pass)
    ) throw new ClientError("Los datos no son correctos", 400);
    // Crear un nuevo usuario utilizando el modelo de Mongoose
    const newUser = new userSchema(req.body);
    // Guardar el usuario en la base de datos
    const savedUser = await newUser.save();
    // Enviar el usuario guardado como respuesta
    response(res, 200, savedUser)
}

const getUser= async (req,res)=>{
    // Utiliza el método find() de Mongoose para obtener todos los documentos en la colección
    const usuarios = await userSchema.find();
    // Responde con la lista de usuarios y código de estado 200 (OK)
    response(res, 200, usuarios);
}

const getUserID= async (req,res)=>{
    // Obtén el ID del parámetro de la solicitud
    const id = req.params.id;
    // Utiliza el método findById() de Mongoose para buscar un usuario por su ID
    // Si no se encuentra el usuario, responde con un código de estado 404 (Not Found)
       const usuario = await userSchema.findById(id).catch(error => {throw new ClientError('Usuario no encontrado', 404)});
    // Responde con el usuario encontrado y código de estado 200 (OK)
    response(res, 200, usuario);
}


module.exports = {
    //gestiono los errores con catchAsync
    postCrearUsuario:catchAsync(postCrearUsuario),
    getUser:catchAsync(getUser),
    getUserID:catchAsync(getUserID)
}
