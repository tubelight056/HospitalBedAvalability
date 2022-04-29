const { Bill } = require("../../models/patientBilling.js");

exports.createBill = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  let { tokenId, tokenEmail, ...data } = req.body;
  //   let updateData = { ...{ HospitalId: tokenId }, ...data };

  Bill.updateOne(
    { RegisterId: req.body.RegisterId },
    { ...data },
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
