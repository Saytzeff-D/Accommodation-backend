const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    mobileNumber: String,
    password: String,
    picture: String
})

const UserModel = mongoose.model('user_tbs', UserSchema)
module.exports = UserModel