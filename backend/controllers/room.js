const room = require('../models/room');
const Hotel = require('../models/hotel');

const createRoom = async (req, res, next) => {
    const hotelId  = req.params.hotelId;
    const newRoom = new room(req.body);    
    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $push:{rooms:savedRoom._id}
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err);
    }
};


const updateRoom = async (req,res,next)=>{
//    console.log("IN put of hotel");
    try{
        const updateRoom = await room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updateRoom);
    }catch(err){
        next(err);
    }
};

const deleteRoom = async(req,res,next) =>{
    const hotelId  = req.params.hotelId;
    try {
        await room.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull:{rooms:req.params.id}
            });
        }catch(err){
            next(err);
        }
        res.status(200).json("Room been deleted");
    } catch (error) {
        next(err);
    }
};

const getRoom = async (req,res,next)=>{
    try{
        const wanted_room = await room.findById(req.params.id);
        res.status(200).json(wanted_room);
    }catch(err){
        next(err);
    }
};

const getAllRooms = async (req,res,next)=>{
    try{
        const Rooms = await room.find();
        res.status(200).json(Rooms);
    }catch(err){
        next(err);
    }
};

module.exports = {
    getAllRooms,getRoom, deleteRoom, updateRoom, createRoom
};
