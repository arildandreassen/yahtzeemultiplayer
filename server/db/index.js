const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mYahtzee', {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true});

const db = mongoose.connection

module.exports = db