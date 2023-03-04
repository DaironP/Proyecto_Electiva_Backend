const express = require('express')
const router = express.Router()

const {validate_create_user} = require('../../app/http/requests/user_request')
const {login, logout, register} = require('../../app/http/controllers/auth/auth_controller')

router.post('/login', login)
router.post('/logout', logout)
router.post('/register', validate_create_user, register)

module.exports = router