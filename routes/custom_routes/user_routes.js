const express = require('express')
const router = express.Router()

const {is_authenticated} = require('../../app/http/middleware/custom_middlewares')
const {validate_update_user} = require('../../app/http/requests/user_request')
const {index, edit, update} = require('../../app/http/controllers/web_controller/user_controller')

router.get('/user-data', is_authenticated, index)
router.get('/user-edit', is_authenticated, edit)
router.post('/user-update/:id', is_authenticated, validate_update_user, update)

module.exports = router