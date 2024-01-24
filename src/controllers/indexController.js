const {postCrearUsuario, getUserID, getUser, UserDeleteId, userPut}=require("./userController");
const {addBirthday, birthdays, birthdayDeleteId, birthdayPut}=require("./birthdayListController")

module.exports = {
    postCrearUsuario,
    getUserID,
    getUser,
    UserDeleteId,
    userPut,
    addBirthday,
    birthdays,
    birthdayDeleteId,
    birthdayPut
}