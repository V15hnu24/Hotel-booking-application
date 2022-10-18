const express = require('express');
// const { createHotel,updateHotel, deleteHotel, getHotel, getAllHotels } = require('../controllers/hotel');
const { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms } = require('../controllers/room');
// const hotel = require('../models/hotel');
const createError = require('../utils/error');
const { verifyAdmin } = require('../utils/verifyToken');
const router = express.Router();

//Create
router.post("/:hotelId", verifyAdmin, createRoom);

//Update
router.put("/:id",verifyAdmin,  updateRoom);


//Delete
router.delete("/:id/:hotelId",verifyAdmin, deleteRoom);

//Get
router.get("/:id", getRoom);


//GetAll
router.get("/", getAllRooms);


module.exports = router;