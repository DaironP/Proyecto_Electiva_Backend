const uuid = require('uuid')
const {read_file, write_file} = require('../persistence/read_and_write_controller')

const index = (req, res) => {

    const data = get_data(req)
    const trainers = read_file('coach.json')

    if (req.user.rol === 'coach') {

        const trainer = trainers.find(user => user.id === req.user.id)
        data.sessions = trainer.sessions
    }

    if (req.user.rol === 'customer') {
        data.sessions = trainers.reduce((array, trainer) => array.concat(trainer.sessions), [])
    }

    res.render('./components/app/session/index', data)
}

const create = (req, res) => {
    const data = get_data(req)
    res.render('./components/app/session/create', data)
}

const store = (req, res) => {

    const trainers = read_file('coach.json')
    const trainer = trainers.find(trainer => trainer.id === req.user.id)

    const {description, date, place} = req.body

    trainer.sessions = [...trainer.sessions, {id: uuid.v4(), coach: req.user.name, description, date, place, dogs: []}]

    write_file('coach.json', JSON.stringify(trainers))

    req.flash('successMessage', 'Sesión registrada correctamente')
    res.redirect('/sessions')
}

const edit = (req, res) => {

    const data = get_data(req)

    const trainers = read_file('coach.json')
    const trainer = trainers.find(trainer => trainer.id === req.user.id)

    data.session = trainer.sessions.find(session => session.id === req.body.id)

    res.render('./components/app/session/edit', data)
}

const update = (req, res) => {

    const trainers = read_file('coach.json')
    const trainer = trainers.find(trainer => trainer.id === req.user.id)

    const {description, date, place} = req.body

    const session = trainer.sessions.find(session => session.id === req.params.id)

    session.description = description
    session.date = date
    session.place = place

    write_file('coach.json', JSON.stringify(trainers))

    req.flash('successMessage', 'Actualización de datos satisfactoria')
    res.redirect('/sessions')
}

const destroy = (req, res) => {

    const trainers = read_file('coach.json')
    const trainer = trainers.find(trainer => trainer.id === req.user.id)

    trainer.sessions = trainer.sessions.filter(session => session.id !== req.params.id)

    write_file('coach.json', JSON.stringify(trainers))

    req.flash('successMessage', 'Sesión eliminada correctamente')
    res.redirect('/sessions')
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