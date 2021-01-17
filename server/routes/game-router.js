const express = require('express');
const GameCtrl = require('../controllers/game-ctrl')

const router = express.Router();

router.post('/game', GameCtrl.createGame)

router.get('/game/:id', GameCtrl.getGameById)

module.exports = router;