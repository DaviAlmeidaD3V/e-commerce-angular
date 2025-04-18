const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register_user);

router.post("/login", authController.login_user);

router.put("/update", authController.update_user);

router.delete("/delete", authController.delete);

module.exports =  router;