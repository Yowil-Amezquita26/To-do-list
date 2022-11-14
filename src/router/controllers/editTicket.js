const User = require('../../models/userModel')
var mongoose = require('mongoose');
async function editTicket(req,res){
    const userId = req.params.userId
    const _id = req.params.id
    const body = req.body
    const status = req.body.status
    
    try {
        if(status == "not done"){
            const ticketDB = await User.findOneAndUpdate({_id:userId, "ticket.not_done._id": _id,}, {$set:{'ticket.not_done.$':body}})
            if(ticketDB ){
                res.json({messaje:"Ticket Found",ticketDB, status })
            }else{
                res.json({messaje: 'Ticket not Found'})
            }
            
        }
        if(status == "doing"){
            const ticketDB = await User.findOneAndUpdate({_id:userId, "ticket.doing._id": _id,}, {$set:{'ticket.doing.$':body}})
            if(ticketDB ){
                res.json({messaje:"Ticket Found",ticketDB, status })
            }else{
                res.json({messaje: 'Ticket not Found'})
            }
            
        }
        if(status == "done"){
            const ticketDB = await User.findOneAndUpdate({_id:userId, "ticket.done._id": _id,}, {$set:{'ticket.done.$':body}})
            if(ticketDB ){
                res.json({messaje:"Ticket Found",ticketDB, status })
            }else{
                res.json({messaje: 'Ticket not Found'})
            }
            
        }

    } catch (error) {
        res.json({menssaje: error})
    }
}

module.exports = editTicket