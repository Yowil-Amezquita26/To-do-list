const User = require('../../models/userModel')

async function newTicket(req,res){
    const userId = req.params.userId
    const body = req.body
    
    console.log(body)
    await User.findOneAndUpdate({
        _id:  userId,
    },
    {
        $push:{tickets:body}
    })
    res.json({messaje:"Ticket Added"})
    
}

module.exports = newTicket