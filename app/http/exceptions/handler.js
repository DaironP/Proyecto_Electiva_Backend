const {validationResult} = require('express-validator')

const validate_result = (req, res, next) => {

    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        return res.json({
            status: false,
            errors: err.array()
        })
    }

}

module.exports = {validate_result}