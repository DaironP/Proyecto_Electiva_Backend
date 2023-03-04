const mongoose = require('mongoose')

const uri = process.env.DB_URI
const message = 'Database status:'

const dbConnect = () => {

    mongoose.connect(uri).then(() => {
        console.log(message, 'Success')
    }).catch(err => {
        console.log(message, err)
    })

}

module.exports = dbConnect