const Customer = require('../../models/customer')
const bcrypt = require('bcryptjs')

const show = async (req, res) => {

    try {

        const customer = await Customer.findById(req.params.id)

        return res.json({
            status: true,
            customer
        })

    } catch (err) {

        return res.json({
            status: false,
            message: 'Error, no ha sido posible encontrar al cliente'
        })
    }

}

const update = (req, res) => {

    try {

        const {name, surname, document, email, password} = req.body

        bcrypt.hash(password, 10, async (err, hash) => {

            const data = {name, surname, document, email, password: hash}
            const user = await Customer.findByIdAndUpdate(req.params.id, data, {new: true})

            return res.json({
                status: true,
                user,
                message: 'Cliente actualizado correctamente'
            })

        })

    } catch (error) {

        return res.json({
            status: false,
            message: 'Error, no ha sido posible actualizar al cliente'
        })

    }

}

module.exports = {show, update}