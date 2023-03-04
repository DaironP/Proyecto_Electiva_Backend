const express = require('express')
const router = express.Router()

/*
const {is_authenticated} = require('../../app/http/middleware/custom_middlewares')

 */

const {validate_update_user} = require('../../app/http/requests/user_request')

const {show, update} = require('../../app/http/controllers/api_controller/customer_controller')

router.get('/:id', show)
router.patch('/:id', validate_update_user, update)


/*
router.get('/user-edit', is_authenticated, edit)
router.post('/user-update/:id', is_authenticated, validate_update_user, update)
 */

module.exports = router