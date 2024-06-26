const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./helper/swagger.json');
const yodasay = require("yodasay");
const bodyParser = require("body-parser");
var cors = require('cors')
require("dotenv").config();

const swaggerOptions = {
  swaggerOptions: {
    validatorUrl: null
  }
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log(yodasay.say({ text: "DataBase Connected!!" })))
  .catch((e) => console.log(e));

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/user", require("./router/user"));

app.use((req, res,next) => {
  res
    .status(404)
    .json("404", { title: "404", description: "Error loading page" });
});

app.listen(port, () => {
  console.log("server at your service in port", port);
  console.log(
    yodasay.say({
      text: `server at your service in port ${port}`,
    })
  );
});
