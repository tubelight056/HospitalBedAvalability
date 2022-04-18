const { Login } = require("../collections/login");
const { VerifyToken } = require("../collections/middleware/verifyToken");
const { Register } = require("../collections/register");

const Router = require("express").Router();

Router.post("/register", Register);
Router.post("/login", Login);

module.exports = Router;
