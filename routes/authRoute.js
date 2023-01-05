const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

//above router do not need authentication
//Protect all routes after this middleware
router.use(authController.protect);
//user can access dashboard and login page add it here:

router.use(authController.restrictTo('admin'));
//Admin has acess to all pages add it here:

router.post("/", userController.createUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
