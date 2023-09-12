
const express=require('express');
const app=express();

const router=require('./src/Routes/api');





app.use('/api',router);
app.use('*',(req,res)=>{
    res.status(404).json({
        status:404
    })
})

module.exports=app;
