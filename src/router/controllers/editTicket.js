const User = require('../../models/userModel')
var mongoose = require('mongoose');
async function editTicket(req,res){
    const userId = req.params.userId
    const _id = req.params.id
    const body = req.body
    const status = req.body.status
    
    try {
        const ticketDB = await User.findOneAndUpdate({_id:userId, "ticket._id": _id,}, {$set:{'ticket.$':body}})

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