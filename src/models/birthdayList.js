const mongoose = require('mongoose');

// Define el esquema para la lista de pesos
const birthdayListSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        },
    name: {
        type: String,
         required:true,
        },
    // Campo de referencia al ID de la persona
    user: {
        type: String,
        required: true,
    },
});

module.exports=mongoose.model('BirthdayList', birthdayListSchema)