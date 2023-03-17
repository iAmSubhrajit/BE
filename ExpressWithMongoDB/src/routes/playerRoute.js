const express = require('express');
const { GetPlayers, CreateMultiplePlayer } = require('../controllers/playerController');
const router = express.Router();

//player route 
// http://localhost:8080/players
router.route('/').get(GetPlayers).post(CreateMultiplePlayer)

module.exports = router;
