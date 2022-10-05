const express = require('express');
const { createHotel,updateHotel, deleteHotel, getHotel, getAllHotels } = require('../controllers/hotel');
const hotel = require('../models/hotel');
const createError = require('../utils/error');
const router = express.Router();

//Create
router.post("/", createHotel);

//Update
router.put("/:id", updateHotel);


//Delete
router.delete("/:id", deleteHotel);

//Get
router.get("/:id", getHotel);


//GetAll
router.get("/", getAllHotels);


module.exports = router;