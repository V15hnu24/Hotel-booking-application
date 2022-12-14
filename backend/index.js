const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const roomRoute = require('./routes/rooms');
const hotelRoute = require('./routes/hotels');
const cookieParser = require('cookie-parser');

const DB_Connection_URL = process.env.Mongo;

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

app.use(cookieParser());
app.use("/auth", authRoute);
app.use('/hotel', hotelRoute);
app.use('/user',userRoute);
app.use('/room',roomRoute);

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something not right!!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
})

app.listen(8800, ()=>{
    DBconnect();
    console.log("Connected to main file of backend!");
});