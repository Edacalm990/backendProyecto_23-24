const express = require('express');
const userSchema = require('../models/user');

const router = express.Router()

// crear usuario
router.post('/crearusuario', (req, res) => {
    const user = userSchema(req.body)
    user.save().then((datos) =>res.json(datos)).catch((error) => res.json({message:error}))
})

module.exports = router