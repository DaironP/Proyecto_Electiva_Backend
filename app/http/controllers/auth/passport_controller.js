const bcrypt = require('bcryptjs')
const passport = require('passport')
const Passport_Local = require('passport-local').Strategy

const Customer = require('../../models/customer')
const Coach = require('../../models/coach')

const options = {
    usernameField: 'email',
    passwordField: 'password'
}

const passport_local = new Passport_Local(options, async (email, password, done) => {

    const coach = await Coach.find().populate({
        path: 'sessions',
        populate: {
            path: 'coach',
            model: 'coach'
        }
    })

    const customers = await Customer.find().populate('dogs')

    const users = [...coach, ...customers]

    const user = users.find(user => user.email === email)

    if (!user) {
        return done(null, user)
    }

    bcrypt.compare(password, user.password, (err, res) => {

        if (res) {
            return done(null, user)
        }

        return done(null, false)
    })

})

passport.use('local', passport_local)

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {

    const coach = await Coach.find()
    const customers = await Customer.find()

    const users = [...coach, ...customers]
    const user = users.find(user => user.id === id)

    done(null, user)
})

module.exports = passport