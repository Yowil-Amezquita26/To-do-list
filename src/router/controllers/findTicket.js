const User = require('../../models/userModel')
var mongoose = require('mongoose');
async function findTicket(req,res){
    const userId = req.params.userId
    const _id = req.params.id

    try {
        
        const ticketDB = await User.findOne({_id:userId})
        if(ticketDB === null){
            console.log(ticketDB.tickets);
            const ticket = ticketDB.filter(ticket => ticket._id == _id)
            res.json({messaje: "No Ticket Found", ticket})
        }else{
            res.json({messaje: "Ticket Found", ticketDB})
        }
    } catch (error) {
        res.json({menssaje: error})
    }
}

module.exports = findTicket