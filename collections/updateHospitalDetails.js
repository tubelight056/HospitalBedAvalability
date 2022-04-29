const { Hospital } = require("../models/Hospitals");

exports.UpdateHospitalDetails = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);
  const { tokenId, tokenEmail, Password, ...data } = req.body;
  console.log(data);
  Hospital.updateOne(
    { _id: req.body.tokenId },
    { ...data },
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
