const express = require("express"); 
const router = express.Router();
const allusers = require('../models/allusers');

router.get('/', (req, res) => {
    res.render("login",{
        title: "Login"
    })
})
router.post("/", (req,res)=>{
    let errormessg=[];
    let flag = 0;
    let name ="";
    let formdata={
        email : req.body.email,
        password: req.body.password
    }; 
    const errors={};
    if(formdata.email=="")
    {
    errors.email = "Sorry, you must enter email address";
    }
    if(formdata.password=="")
    {
    errors.password="Sorry, you must enter a password";
    }
    for (let i= 0 ; i<allusers.length; i++)
    {
        if (formdata.email == allusers[i].email && formdata.password == allusers[i].password)
        {
            flag = 1;
            name = allusers[i].fname 
            break;
        }
    }
    if (flag == 0)
    {
        errors.match = "email and password not found"
    }
    errormessg.push(errors);
    
    if(Object.keys(errors).length > 0)
    {
        res.render("login",{
        messages : errors,
        data : formdata
        })
    }
    else
    {
        res.render("index",{
            user_name : name
        });
    }

})


module.exports = router ;