const mongoose = require('mongoose')

const DogSchema = new mongoose.Schema({

    gender: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    }

}, {versionKey: false})

module.exports = mongoose.model('dog', DogSchema)