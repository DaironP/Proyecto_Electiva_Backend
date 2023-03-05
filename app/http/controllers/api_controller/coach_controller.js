const Coach = require('../../models/coach')

const show = async (req, res) => {

    try {

        const coach = await Coach.findById(req.params.id)

        return res.json({
            status: true,
            coach
        })

    } catch (err) {

        return res.json({
            status: false,
            message: 'Error, no ha sido posible encontrar al cliente'
        })
    }

}

const update = async (req, res) => {

    try {

        await Coach.findByIdAndUpdate(req.params.id, req.body)

        return res.json({
            status: true,
            message: 'Cliente actualizado correctamente'
        })

    } catch (error) {

        return res.json({
            status: false,
            message: 'Error, no ha sido posible actualizar al cliente'
        })

    }

}

module.exports = {show, update}