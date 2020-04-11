const express = require("express"); 
const router = express.Router();

router.get('/', (req, res) => {
    req.session.destroy();
    res.redirect("/signup-login-logout");
})



module.exports = router ;