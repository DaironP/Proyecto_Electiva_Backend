const {validationResult} = require('express-validator')

const validate_result = (req, res, next, route) => {

    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        req.flash('errorMessage', 'Hay un error con los campos, por favor verificalos')
        res.redirect(route)
    }

}

module.exports = {validate_result}