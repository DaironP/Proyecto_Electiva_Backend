const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    dogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'dog'
        }
    ]

}, {versionKey: false})

module.exports = mongoose.model('customer', CustomerSchema)