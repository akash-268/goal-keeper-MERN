const express = require("express");
const router = express.Router();
const { registerUser,  getMe, loginUser } = require("../controllers/userController.js");

router.post("/", registerUser);
router.get("/me", getMe);
router.post('/login',loginUser);

module.exports = router;
