const {
  GetAllHospitalDetails,
} = require("../collections/getALLHospitalDetails");
const { VerifyToken } = require("../collections/middleware/verifyToken");

const Router = require("express").Router();

Router.post("/get/all", GetAllHospitalDetails);

module.exports = Router;
