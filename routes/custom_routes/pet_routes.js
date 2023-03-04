const express = require('express')
const router = express.Router()

const {is_authenticated, is_customer} = require('../../app/http/middleware/custom_middlewares')
const {validate_create_pet, validate_update_pet} = require('../../app/http/requests/pet_request')
const {
    index,
    create,
    store,
    edit,
    update,
    destroy
} = require('../../app/http/controllers/web_controller/pet_controller')

router.get('/customer-pets', is_authenticated, is_customer, index)
router.get('/create-pet', is_authenticated, is_customer, create)
router.post('/store-pet', is_authenticated, is_customer, validate_create_pet, store)
router.post('/edit-pet', is_authenticated, is_customer, edit)
router.post('/update-pet/:id', is_authenticated, is_customer, validate_update_pet, update)
router.post('/delete-pet/:id', is_authenticated, is_customer, destroy)

module.exports = router