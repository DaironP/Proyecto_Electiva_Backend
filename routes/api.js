const express = require('express')
const router = express.Router()

router.use('/', require('./custom_routes/auth_routes'))
router.use('/customers', require('./custom_routes/customer_routes'))
router.use('/dogs', require('./custom_routes/dog_routes'))





router.use('/coaches', require('./custom_routes/coach_routes'))


/*
router.use('/', require('./custom_routes/welcome_routes'))

router.use('/', require('./custom_routes/session_routes'))
router.use('/', require('./custom_routes/session_management_routes'))
router.use('/', require('./custom_routes/exception_routes'))
 */

module.exports = router