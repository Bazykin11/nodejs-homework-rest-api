/** @format */

const registration = require("./registration");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateAvatar = require("../auth/updateAvatar");
const verify = require("./verifyEmail");
const resendEmail = require("./resendEmail");

module.exports = {
  registration,
  login,
  logout,
  getCurrent,
  updateAvatar,
  verify,
  resendEmail
};
