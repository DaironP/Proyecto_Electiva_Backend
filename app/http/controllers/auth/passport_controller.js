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

    const customers = await Customer.find()

    const users = [...customers]

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
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {

    const customers = await Customer.find()

    const users = [...customers]
    const user = users.find(user => user.id === id)

    done(null, user)
})

module.exports = passport