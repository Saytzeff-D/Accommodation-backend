const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    category: String,
    price: String,
    available: String,
    picture: String
})

const RoomModel = mongoose.model('room_tbs', RoomSchema)
module.exports = RoomModel