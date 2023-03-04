const mongoose = require('mongoose')

const {Schema} = mongoose

const SessionSchema = new Schema({
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    place : {
        type : String,
        required : true
    },
    coach : {
        type : Schema.Types.ObjectId,
        ref : 'coach'
    }
},{versionKey: false})


module.exports = mongoose.model('session',SessionSchema)