const mongoose = require('mongoose')
const Customer = require('../../models/customer')
const Dog = require('../../models/dog')
const Session = require('../../models/session')

const store = async (req, res) => {

    const {gender, name, breed, age} = req.body

    try {

        const customer = await Customer.findById(req.params.id)

        const data = {gender, name, breed, age}

        const dog = await new Dog(data)

        dog.customer = customer
        await dog.save()

        customer.dogs = [...customer.dogs, dog]
        await customer.save()

        await customer.populate('dogs')

        return res.json({
            status: true,
            customer
        })

    } catch (e) {

        return res.json({
            status: false,
            message: 'Error, ha sucedido un problema'
        })

    }

}

const update = async (req, res) => {

    const {gender, name, breed, age} = req.body

    try {

        const data = {gender, name, breed, age}

        const dog = await Dog.findByIdAndUpdate(req.params.id, data, {new: true})

        const customer = await Customer.findById(dog.customer.toString())
        await customer.populate('dogs')

        return res.json({
            status: true,
            customer
        })

    } catch (e) {

        return res.json({
            status: false,
            message: 'Error, ha sucedido un problema'
        })

    }

}

const destroy = async (req, res) => {

    try {

        const dog = await Dog.findByIdAndDelete(req.params.id)

        const customer = await Customer.findById(dog['customer'].toString())
        customer.dogs = customer.dogs.filter(dog => dog['_id'].toString() !== req.params.id)

        await customer.save()

        await Session.updateMany(
            {dogs: new mongoose.Types.ObjectId(req.params.id)},
            {$pull: {dogs: new mongoose.Types.ObjectId(req.params.id)}}
        )

        await customer.populate('dogs')

        return res.json({
            status: true,
            customer
        })

    } catch (e) {

        return res.json({
            status: false,
            message: 'Error, ha sucedido un problema'
        })

    }

}

module.exports = {store, update, destroy}