const express = require('express');
const router = express.Router();
const User = require('../models/userModel')
const findUser = require('./controllers/findUser');
const newTicket = require('./controllers/newTicket');

router.get('/:email', findUser)


router.get('/register', (req, res) => {
    res.render('register', { title: 'Singup' })
})

router.post('/register', async (req, res) => {
    const body = req.body
    // try{
    //     await User.create(body)
    //     console.log("User register")
    //     res.redirect('/')
    // }catch(error){
    //     console.log(error)
    // }
    User.create(body).then((data) => {res.json(data), {messaje: 'User register' } }).catch((error) => res.json(error))
})
router.put('/:email/new-ticket', newTicket)

router.delete('/:email/:id', async(req,res) => {
    const id = req.params.id;
    const email = req.params.email;
    User.findOne({ email: email })
    .then((data) => res.json({data, estado: true}))
    .catch((error) => res.json({error, estado:false}))
})
module.exports = router;