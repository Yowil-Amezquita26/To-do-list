const User = require('../../models/userModel')
var mongoose = require('mongoose');
async function editTicket(req,res){
    const userId = req.params.email
    const _id = req.params.id
    const body = req.body

    try {
        const ticketDB = await User.findOneAndUpdate({_id:userId, "ticket._id": _id,}, {$set:{'ticket.$':body}})
        console.log(ticketDB.ticket, "4546546")

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