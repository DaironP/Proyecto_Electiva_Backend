const mongoose = require('mongoose')

const {Schema} = mongoose

const CoachSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    surname : {
        type : String,
        required : true
    },
    document : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    rol : {
        type : String,
        required : true
    },
    sessions : [
        {
            type : Schema.Types.ObjectId,
            ref : 'session'
        }
    ]
},{versionKey: false})


module.exports = mongoose.model('coach',CoachSchema)