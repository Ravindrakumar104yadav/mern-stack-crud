const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Role:String
});

module.exports=mongoose.model("users",userSchema);