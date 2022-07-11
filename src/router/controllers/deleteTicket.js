const User = require('../../models/userModel')

async function deleteTicket(req,res){
    const userId = req.params.userId
    const id = req.params.id

    try {
        const ticketDB = await User.findOneAndUpdate({_id: userId},{
            $pull:{ticket:{_id:id}}
        }
        )
        if(ticketDB === null){
            res.json({messaje: 'Ticket not Found'})
        }else{

            res.json({messaje:"Ticket Found"})
        }
    } catch (error) {
        res.json({menssaje: error})
    }
}

module.exports = deleteTicket