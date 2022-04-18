const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const App = express();

App.use(express.json());
App.use(cors());

let Port = process.env.PORT || 3500;

const Auth = require("./Router/authentication");
App.listen(Port, (err, result) => {
  mongoose.connect(process.env.URL, (err, result) => {
    App.use("/auth", Auth);
    console.log("Hello world");
  });
});
