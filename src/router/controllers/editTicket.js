const User = require('../../models/userModel')
var mongoose = require('mongoose');
async function editTicket(req,res){
    const email = req.params.email
    const _id = req.params.id
    const body = req.body

    try {
        const ticketDB = await User.ticket.findByIdAndUpdate(`ticket[0]._id:${_id}`)

        console.log(ticketDB, 'hola');

        // const result =  ticketDB.ticket.forEach( (e) => {
        //     if(_id === e._id){
        //         e.title = body.title
        //         e.description = body.description
        //         e.status = body.status
        //     }
        //     console.log(e, 'sakdjkldsm')
        //     return e
        // })

        if(ticketDB === null){
            res.json({messaje: 'Ticket not Found'})
        }else{
            res.json({messaje:"Ticket Found"})
        }
    } catch (error) {
        res.json({menssaje: error})
    }
}

module.exports = editTicket