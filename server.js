//imports the express package that was installed within your application
const express = require("express"); 

const app = express(); // create express object ---> app
const PORT = 3000; // port number for localhost

//This allows express to make my static content avialable from the public
app.use(express.static('public'))

// imports the handlebar package
const exphbs  = require('express-handlebars');

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
app.get('/login', (req, res) => {
    res.render("login")
})
app.get('/rooms', (req, res) => {
    res.render("rooms")
})