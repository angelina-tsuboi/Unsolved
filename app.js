const express = require('express')
let path = require('path');
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
const port = 8549 || process.env.PORT;
const app = express()
let ejs = require('ejs')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/malaysia', (req, res) => {
    res.render('pages/malaysia')
})

app.get('/area51', (req, res) => {
    res.render('pages/area51')
})

app.get('/jack', (req, res) => {
    res.render('pages/jack')
})

app.get('/bigfoot', (req, res) => {
    res.render('pages/bigfoot')
})

app.get('/alcatraz', (req, res) => {
    res.render('pages/alcatraz')
})

app.get('/phoenix', (req, res) => {
    res.render('pages/phoenix')
})

app.get('/bermuda', (req, res) => {
    res.render('pages/bermuda')
})

app.get('/zodiac', (req, res) => {
    res.render('pages/zodiac')
})

app.get('/tupac', (req, res) => {
    res.render('pages/tupac')
})


app.listen(port, (err) => {
    err ? console.log(err) : console.log("Port is up on " + port)
})