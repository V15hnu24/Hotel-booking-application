const hotel = require("../models/hotel");

const createHotel = async (req,res,next)=>{
    const newHotel = new hotel(req.body);
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        next(err);
    }
};

const updateHotel = async (req,res,next)=>{
//    console.log("IN put of hotel");
    try{
        const updateHotel = await hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updateHotel);
    }catch(err){
        next(err);
    }
};

const deleteHotel = async(req,res,next) =>{
    try {
        await hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel been deleted");
    } catch (error) {
        next(err);
    }
};

const getHotel = async (req,res,next)=>{
    try{
        const Hotel = await hotel.findById(req.params.id);
        res.status(200).json(Hotel);
    }catch(err){
        next(err);
    }
};

const getAllHotels = async (req,res,next)=>{
    try{
        const Hotels = await hotel.find();
        res.status(200).json(Hotels);
    }catch(err){
        next(err);
    }
};

module.exports = {
    getAllHotels,getHotel, deleteHotel, createHotel, updateHotel
};