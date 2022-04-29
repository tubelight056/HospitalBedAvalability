const { Patient } = require("../../models/Patient");

exports.registerPatient = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  let { tokenId, tokenEmail, ...data } = req.body;
  let updateData = { ...{ HospitalId: tokenId }, ...data };

  Patient.updateOne(
    { PhoneNumber: req.body.PhoneNumber, Date: req.body.date },
    { ...updateData },
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
