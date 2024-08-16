const mongoose=require('mongoose');

const feedbackSchema=new mongoose.Schema({
    Conference:String,
    Username:String,
    Email:String,
    Feedback:String
});

module.exports=mongoose.model("feedbacks",feedbackSchema);