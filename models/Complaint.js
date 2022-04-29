const mongoose = require("mongoose");

const complainDetail = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  HospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  AadharNumber: {
    type: Number,
    required: true,
  },
  ComplainDescription: {
    type: String,
    required: true,
  },
  ComplainAgainst: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    default: `${new Date().getDate()}:${
      new Date().getMonth() + 1
    }:${new Date().getFullYear()}`,
  },
});

complainDetail.set("timestamps", true);

const Complain = new mongoose.model("complains", complainDetail);

module.exports = { Complain };
