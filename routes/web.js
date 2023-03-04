const express = require('express')
const router = express.Router()

router.use('/', require('./custom_routes/welcome_routes'))
router.use('/', require('./custom_routes/auth_routes'))
router.use('/', require('./custom_routes/user_routes'))
router.use('/', require('./custom_routes/pet_routes'))
router.use('/', require('./custom_routes/session_routes'))
router.use('/', require('./custom_routes/session_management_routes'))
router.use('/', require('./custom_routes/exception_routes'))

module.exports = router