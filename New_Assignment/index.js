const express = require("express")
const mongoose = require("mongoose")
var routers = require('./routes/routes');
const bodyParser = require("body-parser")

const app = express()
const cors = require('cors');
const port = 5000;

const mongodatabaseURL ="mongodb+srv://venky-assignment:venky-assignment@cluster0.d47qttq.mongodb.net/";

mongoose.connect(mongodatabaseURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection

app.listen(port,()=>{
    console.log("Server is running port" +port);
})


connection.once("open",()=>{
    console.log("MongoDb Connected!!!......")
});

app.use(cors());
app.use(bodyParser.json());
app.use(routers);