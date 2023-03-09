const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const passport = require('passport')
const cors = require('cors');
const dbConnect = require('./database/connection/mongo')
const router = require('./routes/api')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(passport.initialize(undefined))

dbConnect()

app.use(router)

app.listen(port, () => console.log('Server running on:', 'http://localhost:' + port))