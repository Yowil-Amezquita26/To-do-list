const User = require('../../models/userModel')

async function newTicket(req,res){
    const userId = req.params.userId
    const body = req.body

    await User.findOneAndUpdate({
        _id:  userId,
    },
    {
        $push:{ticket:body}
    })
    res.json({messaje:"Ticket Added"})
    
}

module.exports = newTicket