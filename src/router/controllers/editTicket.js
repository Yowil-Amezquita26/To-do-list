const User = require('../../models/userModel')
var mongoose = require('mongoose');
async function editTicket(req,res){
    const userId = req.params.email
    const _id = req.params.id
    const body = req.body

    try {
        const ticketDB = await User.findOneAndUpdate({_id:userId, "ticket._id": _id,}, {$set:{'ticket.$':body}})
        console.log(ticketDB.ticket, "4546546")
        // const ticketDB = await User.find().select({'ticket':{$elemMatch:{"_id":_id}}})
        // const findTiket = await User.findById({_id: userId})
        // const ticketFound = await findTiket.ticket.filter((element) => {
        //     return element._id == id
        // })

        // const ticket = await User.updateOne({_id:userId, "ticket._id": id}, {$set:{"ticket.$": body}})
        // console.log(ticket)

        // console.log(ticketDB, 'hola');

        // const result =  ticketDB.ticket.forEach( (e) => {
        //     if(_id === e._id){
        //         e.title = body.title
        //         e.description = body.description
        //         e.status = body.status
        //     }
        //     console.log(e, 'sakdjkldsm')
        //     return e
        // })

        if(ticketDB ){
            res.json({messaje:"Ticket Found",ticketDB })
        }else{
            res.json({messaje: 'Ticket not Found'})
        }
    } catch (error) {
        res.json({menssaje: error})
    }
}

module.exports = editTicket