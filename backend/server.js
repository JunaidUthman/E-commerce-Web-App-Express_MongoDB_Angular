const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

app.get("/getProducts" , (req , res)=>{
    res.json({'title' : "its working babe"});
})

app.listen(3000 , ()=>{
    console.log("the servere is listening")
})
