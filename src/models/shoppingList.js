const mongoose = require('mongoose');

// Define el esquema para la lista de la compra
const shoppingListSchema = new mongoose.Schema({
    productos: [
        {
            product: {
                type: String,
                required:true,
            },
            quantity: {
                type: Number,
                required:true,
            },
            buy: {
                type: Boolean,
                default: false,
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

module.exports=mongoose.model('ShoppingList', shoppingListSchema)