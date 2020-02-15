const express = require('express')
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
const port = 8549 || process.env.PORT;
const app = express()

var firebaseConfig = {
    apiKey: "AIzaSyCruQFDCzLOn3BacxWenTP_qpdyVZqCksE",
    authDomain: "unsolved-1c9fb.firebaseapp.com",
    databaseURL: "https://unsolved-1c9fb.firebaseio.com",
    projectId: "unsolved-1c9fb",
    storageBucket: "unsolved-1c9fb.appspot.com",
    messagingSenderId: "408884621201",
    appId: "1:408884621201:web:faa334f3fcceb72c2ff430"
};
  
firebase.initializeApp(firebaseConfig);

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Port is up on " + port)
})