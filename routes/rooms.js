const express = require("express"); 
const allRoomModel = require('../models/allrooms');
const router = express.Router();

router.get('/', (req, res) => {
    allRoomModel.find()
    .then((allrooms)=>{
        const filteredRoom = allrooms.map((room)=>{
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
        
        res.render("rooms",{
            title: "All rooms",
            rooms : filteredRoom
        })
    })
    .catch( err => console.log(`error occured while retrieving room to database ${err}`));
    
    
})
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
        res.render("rooms",{
            title: "search result",
            searchedRooms : filteredRoom
        })
    })
    .catch( err => console.log(`error occured while retrieving room to database ${err}`));
        
})



module.exports = router ;