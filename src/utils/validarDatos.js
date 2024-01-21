const { generarHashpass } = require('./indexUtils');

const validEmail =(email)=>{
    // Expresión regular para validar el formato de un correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Verificar si el correo electrónico cumple con el formato
    return regex.test(email);
  }

const validName=(name)=>{
  console.log(name)
    const caracteresProhibidos = /[<>]/;
    // Verificar si el input es un string
    if (typeof name !== 'string') return false;
    // Verificar la longitud del string
    if (name.length > 30) return false;
    // Verificar si hay caracteres especiales que podrían indicar intento de inyección de código
    if (caracteresProhibidos.test(name)) return false;
    // Si todo está bien, el string es válido
    return true;
}
  
const esPassSegura=(pass)=>{
    /*
    (?=.*[A-Za-z]): Asegura que la contraseña contenga al menos una letra.
    (?=.*\d): Asegura que la contraseña contenga al menos un dígito.
    (?=.*[@$!%*?&]): Asegura que la contraseña contenga al menos un carácter especial, que puede ser cualquiera de los caracteres en @$!%*?&.
    [A-Za-z\d@$!%*?&]{8,}: Acepta caracteres alfanuméricos y especiales, con una longitud mínima de 8 caracteres.
    */
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass)) return false;
    return true;
  }


  module.exports = {
    validEmail,
    esPassSegura,
    validName
  };