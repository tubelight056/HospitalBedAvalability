const { Hospital } = require("../models/Hospitals");

exports.UpdateHospitalBeds = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  Hospital.updateOne(
    { Email: req.body.tokenEmail },
    { AvailableBeds: req.body.availableBeds },
    async (error, result) => {
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
    }
  );
};
