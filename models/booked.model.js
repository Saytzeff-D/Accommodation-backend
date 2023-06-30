const mongoose = require('mongoose')

const BookedSchema = mongoose.Schema({
    checkIn: String,
    checkOut: String,
    guests: String,
    nights: String,
    rooms: String,
    category: String,
    status: { type: String, default: 'Active' },
    payment_ref: String,
    amount: String,
    payment_status: { type: String, default: 'Unsuccessful' },
    user_id: String,
    created_at: Date
})

const BookedModel = mongoose.model('booked_tbs', BookedSchema)
module.exports = BookedModel