//imports the express package that was installed within your application
const express = require("express"); 

// imports the handlebar package
const exphbs  = require('express-handlebars');

const bodyParser = require('body-parser');
const app = express(); // create express object ---> app
const PORT = 3000; // port number for localhost

const fakedb=[];
//This allows express to make my static content avialable from the public
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))



//register handlebars view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Creates an Express Web Server that listens to HTTP Reuqest on port 3000
app.listen(PORT, () => {
    console.log(`Web Server Started`); 
})

//routes
app.get('/', (req, res) => {
    res.render("index",{
        title: "Home",
        headingInfo : "Home Page",
    })
})
app.get('/signup-or-login', (req, res) => {
    res.render("signupLogin")
})
app.get('/signup', (req, res) => {
    res.render("signup")
})
app.post("/signup", (req,res)=>{
    // console.log("test");
    let errormessg=[];
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
    errors.confirmPassword="Sorry, you must enter matching password";
    }
    if(req.body.month== undefined)
    {
    errors.month="Sorry, you must select month";
    }
    if(req.body.day== undefined)
    {
    errors.day="Sorry, you must select day";
    }
    if(req.body.year== undefined)
    {
    errors.year="Sorry, you must select year";
    }
    if( req.body.password.slice(1).match(/[0-9a-zA-Z]+$/) )
    {
        errors.passType = "password must have at least 8 characters with first letter capital & all other alphanumeric"
    }
    if(req.body.password.length > 0 && req.body.confirmPassword.length > 0 && req.body.password !== req.body.confirmPassword)
    {
        errors.match= "password not matched";
    }
    errormessg.push(errors);
    // console.log(errors);
    if(errormessg.length > 0)
    {
    //    console.log("inside error.length");
        res.render("signup",{
        messages : errors
        })
    }
    
    // req.body.password.length > 0 && req.body.password.length < 8 || req.body.password[0] != req.body.password[0].toUpperCase() ||
})
app.get('/login', (req, res) => {
    res.render("login")
})
app.get('/rooms', (req, res) => {
    res.render("rooms")
})