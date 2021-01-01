const express = require('express');
const bodyParser = require('body-parser');
const gameRouter = require('./routes/game-router');
const cors = require("cors");

const db = require('./db')

const app = express();
const apiPort = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static("public"));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req,res) => {
//     res.send('hello world');
// })

// app.get('/api/game', (req,res) => {
//     res.send('new game created');
// })

// app.use('/api', gameRouter)

app.listen(apiPort,() => {
    console.log('Server listening on port 3000')
})