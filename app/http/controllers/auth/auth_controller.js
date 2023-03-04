const dotenv = require('dotenv')
dotenv.config()

const bcrypt = require('bcryptjs')
const passport = require('./passport_controller')
const jwt = require('jsonwebtoken')

const Customer = require('../../models/customer')
const Token = require('../../models/token')

const login = (req, res, next) => {

    const options = {session: false}

    passport.authenticate('local', options, (err, user) => {

        if (err) {
            return res.json({
                status: false,
                message: 'Error, no ha sido posible autenticar al usuario'
            })
        }

        if (!user) {
            return res.json({
                status: false,
                message: 'Las credenciales no coinciden con los registros'
            })
        }

        const token = jwt.sign({sub: user._id}, process.env.SECRET_KEY)

        return res.json({
            user,
            token
        })

    })(req, res, next)

}

const logout = (req, res, next) => {

    req.logout(err => {

        if (err) return next(err)

        res.redirect('/')
    })

}

const register = async (req, res) => {

    const {name, surname, document, email, password} = req.body

    try {

        const hash = await bcrypt.hash(password, 10)

        const data = {
            name,
            surname,
            document,
            email,
            password: hash,
            rol: 'customer'
        }

        const customer = await Customer.create(data)

        const access_token = jwt.sign({sub: customer['_id']}, process.env.SECRET_KEY)
        const token = await Token.create({access_token})

        return res.json({
            status: true,
            user_id: customer['_id'],
            access_token: token['access_token']
        })

    } catch (e) {

        return res.json({
            status: false,
            message: 'Error, no se ha podido crear al cliente'
        })
    }

}

module.exports = {login, logout, register}