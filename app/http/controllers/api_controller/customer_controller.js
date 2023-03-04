const Customer = require('../../models/customer')

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

const update = async (req, res) => {

    try {

        await Customer.findByIdAndUpdate(req.params.id, req.body)

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


/*

module.exports = {
    index: async (req, res) => {
        try {
            const data = await Customer.find().populate('dogs')

            return res.status(200).json({"result": true, "data": data})
        } catch (err) {
            return res.status(500).json({"result": false, "error": err})
        }

    },
    save : async(req,res)=>{



        const customer = new Customer(req.body)

        try{
            const data = await customer.save()

            return res.status(200).json({"result":true,"data":data})
        }catch(err){
            return res.status(500).json({"result":false,"error":err})
        }
    },
    findById: async (req, res) => {
        const {id} = req.params
        try {
            const result = await Customer.findById(id)

            return res.status(200).json({"result": true, "data": result})
        } catch (err) {
            return res.status(500).json({"result": false, "error": err})
        }
    },
    update: async (req, res) => {
        const {id} = req.params
        const customer = req.body
        try {
            const result = await Customer.findByIdAndUpdate(id, customer)

            return res.status(200).json({"result": true, "data": result})
        } catch (error) {
            return res.status(500).json({"result": false, "error": err})
        }
    },

    erase: async (req, res) => {
        const {id} = req.params
        try {
            const result = await Customer.findByIdAndDelete(id)

            return res.status(200).json({"result": true, "data": result})
        } catch (error) {
            return res.status(500).json({"result": false, "error": err})
        }
    }
}



 */

module.exports = {show, update}