const mongoose = require("mongoose");

const schema = mongoose.model(
  "chatMute",
  new mongoose.Schema({
    No: Number,
    _id: String,
    Duration: String,
  }),
);

module.exports = schema;
