const {check} = require('express-validator')
const {validate_result} = require('../exceptions/handler')

const Coach = require('../models/coach')
const Customer = require('../models/customer')

const validate_create_user = [

    check('name')
        .exists().withMessage('El nombre es requerido')
        .not().isEmpty().withMessage('El nombre no puede estar vacío'),

    check('surname')
        .exists().withMessage('El apellido es requerido')
        .not().isEmpty().withMessage('El apellido no puede estar vacío'),

    check('document')
        .exists().withMessage('El documento es requerido')
        .not().isEmpty().withMessage('El documento no puede estar vacío')
        .custom(async (document) => {

            const coach = await Coach.findOne({document})
            const customer = await Customer.findOne({document})

            if (coach || customer) {
                throw new Error('El documento ingresado ya está registrado')
            }

            return true
        }),

    check('email')
        .exists().withMessage('El correo es requerido')
        .not().isEmpty().withMessage('El correo no puede estar vacío')
        .isEmail().withMessage('La dirección del correo debe ser valida')
        .custom(async (email) => {

            const coach = await Coach.findOne({email})
            const customer = await Customer.findOne({email})

            if (coach || customer) {
                throw new Error('El correo ingresado ya está registrado')
            }

            return true
        }),

    check('password')
        .exists().withMessage('La contraseña es requerida')
        .not().isEmpty().withMessage('La contraseña no puede estar vacía')
        .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),

    (req, res, next) => validate_result(req, res, next)
]

const validate_update_user = [

    check('name')
        .exists().withMessage('El nombre es requerido')
        .not().isEmpty().withMessage('El nombre no puede estar vacío'),

    check('surname')
        .exists().withMessage('El apellido es requerido')
        .not().isEmpty().withMessage('El apellido no puede estar vacío'),

    check('document')
        .exists().withMessage('El documento es requerido')
        .not().isEmpty().withMessage('El documento no puede estar vacío')
        .custom(async (document, {req}) => {

            const user_id = req.params.id

            const coach = await Coach.findOne({document})
            const customer = await Customer.findOne({document})

            if (coach && coach._id.toString() !== user_id) {
                throw new Error('El documento ingresado ya está registrado')
            }

            if (customer && customer._id.toString() !== user_id) {
                throw new Error('El documento ingresado ya está registrado')
            }

            return true
        }),

    check('email')
        .exists().withMessage('El correo es requerido')
        .not().isEmpty().withMessage('El correo no puede estar vacío')
        .isEmail().withMessage('La dirección del correo debe ser valida')
        .custom(async (email, {req}) => {

            const user_id = req.params.id

            const coach = await Coach.findOne({email})
            const customer = await Customer.findOne({email})

            if (coach && coach._id.toString() !== user_id) {
                throw new Error('El documento ingresado ya está registrado')
            }

            if (customer && customer._id.toString() !== user_id) {
                throw new Error('El documento ingresado ya está registrado')
            }

            return true
        }),

    check('password')
        .exists().withMessage('La contraseña es requerida')
        .not().isEmpty().withMessage('La contraseña no puede estar vacía')
        .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),

    (req, res, next) => validate_result(req, res, next)
]

module.exports = {validate_create_user, validate_update_user}