const express = require('express');
const router = express.Router()
const {postCrearUsuario, getUserID, getUser} = require('../controllers/indexController')
const bodyParser = require('body-parser');
const resError = require('../utils/resError');
const { ClientError } = require('../utils/clientError');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/users", urlencodedParser, getUser)
router.get("/user/:id", urlencodedParser, getUserID)
router.post("/crearusuario", urlencodedParser,postCrearUsuario)




module.exports = router