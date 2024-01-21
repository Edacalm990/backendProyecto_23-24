const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    pass:{
        type: String,
        required: true,
    }
});

module.exports=mongoose.model('user', userSchema)