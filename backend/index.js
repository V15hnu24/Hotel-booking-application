const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const authRoute = require('./routes/auth');

DB_Connection_URL = process.env.MONGO;

const DBconnect = async () => {
    try{
        await mongoose.connect(DB_Connection_URL);
        console.log("Connected to DB");
    }catch(error){
        console.log("Error connecting with DB" + error);
        throw error;
    }
};

mongoose.connection.on('disconnected', ()=>{
    console.log("MongoDb Disconnected");
});

mongoose.connection.on('connected', ()=>{
    console.log("MongoDB Connected");
});

app.get("/", (req,res)=>{
    res.send('Hello world!');
});


//middlewares
app.use("/auth", authRoute);


app.listen(8800, ()=>{
    DBconnect()
    console.log("Connected to main file of backend!");
});