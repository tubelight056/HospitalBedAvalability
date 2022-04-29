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
    of: { Available: { type: Number }, Total: { type: Number } },
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
  Treatments: [
    {
      TreatmentName: { type: String },
      TreatmentCost: { type: Number },
      Doctors: [
        {
          Name: { type: String },
        },
      ],
      AvailableFacilies: [
        {
          Name: { type: String },
          Explanation: { type: String },
        },
      ],
      EmergencyAvailable: { type: Boolean },
    },
  ],
});

hospitalDetails.set("timestamps", true);

const Hospital = mongoose.model("Hospital", hospitalDetails);

module.exports = { Hospital };
