//imports the express package that was installed within your application
const express = require("express"); 

// imports the handlebar package
const exphbs  = require('express-handlebars');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const app = express(); // create express object ---> app
const PORT = process.env.PORT || 3000; // heroku env port number || localhost port

//import routes from routes folder
const index = require('./routes/index');
const signup_login = require('./routes/signup-login')
const signup = require('./routes/signup');
const login = require('./routes/login');
const rooms = require('./routes/rooms');
const adventures = require('./routes/adventures');
const admin = require('./routes/admin');

const fakedb=[];
//This allows express to make my static content avialable from the public
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))


//register handlebars view engine
app.engine('handlebars', exphbs());
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

mongoose.connect(process.env.MONGO_DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log(`connected to database`);
})
.catch(err => console.log(`error occured while conneting to database ${err}`));
// Creates an Express Web Server that listens to HTTP Reuqest on port 3000
app.listen(PORT, () => {
    console.log(`Web Server Started`); 
})

// modular routes
app.use('/', index);
app.use('/admin', admin);
app.use('/signup', signup);
app.use('/login', login);
app.use('/signup-or-login', signup_login);
app.use('/rooms', rooms);
app.use('/adventures', adventures);