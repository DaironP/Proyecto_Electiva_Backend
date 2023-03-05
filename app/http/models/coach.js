const mongoose = require('mongoose')

const CoachSchema = new mongoose.Schema({

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
    sessions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'session'
        }
    ]

}, {versionKey: false})

module.exports = mongoose.model('coach', CoachSchema)