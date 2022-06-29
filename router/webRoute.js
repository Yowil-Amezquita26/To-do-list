const express = require('express')
const router =  express.Router();

router.get ('/', (req, res) => {
    res.render('home', {title: "Home Page"})
})

router.get ('/login', (req, res) =>{
    res.render('login', {title: 'Login'})
})


module.exports = router