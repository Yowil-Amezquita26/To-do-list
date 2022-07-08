const User = require('../../models/userModel')

async function registerNewUser(req, res){
    const body = req.body

    User.create(body).then((data) => {res.json(data), {messaje: 'User register' } }).catch((error) => res.json(error))
}

module.exports = registerNewUser

