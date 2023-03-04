const {read_file, write_file} = require('../persistence/read_and_write_controller')

const index = (req, res) => {

    const data = get_data(req)
    const trainers = read_file('coach.json')

    if (req.user.rol === 'coach') {

        const trainer = trainers.find(user => user.id === req.user.id)
        data.sessions = trainer.sessions
    }

    if (req.user.rol === 'customer') {

        const sessions = trainers.reduce((array, trainer) => array.concat(trainer.sessions), [])
        const user_dog_ids = req.user.dogs.map(dog => dog.id)

        data.sessions = sessions.filter(session => {
            return session.dogs.some(dog => user_dog_ids.includes(dog.id))
        })

    }

    res.render('./components/app/session_management/index', data)
}

const store = (req, res) => {

    const {session_id, dog_id} = req.body

    const trainers = read_file('coach.json')
    const sessions = trainers.reduce((array, trainer) => array.concat(trainer.sessions), [])
    const session = sessions.find(session => session.id === session_id)

    const customers = read_file('customer.json')
    const dogs = customers.reduce((array, customer) => array.concat(customer.dogs), [])
    const dog = dogs.find(dog => dog.id === dog_id)

    const validate_dog = session.dogs.find(dog => dog.id === dog_id)

    if (validate_dog) {
        req.flash('errorMessage', 'Ya se ha inscrito este Canino a la sesión')
        return res.redirect('/sessions')
    }

    session.dogs = [...session.dogs, dog]

    write_file('coach.json', JSON.stringify(trainers))

    req.flash('successMessage', 'Inscripción realizada correctamente')
    res.redirect('/sessions')
}

const destroy = (req, res) => {

    const trainers = read_file('coach.json')
    const sessions = trainers.reduce((array, trainer) => array.concat(trainer.sessions), [])
    const session = sessions.find(session => session.id === req.params.session_id)

    session.dogs = session.dogs.filter(dog => dog.id !== req.params.dog_id)

    write_file('coach.json', JSON.stringify(trainers))

    req.flash('successMessage', 'Se ha removido el Canino de la sesión de adiestramiento')
    res.redirect('/consult-sessions')
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

module.exports = {index, store, destroy}