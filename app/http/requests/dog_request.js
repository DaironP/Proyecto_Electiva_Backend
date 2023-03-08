const {check} = require('express-validator')
const {validate_result} = require('../exceptions/handler')

const validate_create_dog = [
    check('gender').exists().not().isEmpty(),
    check('name').exists().not().isEmpty(),
    check('breed').exists().not().isEmpty(),
    check('age').exists().isNumeric(),
    (req, res, next) => validate_result(req, res, next)
]

const validate_update_dog = [
    check('gender').exists().not().isEmpty(),
    check('name').exists().not().isEmpty(),
    check('breed').exists().not().isEmpty(),
    check('age').exists().isNumeric(),
    (req, res, next) => validate_result(req, res, next)
]

module.exports = {validate_create_dog, validate_update_dog}