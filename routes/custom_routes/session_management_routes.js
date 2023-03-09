const express = require('express')
const router = express.Router()

const {store, destroy} = require('../../app/http/controllers/web_controller/session_management_controller')

router.post('/', store)
router.delete('/', destroy)

module.exports = router