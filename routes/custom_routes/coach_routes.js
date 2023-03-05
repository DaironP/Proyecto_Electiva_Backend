const express = require('express')
const router = express.Router()

const {validate_update_user} = require('../../app/http/requests/user_request')
const {show, update} = require('../../app/http/controllers/api_controller/coach_controller')

router.get('/:id', show)
router.patch('/:id', validate_update_user, update)

module.exports = router