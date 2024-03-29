const express = require('express');
const router = express.Router()
const {postCrearUsuario, getUserID, getUser, addBirthday, birthdays, birthdayDeleteId, birthdayPut, UserDeleteId, userPut} = require('../controllers/indexController')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/users", urlencodedParser, getUser)
router.get("/user/:id", urlencodedParser, getUserID)
router.post("/crearusuario", urlencodedParser,postCrearUsuario)
router.delete("/borrarusuario/:id", urlencodedParser,UserDeleteId)
router.put("/actualizarusuario", urlencodedParser,userPut)

router.post("/addcumple", urlencodedParser,addBirthday)
router.get("/cumples", urlencodedParser,birthdays)
router.delete("/borrarcumple/:id", urlencodedParser,birthdayDeleteId)
router.put("/actualizarcumple", urlencodedParser,birthdayPut)


module.exports = router