const user = require("../models/user");

const updateUser = async (req,res,next)=>{
//    console.log("IN put of User");
    try{
        const updateUser = await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updateUser);
    }catch(err){
        next(err);
    }
};

const deleteUser = async(req,res,next) =>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch (error) {
        next(err);
    }
};

const getUser = async (req,res,next)=>{
    try{
        const tempUser = await user.findById(req.params.id);
        res.status(200).json(tempUser);
    }catch(err){
        next(err);
    }
};

const getAllUsers = async (req,res,next)=>{
    try{
        const allUsers = await user.find();
        res.status(200).json(allUsers);
    }catch(err){
        next(err);
    }
};

module.exports = {
    getAllUsers,getUser, deleteUser, updateUser
};