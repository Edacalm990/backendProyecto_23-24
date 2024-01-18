const { generarHashpass } = require('./indexUtils');

const validarCorreoElectronico =(email)=>{
    // Expresión regular para validar el formato de un correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Verificar si el correo electrónico cumple con el formato
    return regex.test(email);
  }

const validName=(name)=>{
  //terminar
}
  
const esPassSegura=(pass)=>{
    // Verificar la longitud mínima
    if (pass.length < 8) {
      return false;
    }
  
    // Verificar la presencia de al menos un número
    if (!/\d/.test(pass)) {
      return false;
    }
  
    // Verificar la presencia de al menos una letra mayúscula
    if (!/[A-Z]/.test(pass)) {
      return false;
    }
  
    // Verificar la presencia de al menos una letra minúscula
    if (!/[a-z]/.test(pass)) {
      return false;
    }
  
    // Verificar la presencia de al menos un carácter especial
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
      return false;
    }
  
    // Si pasa todas las verificaciones, consideramos la pass segura
    return generarHashpass(pass);
  }


  module.exports = {
    validarCorreoElectronico,
    esPassSegura
  };