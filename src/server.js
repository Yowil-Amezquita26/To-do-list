const express = require("express")
const app = express();
const yodasay =require('yodasay');
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json()) 
require('dotenv').config()
const port = process.env.PORT || 8080; 

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, 
    // {useNewUrlParser: true, useUnitfieldTopology: true}
)
    .then(() => console.log(yodasay.say( {text: "DataBase Connected!!"})))
    .catch(e => console.log(e))



app.use('/', require('./router/webRoute'))
app.use('/user', require('./router/user'))



app.use((req,res) =>{
    res.status(404).render('404', 
        {title: "404",
        description: "Error loading page"
    })
})  

app.listen(port, () => {
    console.log(yodasay.say({
        text: `server at your service in port ${port}`
    }))
}) 