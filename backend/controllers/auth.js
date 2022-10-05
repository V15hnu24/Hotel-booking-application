const bcrypt = require('bcrypt');
const user = require("../models/user");
const createError = require('../utils/error');
const jwt = require('jsonwebtoken');

const register = async (req,res,next) =>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new user({
            username:req.body.username,
            email:req.body.email,
            isAdmin:req.body.isAdmin,
            password:hash
        });
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        next(error);
    }
};

const login = async (req,res,next) =>{
    try {
        const tempUser = await user.findOne({username:req.body.username});
        if(!tempUser) return next(createError(404, "User not Found"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password, 
            tempUser.password
            );
        if(!isPasswordCorrect) return next(createError(400, "Wrong password or Username!"));
        const userToken = jwt.sign(
            {id: tempUser._id ,  isAdmin:tempUser.isAdmin},
            process.env.JWT
        );

        const { password, isAdmin, ...otherDetails } = tempUser._doc;
        res
            .cookie("access_token", userToken, {
                httpOnly:true
            })
            .status(200).json({...otherDetails});
    } catch (error) {
        next(error);
    }
};
module.exports = {
    register, login
};