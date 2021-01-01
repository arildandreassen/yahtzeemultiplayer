const Game = require('../models/game-model')

const createGame = (req, res) => {
    const body = req.body;
    const newGame = new Game({name:'234876gjufsd'})

    newGame
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'Game created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Game not created!',
            })
        })
}

module.exports = {
    createGame
}