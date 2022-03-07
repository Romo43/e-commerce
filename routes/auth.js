const { Router } = require("express");
const router = Router();
const { login, register, google } = require("../controllers/auth");
const {
  verifyToken,
  checkDuplicateEmail,
  verifyFields,
} = require("../middlewares");
// Login
router.post("/login", [verifyFields], login);

// Register
router.post("/register", [verifyFields, checkDuplicateEmail], register);

// Google sing in
router.post("/google", [verifyToken], google);

module.exports = router;
