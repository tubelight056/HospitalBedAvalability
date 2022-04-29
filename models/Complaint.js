const mongoose = require("mongoose");

const complainDetail = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
});
