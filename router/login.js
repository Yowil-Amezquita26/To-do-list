const express = require('express');
const router = express.Router();
// const Mascota = require('../models/pets')



router.get ('/', (req, res) => {
    
    res.render('login')

})

router.post('/', async (req, res) =>{
    const body = req.body
    try{
        // const mascotaDB = new Mascota(body)
        // await mascotaDB.save()
        await User.create(body)
        // console.log(mascotaDB)
        res.redirect('mascotas')
    }catch(error){
        console.log(error)
    }
})