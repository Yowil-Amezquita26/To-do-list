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
const authKey = require('../helper/authKey')

router.get('/:email', findUser)
router.get('/register',authKey, (req, res) => {
    res.render('register', { title: 'Singup' })
})
router.get('/get/:userId/:id',authKey, findTicket)
router.get('/verified/:email',authKey, verifieUser)

router.post('/register',authKey, registerNewUser)

router.put('/:userId/new-ticket',authKey, newTicket)
router.put('/edit/:userId/:id',authKey, editTicket)

router.delete('/delete/:userId/:id',authKey, deleteTicket)
router.delete('/delete-image/:public_id/:image_id',authKey, deleteImage)

module.exports = router;