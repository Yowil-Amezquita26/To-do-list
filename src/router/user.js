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

router.put('/:userId/new-ticket', newTicket)

router.put('/edit/:userId/:id', editTicket)
router.delete('/delete/:userId/:id', deleteTicket)
module.exports = router;