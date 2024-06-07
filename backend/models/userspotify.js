const mongoose = require("mongoose");

const spotifyUserSchema = new mongoose.Schema({
  spotifyId: String,
  email: String,
});

const SpotifyUserModel = mongoose.model("SpotifyUser", spotifyUserSchema);

module.exports = SpotifyUserModel;
