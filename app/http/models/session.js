const mongoose = require('mongoose')

const SessionSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    coach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'coach'
    },
    dogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'dog'
        }
    ]

}, {versionKey: false})

module.exports = mongoose.model('session', SessionSchema)