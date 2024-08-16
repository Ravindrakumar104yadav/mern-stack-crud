const express=require('express');
const cors=require('cors');

require('./Config')
const User=require('./User');
const Schedule=require('./Schedule');
const Feedback=require('./Feedback');

const app=express();

app.use(cors());
app.use(express.json());

app.post('/register',async (req,resp)=>{
    let user =new User(req.body);
    let result=await user.save()
    resp.send(result);
});

app.post('/login',async (req,resp)=>{
    let user=await User.findOne(req.body).select("-Password");
    resp.send(user);
});

app.post('/schedule',async (req,resp)=>{
    let user =new Schedule(req.body);
    let result=await user.save()
    resp.send(result);
});

app.get('/getItem',async (req,resp)=>{
    let item=await Schedule.find();
    if(item.length>0)
    {
        resp.send(item);

    }
    else{
        resp.send({result:"Data not Found"});
    }
});

app.post('/feedback', async (req,resp)=>{
    let feedback=new Feedback(req.body);
    feedback=await feedback.save();
    resp.send(feedback);

});

app.get('/getFeedback', async(req,resp)=>{
    let result=await Feedback.find();
    if(result.length>0)
    {
        resp.send(result);
    }
    else
    {
        resp.send({result:"Data not found"});
    }
})

app.listen(5500);