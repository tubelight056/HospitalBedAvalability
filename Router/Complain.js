const { getComplains } = require("../collections/complain/getComplain");
const { upsertComplain } = require("../collections/complain/upsertComplain");

const router = require("express").Router();

router.post("/upsert", upsertComplain);
router.post("/get/all", getComplains);

module.exports = router;
