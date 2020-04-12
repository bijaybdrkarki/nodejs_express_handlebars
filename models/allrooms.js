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
    location:
    {
        type: String,
        required: true
    },
    featuredRoom:
    {
        type: Boolean,
        required: true
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
//     }
// ]

// module.exports = allrooms;