const { Router } = require("express");
const router = Router();
const  userCtrl  = require("../controllers/user");
//const { userValidator } = require("../middlewares");

// Get all users
router.get("/", userCtrl.getAllUsers);

// Get one user
router.get("/:id", userCtrl.getOneUser);

// Update a user
router.put("/:id", userCtrl.updateUser); 

// Update user information
router.put("/:id", userCtrl.updateUserInformation); 

// Delete a user
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
