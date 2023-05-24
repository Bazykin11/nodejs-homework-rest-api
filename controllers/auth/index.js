/** @format */

const registration = require("./registration");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateAvatar = require("../auth/updateAvatar");

module.exports = {
  registration,
  login,
  logout,
  getCurrent,
  updateAvatar,
};
