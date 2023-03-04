const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(expressLayouts)

app.set('view engine', 'ejs')
app.set('views', './resources/views')

app.use(cookieParser('felipe'))
app.use(session({secret: 'felipe', resave: true, saveUninitialized: true}))
app.use(passport.initialize(undefined))
app.use(passport.session(undefined))
app.use(flash())

const cors = require('cors')
const dbConnect = require('./database/connection/mongo')
app.use(cors())
dbConnect()

const router = require('./routes/web')
app.use(router)


app.listen(port, () => console.log('Server running on:', 'http://localhost:' + port))