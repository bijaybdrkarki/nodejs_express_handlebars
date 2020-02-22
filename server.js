//imports the express package that was installed within your application
const express = require("express"); 

// imports the handlebar package
const exphbs  = require('express-handlebars');

const bodyParser = require('body-parser');
const app = express(); // create express object ---> app
const PORT = 3000; // port number for localhost

//import routes from routes folder
const index = require('./routes/index');
const signup = require('./routes/signup');
const allrooms =require('./models/rooms');

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
app.use('/', index);
app.use('/signup', signup);

app.get('/signup-or-login', (req, res) => {
    res.render("signupLogin")
})

app.get('/login', (req, res) => {
    res.render("login")
})
app.get('/rooms', (req, res) => {
    res.render("rooms",{
        rooms : allrooms
    })
})