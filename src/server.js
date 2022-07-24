const express = require("express")
const app = express();
const swaggerDoc = require("swagger-ui-express")
const yodasay =require('yodasay');
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json()) 
require('dotenv').config()
const port = process.env.PORT || 8080; 

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, 
)
    .then(() => console.log(yodasay.say( {text: "DataBase Connected!!"})))
    .catch(e => console.log(e))


app.use(express.static(__dirname + "/views", swaggerDoc))
app.use('/api', require('./router/webRoute'))
app.use('/api/user', require('./router/user'))



app.use((req,res) =>{
    res.status(404).json('404', 
        {title: "404",
        description: "Error loading page"
    })
})  

app.listen(port, () => {
    console.log('server at your service in port', port)
    console.log(yodasay.say({
        text: `server at your service in port ${port}`
    }))
}) 