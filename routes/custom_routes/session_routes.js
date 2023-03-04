const express = require('express')
const router = express.Router()

const {is_authenticated, is_coach} = require('../../app/http/middleware/custom_middlewares')
const {validate_create_session, validate_update_session} = require('../../app/http/requests/session_request')
const {
    index,
    create,
    store,
    edit,
    update,
    destroy
} = require('../../app/http/controllers/web_controller/session_controller')

router.get('/sessions', is_authenticated, index)
router.get('/create-session', is_authenticated, is_coach, create)
router.post('/store-session', is_authenticated, is_coach, validate_create_session, store)
router.post('/edit-session', is_authenticated, is_coach, edit)
router.post('/update-session/:id', is_authenticated, is_coach, validate_update_session, update)
router.post('/delete-session/:id', is_authenticated, is_coach, destroy)

module.exports = router