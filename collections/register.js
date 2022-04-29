const jwt = require("jsonwebtoken");
const { Hospital } = require("../models/Hospitals");
require("dotenv").config();

exports.Register = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);
  const RegisterDetails = new Hospital({
    HospitalName: req.body.hospitalName,
    Email: req.body.email,
    Password: req.body.password,
    // Location: req.body.location,
    // PhoneNumber: req.body.phno,
    // AvailableBeds: req.body.availablebeds,
    // Dean: req.body.dean,
    // DeanPhoneNumber: req.body.deanno,
  });

  RegisterDetails.save()
    .then((doc) => {
      data = { Email: req.body.email, id: doc._id };
      jwt.sign(data, process.env.SECRET, async (err, token) => {
        res.send({ status: true, token });
      });
    })
    .catch((err) => {
      res.send({ err, status: false, statusmessage: "Something went wrong" });
    });
  //   Hospital.updateOne(
  //     { Email: req.body.email },
  //     RegisterDetails,
  //     { upsert: true },
  //     (err, result) => {
  //       console.log(result);
  //       res.send("hai");
  //     }
  //   );
};
