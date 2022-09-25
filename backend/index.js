const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

Connection_URL = process.env.MONGO
console.log(process.env.MONGO)
app.listen(8080, ()=>{
    console.log("Connected to main file of backend!");
})