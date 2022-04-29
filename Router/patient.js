const { VerifyToken } = require("../collections/middleware/verifyToken");
const { createBill } = require("../collections/patient/createBill");
const { getBills } = require("../collections/patient/getBills");
const { getRegisterPatient } = require("../collections/patient/getRegistered");
const { registerPatient } = require("../collections/patient/registerPatient");

const router = require("express").Router();

router.post("/upsert/info", VerifyToken, registerPatient);
router.post("/upsert/bill", VerifyToken, createBill);
router.post("/get/bills", VerifyToken, getBills);
router.post("/get/patients", VerifyToken, getRegisterPatient);

module.exports = router;
