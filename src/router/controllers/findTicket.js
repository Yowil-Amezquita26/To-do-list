const User = require('../../models/userModel')
var mongoose = require('mongoose');
async function findTicket(req,res){
    const userId = req.params.userId
    const _id = req.params.id
    const body = req.body

    try {
        const ticketDB = await User.findOne({_id:userId})

        if(ticketDB ){
            console.log(ticketDB.ticket.not_done.filter(ticket => ticket._id == _id))
            // ticketDB.ticket.not_done.map(ticket =>(
            //     console.log(ticket)                
            // ))
            const ticket = ticketDB.ticket.not_done.filter(ticket => ticket._id == _id)
            res.json({messaje:"Ticket Found",ticket })
        }else{
            res.json({messaje: 'Ticket not Found'})
        }
    } catch (error) {
        res.json({menssaje: error})
    }
}

module.exports = findTicket