const express = require("express"); 
const router = express.Router();
const alluserModel = require('../models/allusers');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    res.render("login",{
        title: "Login"
    })
})
router.post("/", (req,res)=>{
    let formdata={
        email : req.body.email,
        password: req.body.password
    }; 
    
    alluserModel.findOne({email:req.body.email})
    .then(user =>{
       let errors = [];
        if (user == null)
        {
            errors.push("Sorry either email/password is not valid");
            res.render('login',{
                err : errors,
                data : formdata
            })
        }
        else
        { 
            bcrypt.compare(req.body.password, user.password)
            .then(isMatched =>{
                if (isMatched)
                {
                    //both email and password matched so create session
                    req.session.userInfo = user
                    res.redirect("/")
                }
                else
                {
                    errors.push("Sorry either email/password is not valid");
                    res.render('login',{
                        err : errors,
                        data : formdata
                    })
                }
            })
            .catch(err => console.log(`error occured during password encrypt ${err}`));
        }
    })
    .catch(err => console.log(`error occured while finding user by email ${err}`));
})


module.exports = router ;