const express = require("express"); 
const router = express.Router();
const allRoomModel = require('../models/allrooms');

router.get('/',(req,res)=>{
    res.render("admin",{
        title: "Admin-page"
    })
})
router.get('/room', (req, res) => {

    allRoomModel.find()
    .then((rooms)=>{
        const filteredRoom = rooms.map((room)=>{
            return {
                id: room._id,
                name: room.name,
                description: room.description,
                extra: room.extra,
                price: room.price,
                rating: room.rating
            }
        })
        
        res.render("room",{
            title: "Admin-allroom",
            data: filteredRoom
        })
    })
    .catch( err => console.log(`error occured while retrieving room to database ${err}`));
    
})
router.get('/room/addroom', (req, res) => {
    
    res.render("addroom",{
        title: "Admin-addroom"
    })
})


router.get('/room/edit/:id', (req, res) => {
    
    allRoomModel.findById(req.params.id)
    .then((room)=>{
        
        const {_id,name,description, extra, price, rating} = room;
        res.render("editRoom",{
            title: "Admin-editroom",
            _id,
            name,
            description,
            extra, 
            price, 
            rating
        })
    })
    .catch( err => console.log(`error occured while retrieving a room to database ${err}`));
    
})
router.put('/room/update/:id',(req,res)=>{
    const updatedRoom = {
        name: req.body.name,
        description: req.body.description,
        extra: req.body.extra,
        price: req.body.price,
        rating: req.body.rating,
    }
    allRoomModel.updateOne({_id:req.params.id}, updatedRoom)
    .then(()=>{
        res.redirect('/admin/room')
    })
    .catch( err => console.log(`error occured while updating a room in database ${err}`));

})
router.delete('/room/delete/:id',(req,res)=>{
    allRoomModel.deleteOne({_id:req.params.id})
    .then(()=>{
        res.redirect('/admin/room')
    })
    .catch( err => console.log(`error occured while deleting a room in database ${err}`));

})
router.post('/room/addroom', (req, res) => {
    
    const newRoom = 
    {
        name: req.body.name,
        description: req.body.description,
        extra: req.body.extra,
        price: req.body.price,
        rating: req.body.rating,
        
    }
    
    const room = new allRoomModel(newRoom);
    room.save()
    .then(()=>{
        res.redirect("/admin/room")
    })
    .catch( err => console.log(`error occured while adding room to database ${err}`));
    
    
})
router.get('/Adventuresroom', (req, res) => {
    res.render("addAdventureroom",{
        title: "Admin-addAdventureroom"
    })
})


module.exports = router ;