const dotenv = require('dotenv')
dotenv.config()

const bcrypt = require('bcryptjs')
const passport = require('./passport_controller')
const jwt = require('jsonwebtoken')

const Customer = require('../../models/customer')
const Token = require('../../models/token')

const login = (req, res, next) => {

    const options = {session: false}

    passport.authenticate('local', options, async (err, user) => {

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

        const access_token = jwt.sign({sub: user['_id']}, process.env.SECRET_KEY)
        const token = await Token.create({access_token})

        return res.json({
            status: true,
            user,
            access_token: token['access_token']
        })

    })(req, res, next)

}

const logout = async (req, res) => {

    await Token.findOneAndDelete(req.body.access_token)

    return res.json({
        status: true
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

        const user = await Customer.create(data)

        const access_token = jwt.sign({sub: user['_id']}, process.env.SECRET_KEY)
        const token = await Token.create({access_token})

        return res.json({
            status: true,
            user,
            access_token: token['access_token']
        })

    } catch (e) {

        return res.json({
            status: false,
            message: 'Error, no se ha podido crear al cliente'
        })
    }

}

const verify_token = async (req, res) => {

    try {

        const {access_token} = req.body

        const token = await Token.findOne({access_token})

        if (token) {
            return res.json({
                status: true,
                message: 'Autenticación exitosa'
            })
        }

        return res.json({
            status: false,
            message: 'No ha sido posible encontrar el Token'
        })

    } catch (e) {

        return res.json({
            status: false,
            message: 'Error, no ha sido posible autenticar al usuario'
        })

    }

}

module.exports = {login, logout, register, verify_token}