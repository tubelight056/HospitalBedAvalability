const { JsonWebTokenError } = require("jsonwebtoken");
require("dotenv").config();

exports.VerifyToken = async (req, res, next) => {
  console.log("\n[+] verify token ");
  console.log("[+] ", req.headers);
  const token = req.headers.authorization.split(" ")[1];
  JsonWebTokenError.verify(token, process.env.SECRET, async (err, data) => {
    if (err) {
      console.log({
        err: err,
        status: false,
        statusMessage: "Token Forbidden",
      });
      res.send({
        err: err,
        status: false,
        statusMessage: "Token Forbidden",
      });
    } else {
      console.log(data);
      req.body.tokenId = data.id;
      req.body.tokenEmail = data.Email;
      next();
    }
  });
  next();
};
