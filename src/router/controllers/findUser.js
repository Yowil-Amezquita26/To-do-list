const User = require('../../models/userModel')


async function findUser(req, res) {
    const userId = req.params.userId
    try{
        const userDB = await User.findOne({_id: userId})
        if(userDB === null){
            res.json({messaje: false, userDB})
        }else{
            res.json({messaje: true, userDB})
        }


    } catch(error){ 
        res.json({messaje: 'Hola amiguito'})
    }

}

module.exports = findUser; 