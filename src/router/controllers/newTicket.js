const User = require('../../models/userModel')

async function newTicket(req,res){
    const userId = req.params.userId
    const body = req.body
    const status = body.status
    console.log(body.status)
    
    if(status == "not done") {
        
        await User.findOneAndUpdate({
            _id:  userId,
        },
        {
            $push:{'ticket.not_done':body}
        })
    };
    if(status == "doing") {
        
        await User.findOneAndUpdate({
            _id:  userId,
        },
        {
            $push:{'ticket.doing':body}
        })
    };
    if(status == "done") {
        
        await User.findOneAndUpdate({
            _id:  userId,
        },
        {
            $push:{'ticket.done':body}
        })
    };

    res.json({messaje:`Ticket Added`,})
    
}

module.exports = newTicket