const mongoose = require('mongoose')

const uri = process.env.DB_URI
const message = 'Database status:'

const dbConnect = () => {
    mongoose.connect(uri, err => (err) ? console.log(message, 'Error') : console.log(message, 'Success'))
}

module.exports = dbConnect