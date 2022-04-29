const mongoose = require("mongoose");

const BillDetail = new mongoose.Schema({
  RegisterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    unique: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  TreatmentCharge: {
    type: Map,
    of: Number,
    required: true,
  },
  TreatmentDetails: {
    type: String,
    required: true,
  },
  TotalCost: {
    type: Number,
    required: true,
  },
  Date: {
    default: `${new Date().getDate()}:${
      new Date().getMonth() + 1
    }:${new Date().getFullYear()}`,
    type: String,
  },
});

const Bill = mongoose.model("Bills", BillDetail);

module.exports = { Bill };
