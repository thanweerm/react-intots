const mongoose =require("mongoose");


const notesSchema ={
    name:String,
    phoneNumber:String,
    email:String
}

const Input =mongoose.model("Input", notesSchema);

module.exports= Input;