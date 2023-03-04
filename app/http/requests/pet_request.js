const {check} = require('express-validator')
const {validate_result} = require('../exceptions/handler')

const validate_create_pet = [
    check('gender').exists().not().isEmpty(),
    check('name').exists().not().isEmpty(),
    check('breed').exists().not().isEmpty(),
    check('age').exists().isNumeric(),
    (req, res, next) => validate_result(req, res, next, '/create-pet')
]

const validate_update_pet = [
    check('gender').exists().not().isEmpty(),
    check('name').exists().not().isEmpty(),
    check('breed').exists().not().isEmpty(),
    check('age').exists().isNumeric(),
    (req, res, next) => validate_result(req, res, next, '/customer-pets')
]

module.exports = {validate_create_pet, validate_update_pet}