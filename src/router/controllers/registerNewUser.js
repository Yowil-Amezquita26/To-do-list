const User = require('../../models/userModel')

async function registerNewUser(req, res){
    const body = req.body
    // try{
    //     await User.create(body)
    //     console.log("User register")
    //     res.redirect('/')
    // }catch(error){
    //     console.log(error)
    // }
    User.create(body).then((data) => {res.json(data), {messaje: 'User register' } }).catch((error) => res.json(error))
}

module.exports = registerNewUser

