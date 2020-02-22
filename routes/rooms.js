const express = require("express"); 
const allrooms =require('../models/allrooms');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("rooms",{
        rooms : allrooms
    })
})



module.exports = router ;