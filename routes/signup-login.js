const express = require("express"); 
const router = express.Router();

router.get('/', (req, res) => {
    res.render("signupLogin",{
        title: "Signup-Login"
    })
})



module.exports = router ;