const express = require("express"); 
const router = express.Router();
const allRoomModel = require('../models/allrooms');

router.get('/', (req, res) => {
    
    allRoomModel.find({featuredRoom : true})
    .then((rooms)=>{
        const filteredRoom = rooms.map((room)=>{
            return {
                id: room._id,
                name: room.name,
                description: room.description,
                extra: room.extra,
                price: room.price,
                rating: room.rating,
                featuredRoom: room.featuredRoom,
                roomImg: room.roomImg,
            }
        })
        
        res.render("index",{
            title: "Home",
            headingInfo : "Home Page",
            featured: filteredRoom
        })
    })
    .catch( err => console.log(`error occured while retrieving room to database ${err}`));
    
    
    
    
    
})



module.exports = router ;