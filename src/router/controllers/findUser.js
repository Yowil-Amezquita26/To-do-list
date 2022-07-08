const User = require('../../models/userModel')


async function findUser(req, res) {
    const userId = req.params.userId
    console.log('entro aqui')
    try{
        const userDB = await User.findOne({_id: userId})
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
        // res.render('tickets', {
        //     userDB: userDB.ticket
        // })

    } catch(error){ 
        res.json({messaje: 'Hola amiguito'})
    }
    // User.findOne({ email: email })
    // .then((data) => res.json({data, estado:"No Users Found"}))
    // .catch((error) => res.json({error, estado:false}))

}

module.exports = findUser; 