const express = require('express');
const router = express.Router()
const {postCrearUsuario} = require('../controllers/indexController')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post("/crearusuario", urlencodedParser,postCrearUsuario)
//router.get("/usuario", controller.getUsuario)

module.exports = router