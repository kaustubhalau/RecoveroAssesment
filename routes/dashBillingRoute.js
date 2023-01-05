const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");
const billController = require("./../controllers/billingController");
const dashController = require("./../controllers/dashBoardController");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);
//user can access dashboard and login page add it here:
router.get("/allInfo",dashController.getDashboard);

router.use(authController.restrictTo('admin'));
//Admin has acess to all pages add it here:
router.get("/allInfoBill",billController.getBill);

router.post("/bill",billController.addInfo );
router.post("/dash",dashController.addInfo );





module.exports = router;