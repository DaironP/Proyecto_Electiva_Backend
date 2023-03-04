const route = require('express').Router()

const {
    index,
    save
} = require('../controllers/controll-dogs')

route.get('/',index)

route.post('/:id',save)

module.exports = route