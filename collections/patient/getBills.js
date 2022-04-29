const { Bill } = require("../../models/patientBilling.js");

exports.getBills = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  Bill.find({ PhoneNumber: req.body.PhoneNumber }, async (error, result) => {
    if (error) {
      console.log({
        error,
        status: false,
      });
      res.send({
        error,
        status: false,
      });
    } else {
      console.log({
        data: result,
        status: true,
      });
      res.send({
        data: result,
        status: true,
      });
    }
  }).populate("RegisterId");
};
