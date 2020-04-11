const express = require("express"); 
const router = express.Router();

router.get('/', (req, res) => {
    // if session is not available
    if (! req.session.userInfo)
    
    {
        res.render("signupLogin",{
            title: "Signup-Login"
        })
    }
    // (session is available)
     else 
      res.render("logout",{
         title: "logout"
    })

})



module.exports = router ;