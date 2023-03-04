const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    res.render('./welcome', {
        layout: 'welcome',
        authenticated: req.isAuthenticated(),
        successMessage: req.flash('successMessage'),
        errorMessage: req.flash('errorMessage')
    })

})

router.get('/profile', (req, res) => {
    res.redirect('user-data')
})

module.exports = router