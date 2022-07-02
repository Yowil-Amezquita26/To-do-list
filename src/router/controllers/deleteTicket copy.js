const { addSyntheticLeadingComment } = require('typescript')
const User = require('../../models/userModel')

async function deleteTicket(req,res){
    const email = req.params.email
    const id = req.params.id
    const body = req.body
    console.log(body)
    User.findOneAndUpdate(email).then((data) => {res.json(body), {messaje:"Ticket Added"}}).catch((error) => res.json(error))
    await User.findOneAndUpdate({
        email:  email,
    },
    {
        $pull:{ticket: {_id: id}}
    })
    res.json({messaje:"Ticket deleted"})
}

module.exports = deleteTicket