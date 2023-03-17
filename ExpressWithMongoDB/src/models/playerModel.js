const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: String,
    team: String,
    score: Number
}, { versionKey: false })

const PlayerModel = mongoose.model("player", playerSchema)  //user collection

module.exports = PlayerModel;