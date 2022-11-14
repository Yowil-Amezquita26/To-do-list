const User = require('../../models/userModel')
var mongoose = require('mongoose');
async function findTicket(req,res){
    const userId = req.params.userId
    const _id = req.params.id

    try {
        
        const ticketDB = await User.findOne({_id:userId})
        if(ticketDB === null){
            // console.log(ticketDB.tickets);
            res.json({messaje: "No Ticket Found"})
        }else{
            const ticket = ticketDB.filter(ticket => ticket._id == _id)
            console.log(ticket)
            res.json({messaje: "Ticket Found", ticket})
        }
    } catch (error) {
        res.json({menssaje: error})
    }
}

module.exports = findTicket