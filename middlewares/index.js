const verifyToken = require("../middlewares/verifyToken");
const checkDuplicateEmail = require("../middlewares/checkDuplicateEmail");
const verifyFields = require("../middlewares/verifyFields");

module.exports = {
  verifyToken,
  checkDuplicateEmail,
  verifyFields
};
