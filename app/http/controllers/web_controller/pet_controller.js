const uuid = require('uuid')
const {read_file, write_file} = require('../persistence/read_and_write_controller')

const index = (req, res) => {

    const data = get_data(req)

    const customers = read_file('customer.json')
    const customer = customers.find(customer => customer.id === req.user.id)

    data.pets = customer.dogs

    res.render('./components/app/pet/index', data)
}

const create = (req, res) => {

    const data = get_data(req)
    res.render('./components/app/pet/create', data)
}

const store = (req, res) => {

    const customers = read_file('customer.json')
    const customer = customers.find(customer => customer.id === req.user.id)

    const {gender, name, breed, age} = req.body

    customer.dogs = [...customer.dogs, {id: uuid.v4(), gender, name, breed, age}]

    write_file('customer.json', JSON.stringify(customers))

    req.flash('successMessage', 'Canino registrado correctamente')
    res.redirect('/customer-pets')
}

const edit = (req, res) => {

    const data = get_data(req)

    const customers = read_file('customer.json')
    const customer = customers.find(customer => customer.id === req.user.id)

    data.pet = customer.dogs.find(dog => dog.id === req.body.id)

    res.render('./components/app/pet/edit', data)
}

const update = (req, res) => {

    const customers = read_file('customer.json')
    const customer = customers.find(customer => customer.id === req.user.id)

    const {gender, name, breed, age} = req.body

    const dog = customer.dogs.find(dog => dog.id === req.params.id)

    dog.gender = gender
    dog.name = name
    dog.breed = breed
    dog.age = age

    write_file('customer.json', JSON.stringify(customers))

    const trainers = read_file('coach.json')
    const sessions = trainers.reduce((array, trainer) => array.concat(trainer.sessions), [])
    const dogs_session = sessions.reduce((array, session) => array.concat(session.dogs), [])

    const dog_session = dogs_session.find(dog => dog.id === req.params.id)

    if (dog_session) {

        dog_session.gender = gender
        dog_session.name = name
        dog_session.breed = breed
        dog_session.age = age

        write_file('coach.json', JSON.stringify(trainers))
    }

    req.flash('successMessage', 'Actualización de datos satisfactoria')
    res.redirect('/customer-pets')
}

const destroy = (req, res) => {

    const customers = read_file('customer.json')
    const customer = customers.find(customer => customer.id === req.user.id)

    customer.dogs = customer.dogs.filter(dog => dog.id !== req.params.id)

    write_file('customer.json', JSON.stringify(customers))

    req.flash('successMessage', 'Canino eliminado correctamente')
    res.redirect('/customer-pets')
}

const get_data = (req) => {

    return {
        layout: './layouts/app',
        user: req.user,
        path: req.path,
        successMessage: req.flash('successMessage'),
        errorMessage: req.flash('errorMessage')
    }

}

module.exports = {index, create, store, edit, update, destroy}