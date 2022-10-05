const express = require('express');
const { updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/User');
const {verifyToken, verifyUser, verifyAdmin}  = require('../utils/verifyToken');
const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req,res, next)=>{
//     res.status(200).json("hello user");
// });

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("Hello user you can update the user and delete it");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("Hello Admin you can update the user and delete all accountsit");
// });


//Update
router.put("/:id",verifyUser, updateUser);

//Delete
router.delete("/:id",verifyUser, deleteUser);

//Get
router.get("/:id",verifyUser, getUser);

//GetAll
router.get("/", verifyAdmin, getAllUsers);


module.exports = router;