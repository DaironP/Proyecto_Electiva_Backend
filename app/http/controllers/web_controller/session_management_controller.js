const Dog = require('../../models/dog')
const Session = require('../../models/session')

const store = async (req, res) => {

    const {session_id, dog_id} = req.body

    try {

        const dog = await Dog.findById(dog_id)
        const session = await Session.findById(session_id).populate('dogs')

        const validate_dog = session.dogs.find(dog => dog['_id'].toString() === dog_id)

        if (validate_dog) {

            return res.json({
                status: false,
                message: 'Ya se ha inscrito este Canino a la sesión'
            })

        }

        dog.sessions = [...dog.sessions, session]
        await dog.save()

        session.dogs = [...session.dogs, dog]
        await session.save()

        return res.json({
            status: true
        })

    } catch (e) {

        return res.json({
            status: false,
            message: 'Error, ha sucedido un problema'
        })

    }

}

const destroy = async (req, res) => {

    const {session_id, dog_id} = req.body

    try {

        const dog = await Dog.findById(dog_id).populate('sessions')
        const session = await Session.findById(session_id).populate('dogs')

        dog.sessions = dog.sessions.filter(session => session['_id'].toString() !== session_id)
        await dog.save()

        session.dogs = session.dogs.filter(dog => dog['_id'].toString() !== dog_id)
        await session.save()

        return res.json({
            status: true
        })

    } catch (e) {

        return res.json({
            status: false,
            message: 'Error, ha sucedido un problema'
        })

    }

}

const get_data = (req) => {

    return {
        layout: './layouts/app',
        user: req.user,
        path: req.path,
        successMessage: req.flash('successMessage'),
        errorMessage: req.flash('errorMessage')
    }

}

module.exports = {store, destroy}