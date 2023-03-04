const bcrypt = require('bcryptjs')
const passport = require('passport')
const Passport_Local = require('passport-local').Strategy

const {read_file} = require('../persistence/read_and_write_controller')

const options = {
    usernameField: 'email',
    passwordField: 'password'
}

const passport_local = new Passport_Local(options, (email, password, done) => {

    const users = [...read_file('coach.json'), ...read_file('customer.json')]
    const user = users.find(user => user.email === email)

    if (!user) return done(null, user)

    bcrypt.compare(password, user.password, (err, res) => {

        if (res) return done(null, user)

        return done(null, false)
    })

})

passport.use('local', passport_local)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    const users = [...read_file('coach.json'), ...read_file('customer.json')]
    const user = users.find(user => user.id === id)
    done(null, user)
})

module.exports = {passport}