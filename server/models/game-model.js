const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Game = new Schema(
    {
        name:'String'
    },
    { timestamps: true },
    )

module.exports = mongoose.model('games', Game);

