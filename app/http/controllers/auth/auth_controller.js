const {passport} = require('./passport_controller')
const bcrypt = require('bcryptjs')
const uuid = require('uuid')

const {save_data} = require('../persistence/read_and_write_controller')

const login = (req, res, next) => {

    passport.authenticate('local', (err, user) => {

        if (err) return next(err)

        if (!user) {
            req.flash('errorMessage', 'Las credenciales no coinciden con los registros')
            return res.redirect('/')
        }

        req.logIn(user, (err) => {

            if (err) return next(err)

            return res.redirect('/profile')
        })

    }, () => {
    })(req, res, next)

}

const logout = (req, res, next) => {

    req.logout(err => {

        if (err) return next(err)

        res.redirect('/')
    })

}

const register = (req, res, next) => {

    const {name, surname, document, email, password} = req.body

    bcrypt.hash(password, 10, (err, hash) => {

        const customer = {
            id: uuid.v4(),
            name, surname, document, email,
            password: hash,
            rol: 'customer',
            dogs: []
        }

        save_data('customer.json', customer)

        req.login(customer, err => {

            if (err) return next(err)

            return res.redirect('/profile')
        })

    })

}

module.exports = {login, logout, register}