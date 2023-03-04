const {check} = require('express-validator')
const {validate_result} = require('../exceptions/handler')
const {read_file} = require('../controllers/persistence/read_and_write_controller')

const users = [...read_file('coach.json'), ...read_file('customer.json')]

const validate_create_user = [
    check('document').exists().isNumeric().custom(document => {
        const documentExists = users.find(user => user.document === document)
        if (documentExists) throw new Error('El documento ingresado ya está registrado')
        return true
    }),

    check('name').exists().not().isEmpty(),
    check('surname').exists().not().isEmpty(),

    check('email').exists().isEmail().custom(email => {
        const emailExists = users.find(user => user.email === email)
        if (emailExists) throw new Error('La dirección de email ya está en uso')
        return true
    }),

    check('password').exists().not().isEmpty().isLength({min: 8}),

    (req, res, next) => validate_result(req, res, next, '/')
]

const validate_update_user = [

    check('document').exists().isNumeric().withMessage('Valor no válido').custom((document, {req}) => {

        const id = req.params.id

        const documentExists = users
            .filter(user => user.id !== id)
            .find(user => user.document === document)

        if (documentExists) throw new Error('El documento ingresado ya está registrado')
        return true
    }),

    check('name').exists().not().isEmpty().withMessage('Valor no válido'),
    check('surname').exists().not().isEmpty().withMessage('Valor no válido'),

    check('email').exists().isEmail().withMessage('Valor no válido').custom((email, {req}) => {

        const id = req.params.id

        const emailExists = users
            .filter(user => user.id !== id)
            .find(user => user.email === email)

        if (emailExists) throw new Error('La dirección de email ya está en uso')
        return true
    }),

    check('password').exists().not().isEmpty().isLength({min: 8}),

    (req, res, next) => validate_result(req, res, next, '/user-edit')
]

module.exports = {validate_create_user, validate_update_user}