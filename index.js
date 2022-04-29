const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const App = express();

App.use(express.json());
App.use(cors());

let Port = process.env.PORT || 3500;

const Auth = require("./Router/authentication");
const Patient = require("./Router/patient");

const hospital = require("./Router/hospitals");
App.listen(Port, (err, result) => {
  mongoose.connect(process.env.URL, (err, result) => {
    App.use("/auth", Auth);
    App.use("/hospital", hospital);
    App.use("/patient", Patient);
    console.log("Hello world");
  });
});
