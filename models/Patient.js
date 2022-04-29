const mongoose = require("mongoose");

const PatientDetail = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  HospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
  },
  Address: {
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

// PatientDetail.set("timestamps", true);

const Patient = mongoose.model("Patient", PatientDetail);

module.exports = { Patient };
