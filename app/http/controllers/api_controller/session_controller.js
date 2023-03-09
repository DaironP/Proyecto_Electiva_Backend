const mongoose = require('mongoose')
const Session = require('../../models/session')
const Coach = require('../../models/coach')
const Dog = require('../../models/dog')

const index = async (req, res) => {

    try {

        const sessions = await Session.find().populate('coach').populate('dogs')

        return res.json({
            status: true,
            sessions
        })

    } catch (e) {

        return res.json({
            status: false,
            message: 'Error, ha sucedido un problema'
        })

    }

}

const store = async (req, res) => {

    const {description, date, place} = req.body

    try {

        const coach = await Coach.findById(req.params.id)

        const data = {description, date, place}

        const session = await new Session(data)

        session.coach = coach
        await session.save()

        coach.sessions = [...coach.sessions, session]
        await coach.save()

        await coach.populate({
            path: 'sessions',
            populate: {
                path: 'coach',
                model: 'coach'
            }
        })

        return res.json({
            status: true,
            coach
        })

    } catch (e) {

        return res.json({
            status: false,
            message: 'Error, ha sucedido un problema'
        })

    }

}

const update = async (req, res) => {

    const {description, date, place} = req.body

    try {

        const data = {description, date, place}

        const session = await Session.findByIdAndUpdate(req.params.id, data, {new: true})

        const coach = await Coach.findById(session.coach.toString())

        await coach.populate({
            path: 'sessions',
            populate: {
                path: 'coach',
                model: 'coach'
            }
        })

        return res.json({
            status: true,
            coach
        })

    } catch (e) {

        return res.json({
            status: false,
            message: 'Error, ha sucedido un problema'
        })

    }

}

const destroy = async (req, res) => {

    try {

        const session = await Session.findByIdAndDelete(req.params.id)

        const coach = await Coach.findById(session['coach'].toString())
        coach.sessions = coach.sessions.filter(session => session['_id'].toString() !== req.params.id)

        await coach.save()

        await Dog.updateMany(
            {sessions: new mongoose.Types.ObjectId(req.params.id)},
            {$pull: {sessions: new mongoose.Types.ObjectId(req.params.id)}}
        )

        await coach.populate({
            path: 'sessions',
            populate: {
                path: 'coach',
                model: 'coach'
            }
        })

        return res.json({
            status: true,
            coach
        })

    } catch (e) {

        console.log(e)

        return res.json({
            status: false,
            message: 'Error, ha sucedido un problema'
        })

    }

}

module.exports = {index, store, update, destroy}