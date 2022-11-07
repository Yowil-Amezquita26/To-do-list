const User = require('../../models/userModel')


async function findUser(req, res) {
    const email = req.params.userId
    try{
        const userDB = await User.findOne({email: email})
        if(userDB === null){
            res.json({messaje: "No User Found", userDB})
        }else{
            res.json({messaje: "User Found", userDB})
        }


    } catch(error){ 
        res.json({messaje: error})
    }

}

module.exports = findUser; 