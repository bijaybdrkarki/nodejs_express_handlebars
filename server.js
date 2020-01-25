//imports the express package that was installed within your application
const express = require("express"); 

const app = express(); // create express object ---> app
const PORT = 3000; // port number for localhost


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
        randomContent: "BLAH BLAH BLHA"
    })
})