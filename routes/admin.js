const express = require("express"); 
const router = express.Router();
const allRoomModel = require('../models/allrooms');
const path = require('path');
const fs = require('fs');

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
                rating: room.rating,
                roomImg: room.roomImg,
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
        
        const {_id,name,description, extra, price, roomImg, rating} = room;
        res.render("editRoom",{
            title: "Admin-editroom",
            _id,
            name,
            description,
            extra, 
            price,
            roomImg, 
            rating
        })
    })
    .catch( err => console.log(`error occured while retrieving a room to database ${err}`));
    
})
router.put('/room/update/:id',(req,res)=>{
    if (req.files)
    {   
        allRoomModel.findById(req.params.id)
        .then((room)=>{
            //delete old image from location if new image is uploaded else use old one
            const path = `public/img/${room.roomImg}`;
            fs.unlink(path, (err) => {
                if (err) {
                  console.error(err)
                  return
                }
            })

        })
        .catch(err => console.log(`error occured while retrieving a room img data from database ${err}`))    
        req.files.roomImg.name = `${req.params.id}_${req.files.roomImg.name}${path.parse(req.files.roomImg.name).ext}`;
        req.files.roomImg.mv(`public/img/${req.files.roomImg.name}`)
        .then(()=>{})
        .catch(err => console.log(`error occured while uploading new roomImg on server ${err}`))
        var updatedRoom = {
            name: req.body.name,
            description: req.body.description,
            extra: req.body.extra,
            price: req.body.price,
            roomImg: req.files.roomImg.name,
            rating: req.body.rating,
        }
    
    }  
    else
    {
        console.log('Empty file');
        var updatedRoom = {
            name: req.body.name,
            description: req.body.description,
            extra: req.body.extra,
            price: req.body.price,
            rating: req.body.rating,
        }
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
    .then((justSavedRoom)=>{

        req.files.roomImg.name = `${justSavedRoom._id}_${req.files.roomImg.name}${path.parse(req.files.roomImg.name).ext}`;
        req.files.roomImg.mv(`public/img/${req.files.roomImg.name}`)
        .then(()=>{
            
            allRoomModel.updateOne({_id:justSavedRoom._id}, {
                roomImg: req.files.roomImg.name
            })
            .then(()=>{
                res.redirect("/admin/room")
            })
            .catch( err => console.log(`error occured while updating roomImg name to database ${err}`));
            
        })
        .catch( err => console.log(`error occured while saving roomImg on server ${err}`));

        
    })
    .catch( err => console.log(`error occured while adding room to database ${err}`));
    
    
})
router.get('/Adventuresroom', (req, res) => {
    res.render("addAdventureroom",{
        title: "Admin-addAdventureroom"
    })
})


module.exports = router ;