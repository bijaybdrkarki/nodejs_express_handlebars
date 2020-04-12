const express = require("express"); 
const router = express.Router();
const allRoomModel = require('../models/allrooms');

router.post('/', (req, res) => {
     
    allRoomModel.find({location: req.body.find})
    .then((rooms)=>{
        const filteredRoom = rooms.map((room)=>{
            return {
                id: room._id,
                name: room.name,
                description: room.description,
                extra: room.extra,
                price: room.price,
                rating: room.rating,
                roomImg: room.roomImg,
            }
        })
        res.render("search",{
            title: "search result",
            rooms : filteredRoom
        })
    })
    .catch( err => console.log(`error occured while retrieving room to database ${err}`));
        
})



module.exports = router ;