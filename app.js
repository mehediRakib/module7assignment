
const express=require('express');
const app=express();

const router=require('./src/Routes/api');

app.use('/api',router);

module.exports=app;