const User = require('../../models/userModel')

async function deleteTicket(req,res){
    const email = req.params.email
    const id = req.params.id
    // const body = req.body
    console.log("hellow")
    try {
        const ticketDB = await User.findOneAndUpdate({email: email},{
            $pull:{ticket:{_id:id}}
        }
        )
        console.log(ticketDB)
        if(ticketDB === null){
            res.json({messaje: 'Ticket not Found'})
        }else{

            res.json({messaje:"Ticket Found"})
        }
        console.log(ticketDB)
    } catch (error) {
        res.json({menssaje: error})
    }
}

module.exports = deleteTicket