const express = require('express')
const app = express()
const cors = require('cors')
const cloudinary = require('cloudinary')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const BannerRouter = require('./routes/banner.route')
const RoomRouter = require('./routes/room.route')
const UserRouter = require('./routes/user.route')
const BookedRouter = require('./routes/booked.route')
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}))
app.use(bodyParser.json({limit:'50mb'}));
app.use(cors({origin:'*'}))
require('dotenv').config()
app.use('/banner', BannerRouter)
app.use('/room', RoomRouter)
app.use('/user', UserRouter)
app.use('/booked', BookedRouter)

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

mongoose.connect(process.env.URI).then(()=>{
    console.log('Mongo Database Connected Successfully')
}).catch(err=>{
    console.log(err)
})

app.get('/', (req, res)=>{
    res.send('Welcome to the Accommodation Service Server')
})

const connection = app.listen(process.env.PORT, (req, res)=>{
    console.log(`Accomodation Server is now listening on Port ${process.env.PORT}.`)
})