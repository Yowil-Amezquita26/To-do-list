const express = require('express');
const router = express.Router();

const findUser = require('./controllers/findUser');
const newTicket = require('./controllers/newTicket');
const editTicket = require('./controllers/editTicket');
const registerNewUser = require('./controllers/registerNewUser');
const deleteTicket = require('./controllers/deleteTicket');
const verifieUser = require('./controllers/verifieUser');
const findTicket = require('./controllers/findTicket');
const deleteImage = require('./controllers/deleteImage');

router.get('/:email', findUser)



router.get('/register', (req, res) => {
    res.render('register', { title: 'Singup' })
})
router.get('/get/:userId/:id', findTicket)
router.get('/verified/:email', verifieUser)

router.post('/register', registerNewUser)

router.put('/:userId/new-ticket', newTicket)
router.put('/edit/:userId/:id', editTicket)

router.delete('/delete/:userId/:id', deleteTicket)
router.delete('/delete-image/:public_id/:image_id',deleteImage)

module.exports = router;