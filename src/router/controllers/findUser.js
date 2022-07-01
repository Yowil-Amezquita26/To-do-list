const User = require('../../models/userModel')


async function findUser(req, res) {
    const email = req.params.email
    console.log('entro aqui')
    // try{
    //     const userDB = await User.findOne({email: email})
    //     // console.log( userDB[0].ticket, 'klllllll')
    //     // console.log("Base de Dato Conectada")
    //     // console.log(userDB)
    //     const arrayTickets = userDB.ticket
    //     console.log(arrayTickets)

    //     res.render('tickets', {
    //         userDB: userDB.ticket
    //     })

    // } catch(error){ 
    //     console.log(error)
    // }
    User.findOne({ email: email })
    .then((data) => res.json({data, estado:"No Users Found"}))
    .catch((error) => res.json({error, estado:false}))

}

module.exports = findUser; 