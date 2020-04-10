const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const allRoomSchema = new Schema({

    name:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    extra:
    {
        type: String,
        required: true
    },
    price:
    {
        type: Number,
        required: true
    },
    rating:
    {
        type: Number,
        required: true
    },
    roomImg:
    {
        type: String
    },
    dateCreated:
    {
        type: Date,
        default: Date.now()
    }

});

const allRoomModel = mongoose.model('allroom', allRoomSchema)

module.exports = allRoomModel;
// const allrooms=[
//     {
//         id : 1,
//         name : `Beach View`,
//         image : `/img/room1.jpg`,
//         description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
//         extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
//         price: 150.00,
//         rating: 4.21,
//         ratingPeople : 312,
//     },
//     {
//         id : 2,
//         name : `Beach View`,
//         image : `/img/room2.jpg`,
//         description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
//         extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
//         price: 150.00,
//         rating: 4.21,
//         ratingPeople : 312,
//     },
//     {
//         id : 3,
//         name : `Beach View`,
//         image : `/img/room3.jpg`,
//         description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
//         extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
//         price: 150.00,
//         rating: 4.21,
//         ratingPeople : 312,
//     },{
//         id : 4,
//         name : `Beach View`,
//         image : `/img/room4.jpg`,
//         description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
//         extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
//         price: 150.00,
//         rating: 4.21,
//         ratingPeople : 312,
//     },{
//         id : 5,
//         name : `Beach View`,
//         image : `/img/room5.jpg`,
//         description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
//         extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
//         price: 150.00,
//         rating: 4.21,
//         ratingPeople : 312,
//     },
//     {
//         id : 6,
//         name : `Beach View`,
//         image : `/img/room6.jpg`,
//         description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
//         extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
//         price: 150.00,
//         rating: 4.21,
//         ratingPeople : 312,
//     },
//     {
//         id : 7,
//         name : `Beach View`,
//         image : `/img/room7.jpg`,
//         description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
//         extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
//         price: 150.00,
//         rating: 4.21,
//         ratingPeople : 312,
//     },
//     {
//         id : 8,
//         name : `Beach View`,
//         image : `/img/room8.jpg`,
//         description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
//         extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
//         price: 150.00,
//         rating: 4.21,
//         ratingPeople : 312,
//     },
//     {
//         id : 9,
//         name : `Beach View`,
//         image : `/img/room9.jpg`,
//         description : `Here is a shot of this product that might entice a user to click and add it to their cart.`,
//         extra: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nobis dolorem ea aliquid, aspernatur non commodi deserunt dolorum atque a incidunt, pariatur ipsa, accusantium temporibus. Corporis asperiores tenetur deserunt nisi?`,
//         price: 150.00,
//         rating: 4.21,
//         ratingPeople : 312,
//     }
// ]

// module.exports = allrooms;