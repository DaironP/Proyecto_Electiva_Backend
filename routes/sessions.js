const route = require('express').Router()

const {
    index,
    save
} = require('../controllers/controll-sessions')

route.get('/',index)

route.post('/:id',save)

module.exports = route