const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const deleteTicket = require('./controllers/deleteTicket copy');
const findUser = require('./controllers/findUser');
const newTicket = require('./controllers/newTicket');
const registerNewUser = require('./controllers/registerNewUser');

router.get('/:email', findUser)


router.get('/register', (req, res) => {
    res.render('register', { title: 'Singup' })
})

router.post('/register', registerNewUser)

router.put('/:email/new-ticket', newTicket)

router.delete('/:email/:id', deleteTicket)
module.exports = router;