const RoomModel = require("../models/room.model");
const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const getRoom = (req, res)=>{
    RoomModel.find().then(result=>{
        res.json(result)
    }, err=>{
        console.log(err)
        res.status(500).json({message: 'Internal Server Error'})
    })
}
const uploadDetails = (req, res)=>{
    let details = req.body
    cloudinary.v2.uploader.upload(details.picture, (err, result)=>{
        if (!err) {
            details.picture = result.secure_url
            let form = new RoomModel(details)
            form.save().then(()=>{
                res.status(200).json('Success')
            }).catch(()=>{
                res.status(300).json('Server Error')
            })
        } else {
            res.status(300).json({message: 'Upload Error'})
        }
    })
}
const checkRoom = (req, res)=>{
    let roomData = req.body
    RoomModel.findOne({category: roomData.category}).then((room)=>{
        if (parseInt(room.available) >= parseInt(roomData.rooms)) {
            res.json("Checked")
        } else {
            res.json('Unavailable')
        }
    }).catch((err)=>{
        res.status(300).json('Internal Server Error')
    })
}
const roomPrice = (req, res)=>{
    let data = req.body
    RoomModel.findOne({category: data.category}).then((roomDetails)=>{
        res.status(200).json({roomDetails, email: data.email, user_id: data.user_id})
    }).catch(()=>{
        res.status(300).json('Internal Server Error')
    })
}
const deleteRoom = (req, res)=>{
    RoomModel.findByIdAndDelete(req.body.id).then(()=>{
        res.status(200).json('Success')
    }).catch(()=>{
        res.status(500).json('Internal Server Error')
    })
}

module.exports = { getRoom, uploadDetails, checkRoom, roomPrice, deleteRoom }