const mongoose = require('mongoose');

// Define el esquema para la lista de pesos
const weightListSchema = new mongoose.Schema({
    weights: [
        {
            data: {
                type: Date,
                default: Date.now,
            },
            quantity: {
                type: Number,
                required:true,
            },
        },
    ],
    // Campo de referencia al ID de la persona
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',  // Referencia al modelo de usuario
        required: true,
    },
});

module.exports=mongoose.model('WeightList', weightListSchema)