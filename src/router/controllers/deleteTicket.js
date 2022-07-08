const User = require('../../models/userModel')

async function deleteTicket(req,res){
    const email = req.params.email
    const id = req.params.id
    try {
        const ticketDB = await User.findOneAndUpdate({email: email},{
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