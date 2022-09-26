const express = require('express');
const router = express.Router();

router.get("/", (req,res) =>{
    console.log("IN routes auth");
    res.send("Hello, reporting from auth");
});

router.get("/:id", (req,res) =>{
    console.log("IN routes auth");
    res.send("Hello, "+req.params.id+" reporting from auth");
});

module.exports = router;