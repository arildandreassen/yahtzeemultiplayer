const Game = require("../models/game-model");
const { v4: uuidv4 } = require("uuid");

const createGame = (req, res) => {
  const id = uuidv4().replace(/-/g, "");
  const newGame = new Game({ _id: id, name: id, players: [] });
  newGame
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        body: newGame,
        message: "Game created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Game not created!",
      });
    });
};

const getGameById = async (req, res) => {
  await Game.findOne({ _id: req.params.id }, (err, game) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!game) {
      return res.status(404).json({ success: false, error: `Movie not found` });
    }
    return res.status(200).json({ success: true, data: game });
  });
};

module.exports = {
  createGame,
  getGameById,
};
