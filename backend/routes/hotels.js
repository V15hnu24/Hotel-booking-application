const express = require('express');
const { createHotel,updateHotel, deleteHotel, getHotel, getAllHotels } = require('../controllers/hotel');
const hotel = require('../models/hotel');
const createError = require('../utils/error');
const { verifyAdmin } = require('../utils/verifyToken');
const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel);

//Update
router.put("/:id",verifyAdmin,  updateHotel);

//Delete
router.delete("/:id",verifyAdmin, deleteHotel);

//Get
router.get("/:id", getHotel);

//GetAll
router.get("/", getAllHotels);


module.exports = router;