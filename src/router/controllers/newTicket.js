const User = require('../../models/userModel')

async function newTicket(req,res){
    const userId = req.params.email
    const body = req.body
    console.log(body)
    await User.findOneAndUpdate({
        _id:  userId,
    },
    {
        $push:{ticket:body}
    })
    res.json({messaje:"Ticket Added"})
    
}

module.exports = newTicket