const { Complain } = require("../../models/Complaint.js");

exports.getComplains = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  Complain.find({ ...req.body }, async (error, result) => {
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
  }).populate({ path: "HospitalId", select: { Password: 0 } });
};
