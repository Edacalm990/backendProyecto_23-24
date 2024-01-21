const mongoose = require('mongoose');

// Define el esquema para la lista de la compra
const listBuySchema = new mongoose.Schema({
    productos: [
        {
            product: String,
            quantity: Number,
        },
    ],
    // Campo de referencia al ID de la persona
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',  // Referencia al modelo de usuario
        required: true,
    },
});

module.exports=mongoose.model('listBuy', listBuySchema)