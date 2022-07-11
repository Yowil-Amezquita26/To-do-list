const User = require('../../models/userModel')

async function deleteTicket(req,res){
    const userId = req.params.email
    const id = req.params.id
    // const body = req.body
    console.log("hellow")
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