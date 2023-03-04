const mongoose = require('mongoose')

const {Schema} = mongoose

const DogSchema = new Schema({
    gender : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    breed : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    customer : {
        type : Schema.Types.ObjectId,
        ref : 'customer'
    }

},{versionKey: false})


module.exports = mongoose.model('dog',DogSchema)