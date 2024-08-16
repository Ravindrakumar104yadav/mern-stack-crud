const mongoose=require('mongoose');

const scheduleSchema=new mongoose.Schema({
    Task:String,
    Date:String,
    Location:String
});

module.exports=mongoose.model("scheduals",scheduleSchema);