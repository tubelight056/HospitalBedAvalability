const jwt = require("jsonwebtoken");
const { Hospital } = require("../models/Hospitals");
require("dotenv").config();

exports.Login = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);
  Hospital.findOne(
    { Email: req.body.email, Password: req.body.password },
    "Email",
    (err, result) => {
      if (err) {
        res.send({ err, status: false, statusmessage: "Something went wrong" });
      } else {
        if (result === null) {
          res.send({ status: false, statusmessage: "No Valid credentials" });
        } else {
          data = { Email: req.body.email, id: result._id };
          jwt.sign(data, process.env.SECRET, async (err, token) => {
            if (err) {
              res.send({
                err,
                status: false,
                statusmessage: "Something went wrong",
              });
            } else {
              res.send({ status: true, token });
            }
          });
        }
      }
    }
  );
};
