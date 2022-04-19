const {
  GetAllHospitalDetails,
} = require("../collections/getALLHospitalDetails");
const { VerifyToken } = require("../collections/middleware/verifyToken");
const { UpdateHospitalBeds } = require("../collections/updateHospitalBeds");

const Router = require("express").Router();

Router.post("/get/all", GetAllHospitalDetails);
Router.post("/update/beds", VerifyToken, UpdateHospitalBeds);

module.exports = Router;
