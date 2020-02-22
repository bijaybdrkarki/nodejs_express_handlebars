const express = require("express"); 
const router = express.Router();

router.get('/', (req, res) => {
    res.render("signup")
})
router.post("/", (req,res)=>{
    // console.log("test");
    let errormessg=[];
    let formdata={
        email : req.body.email,
        fname : req.body.firstName,
        lname : req.body.lastName,
        day : req.body.day,
        month : req.body.month,
        year : req.body.year
    }; 
    const errors={};
    if(req.body.email=="")
    {
    errors.email = "Sorry, you must enter email address";
    }
    if(req.body.firstName=="")
    {
    errors.firstName= "Sorry, you must enter a first name";
    }
    if(req.body.lastName=="")
    {
    errors.lastName="Sorry, you must enter last name";
    }
    if(req.body.password=="")
    {
    errors.password="Sorry, you must enter a password";
    }
    if(req.body.confirmPassword=="")
    {
    errors.confirmPassword = "Sorry, you must enter matching password";
    }
    if(req.body.month == undefined)
    {
    errors.month="Sorry, you must select month";
    }
    if(req.body.day == undefined)
    {
    errors.day="Sorry, you must select day";
    }
    if(req.body.year == undefined)
    {
    errors.year="Sorry, you must select year";
    }
    if( req.body.password.length < 8 || req.body.password[0] != req.body.password[0].toUpperCase() || ! (/^[0-9a-zA-Z]+$/).test(req.body.password.slice(1)) )
    {
        errors.passType = "password must have at least 8 characters with first letter capital & all other alphanumeric"
    }
    if(req.body.password.length > 0 && req.body.confirmPassword.length > 0 && req.body.password !== req.body.confirmPassword)
    {
        errors.match= "password not matched";
    }
    errormessg.push(errors);
    
    if(errormessg.length > 0)
    {
    //    console.log("inside error.length");
        res.render("signup",{
        messages : errors,
        data : formdata
        })
    }
    
    
})



module.exports = router ;