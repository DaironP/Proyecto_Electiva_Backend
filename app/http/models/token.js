const mongoose = require('mongoose')

const TokenSchema = new mongoose.Schema({

    access_token: {
        type: String,
        required: true
    }

}, {versionKey: false})

module.exports = mongoose.model('token', TokenSchema)