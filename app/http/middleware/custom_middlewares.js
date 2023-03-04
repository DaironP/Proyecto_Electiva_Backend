const is_authenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    req.flash('errorMessage', 'Por favor inicie sesión para acceder al recurso')
    res.redirect('/')
}

const is_customer = (req, res, next) => {
    if (req.user.rol === 'customer') return next()
    req.flash('errorMessage', '403: Acceso denegado por falta de permisos')
    res.redirect('/')
}

const is_coach = (req, res, next) => {
    if (req.user.rol === 'coach') return next()
    req.flash('errorMessage', '403: Acceso denegado por falta de permisos')
    res.redirect('/')
}

module.exports = {is_authenticated, is_customer, is_coach}