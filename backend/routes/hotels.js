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
router.put("/:id", async (req,res)=>{
//    console.log("IN put of hotel");
    try{
        const updateHotel = await hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updateHotel);
    }catch(err){
        res.status(500).json(err)
    }
});


//Delete

router.delete("/:id", async(req,res) =>{
    try {
        await hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get
router.get("/:id", async (req,res)=>{
    try{
        const Hotel = await hotel.findById(req.params.id);
        res.status(200).json(Hotel);
    }catch(err){
        res.status(500).json(err)
    }
});


//GetAll

router.get("/", async (req,res)=>{
    try{
        const Hotels = await hotel.find();
        res.status(200).json(Hotels);
    }catch(err){
        res.status(500).json(err)
    }
});
module.exports = router;