const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const alluserSchema = new Schema({

    email:
    {
        type: String,
        required: true
    },
    fname:
    {
        type: String,
        required: true
    },
    lname:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    phone:
    {
        type: String,
        required: true
    },
    day:
    {
        type: String,
        required: true
    },
    month:
    {
        type: String,
        required: true
    },
    year:
    {
        type: String,
        required: true
    },
    userImg:
    {
        type: String
    },
    type:
    {
        type: String,
        default: "user"
    },
    dateCreated:
    {
        type: Date,
        default: Date.now()
    }

});

alluserSchema.pre("save",function(next)
{
    bcrypt.genSalt(10)
    .then((salt)=>{
        bcrypt.hash(this.password,salt)
        .then((encryptPassword)=>{
            this.password = encryptPassword;
            next();
        })
        .catch(err => console.log(`error occured during hashing of password encryption ${err}`))
    })
    .catch(err => console.log(`error occured during encrypting ${err}`))
})
const alluserModel = mongoose.model('alluser', alluserSchema)

module.exports = alluserModel;



// const fs = require("fs");
// const allusers = [];

// let data = fs.readFileSync("models/database.txt", "utf8");
// let jsondata = JSON.parse(data);

// if (data.length > 1)
// {
//     for(let i=0 ; i<jsondata.length; i++)
//     {
//         allusers.push(jsondata[i]);
//     }
    
// }

