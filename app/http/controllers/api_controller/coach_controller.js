const Coach = require('../../models/coach')
const bcrypt = require('bcryptjs')

const show = async (req, res) => {

    try {

        const coach = await Coach.findById(req.params.id).populate({
            path: 'sessions',
            populate: [
                {
                    path: 'coach',
                    model: 'coach'
                },
                {
                    path: 'dogs',
                    model: 'dog'
                }
            ]
        })

        return res.json({
            status: true,
            coach
        })

    } catch (err) {

        return res.json({
            status: false,
            message: 'Error, no ha sido posible encontrar al entrenador'
        })
    }

}

const update = (req, res) => {

    try {

        const {name, surname, document, email, password} = req.body

        bcrypt.hash(password, 10, async (err, hash) => {

            const data = {name, surname, document, email, password: hash}
            const user = await Coach.findByIdAndUpdate(req.params.id, data, {new: true})

            await user.populate({
                path: 'sessions',
                populate: [
                    {
                        path: 'coach',
                        model: 'coach'
                    },
                    {
                        path: 'dogs',
                        model: 'dog'
                    }
                ]
            })

            return res.json({
                status: true,
                user,
                message: 'Entrenador actualizado correctamente'
            })

        })

    } catch (error) {

        return res.json({
            status: false,
            message: 'Error, no ha sido posible actualizar al entrenador'
        })

    }

}

module.exports = {show, update}