const User = require('../../models/userModel')


async function findUser(req, res) {
    const email = req.params.email
    console.log('entro aqui')
    try{
        const userDB = await User.findOne({email: email})
        // console.log( userDB[0].ticket, 'klllllll')
        // console.log("Base de Dato Conectada")
        // console.log(userDB)
        // const arrayTickets = userDB.ticket
        console.log(userDB)
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