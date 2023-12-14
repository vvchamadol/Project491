const express = require("express");
const { readdirSync } = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");
const connectDb = require("./config/db");


const registerRouters = require('./Routes/register')
const loginRouters = require('./Routes/login')


const app = express();
const port = 8000;
connectDb();


app.use(morgan("dev"));
app.use(cors());
app.use(bodyParse.json({ limit: "10mb" }));

app.use('/register', registerRouters)
app.use('/login', loginRouters)




//app.get("/pr", (req, res) => {
  //res.send("Hello");
//});




app.listen(port, () => {
  console.log(`Server is Running port ${port}`);
});