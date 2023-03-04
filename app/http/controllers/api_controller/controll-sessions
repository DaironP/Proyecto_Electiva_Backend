const Session = require('../models/session')
const Customer = require('../models/customer')

module.exports = {
    index : async (req,res)=>{
        try {
            const result = await Session.find({})

            return res.status(200).json({"result":true,"data":result})
        } catch (error) {
            return res.status(500).json({"result":false,"error":error}) 
        }
    },
    save : async(req,res)=>{
        const {id} = req.params

        try {
            const customer = await Customer.findById(id)
            if( customer ){
                const session = new Session( req.body )

                session.customer = customer

                const result = await session.save()

                customer.sessions.push(session)

                await customer.save()
                console.log("Done")

                return res.status(200).json({"result":true,"data":result})

            }else{
                return res.status(200).json({"result":false,"error":"No existe el Cliente"})  
            }
        } catch (error) {
            return res.status(500).json({"result":false,"error":error}) 
        }

    }

}