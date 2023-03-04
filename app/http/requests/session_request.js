const {check} = require('express-validator')
const {validate_result} = require('../exceptions/handler')

const validate_create_session = [
    check('description').exists().not().isEmpty(),
    check('date').exists().not().isEmpty(),
    check('place').exists().not().isEmpty(),
    (req, res, next) => validate_result(req, res, next, '/create-session')
]

const validate_update_session = [
    check('description').exists().not().isEmpty(),
    check('date').exists().not().isEmpty(),
    check('place').exists().not().isEmpty(),
    (req, res, next) => validate_result(req, res, next, '/sessions')
]

module.exports = {validate_create_session, validate_update_session}