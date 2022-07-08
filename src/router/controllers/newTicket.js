const User = require('../../models/userModel')

async function newTicket(req,res){
    const email = req.params.email
    const body = req.body

    await User.findOneAndUpdate({
        email:  email,
    },
    {
        $push:{ticket:body}
    })
    res.json({messaje:"Ticket Added"})
    
}

module.exports = newTicket