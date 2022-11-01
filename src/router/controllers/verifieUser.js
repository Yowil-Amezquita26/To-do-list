const User = require('../../models/userModel')

async function verifieUser(req, res){
    const email = req.params.email

    try{
        const userDB = await User.findOne({email: email})
        if(userDB === null){
            res.json({messaje: "Not registered", userDB})
        }else{
            res.json({messaje: "Is registered", userDB})
        }


    } catch(error){ 
        res.json({messaje: error})
    }
}

module.exports = verifieUser