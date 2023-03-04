const express = require('express')
const router = express.Router()

router.get('*', (req, res) => {
    req.flash('errorMessage', '404: No fue posible encontrar el recurso')
    res.redirect('/')
})

module.exports = router