const express = require('express')
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
const port = 8549 || process.env.PORT;
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Port is up on " + port)
})