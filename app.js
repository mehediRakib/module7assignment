
const express=require('express');
const app=new express();

const router=require('./src/Routes/api');


const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const multer=require('multer');
const jsonWebToken=require('jsonwebtoken');
const mysql=require('mysql');
const mongoose=require('mongoose');
const cors=require('cors');
const expressMongoSanitizer=require('express-mongo-sanitize');
const expressRateLimit=require('express-rate-limit');
const helmet=require('helmet');
const hpp=require('hpp');
const validator=require('validator');


app.use(bodyParser.json());
app.use(cookieParser());
app.use(multer().any());
// app.use(jsonWebToken());
// app.use(mysql());
// app.use(mongoose());
app.use(cors());
app.use(expressMongoSanitizer());

app.use(helmet());
app.use(hpp());
// app.use(validator());


const limiter=expressRateLimit({
    windowMs:15*60*1000,
    max:"20"
})
app.use(limiter);



app.use('/api',router);

app.use('*',(req,res)=>{
    res.status(404).json({
        status:404
    })
})

module.exports=app;
