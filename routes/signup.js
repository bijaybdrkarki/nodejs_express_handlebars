const express = require("express"); 
const router = express.Router();

const path = require("path"); 
const alluserModel = require('../models/allusers');
require('dotenv').config() //dotenv imported from dependencies
const sgMail = require('@sendgrid/mail');

router.get('/', (req, res) => {
    res.render("signup",{
        title: "Signup"
    })
})
router.post("/", (req,res)=>{
    // console.log("test");
    let formdata={
        email : req.body.email,
        fname : req.body.firstName,
        lname : req.body.lastName,
        password: req.body.password,
        phone : req.body.phone,
        day : req.body.day,
        month : req.body.month,
        year : req.body.year
    }; 
    const phonenum = formdata.phone.split('-');
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
    if(req.body.phone=="")
    {
    errors.phone="Sorry, you must enter valid phone number";
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
    if (Object.keys(errors).length > 0)
    {
        res.render("signup",{
        messages : errors,
        data : formdata
        })
    }
    else{
        //check if the email already exists in tha database or not
        alluserModel.findOne({email:req.body.email})
            .then((user)=>{
                if (user != null)
                {
                    errors.email = "sorry, email you entered already exists"
                        res.render("signup",{
                            messages : errors,
                            data : formdata
                        })
                }
                else
                {
                    const user = new alluserModel(formdata);
                    user.save()
                    .then((justSavedUser)=>{
                
                        req.files.userImg.name = `${justSavedUser._id}_${req.files.userImg.name}${path.parse(req.files.userImg.name).ext}`;
                        req.files.userImg.mv(`public/userimg/${req.files.userImg.name}`)
                        .then(()=>{
                            
                            alluserModel.updateOne({_id:justSavedUser._id}, {
                                userImg: req.files.userImg.name
                            })
                            .then(()=>{
                                sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                                const msg = {
                                to: formdata.email,
                                from: 'bijay.jhupro@gmail.com',
                                subject: 'Sending with Twilio SendGrid is Fun',
                                text: 'and easy to do anywhere, even with Node.js',
                                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                                };
                                sgMail.send(msg);
                                // sms to user using twilio
                                const accountSid = process.env.ACCOUNT_SID;
                                const authToken = process.env.YOUR_AUTHTOKEN;
                                const client = require('twilio')(accountSid, authToken);
                                
                                client.messages
                                .create({
                                    body: `${req.body.firstName} ${req.body.lastName}\nWelcome aboard, your new account has been registered`,
                                    from:  process.env.TRIAL_NUMBER,
                                    to: phonenum[0].concat(phonenum[1].concat(phonenum[2]))
                                })
                                .then(message => {
                                    console.log(message.sid);
                                    res.render("welcome",{
                                        title: "Welcome",
                                        data : formdata
                                    })
                                })
                                .catch((err)=>{
                                    console.log(`Error ${err}`);
                                })

                            })
                            .catch( err => console.log(`error occured while adding userImg name to database ${err}`));
                            
                        })
                        .catch( err => console.log(`error occured while saving userImg on server ${err}`));
                
                        
                    })
                    .catch( err => console.log(`error occured while adding user to database ${err}`));
    
                }
               
            })
            .catch( err => console.log(`error occured while retrieving user from database ${err}`));
        }    
    
})



module.exports = router ;