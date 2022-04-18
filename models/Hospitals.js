const mongoose = require("mongoose");

const hospitalDetails = new mongoose.Schema({
  HospitalName: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
    unique: true,
  },
  Password: {
    type: String,
    require: true,
  },
  Location: {
    type: String,
    require: true,
  },
  PhoneNumber: {
    type: Number,
    require: true,
  },
  AvailableBeds: {
    type: Map,
    of: Number,
    require: true,
  },
  Dean: {
    type: String,
    require: true,
  },
  DeanPhoneNumber: {
    type: Number,
    require: true,
  },
});

hospitalDetails.set("timestamps", true);

const Hospital = mongoose.model("Hospital", hospitalDetails);

module.exports = { Hospital };
