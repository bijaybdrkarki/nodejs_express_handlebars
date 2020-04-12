//imports the express package that was installed within your application
const express = require("express");


// imports the handlebar package
const exphbs  = require('express-handlebars');
var helpers = require('handlebars-helpers')();


const mongoose = require('mongoose');
const fileupload = require('express-fileupload');
const session =require("express-session");

const bodyParser = require('body-parser');
const app = express(); // create express object ---> app
const PORT = process.env.PORT || 3000; // heroku env port number || localhost port




//This allows express to make my static content avialable from the public
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))


//register handlebars view engine

app.engine('handlebars', exphbs({
    helpers : helpers
}));
app.set('view engine', 'handlebars');


//allow specific forms/links that were submitted/pressed to send PUT and DELETE request repestively 
app.use((req,res,next)=>{
    if (req.query.method == 'PUT')
    {
        req.method = "PUT"
    }
    else if (req.query.method == 'DELETE')
    {
        req.method = "DELETE"
    }
    next();
})

app.use(fileupload());

app.use(session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: true,
    
}))

app.use((req,res,next)=>{

    res.locals.user = req.session.userInfo;
    next();
})


//import routes from routes folder
const index = require('./routes/index');
const signup_login_logout = require('./routes/signup-login')
const signup = require('./routes/signup');
const login = require('./routes/login');
const logout = require('./routes/logout');
const rooms = require('./routes/rooms');
const adventures = require('./routes/adventures');
const admin = require('./routes/admin');
const search = require('./routes/search');

// modular routes
app.use('/', index);
app.use('/admin', admin);
app.use('/signup', signup);
app.use('/login', login);
app.use('/logout',logout);
app.use('/signup-login-logout', signup_login_logout);
app.use('/rooms', rooms);
app.use('/search', search);
app.use('/adventures', adventures);


mongoose.connect(process.env.MONGO_DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log(`connected to database`);
})
.catch(err => console.log(`error occured while conneting to database ${err}`));
// Creates an Express Web Server that listens to HTTP Reuqest on port 3000
app.listen(PORT, () => {
    console.log(`Web Server Started`); 
})