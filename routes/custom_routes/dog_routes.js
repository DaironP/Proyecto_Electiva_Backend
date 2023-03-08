const express = require('express')
const router = express.Router()

const {validate_create_dog, validate_update_dog} = require('../../app/http/requests/dog_request')
const {store, update, destroy} = require('../../app/http/controllers/api_controller/dog_controller')

router.post('/:id', validate_create_dog, store)
router.patch('/:id', validate_update_dog, update)
router.delete('/:id', destroy)

module.exports = router