const User = require('../../models/userModel')

async function deleteTicket(req,res){
    const userId = req.params.userId
    const id = req.params.id

    try {
        const ticketDB = await User.findOneAndUpdate({_id: userId},{
            $pull:{tickets:{_id:id}}
        }
        )
        if(ticketDB === null){
            res.json({messaje: 'Ticket Deleted'})
        }else{

            res.json({messaje:"Somenthing Happend"})
        }
    } catch (error) {
        res.json({menssaje: error})
    }
}

module.exports = deleteTicket