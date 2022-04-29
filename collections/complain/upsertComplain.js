const { Complain } = require("../../models/Complaint");

exports.upsertComplain = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  Complain.updateOne(
    {
      AadharNumber: req.body.AadharNumber,
      HospitalId: req.body.HospitalId,
      ComplainAgainst: req.body.ComplainAgainst,
      Date: req.body.Date,
    },
    { ...req.body },
    { upsert: true },
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
