const express = require("express"); 
const adventures =require('../models/adventures');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("adventures",{
        advrooms : adventures
    })
})



module.exports = router ;