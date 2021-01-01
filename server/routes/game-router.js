const express = require('express');
const GameCtrl = require('../controllers/game-ctrl')

const router = express.Router();

router.post('/game', GameCtrl.createGame)

module.exports = router;