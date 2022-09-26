const express = require('express');
const hotel = require('../models/hotel');
const router = express.Router();

//Create
router.post("/", async (req,res)=>{

    const newHotel = new hotel(req.body);
 
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        res.status(500).json(err)
    }
});
//Update

//Delete

//Get

//GetAll

module.exports = router;