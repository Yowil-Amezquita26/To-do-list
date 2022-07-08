const express = require('express');
const router = express.Router();

const findUser = require('./controllers/findUser');
const newTicket = require('./controllers/newTicket');
const editTicket = require('./controllers/editTicket');
const registerNewUser = require('./controllers/registerNewUser');
const deleteTicket = require('./controllers/deleteTicket');

router.get('/:userId', findUser)



router.get('/register', (req, res) => {
    res.render('register', { title: 'Singup' })
})

router.post('/register', registerNewUser)

router.put('/:email/new-ticket', newTicket)

router.put('/:email/:id', editTicket)
router.delete('/:email/:id', deleteTicket)
module.exports = router;