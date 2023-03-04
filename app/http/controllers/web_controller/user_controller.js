const {read_file, write_file} = require('../persistence/read_and_write_controller')
const bcrypt = require("bcryptjs");

const index = (req, res) => {
    const data = get_data(req)
    res.render('./components/app/user/index', data)
}

const edit = (req, res) => {
    const data = get_data(req)
    res.render('./components/app/user/edit', data)
}

const update = (req, res) => {

    const {name, surname, document, email, password} = req.body

    let users = []

    if (req.user.rol === 'coach') {
        users = read_file('coach.json')
    }

    if (req.user.rol === 'customer') {
        users = read_file('customer.json')
    }

    const user = users.find(user => user.id === req.params.id)

    bcrypt.hash(password, 10, (err, hash) => {

        user.name = name
        user.surname = surname
        user.document = document
        user.email = email
        user.password = hash

        if (req.user.rol === 'coach') {
            write_file('coach.json', JSON.stringify(users))
        }

        if (req.user.rol === 'customer') {
            write_file('customer.json', JSON.stringify(users))
        }

        req.flash('successMessage', 'Información actualizada correctamente')
        res.redirect('/user-data')
    })
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

module.exports = {index, edit, update}