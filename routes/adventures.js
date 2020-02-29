const express = require("express"); 
const adventures =require('../models/adventures');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("adventures",{
        title: "Adventures",
        advrooms : adventures
    })
})



module.exports = router ;