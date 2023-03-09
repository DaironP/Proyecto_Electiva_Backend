const express = require('express')
const router = express.Router()

const {validate_create_session, validate_update_session} = require('../../app/http/requests/session_request')
const {index, store, update, destroy} = require('../../app/http/controllers/api_controller/session_controller')

router.get('/', index)
router.post('/:id', validate_create_session, store)
router.patch('/:id', validate_update_session, update)
router.delete('/:id', destroy)

module.exports = router