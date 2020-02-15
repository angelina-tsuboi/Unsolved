const express = require('express')
const port = 8549 || process.env.PORT;
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Port is up on " + port)
})