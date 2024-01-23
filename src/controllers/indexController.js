const {postCrearUsuario, getUserID, getUser}=require("./userController");
const {addBirthday, birthdays, birthdayDeleteId, birthdayPut}=require("./birthdayListController")

module.exports = {
    postCrearUsuario,
    getUserID,
    getUser,
    addBirthday,
    birthdays,
    birthdayDeleteId,
    birthdayPut
}