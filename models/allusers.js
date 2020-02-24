const fs = require("fs");
const allusers = [];

let data = fs.readFileSync("./database.txt", "utf8");
let jsondata = JSON.parse(data);

if (data.length > 1)
{
    for(let i=0 ; i<jsondata.length; i++)
    {
        allusers.push(jsondata[i]);
    }
    
}

module.exports = allusers;