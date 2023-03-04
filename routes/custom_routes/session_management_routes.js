const express = require('express')
const router = express.Router()

const {is_authenticated, is_coach, is_customer} = require('../../app/http/middleware/custom_middlewares')
const {index, store, destroy} = require('../../app/http/controllers/web_controller/session_management_controller')

router.get('/consult-sessions', is_authenticated, index)
router.post('/add-dog-to-session', is_authenticated, is_customer, store)
router.post('/delete-dog-to-session/:session_id/:dog_id', is_authenticated, is_coach, destroy)

module.exports = router