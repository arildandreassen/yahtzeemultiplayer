const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Game = new Schema(
  {
    _id: "String",
    name: "String",
    players: ["String"],
  },
  { timestamps: true }
);

module.exports = mongoose.model("games", Game);
